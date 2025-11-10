"use client";

import { useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

const vertexShader = `
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const fragmentShader = `
uniform float time;
uniform vec2 resolution;
uniform vec3 dotColor;
uniform vec3 bgColor;
uniform sampler2D mouseTrail;
uniform float rotation;
uniform float gridSize;
uniform float dotOpacity;

vec2 rotate(vec2 uv, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  mat2 rotationMatrix = mat2(c, -s, s, c);
  return rotationMatrix * (uv - 0.5) + 0.5;
}

vec2 coverUv(vec2 uv) {
  vec2 s = resolution.xy / max(resolution.x, resolution.y);
  vec2 newUv = (uv - 0.5) * s + 0.5;
  return clamp(newUv, 0.0, 1.0);
}

float sdfCircle(vec2 p, float r) {
  return length(p - 0.5) - r;
}

void main() {
  vec2 screenUv = gl_FragCoord.xy / resolution;
  vec2 uv = coverUv(screenUv);

  vec2 rotatedUv = rotate(uv, rotation);
  vec2 gridUv = fract(rotatedUv * gridSize);
  vec2 gridUvCenter = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

  float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y);
  vec2 centerDisplace = vec2(0.7, 1.1);
  float circleMaskCenter = length(uv - centerDisplace);
  float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);

  float combinedMask = screenMask * circleMaskFromCenter;
  float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

  float mouseInfluence = texture(mouseTrail, gridUvCenter).r;

  float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);
  float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);
  float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));
  float smoothDot = smoothstep(0.05, 0.0, sdfDot);
  float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);

  vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));
  gl_FragColor = vec4(composition, 1.0);
}
`;

const getThemeColors = (theme: string | undefined) => {
  switch (theme) {
    case "dark":
      return {
        dotColor: "#FFFFFF",
        bgColor: "#121212",
        dotOpacity: 0.025,
      };
    case "light":
      return {
        dotColor: "#e1e1e1",
        bgColor: "#F4F5F5",
        dotOpacity: 0.15,
      };
    default:
      return {
        dotColor: "#FFFFFF",
        bgColor: "#121212",
        dotOpacity: 0.05,
      };
  }
};

export const DotScreenShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.ShaderMaterial>();
  const trailRef = useRef<THREE.DataTexture>();
  const requestRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const trailTexture = new THREE.DataTexture(
      new Uint8Array(4),
      1,
      1,
      THREE.RGBAFormat
    );
    trailTexture.needsUpdate = true;

    const dotMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        dotColor: { value: new THREE.Color("#FFFFFF") },
        bgColor: { value: new THREE.Color("#121212") },
        mouseTrail: { value: trailTexture },
        rotation: { value: 0 },
        gridSize: { value: 100 },
        dotOpacity: { value: 0.05 },
      },
    });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), dotMaterial);
    scene.add(plane);

    materialRef.current = dotMaterial;
    trailRef.current = trailTexture;

    container.appendChild(renderer.domElement);

    const handlePointerMove = () => {
      if (!trailRef.current) return;
      const data = trailRef.current.image.data as Uint8Array;
      data[0] = Math.min(255, data[0] + 15);
      trailRef.current.needsUpdate = true;
    };

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      dotMaterial.uniforms.resolution.value.set(width, height);
    };

    const renderLoop = () => {
      dotMaterial.uniforms.time.value = performance.now() / 1000;
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(renderLoop);
    };

    container.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      container.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      dotMaterial.dispose();
      trailTexture.dispose();
    };
  }, []);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;
    const colors = getThemeColors(theme);
    material.uniforms.dotColor.value.set(colors.dotColor);
    material.uniforms.bgColor.value.set(colors.bgColor);
    material.uniforms.dotOpacity.value = colors.dotOpacity;
  }, [theme]);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center" />
  );
};

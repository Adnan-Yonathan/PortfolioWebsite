"use client";

import { useEffect, useMemo } from "react";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
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
  vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

  float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y);
  vec2 centerDisplace = vec2(0.7, 1.1);
  float circleMaskCenter = length(uv - centerDisplace);
  float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);

  float combinedMask = screenMask * circleMaskFromCenter;
  float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

  float mouseInfluence = texture(mouseTrail, gridUvCenterInScreenCoords).r;

  float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);
  float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);
  float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));
  float smoothDot = smoothstep(0.05, 0.0, sdfDot);

  float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);
  vec3 composition = mix(bgColor, dotColor, smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence));
  gl_FragColor = vec4(composition, 1.0);
}
`;

function Scene() {
  const size = useThree((state) => state.size);
  const viewport = useThree((state) => state.viewport);
  const { theme } = useTheme();

  const rotation = 0;
  const gridSize = 100;

  const getThemeColors = () => {
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

  const themeColors = getThemeColors();

  const trail = useMemo(() => {
    const data = new Uint8Array(4);
    const texture = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat);
    texture.needsUpdate = true;
    return texture;
  }, []);

  const dotMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          resolution: { value: new THREE.Vector2() },
          dotColor: { value: new THREE.Color("#FFFFFF") },
          bgColor: { value: new THREE.Color("#121212") },
          mouseTrail: { value: trail },
          rotation: { value: rotation },
          gridSize: { value: gridSize },
          dotOpacity: { value: 0.05 },
        },
        vertexShader,
        fragmentShader,
      }),
    [gridSize, rotation, trail]
  );

  useEffect(() => {
    dotMaterial.uniforms.dotColor.value.setHex(
      Number(`0x${themeColors.dotColor.replace("#", "")}`)
    );
    dotMaterial.uniforms.bgColor.value.setHex(
      Number(`0x${themeColors.bgColor.replace("#", "")}`)
    );
    dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity;
    dotMaterial.uniforms.resolution.value.set(size.width, size.height);
    dotMaterial.uniforms.mouseTrail.value = trail;
    dotMaterial.uniforms.rotation.value = rotation;
    dotMaterial.uniforms.gridSize.value = gridSize;
  }, [theme, dotMaterial, themeColors, size, trail]);

  useFrame((state) => {
    dotMaterial.uniforms.time.value = state.clock.elapsedTime;
  });

  const handlePointerMove = (_event: ThreeEvent<PointerEvent>) => {
    const data = trail.image.data as Uint8Array;
    data[0] = Math.min(255, data[0] + 15);
    data[1] = Math.min(255, data[1] + 10);
    data[2] = Math.min(255, data[2] + 5);
    trail.needsUpdate = true;
  };

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={handlePointerMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        rotation={rotation}
        gridSize={gridSize}
        mouseTrail={trail}
        render={0}
      />
    </mesh>
  );
}

export const DotScreenShader = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.NoToneMapping,
      }}
    >
      <Scene />
    </Canvas>
  );
};

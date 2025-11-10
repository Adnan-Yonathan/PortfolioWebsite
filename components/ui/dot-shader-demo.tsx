"use client";

import { DotScreenShader } from "@/components/ui/dot-shader-background";

export function DotShaderDemo() {
  return (
    <div className="relative isolate min-h-[70vh] overflow-hidden px-6 py-20 sm:px-10">
      <div className="absolute inset-0">
        <DotScreenShader />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center text-white">
        <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl lg:text-7xl">
          DIGITAL INNOVATION
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-white/80">
          Where thoughts take shape and consciousness flows like liquid mercury through infinite dimensions.
        </p>
      </div>
    </div>
  );
}

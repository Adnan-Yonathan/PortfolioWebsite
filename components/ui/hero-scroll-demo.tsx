"use client";

import Image from "next/image";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  const partnerStats = [
    {
      value: "37+",
      label: "Home service launches",
      detail: "Bookings, lead forms, and localized SEO baked in",
    },
    {
      value: "24",
      label: "Agency partners",
      detail: "Fractional design sprints for fast iterations",
    },
    {
      value: "18",
      label: "Product studios",
      detail: "SaaS-ready assets and polished marketing kits",
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[40px]">
      <ContainerScroll
        titleComponent={
          <div className="space-y-6 px-4 text-center text-slate-900 dark:text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              How we partner with bold teams
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Studio Elemental helps home service businesses, agencies, and
              software companies build digital experiences that feel alive.
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Whether we are refreshing a crew of field technicians, aligning
              with a multi-practice agency, or expressing a product roadmap,
              our process blends research, story-driven design, and smooth
              implementation.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {partnerStats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-slate-300/30 bg-white/80 px-4 py-5 shadow-md backdrop-blur dark:border-white/10 dark:bg-slate-900/80"
                >
                  <p className="text-3xl font-semibold text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {stat.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
          alt="Hero scroll animation showcase"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

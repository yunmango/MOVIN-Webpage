"use client";

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function SimulatorSection() {
  return (
    <SectionWrapper className="bg-gray-950 text-white">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-ui text-3xl font-normal md:text-4xl">
            Plan your setup in 3D
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-body text-base text-gray-400 md:text-lg">
            Use our 3D simulator to map your mocap zone, check lighting
            conditions, and preview what spaces work best before you deploy.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-10 overflow-hidden rounded-2xl">
          <iframe
            src="https://tracin-simulator-web.vercel.app/"
            className="h-[600px] w-full border-0"
            title="TRACIN 3D Simulator"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          />
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { VIDEOS } from "@/lib/constants";

function CompareVideo({ src, webm }: { src: string; webm: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
    >
      <source src={webm} type="video/webm" />
      <source src={src} type="video/mp4" />
    </video>
  );
}

export function AiTechSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-ui text-[24px] md:text-[40px] font-normal text-[rgb(26,26,26)] tracking-[-0.8px]">
            On-device AI that turns motion into output
          </h2>
          <p className="mx-auto mt-6 md:mt-8 max-w-3xl font-body text-base md:text-xl text-[rgb(102,102,102)]">
            MOVIN&apos;s on-device AI fuses LiDAR point clouds and vision to turn
            raw capture into production-ready motion data. Built for
            entertainments, robotics, sports, and more.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="relative mt-12 md:mt-14 overflow-hidden rounded-2xl">
          <ReactCompareSlider
            itemOne={
              <CompareVideo src={VIDEOS.aiBefore} webm={VIDEOS.aiBeforeWebm} />
            }
            itemTwo={
              <CompareVideo src={VIDEOS.aiAfter} webm={VIDEOS.aiAfterWebm} />
            }
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  backdropFilter: "none",
                  background: "white",
                  border: 0,
                  color: "#333",
                }}
              />
            }
            className="aspect-video w-full"
          />
          <div className="pointer-events-none absolute bottom-6 left-6 rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Input
          </div>
          <div className="pointer-events-none absolute right-6 bottom-6 rounded-full bg-black/60 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Output
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

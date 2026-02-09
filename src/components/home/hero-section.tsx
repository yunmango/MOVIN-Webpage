"use client";

import { VideoBackground } from "@/components/shared/video-background";
import { VIDEOS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <VideoBackground
        mp4Src={VIDEOS.hero}
        webmSrc={VIDEOS.heroWebm}
        overlayClassName="bg-black/30"
      />
      <div className="relative z-10 text-center">
        <h1 className="font-ui text-5xl font-normal leading-tight text-white md:text-7xl">
          Real-time motion capture,
          <br />
          made interactive.
        </h1>
        <p className="mt-6 font-body text-lg text-white/80 md:text-xl">
          Build interactive experiences with live motion data.
        </p>
      </div>
    </section>
  );
}

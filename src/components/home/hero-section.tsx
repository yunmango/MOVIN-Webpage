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
        <h1 className="font-ui font-normal text-white" style={{ fontSize: '64px', lineHeight: '76.8px', letterSpacing: '-1.6px' }}>
          Real-time motion capture,
          <br />
          made interactive.
        </h1>
        <p className="mt-6 font-body text-xl text-white">
          Build interactive experiences with live motion data.
        </p>
      </div>
    </section>
  );
}

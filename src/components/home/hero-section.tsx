"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { VideoBackground } from "@/components/shared/video-background";
import { VIDEOS } from "@/lib/constants";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <VideoBackground
        mp4Src={VIDEOS.hero}
        webmSrc={VIDEOS.heroWebm}
        overlayClassName="bg-black/30"
        preload="auto"
      />
      <LazyMotion features={domAnimation} strict>
        <div className="relative z-10 text-center">
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="font-ui text-[32px] leading-[38px] tracking-[-0.8px] font-normal text-white md:text-[64px] md:leading-[76.8px] md:tracking-[-1.6px]"
          >
            Real-time motion capture,
            <br />
            made interactive.
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-6 font-body text-base text-white md:text-xl"
          >
            Build interactive experiences with live motion data.
          </m.p>
        </div>
      </LazyMotion>
    </section>
  );
}

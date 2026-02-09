"use client";

import { useRef, useEffect, useState } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { VIDEOS } from "@/lib/constants";
import { Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShowcaseCard {
  title: string;
  mp4: string;
  webm: string;
}

const SHOWCASE_CARDS: ShowcaseCard[] = [
  { title: "Demo Reel", mp4: VIDEOS.demo4, webm: VIDEOS.demo4Webm },
  { title: "Character Animation", mp4: VIDEOS.demo1, webm: VIDEOS.demo1Webm },
  { title: "Virtual Production", mp4: VIDEOS.virtual, webm: VIDEOS.virtualWebm },
  { title: "Robotics Control", mp4: VIDEOS.robotics, webm: VIDEOS.roboticsWebm },
];

function VideoCard({ card }: { card: ShowcaseCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="group relative aspect-[16/10] w-[400px] flex-shrink-0 overflow-hidden rounded-2xl bg-gray-900 md:w-[500px]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      >
        <source src={card.webm} type="video/webm" />
        <source src={card.mp4} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
        <button
          onClick={togglePlay}
          className="rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  return (
    <SectionWrapper className="bg-white" fullWidth>
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal>
          <h2 className="font-ui text-[40px] font-normal text-[rgb(26,26,26)]" style={{ letterSpacing: '-0.8px' }}>
            High-quality outputs, powered by MOVIN
          </h2>
          <p className="mt-4 font-body text-xl text-[rgb(102,102,102)]">
            See real-world applications across various industries.
          </p>
        </ScrollReveal>
      </div>
      <div className="mt-10 flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide">
        {SHOWCASE_CARDS.map((card) => (
          <VideoCard key={card.title} card={card} />
        ))}
      </div>
    </SectionWrapper>
  );
}

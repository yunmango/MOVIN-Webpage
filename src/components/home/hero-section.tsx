import { VideoBackground } from "@/components/shared/video-background";
import { VIDEOS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <VideoBackground
        mp4Src={VIDEOS.hero}
        webmSrc={VIDEOS.heroWebm}
        overlayClassName="bg-black/30"
        preload="auto"
      />
      <div className="relative z-10 text-center">
        <h1 className="font-ui text-[32px] leading-[38px] tracking-[-0.8px] font-normal text-white md:text-[64px] md:leading-[76.8px] md:tracking-[-1.6px]">
          Real-time motion capture,
          <br />
          made interactive.
        </h1>
        <p className="mt-6 font-body text-base text-white md:text-xl">
          Build interactive experiences with live motion data.
        </p>
      </div>
    </section>
  );
}

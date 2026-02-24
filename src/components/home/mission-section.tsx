import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { VideoBackground } from "@/components/shared/video-background";
import { VIDEOS } from "@/lib/constants";
import { cn, BTN_PRIMARY } from "@/lib/utils";

export function MissionSection() {
  return (
    <SectionWrapper className="relative overflow-hidden" fullWidth>
      <VideoBackground
        mp4Src={VIDEOS.composition}
        webmSrc={VIDEOS.compositionWebm}
      />
      {/* White gradient overlay matching original site */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255,255,255) 1%, rgba(255,255,255,0.75) 25%, rgba(255,255,255,0.75) 75%, rgb(255,255,255) 99%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 md:py-[120px] text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-3xl font-body text-[24px] md:text-[32px] font-normal text-[rgb(26,26,26)] tracking-[-0.48px] leading-[36px] md:leading-[48px]">
            From Human Motion to Physical AI.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base md:text-xl text-[rgb(102,102,102)]">
            Our goal is to make high-fidelity motion capture effortless and
            ubiquitous. Scalability is central to that mission. By combining
            motion AI with on-device hardware, MOVIN makes it easier for more
            people to capture and use motion data freely, across everyday spaces
            and real-world deployments.
          </p>
          <Link
            href="/about"
            className={cn("mt-10 block md:inline-flex rounded-lg bg-[rgb(26,26,26)] px-8 py-3 font-ui text-base font-light text-white tracking-[-0.48px] text-center", BTN_PRIMARY)}
          >
            About Us
          </Link>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

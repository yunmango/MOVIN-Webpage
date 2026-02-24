import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES } from "@/lib/constants";

export function ProductHeroSection() {
  return (
    <section className="relative flex flex-col items-center bg-[#0a0a0a] px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <p className="font-ui text-[13px] font-normal uppercase tracking-[0.15em] text-white/50">
              MOVIN TRACIN
            </p>
            <h1 className="mt-3 text-center font-ui text-[36px] font-light leading-[1.1] tracking-[-0.02em] text-white md:text-[56px]">
              Freedom In Motion
            </h1>
            <p className="mt-4 max-w-[480px] text-center font-body text-[16px] leading-[1.5] text-white/60 md:text-[18px]">
              Real-time, markerless motion capture powered by on-device AI
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 flex justify-center md:mt-14">
            <Image
              src={IMAGES.tracInHero}
              alt="MOVIN TRACIN"
              width={1600}
              height={900}
              className="w-full max-w-[720px]"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

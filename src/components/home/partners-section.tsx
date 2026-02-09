"use client";

import Image from "next/image";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import {
  UnrealEngineLogo,
  NotchLogo,
  TouchDesignerLogo,
  DisguiseLogo,
  RokokoLogo,
} from "@/components/icons/partner-logos";

export function PartnersSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <h2 className="text-center font-ui text-xl font-normal text-[rgb(102,102,102)] tracking-[-0.48px]">
          Official Partners
        </h2>
      </ScrollReveal>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16 lg:gap-x-24">
        <ScrollReveal delay={0}>
          <UnrealEngineLogo className="h-[42px] w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <NotchLogo className="h-[30px] w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TouchDesignerLogo className="h-[38px] w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <DisguiseLogo className="h-[42px] w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Image
            src={IMAGES.partner07}
            alt="Warudo"
            width={148}
            height={38}
            className="h-[38px] w-auto object-contain"
            unoptimized
          />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <RokokoLogo className="h-[23px] w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Image
            src={IMAGES.partner06}
            alt="Manus"
            width={200}
            height={34}
            className="h-[34px] w-auto object-contain"
            unoptimized
          />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

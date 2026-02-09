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
        <h2 className="text-center font-ui text-3xl font-normal text-black md:text-4xl">
          Official Partners
        </h2>
      </ScrollReveal>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-24 gap-y-12">
        <ScrollReveal delay={0}>
          <UnrealEngineLogo className="h-10 w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <NotchLogo className="h-8 w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <TouchDesignerLogo className="h-10 w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <DisguiseLogo className="h-10 w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Image
            src={IMAGES.partner07}
            alt="Warudo"
            width={120}
            height={48}
            className="h-6 w-auto object-contain"
            unoptimized
          />
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <RokokoLogo className="h-6 w-auto text-black" />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Image
            src={IMAGES.partner06}
            alt="Manus"
            width={120}
            height={48}
            className="h-6 w-auto object-contain"
            unoptimized
          />
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";

function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white px-6 py-32">
      <ScrollReveal>
        <h1 className="mx-auto max-w-4xl text-center font-heading text-4xl font-light leading-snug text-black md:text-6xl lg:text-7xl">
          We believe motion is the most natural interface between humans and
          machines.
        </h1>
      </ScrollReveal>
    </section>
  );
}

function ContentSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <div className="mx-auto max-w-3xl space-y-8">
        <ScrollReveal>
          <p className="font-body text-lg leading-relaxed text-gray-700 md:text-xl">
            MOVIN is a technology company dedicated to making real-time motion
            capture accessible to everyone. We develop LiDAR-powered hardware
            and AI software that captures human movement with unprecedented ease
            and accuracy.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-body text-lg leading-relaxed text-gray-700 md:text-xl">
            Our mission is to build the infrastructure for a world where your
            body is the controller — for games, robots, digital humans, and
            beyond. We envision a future where motion capture is not limited to
            Hollywood studios or expensive lab setups, but available to any
            creator, anywhere.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-body text-lg leading-relaxed text-gray-700 md:text-xl">
            Founded by a team of engineers and artists, MOVIN combines deep
            expertise in computer vision, sensor fusion, and real-time AI to
            deliver products that bridge the gap between human expression and
            digital creation.
          </p>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <ContentSection />
    </>
  );
}

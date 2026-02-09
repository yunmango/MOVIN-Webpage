"use client";

import Link from "next/link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function MissionSection() {
  return (
    <SectionWrapper className="relative overflow-hidden" fullWidth>
      {/* Rainbow gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #fef3f2 0%, #fef9ee 15%, #fefce8 30%, #f0fdf4 45%, #ecfeff 60%, #eff6ff 75%, #faf5ff 90%, #fdf2f8 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <ScrollReveal>
          <h2 className="mx-auto max-w-3xl font-ui text-3xl font-normal leading-snug text-black md:text-5xl">
            From Human Motion to Physical AI.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-gray-600 md:text-lg">
            Our goal is to make high-fidelity motion capture effortless and
            ubiquitous. Scalability is central to that mission. By combining
            motion AI with on-device hardware, MOVIN makes it easier for more
            people to capture and use motion data freely, across everyday spaces
            and real-world deployments.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block rounded-full bg-black px-8 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            About Us
          </Link>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

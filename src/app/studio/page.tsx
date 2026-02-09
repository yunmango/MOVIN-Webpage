"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Monitor } from "lucide-react";

function HeroSection() {
  return (
    <section className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <p className="font-ui text-sm font-medium tracking-widest text-gray-400">
          MOVIN
        </p>
        <h1 className="mt-2 font-ui text-6xl font-bold text-black md:text-8xl">
          STUDIO
        </h1>
      </div>
    </section>
  );
}

function DescriptionSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <ScrollReveal>
        <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-gray-700 md:text-xl">
          <strong>MOVIN Studio</strong> is the companion software for MOVIN
          hardware. Configure your setup, calibrate sensors, record and export
          motion data in industry-standard formats like FBX and BVH.
        </p>
        <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-gray-700 md:text-xl">
          Stream real-time motion data to your favorite 3D tools including
          Unreal Engine, Unity, Blender, and more through our plugin ecosystem.
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function DownloadSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <div className="mx-auto max-w-lg text-center">
          <Monitor className="mx-auto h-16 w-16 text-gray-400" />
          <h2 className="mt-6 font-ui text-2xl font-normal text-black md:text-3xl">
            Currently available for Windows
          </h2>
          <p className="mt-4 font-body text-base text-gray-600">
            Download MOVIN Studio and start capturing motion in minutes.
          </p>
          <Link
            href="/downloads"
            className="mt-8 inline-block rounded-full bg-black px-8 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Download
          </Link>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

export default function StudioPage() {
  return (
    <>
      <HeroSection />
      <DescriptionSection />
      <DownloadSection />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { VideoBackground } from "@/components/shared/video-background";
import { CDN_BASE, VIDEOS } from "@/lib/constants";

function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center bg-black">
      <div className="relative z-10 text-center">
        <p className="font-ui text-sm font-medium tracking-widest text-gray-400">
          MOVIN
        </p>
        <h1 className="mt-2 font-ui text-6xl font-bold text-white md:text-8xl">
          TRACIN
        </h1>
        <div className="mt-6">
          <p className="font-heading text-4xl font-light text-white md:text-6xl">
            FREEDOM IN MOTION
          </p>
        </div>
      </div>
    </section>
  );
}

function StatementSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <h2 className="mx-auto max-w-3xl text-center font-ui text-3xl font-normal leading-snug text-black md:text-5xl">
          Delivering Movements Shouldn&apos;t Be Difficult
        </h2>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function TechVideoSection() {
  return (
    <section className="relative aspect-video w-full">
      <VideoBackground
        mp4Src={VIDEOS.composition}
        webmSrc={VIDEOS.compositionWebm}
      />
    </section>
  );
}

function DescriptionSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <ScrollReveal>
        <p className="mx-auto max-w-3xl font-body text-lg leading-relaxed text-gray-700 md:text-xl">
          <strong>MOVIN TRACIN</strong> is real-time, free-body motion capture,
          built as a single, compact form. AI-powered processing delivers clean,
          accurate motion, with setup completed in under 3 minutes.
        </p>
        <p className="mx-auto mt-6 max-w-3xl font-body text-lg leading-relaxed text-gray-700 md:text-xl">
          From anywhere you create, professional results arrive instantly
          whether you&apos;re animating, streaming, or performing. MOVIN TRACIN
          is not just a motion capture device — it&apos;s a creative tool
          designed to set your ideas free.
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function FreeYourBodySection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <h2 className="font-ui text-3xl font-normal text-black md:text-5xl">
            Free Your Body
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-gray-600 md:text-lg">
            Creativity comes from freedom. When you&apos;re strapped into
            nothing, motion becomes easier to express. MOVIN TRACIN uses a
            single LiDAR-powered device to capture full-body movement, tracking
            22 body joints and 15 hand points with fine detail. Focus fully on
            your expression; we&apos;ve got the rest.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={`${CDN_BASE}/696510cf4e9c6acb85a3e7e3_Tracin.png`}
              alt="MOVIN TRACIN device"
              fill
              className="object-contain p-8"
              unoptimized
            />
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

function RightMotionSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <h2 className="font-ui text-3xl font-normal text-black md:text-5xl">
          Right Motion,
          <br />
          Right Now
        </h2>
        <p className="mt-6 max-w-3xl font-body text-base leading-relaxed text-gray-600 md:text-lg">
          MOVIN TRACIN captures motion with up to 93% of the accuracy of optical
          marker-based systems at 60fps, tracking every joint and gesture in
          real-time with just 0.1 seconds of latency. Stream directly to your
          platform in a markerless environment.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { value: "93%", label: "Accuracy vs optical" },
          { value: "60", label: "FPS real-time" },
          { value: "0.1s", label: "Latency" },
        ].map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="rounded-2xl border border-gray-200 p-8 text-center">
              <p className="font-heading text-5xl font-bold text-black">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm text-gray-500">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

function CleanUpSection() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ScrollReveal>
          <h2 className="font-ui text-3xl font-normal text-black md:text-5xl">
            Built-In Clean-Up
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-gray-600 md:text-lg">
            Small details make a big difference. Professional creators knows the
            subtle issues that break immersion, such as foot sliding, poor ground
            contact, and drifting. MOVIN TRACIN&apos;s instant AI cleanup
            automatically resolves these issues and more.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-900">
            <video autoPlay muted loop playsInline className="h-full w-full object-cover">
              <source src={VIDEOS.aiAfterWebm} type="video/webm" />
              <source src={VIDEOS.aiAfter} type="video/mp4" />
            </video>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

function EasySetupSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <ScrollReveal>
        <h2 className="font-ui text-3xl font-normal text-black md:text-4xl">
          READY, SET, MOTION
        </h2>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="font-heading text-5xl font-bold text-black">3 min</p>
            <h3 className="mt-4 font-ui text-lg font-semibold text-black">
              Setup
            </h3>
            <p className="mt-2 font-body text-sm text-gray-600">
              Snap MOVIN TRACIN onto the tripod, plug in two cables, and set
              your mocap zone. The entire setup takes just 3 minutes.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <p className="font-heading text-5xl font-bold text-black">3 sec</p>
            <h3 className="mt-4 font-ui text-lg font-semibold text-black">
              Calibration
            </h3>
            <p className="mt-2 font-body text-sm text-gray-600">
              Stand in the T-Pose, and calibrate in just 3 seconds. Ready to
              capture instantly.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}

function SpecTableSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <h2 className="font-ui text-3xl font-normal text-black md:text-4xl">
          Technical Specification
        </h2>
      </ScrollReveal>

      <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200">
        <table className="w-full text-left">
          <tbody className="divide-y divide-gray-200">
            {[
              { category: "Materials", value: "Anodized Aluminum" },
              {
                category: "Size & Weight",
                value: "87mm × 225mm × 165mm, < 3kg",
              },
              { category: "MoCap Range", value: "1m × 1m to 5m × 5m" },
              {
                category: "MoCap Spec",
                value: "Body: 22 joints | Hands: 30 joints | Latency: < 0.1sec",
              },
              {
                category: "System Requirements",
                value:
                  "Windows | 3.0+ GHz i7 | 16GB RAM | NVIDIA RTX 3060 / AMD 6600xt",
              },
            ].map((row) => (
              <tr key={row.category} className="hover:bg-gray-50">
                <td className="w-1/3 px-6 py-4 font-ui text-sm font-semibold text-gray-500">
                  {row.category}
                </td>
                <td className="px-6 py-4 font-body text-sm text-gray-900">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}

function CTASection() {
  return (
    <SectionWrapper className="bg-black text-white">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-ui text-3xl font-normal md:text-5xl">
            Ready to Get MOVIN?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://shop.movin3d.com/products/movin-tracin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 font-ui text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              Order Now
            </Link>
            <Link
              href="/online-demo"
              className="rounded-full border border-white px-8 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
            >
              Get a Free Demo
            </Link>
          </div>
          <Link
            href="mailto:contact@movin3d.com"
            className="mt-4 inline-block font-body text-sm text-gray-400 transition-colors hover:text-white"
          >
            Contact a MOVIN Expert →
          </Link>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function DisclaimerSection() {
  return (
    <SectionWrapper className="bg-gray-50 py-12 md:py-16">
      <p className="mx-auto max-w-3xl text-center font-body text-xs leading-relaxed text-gray-400">
        All specifications are subject to change without notice. Product images
        are for illustration purposes only. Actual product may vary. Performance
        results may vary based on system configuration and environmental
        conditions. MOVIN TRACIN requires a compatible Windows PC for operation.
      </p>
    </SectionWrapper>
  );
}

export default function TracinPage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <TechVideoSection />
      <DescriptionSection />
      <FreeYourBodySection />
      <RightMotionSection />
      <CleanUpSection />
      <EasySetupSection />
      <SpecTableSection />
      <CTASection />
      <DisclaimerSection />
    </>
  );
}

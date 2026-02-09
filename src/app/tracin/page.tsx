"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES, VIDEOS } from "@/lib/constants";

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center px-6 pt-16">
      {/* Image — centered, takes up most of the height */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.tracInHero}
          alt="MOVIN TRACIN"
          width={2560}
          height={1600}
          priority
          className="h-full w-auto max-w-none object-cover"
          unoptimized
        />
      </div>

      {/* Bottom text overlay — positioned at the bottom of the section */}
      <div className="absolute inset-x-0 bottom-0 px-6">
        <div className="mx-auto grid w-full max-w-[1080px] grid-cols-12 gap-x-6">
          <ScrollReveal className="col-start-1 col-end-5 self-end">
            <p className="hidden font-ui text-[64px] font-extralight uppercase leading-[120%] tracking-[-0.04em] text-[#1a1a1a] md:block">
              MOVIN
              <br />
              TRACIN
            </p>
            <p className="font-ui text-[32px] font-extralight uppercase leading-[120%] tracking-[0.05em] text-[#1a1a1a] md:hidden">
              MOVIN TRACIN
            </p>
            <div className="h-16" />
          </ScrollReveal>

          <div className="col-start-5 col-end-9" />

          <ScrollReveal className="col-start-9 col-end-13 self-end" delay={0.1}>
            <p className="hidden text-right font-ui text-[64px] font-extralight uppercase leading-[120%] tracking-[-0.04em] text-[#1a1a1a] md:block">
              Freedom
              <br />
              in motion
            </p>
            <p className="text-right font-ui text-[32px] font-extralight uppercase leading-[120%] tracking-[0.05em] text-[#1a1a1a] md:hidden">
              FREEDOM IN MOTION
            </p>
            <div className="h-16" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Statement ─── */
function StatementSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-5">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <p className="text-center font-body text-[32px] font-normal uppercase leading-[120%] tracking-[0.05em] text-[#1a1a1a]">
            Delivering Movements
            <br />
            Shouldn&apos;t Be Difficult
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Tech Video ─── */
function TechVideoSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-5">
      <div className="w-full max-w-[1080px]">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-2 md:col-end-12">
            <div className="relative aspect-video w-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={VIDEOS.techVideoWebm} type="video/webm" />
                <source src={VIDEOS.techVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Description ─── */
function DescriptionSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <ScrollReveal className="w-full max-w-[1080px]">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-3 md:col-end-6">
            <p className="text-left font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
              MOVIN TRACIN is{" "}
              <span className="font-semibold tracking-[-0.02em] text-black">
                real-time, free-body motion capture
              </span>
              , built as a single, compact form. AI-powered processing delivers
              clean, accurate motion, with setup completed in under 3 minutes.
            </p>
          </div>
          <div className="col-span-12 mt-8 md:col-start-8 md:col-end-11 md:mt-0">
            <p className="text-left font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
              From anywhere you create, professional results arrive instantly
              whether you&apos;re animating, streaming, or performing. MOVIN
              TRACIN gives you the freedom to focus on what matters most —{" "}
              <span className="font-semibold tracking-[-0.02em] text-black">
                your movement
              </span>
              .
            </p>
          </div>
        </div>
      </ScrollReveal>
      {/* section_spacing_half */}
      <div className="h-40" />
    </section>
  );
}

/* ─── Free Your Body ─── */
function FreeYourBodySection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[1080px]">
        {/* Title */}
        <ScrollReveal>
          <p className="text-center font-body text-[32px] font-normal uppercase leading-[120%] tracking-[0.05em] text-[#1a1a1a]">
            Free Your Body
          </p>
        </ScrollReveal>
        <div className="h-10" />

        {/* 3 images in a row */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-1 md:col-end-5">
            <Image
              src={IMAGES.productUsage3}
              alt="MOVIN TRACIN usage"
              width={1440}
              height={2025}
              className="rounded-[30px]"
              unoptimized
            />
          </div>
          <div className="col-start-5 col-end-9 hidden md:block">
            <Image
              src={IMAGES.productUsage1}
              alt="MOVIN TRACIN usage"
              width={1440}
              height={2025}
              className="rounded-[30px]"
              unoptimized
            />
          </div>
          <div className="col-start-9 col-end-13 hidden md:block">
            <Image
              src={IMAGES.productUsage2}
              alt="MOVIN TRACIN usage"
              width={1440}
              height={2025}
              className="rounded-[30px]"
              unoptimized
            />
          </div>
        </div>

        <div className="h-10" />

        {/* Body text */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-4 md:col-end-10">
            <ScrollReveal>
              <p className="text-left font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                Creativity comes from freedom. When you&apos;re strapped into
                nothing, motion becomes easier to express. MOVIN TRACIN uses a
                single LiDAR-powered device to capture full-body movement,
                tracking 22 body joints and 15 hand points with fine detail.{" "}
                <span className="font-semibold tracking-[-0.02em] text-black">
                  Focus fully on your expression; we&apos;ve got the details.
                </span>
              </p>
            </ScrollReveal>
          </div>
        </div>
        {/* section_spacing_half inside FreeYourBody */}
        <div className="h-40" />
      </div>
    </section>
  );
}

/* ─── Right Motion, Right Now ─── */
function RightMotionSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[1080px]">
        {/* Title */}
        <ScrollReveal>
          <p className="text-center font-body text-[32px] font-normal uppercase leading-[120%] tracking-[0.05em] text-[#1a1a1a]">
            Right Motion,
            <br />
            Right Now
          </p>
        </ScrollReveal>
        <div className="h-10" />

        {/* Description */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-4 md:col-end-10">
            <ScrollReveal>
              <p className="text-left font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                MOVIN TRACIN captures motion with up to 93% of the accuracy of
                optical marker-based systems at 60fps, tracking every joint and
                gesture in real-time with just 0.1 seconds of latency. Stream
                directly to your platform in a markerless environment.{" "}
                <span className="font-semibold tracking-[-0.02em] text-black">
                  A level of performance that&apos;s hard to find elsewhere.
                </span>
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="h-10" />

        {/* YouTube embed */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-2 md:col-end-12">
            <div className="relative w-full overflow-hidden rounded-[30px]" style={{ paddingTop: "56.17%" }}>
              <iframe
                src="https://www.youtube.com/embed/wlgI0-EoexQ?rel=0&controls=0&autoplay=1&mute=1&start=0"
                title="MOVIN TRACIN vs Vicon vs Xsens"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="h-10" />

        {/* Stats grid — 2x2 */}
        <div className="grid grid-cols-12 gap-x-6">
          {/* Row 1 */}
          <div className="col-span-12 md:col-start-3 md:col-end-6">
            <ScrollReveal>
              <div className="border-t border-[rgb(145,145,145)] pt-8">
                <p className="font-body text-[28px] font-semibold leading-[140%] text-[rgb(145,145,145)]">
                  Data accuracy is{" "}
                  <span className="text-black">up to 93%</span>{" "}
                  compared to marker-based systems
                </p>
                <div className="h-20" />
              </div>
            </ScrollReveal>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-end-11">
            <ScrollReveal delay={0.1}>
              <div className="border-t border-[rgb(145,145,145)] pt-8">
                <p className="font-body text-[28px] font-semibold leading-[140%] text-[rgb(145,145,145)]">
                  TRACIN captures at a stable{" "}
                  <span className="text-black">
                    60 frames per second
                  </span>
                </p>
                <div className="h-20" />
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="col-span-12 md:col-start-3 md:col-end-6">
            <ScrollReveal delay={0.2}>
              <div className="border-t border-[rgb(145,145,145)] pt-8">
                <p className="font-body text-[28px] font-semibold leading-[140%] text-[rgb(145,145,145)]">
                  Movement is delivered with no hesitation, less than{" "}
                  <span className="text-black">
                    0.1sec latency
                  </span>
                </p>
                <div className="h-20" />
              </div>
            </ScrollReveal>
          </div>
          <div className="col-span-12 md:col-start-8 md:col-end-11">
            <ScrollReveal delay={0.3}>
              <div className="border-t border-[rgb(145,145,145)] pt-8">
                <Link
                  href="https://discover.movin3d.com/research-enhanced-real-time-lidar-motion-capture-through-upsampling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[20px] font-normal leading-[140%] text-[#c04bf7] transition-opacity hover:opacity-70"
                >
                  Learn more about AI-powered motion capture →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Built-In Clean-Up ─── */
function CleanUpSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[1080px]">
        {/* Title */}
        <ScrollReveal>
          <p className="text-center font-body text-[32px] font-normal leading-[120%] tracking-[0.01em] text-[#1a1a1a]">
            Built-In Clean-Up
          </p>
        </ScrollReveal>
        <div className="h-10" />

        {/* Image */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-3 md:col-end-11">
            <ScrollReveal>
              <Image
                src={IMAGES.studioCleanup}
                alt="Built-In Clean-Up"
                width={3840}
                height={2160}
                className="rounded-[30px]"
                unoptimized
              />
            </ScrollReveal>
          </div>
        </div>

        <div className="h-10" />

        {/* Body text */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-4 md:col-end-10">
            <ScrollReveal>
              <p className="text-left font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                <span className="font-semibold tracking-[-0.02em] text-black">
                  Small details make a big difference.
                </span>{" "}
                Professional creators knows the subtle issues that break
                immersion, such as foot sliding, poor ground contact, and
                drifting. MOVIN TRACIN&apos;s instant AI cleanup automatically
                resolves these issues and more.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Ready, Set, Motion ─── */
function EasySetupSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[1080px]">
        {/* Title row */}
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-1 md:col-end-7">
            <p className="font-body text-[32px] font-normal uppercase leading-[120%] tracking-[0.05em] text-[#1a1a1a]">
              READY, SET, MOTION
            </p>
          </div>
          <div className="col-span-12 mt-4 flex items-end justify-end md:col-start-7 md:col-end-13 md:mt-0">
            <Link
              href="https://www.youtube.com/watch?v=-LiEAn0amok"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[20px] font-normal leading-[140%] tracking-[0.02em] text-[#c04bf7] transition-opacity hover:opacity-70"
            >
              Learn more about the installation process →
            </Link>
          </div>
        </div>

        <div className="h-10" />

        {/* Two video cards */}
        <div className="grid grid-cols-12 gap-x-6">
          {/* Card 1: Setup */}
          <div className="col-span-12 md:col-start-1 md:col-end-7">
            <div className="h-[500px] overflow-hidden rounded-[30px] bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="relative z-[1] h-full w-full object-cover"
              >
                <source src={VIDEOS.setupInstallWebm} type="video/webm" />
                <source src={VIDEOS.setupInstall} type="video/mp4" />
              </video>
            </div>
            <div className="h-9" />
            <div className="px-8">
              <p className="font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                Snap MOVIN TRACIN onto the tripod, plug in two cables, and set
                your mocap zone. The entire setup takes just 3 minutes, now even
                faster and easier with our new quick-release mount. Save your
                time, and{" "}
                <span className="font-semibold tracking-[-0.02em] text-black">
                  start capturing with a lighter mind and lighter step.
                </span>
              </p>
            </div>
          </div>

          {/* Card 2: Calibration */}
          <div className="col-span-12 mt-10 md:col-start-7 md:col-end-13 md:mt-0">
            <div className="h-[500px] overflow-hidden rounded-[30px] bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="relative z-[1] h-full w-full object-cover"
              >
                <source src={VIDEOS.calibrationWebm} type="video/webm" />
                <source src={VIDEOS.calibration} type="video/mp4" />
              </video>
            </div>
            <div className="h-9" />
            <div className="px-8">
              <p className="font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                <span className="font-semibold tracking-[-0.02em] text-black">
                  Let AI do the math.
                </span>{" "}
                MOVIN TRACIN calibrates your body in just 3 seconds. As long as
                the device stays on, returning to the mocap zone restores your
                previous setup automatically, even if the performer changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Technical Specification ─── */
function SpecTableSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[1080px]">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-3 md:col-end-11">
            <div className="grid grid-cols-1 gap-6 rounded-[30px] bg-[rgb(222,222,222)] px-6 md:grid-cols-3 md:px-12">
              {/* Top spacer */}
              <div className="col-span-1 h-[32px] md:col-span-3" />

              {/* Title */}
              <div className="col-span-1 md:col-span-3">
                <p className="text-center font-body text-[32px] font-normal leading-[120%] tracking-[0.01em] text-[#1a1a1a]">
                  Technical Specification
                </p>
              </div>

              {/* Spacer after title */}
              <div className="col-span-1 h-[32px] md:col-span-3" />

              {/* Materials */}
              <div className="col-span-1 rounded-[30px] bg-white p-8">
                <p className="text-center font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                  Materials
                </p>
                <div className="h-6" />
                <div className="flex justify-between">
                  <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                    Anodized
                    <br />
                    Aluminum
                  </span>
                </div>
              </div>

              {/* MoCap Range */}
              <div className="col-span-1 rounded-[30px] bg-white p-8">
                <p className="text-center font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                  MoCap Range
                </p>
                <div className="h-6" />
                <div className="flex justify-between">
                  <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                    1m x 1m
                    <br />
                    to
                    <br />
                    5m x 5m
                  </span>
                </div>
              </div>

              {/* MoCap Spec */}
              <div className="col-span-1 rounded-[30px] bg-white p-8">
                <p className="text-center font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                  MoCap Spec
                </p>
                <div className="h-6" />
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Body
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      22 joints
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Hands
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      30 joints
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Latency
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      &lt; 0.1sec
                    </span>
                  </div>
                </div>
              </div>

              {/* Size & Weight — col 1 */}
              <div className="col-span-1 rounded-[30px] bg-white p-8">
                <p className="text-center font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                  Size &amp; Weight
                </p>
                <div className="h-6" />
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Width
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      87mm
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Depth
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      225mm
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Height
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      165mm
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Weight
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      &lt; 3kg
                    </span>
                  </div>
                </div>
              </div>

              {/* System Requirements — col 2-3 */}
              <div className="col-span-1 rounded-[30px] bg-white p-8 md:col-span-2">
                <p className="text-center font-body text-[20px] leading-[140%] tracking-[0.02em] text-[#333]">
                  System Requirements
                </p>
                <div className="h-6" />
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      O.S.
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Only Windows Provided
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      CPU
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      3.0+ GHz i7
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      RAM
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      &gt; 16GB
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      VGA
                    </span>
                    <span className="text-right font-body text-[20px] font-semibold leading-[140%] tracking-[0.02em] text-[#444]">
                      Nvidia RTX 3060 / AMD 6600xt
                    </span>
                  </div>
                </div>
              </div>

              {/* Exploded view image — full width */}
              <div className="col-span-1 overflow-hidden rounded-[30px] bg-white md:col-span-3">
                <Image
                  src={IMAGES.tracInExploded}
                  alt="MOVIN TRACIN exploded view"
                  width={2560}
                  height={1440}
                  className="w-full"
                  unoptimized
                />
              </div>

              {/* Bottom spacer */}
              <div className="col-span-1 h-[32px] md:col-span-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-[1080px]">
        <div className="grid grid-cols-12 gap-x-6">
          {/* Row 1: Ready to Get MOVIN? */}
          <div className="col-span-12 text-center">
            <p className="text-center font-body text-[32px] font-normal leading-[120%] tracking-[0.01em] text-[#1a1a1a]">
              Ready to Get MOVIN?
            </p>
          </div>
          <div className="col-span-12 h-12" />
          <div className="col-span-12 text-center">
            <Link
              href="https://shop.movin3d.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#1a1a1a] px-6 py-3.5 font-ui text-[16px] font-light text-white transition-opacity hover:opacity-80"
            >
              Order Now
            </Link>
          </div>

          {/* Spacing */}
          <div className="col-span-12 h-80" />

          {/* Row 2: Free Demo */}
          <div className="col-span-12 md:col-start-4 md:col-end-10">
            <p className="text-center font-body text-[32px] font-normal leading-[120%] tracking-[0.01em] text-[#1a1a1a]">
              Ask for a Free Demo Session, or Consult With an Expert for Your
              Use Case.
            </p>
          </div>
          <div className="col-span-12 h-12" />
          <div className="col-span-12 text-center">
            <Link
              href="/online-demo"
              className="inline-block rounded-full bg-[#1a1a1a] px-6 py-3.5 font-ui text-[16px] font-light text-white transition-opacity hover:opacity-80"
            >
              Get a Free Demo
            </Link>
          </div>
          <div className="col-span-12 h-9" />
          <div className="col-span-12 text-center">
            <Link
              href="mailto:contact@movin3d.com"
              className="font-body text-[20px] font-normal leading-[140%] tracking-[0.02em] text-[#c04bf7] transition-opacity hover:opacity-70"
            >
              Contact a MOVIN Expert →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Disclaimer / Footnote ─── */
function DisclaimerSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <div className="h-[120px]" />
      <div className="w-full max-w-[1080px]">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 md:col-start-3 md:col-end-11">
            <p className="font-body text-[12px] uppercase leading-[140%] text-[rgb(145,145,145)]">
              Products are shipped using reliable third-party logistics
              providers. While we strive to provide accurate shipping timelines,
              all delivery dates are estimates and may be subject to delay due to
              unforeseen circumstances. We cannot be held liable for shipping
              delays outside our control, including customs clearance or courier
              disruptions.
              <br />
              <br />
              We aim for customer satisfaction and may honor return or refund
              requests in accordance with applicable law and our internal
              policies. Unless otherwise required by law, all sales are final.
              For defective items covered under warranty, a return or exchange
              may be offered subject to verification and within the warranty
              period.
              <br />
              <br />
              We Use the Hesai JT128, 905nm LiDAR, which operates at a 905nm
              wavelength and is intended for short-range detection up to 30
              meters. This wavelength is widely used in service robots, vacuums,
              and industrial automation due to its proven safety and reliability.
              All commercial LiDARs, including ours, are certified as
              &quot;CLASS 1 EYE-SAFE&quot; under IEC 60825-1 standards. This
              means the product does not pose a hazard to the human eye or skin
              during normal use. In contrast, 1550nm LiDARs — used in long-range
              or autonomous vehicle systems — can operate at higher power levels
              and may present risks if not properly controlled. The 905nm class
              operates under stricter power limits, making it better suited for
              safe, general-purpose robotics.
              <br />
              <br />
              Our products include built-in LiDAR and camera sensors. MOVIN DOES
              NOT STORE, TRANSMIT, OR UPLOAD ANY VIDEO OR SENSOR DATA TO ITS
              SERVERS. All visual and depth data remain solely on your local
              device or secure environment. Users retain full control of their
              data. MOVIN is committed to safeguarding your privacy and complying
              with applicable laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TracinPage() {
  return (
    <>
      <HeroSection />
      {/* section_spacing subhero (320px) */}
      <div className="h-80" />
      <StatementSection />
      <TechVideoSection />
      <DescriptionSection />
      <FreeYourBodySection />
      {/* section_spacing (320px) */}
      <div className="h-80" />
      <RightMotionSection />
      {/* section_spacing (320px) */}
      <div className="h-80" />
      <CleanUpSection />
      {/* section_spacing (320px) inside CleanUp in original */}
      <div className="h-80" />
      <EasySetupSection />
      {/* section_spacing (320px) inside EasySetup + section_spacing_half (160px) */}
      <div className="h-80" />
      <div className="h-40" />
      <SpecTableSection />
      {/* section_spacing (320px) */}
      <div className="h-80" />
      <CTASection />
      <DisclaimerSection />
      {/* section_spacing (320px) */}
      <div className="h-80" />
    </>
  );
}

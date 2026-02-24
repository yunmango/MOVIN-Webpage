import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES, SHOP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MOVIN TRACIN - Real-time Markerless Motion Capture",
  description:
    "MOVIN TRACIN delivers real-time, free-body motion capture in a single compact device. AI-powered processing, setup in under 3 minutes.",
};

/* ─── Hero ─── */
function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={IMAGES.tracInKeyedOutWebm}
          type="video/webm"
        />
        <source
          src={IMAGES.tracInKeyedOutMp4}
          type="video/mp4"
        />
      </video>

      {/* Bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:pb-16">
        <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left: Title + description */}
          <ScrollReveal>
            <div>
              <p className="font-ui text-[14px] font-normal uppercase tracking-[0.1em] text-[#1a1a1a]">
                MOVIN TRACIN
              </p>
              <h1 className="mt-2 font-ui text-[36px] font-light leading-[1.15] tracking-[-0.02em] text-[#1a1a1a] md:text-[54px]">
                Freedom In Motion
              </h1>
              <p className="mt-4 max-w-[420px] font-body text-[16px] leading-[1.5] text-[#666]">
                Real-time, free-body motion capture, built as a single, compact
                form, powered by AI.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Price + Shop Now */}
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-0">
              <span className="rounded-l-full bg-[#f0f0f0] px-6 py-2.5 font-ui text-[16px] font-normal text-[#1a1a1a]">
                $ 11,000
              </span>
              <Link
                href={`${SHOP_URL}/collections/all`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-r-full bg-[#1a1a1a] px-6 py-2.5 font-ui text-[16px] font-light text-white transition-opacity hover:opacity-80"
              >
                Shop Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Highlights ─── */
const HIGHLIGHTS = [
  {
    title: "Studio-Grade Mocap",
    description: "93% data accuracy compared to marker-based systems",
    image: IMAGES.graphics03,
  },
  {
    title: "In Any Environment",
    description: "93% data accuracy compared to marker-based systems",
    image: IMAGES.graphics02,
  },
  {
    title: "Without Markers",
    description: "93% data accuracy compared to marker-based systems",
    image: IMAGES.graphics01,
  },
];

function HighlightsSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[32px] font-normal text-[#1a1a1a]">
            Highlights
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[720px] text-center font-body text-[18px] leading-[1.5] text-[#666] md:text-[20px]">
            MOVIN TRACIN delivers high-precision, markerless full-body motion
            capture in real-time, powered by on-device AI.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.05 * (i + 1)}>
              <div className="overflow-hidden rounded-[12px] bg-[#f9f9f9]">
                <div className="p-6 pb-0">
                  <h3 className="font-ui text-[20px] font-normal text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.5] text-[#666]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 px-6 pb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={800}
                    className="w-full rounded-[8px]"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Professional Mocap Experience ─── */
function ProfessionalMocapSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[32px] font-normal text-[#1a1a1a]">
            Professional Mocap Experience
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[720px] text-center font-body text-[18px] leading-[1.5] text-[#666] md:text-[20px]">
            Markerless yet professional. The data reveals the accuracy of our
            mocap system.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[24px]">
            <div
              className="relative w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/wlgI0-EoexQ?rel=0&controls=0&autoplay=1&mute=1&start=0"
                title="MOVIN TRACIN vs Vicon vs Xsens"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Motion AI Technology ─── */
function MotionAiTechSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[32px] font-normal text-[#1a1a1a]">
            Motion AI Technology
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[820px] text-center font-body text-[18px] leading-[1.5] text-[#666] md:text-[20px]">
            MOVIN TRACIN&apos;s LiDAR-based sensing ensures consistent accuracy
            in bright light, low light, or complete darkness. And with full
            resistance to electromagnetic interference, it stays stable even near
            LED walls, audio gear, or broadcast equipment.Day or night, in or
            out, clear results throughout.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12">
            <Image
              src={IMAGES.tracInExplodedNew}
              alt="MOVIN TRACIN Exploded View"
              width={2560}
              height={1440}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 1080px"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Studio Cross-Sell ─── */
function StudioCrossSellSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[32px] font-normal text-[#1a1a1a]">
            MOVIN Studio
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[720px] text-center font-body text-[18px] leading-[1.5] text-[#666] md:text-[20px]">
            MOVIN TRACIN&apos;s LiDAR-based sensing ensures consistent accuracy
            in bright light, low light, or complete darkness.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <Link
              href="/studio"
              className="inline-block rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white transition-opacity hover:opacity-80"
            >
              Go to Studio
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-[24px]">
            <Image
              src={IMAGES.movinStudio}
              alt="MOVIN Studio with TRACIN"
              width={2560}
              height={1440}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 1080px"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          {/* Left: TRACIN image */}
          <ScrollReveal className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-[24px] bg-black">
              <Image
                src={IMAGES.tracin}
                alt="MOVIN TRACIN"
                width={1200}
                height={1200}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </div>
          </ScrollReveal>

          {/* Right: Text + Button */}
          <ScrollReveal className="w-full md:w-1/2" delay={0.1}>
            <div>
              <h2 className="font-ui text-[28px] font-normal leading-[1.3] text-[#1a1a1a] md:text-[32px]">
                Let&apos;s get started with MOVIN TRACIN
              </h2>
              <p className="mt-6 font-body text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
                MOVIN&apos;s on-device AI fuses LiDAR point clouds and vision to
                turn raw capture into production-ready motion data. Built for
                entertainments, robotics, sports, and more.
              </p>
              <div className="mt-8">
                <Link
                  href="/online-demo"
                  className="inline-block rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white transition-opacity hover:opacity-80"
                >
                  Book a Free Demo
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function TracinPage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ProfessionalMocapSection />
      <MotionAiTechSection />
      <StudioCrossSellSection />
      <CTASection />
    </>
  );
}

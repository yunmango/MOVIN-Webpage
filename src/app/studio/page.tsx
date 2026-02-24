import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { IMAGES } from "@/lib/constants";
import { cn, BTN_PRIMARY, BTN_SECONDARY } from "@/lib/utils";
import { PlansSection } from "@/components/studio/plans-section";

export const metadata: Metadata = {
  title: "MOVIN Studio - Motion Capture Control & Visualization",
  description:
    "MOVIN Studio is the dedicated control and visualization application built for MOVIN TRACIN. A smooth and intuitive interface for motion capture.",
};

/* ─────────────────── Hero Section ─────────────────── */
function HeroSection() {
  return (
    <section className="bg-white pb-20 pt-40 md:pt-52">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Title */}
        <ScrollReveal>
          <h1 className="text-center font-heading text-[56px] font-bold leading-[0.95] tracking-[-0.02em] text-[#1a1a1a] md:text-[72px] lg:text-[88px]">
            MOVIN STUDIO
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 md:mt-8 max-w-[500px] text-center font-body text-base text-[#666] md:text-xl">
            Control, visualize, and export motion with precision.
          </p>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 md:mt-14">
            <Image
              src={IMAGES.studioWithTracin}
              alt="MOVIN Studio with TRACIN"
              width={1200}
              height={675}
              className="w-full rounded-2xl"
              priority
            />
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-14 md:mt-16 max-w-[600px] text-center font-body text-base leading-[1.7] text-[#666] md:text-xl">
            MOVIN Studio is the dedicated control and visualization application
            built for MOVIN TRACIN.{" "}
            <span className="font-semibold text-[#1a1a1a]">
              A smooth and intuitive interface
            </span>{" "}
            keeps you focused on the quality of the motion.
          </p>
        </ScrollReveal>

        {/* Download CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="font-body text-sm tracking-wide text-[#999]">
              Currently available for Windows
            </p>
            <Link
              href="/downloads"
              className={cn("gap-2 rounded-[8px] border border-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-[#1a1a1a]", BTN_SECONDARY)}
            >
              <Image
                src={IMAGES.studioFavicon}
                alt=""
                width={20}
                height={20}
              />
              <span>Go to Download Page</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────── Retargeting Section ─────────────────── */
function RetargetingSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <Image
            src={IMAGES.studioRetargeting}
            alt="Retargeting interface"
            width={1060}
            height={600}
            className="w-full rounded-2xl"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-10 max-w-[600px] font-body text-base leading-[1.7] text-[#666] md:text-xl">
            <span className="font-semibold text-[#1a1a1a]">
              Retarget characters
            </span>{" "}
            of any shape or proportion to eliminate unnatural occlusions. Using
            an FK retargeting tool, you can adjust joint angles in the rest pose
            to match each character&apos;s unique skeletal structure.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────── Pipeline Section ─────────────────── */

const PIPELINE_LOGOS = [
  { src: IMAGES.studioUE, alt: "Unreal Engine", width: 220 },
  { src: IMAGES.studioUnity, alt: "Unity", width: 88 },
  { src: IMAGES.studioNotch, alt: "Notch", width: 86 },
  { src: IMAGES.studioWarudo, alt: "Warudo", width: 125 },
  { src: IMAGES.studioVR, alt: "VRChat", width: 91 },
  { src: IMAGES.studioCILogo, alt: "Character Creator", width: 180 },
];

function PipelineSection() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <h2 className="font-ui text-[24px] font-normal tracking-[-0.8px] text-[#1a1a1a] md:text-[40px]">
            Ready for Every Pipeline
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          {/* Left: Description & Logos */}
          <div className="flex-1">
            <ScrollReveal delay={0.1}>
              <p className="font-body text-base leading-[1.7] text-[#666] md:text-xl">
                MOVIN Studio connects seamlessly with major platforms, helping
                you adapt to any production environment. Captured motion can also
                be exported in various formats, ensuring compatibility across
                diverse pipelines.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 items-center gap-6">
                {PIPELINE_LOGOS.map((logo, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={60}
                      className="h-auto max-h-[60px] w-auto max-w-full object-contain brightness-0 opacity-60 transition-opacity hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Character image */}
          <div className="flex-1">
            <ScrollReveal delay={0.2}>
              <Image
                src={IMAGES.studioCharacter}
                alt="Studio character retargeting"
                width={612}
                height={500}
                className="w-full rounded-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Features Section (Area + Glove) ─────────────────── */
function FeaturesSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Capture Area */}
          <ScrollReveal>
            <TiltCard maxDeg={7}>
              <div className="group overflow-hidden rounded-3xl bg-[#fafafa] p-6">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={IMAGES.studioArea}
                    alt="Mocap area diagram"
                    width={581}
                    height={500}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 font-body text-base leading-[1.7] text-[#666]">
                  From a cozy 1m x 1m home setup to a full 5m x 5m studio space,
                  MOVIN TRACIN adapts to your environment — now with 2.5x more
                  capture area than before.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Glove Integration */}
          <ScrollReveal delay={0.1}>
            <TiltCard maxDeg={7}>
              <div className="group overflow-hidden rounded-3xl bg-[#fafafa] p-6">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={IMAGES.studioGlove}
                    alt="Hand capture with gloves"
                    width={581}
                    height={500}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 font-body text-base leading-[1.7] text-[#666]">
                  Integrate third-party gloves for reliable hand capture. The
                  system&apos;s subtle engineering blends glove input into
                  full-body motion, maintaining a natural articulation even in
                  complex poses or transitions.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Technical Specification Section ─────────────────── */
function TechnicalSpecSection() {
  return (
    <section className="bg-[#fafafa] py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <h2 className="text-center font-heading text-[40px] font-bold tracking-[-0.02em] text-[#1a1a1a] md:text-[56px]">
            Technical Specification
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Materials */}
            <TiltCard maxDeg={5}>
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-6 transition-shadow hover:shadow-md">
                <p className="text-center font-body text-sm text-gray-500">
                  Materials
                </p>
                <p className="mt-4 text-center font-body text-lg font-bold text-[#1a1a1a]">
                  Anodized
                  <br />
                  Aluminum
                </p>
              </div>
            </TiltCard>

            {/* MoCap Range */}
            <TiltCard maxDeg={5}>
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-6 transition-shadow hover:shadow-md">
                <p className="text-center font-body text-sm text-gray-500">
                  MoCap Range
                </p>
                <p className="mt-4 text-center font-body text-lg font-bold text-[#1a1a1a]">
                  1m x 1m
                  <br />
                  <span className="text-sm font-normal text-gray-400">to</span>
                  <br />
                  5m x 5m
                </p>
              </div>
            </TiltCard>

            {/* MoCap Spec */}
            <TiltCard maxDeg={5}>
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-6 transition-shadow hover:shadow-md">
                <p className="text-center font-body text-sm text-gray-500">
                  MoCap Spec
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Body</span>
                    <span>22 joints</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Hands</span>
                    <span>30 joints</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Latency</span>
                    <span>&lt; 0.1sec</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Size & Weight */}
            <TiltCard maxDeg={5}>
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-6 transition-shadow hover:shadow-md">
                <p className="text-center font-body text-sm text-gray-500">
                  Size & Weight
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Width</span>
                    <span>87mm</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Depth</span>
                    <span>225mm</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Height</span>
                    <span>165mm</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>Weight</span>
                    <span>&lt; 3kg</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* System Requirements */}
            <TiltCard maxDeg={5}>
              <div className="rounded-2xl border border-[#e8e8e8] bg-white p-6 transition-shadow hover:shadow-md">
                <p className="text-center font-body text-sm text-gray-500">
                  System Requirements
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>O.S.</span>
                    <span>Only Windows Provided</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>CPU</span>
                    <span>3.0+ GHz i7</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>RAM</span>
                    <span>&gt; 16GB</span>
                  </div>
                  <div className="flex justify-between font-body text-base font-bold text-[#1a1a1a]">
                    <span>VGA</span>
                    <span className="text-right">
                      Nvidia RTX 3060 /
                      <br />
                      AMD 6600xt
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>

        {/* Exploded view image */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Image
              src={IMAGES.tracInExploded}
              alt="TRACIN exploded view"
              width={1440}
              height={600}
              className="w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────── CTA Section ─────────────────── */
function CTASection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-6 text-center">
        <ScrollReveal>
          <h2 className="font-ui text-[24px] font-normal tracking-[-0.8px] text-[#1a1a1a] md:text-[40px]">
            Ready to Get MOVIN?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Link
            href="/purchase"
            className={cn("mt-8 rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
          >
            Order Now
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-8 font-body text-base text-[#666] md:text-xl">
            Ask for a Free Demo Session, or Consult With an Expert for Your Use
            Case.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/online-demo"
            className={cn("mt-4 rounded-[8px] border border-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-[#1a1a1a]", BTN_SECONDARY)}
          >
            Get a Free Demo
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <Link
            href="mailto:contact@movin3d.com"
            className="mt-4 block font-body text-sm text-[#1a1a1a] underline transition-colors hover:text-gray-600"
          >
            Contact a MOVIN Expert →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────── Disclaimer Section ─────────────────── */
function DisclaimerSection() {
  return (
    <section className="bg-[#fafafa] py-12">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="font-body text-[11px] leading-[1.8] text-gray-400">
          Products are shipped using reliable third-party logistics providers.
          While we strive to provide accurate shipping timelines, all delivery
          dates are estimates and may be subject to delay due to unforeseen
          circumstances. We cannot be held liable for shipping delays outside our
          control, including customs clearance or courier disruptions.
        </p>
        <p className="mt-3 font-body text-[11px] leading-[1.8] text-gray-400">
          We aim for customer satisfaction and may honor return or refund
          requests in accordance with applicable law and our internal policies.
          Unless otherwise required by law, all sales are final. For defective
          items covered under warranty, a return or exchange may be offered
          subject to verification and within the warranty period.
        </p>
        <p className="mt-3 font-body text-[11px] leading-[1.8] text-gray-400">
          We Use the Hesai JT128, 905nm LiDAR, which operates at a 905nm
          wavelength and is intended for short-range detection up to 30 meters.
          This wavelength is widely used in service robots, vacuums, and
          industrial automation due to its proven safety and reliability. All
          commercial LiDARs, including ours, are classified as Class 1 (IEC
          60825-1) — meaning they are eye-safe under all normal operating
          conditions. The JT128 meets international safety certifications
          including FCC, CE, and KC. These certifications confirm compliance with
          electromagnetic compatibility (EMC) and safety standards for consumer
          and industrial environments.
        </p>
        <p className="mt-3 font-body text-[11px] leading-[1.8] text-gray-400">
          MOVIN DOES NOT STORE, TRANSMIT, OR UPLOAD ANY VIDEO OR SENSOR DATA. All
          processing occurs locally on the user&apos;s PC, and the generated
          skeletal data remains entirely under the user&apos;s control.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── Page ─────────────────── */
export default function StudioPage() {
  return (
    <>
      <HeroSection />
      <RetargetingSection />
      <PipelineSection />
      <FeaturesSection />
      <TechnicalSpecSection />
      <PlansSection />
      <CTASection />
      <DisclaimerSection />
    </>
  );
}

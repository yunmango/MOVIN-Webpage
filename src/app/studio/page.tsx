"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES } from "@/lib/constants";

/* ─────────────────── Hero Section ─────────────────── */
function HeroSection() {
  return (
    <section className="bg-white pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Title */}
        <ScrollReveal>
          <h1 className="text-center font-body text-[32px] font-normal uppercase tracking-[1.6px] text-[#1a1a1a]">
            MOVIN STUDIO
          </h1>
        </ScrollReveal>

        {/* Hero Image */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8">
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
          <p className="mx-auto mt-10 max-w-[600px] text-center font-body text-[20px] leading-[28px] tracking-[0.4px] text-[#333]">
            MOVIN Studio is the dedicated control and visualization application
            built for MOVIN TRACIN.{" "}
            <span className="font-bold text-[#1a1a1a]">
              A smooth and intuitive interface
            </span>{" "}
            keeps you focused on the quality of the motion.
          </p>
        </ScrollReveal>

        {/* Download CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="font-body text-sm tracking-wide text-gray-400">
              Currently available for Windows
            </p>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a] px-6 py-3 font-body text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
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
    <section className="bg-white py-20 md:py-28">
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
          <p className="mt-10 max-w-[600px] font-body text-[20px] leading-[28px] tracking-[0.4px] text-[#333]">
            <span className="font-bold text-[#1a1a1a]">
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
function PipelineSection() {
  const pipelineLogos = [
    { src: IMAGES.studioUE, alt: "Unreal Engine", width: 220 },
    { src: IMAGES.studioUnity, alt: "Unity", width: 88 },
    { src: IMAGES.studioNotch, alt: "Notch", width: 86 },
    { src: IMAGES.studioWarudo, alt: "Warudo", width: 125 },
    { src: IMAGES.studioVR, alt: "VRChat", width: 91 },
    { src: IMAGES.studioCILogo, alt: "Character Creator", width: 180 },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <h2 className="font-body text-[32px] font-normal tracking-[0.32px] text-[#1a1a1a]">
            Ready for Every Pipeline
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-8 md:flex-row">
          {/* Left: Description & Logos */}
          <div className="flex-1">
            <ScrollReveal delay={0.1}>
              <p className="font-body text-[20px] leading-[28px] tracking-[0.4px] text-[#333]">
                MOVIN Studio connects seamlessly with major platforms, helping
                you adapt to any production environment. Captured motion can also
                be exported in various formats, ensuring compatibility across
                diverse pipelines.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="mt-10 grid grid-cols-3 items-center gap-6">
                {pipelineLogos.map((logo, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={60}
                      className="h-auto max-h-[50px] w-auto max-w-full object-contain brightness-0"
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
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Capture Area */}
          <ScrollReveal>
            <div>
              <Image
                src={IMAGES.studioArea}
                alt="Mocap area diagram"
                width={581}
                height={500}
                className="w-full rounded-2xl"
              />
              <p className="mt-6 font-body text-[16px] leading-[24px] text-[#333]">
                From a cozy 1m x 1m home setup to a full 5m x 5m studio space,
                MOVIN TRACIN adapts to your environment — now with 2.5x more
                capture area than before.
              </p>
            </div>
          </ScrollReveal>

          {/* Glove Integration */}
          <ScrollReveal delay={0.1}>
            <div>
              <Image
                src={IMAGES.studioGlove}
                alt="Hand capture with gloves"
                width={581}
                height={500}
                className="w-full rounded-2xl"
              />
              <p className="mt-6 font-body text-[16px] leading-[24px] text-[#333]">
                Integrate third-party gloves for reliable hand capture. The
                system&apos;s subtle engineering blends glove input into
                full-body motion, maintaining a natural articulation even in
                complex poses or transitions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Technical Specification Section ─────────────────── */
function TechnicalSpecSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        <ScrollReveal>
          <div className="rounded-3xl bg-[#e8e8e8] p-8 md:p-12">
            <h2 className="text-center font-body text-[32px] font-normal tracking-[0.32px] text-[#1a1a1a]">
              Technical Specification
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Materials */}
              <div className="rounded-2xl bg-white p-6">
                <p className="text-center font-body text-sm text-gray-500">
                  Materials
                </p>
                <p className="mt-4 text-center font-body text-lg font-bold text-[#1a1a1a]">
                  Anodized
                  <br />
                  Aluminum
                </p>
              </div>

              {/* MoCap Range */}
              <div className="rounded-2xl bg-white p-6">
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

              {/* MoCap Spec */}
              <div className="rounded-2xl bg-white p-6">
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
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Size & Weight */}
              <div className="rounded-2xl bg-white p-6">
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

              {/* System Requirements */}
              <div className="rounded-2xl bg-white p-6">
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
            </div>

            {/* Exploded view image */}
            <div className="mt-8">
              <Image
                src={IMAGES.tracInExploded}
                alt="TRACIN exploded view"
                width={1440}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────── Plans Section ─────────────────── */
function PlansSection() {
  const [activeTab, setActiveTab] = useState<"license" | "perpetual">(
    "license"
  );

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-body text-[64px] font-bold uppercase tracking-wider text-[#1a1a1a] md:text-[80px]">
              PLANS
            </h2>
            <p className="mt-4 font-body text-[16px] uppercase tracking-[3px] text-gray-400">
              UNLIMITED ACCESS. UNLIMITED YOU.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-[#1a1a1a]">
            <div className="flex">
              <button
                onClick={() => setActiveTab("license")}
                className={`flex-1 py-4 text-center font-body text-base font-medium transition-colors ${
                  activeTab === "license"
                    ? "bg-[#333] text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                License Plans
              </button>
              <button
                onClick={() => setActiveTab("perpetual")}
                className={`flex-1 py-4 text-center font-body text-base font-medium transition-colors ${
                  activeTab === "perpetual"
                    ? "bg-[#333] text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Perpetual Packages
              </button>
            </div>

            {/* License Plans Tab */}
            {activeTab === "license" && (
              <div className="p-6 md:p-8">
                <p className="mb-8 text-center font-body text-sm leading-relaxed text-gray-400">
                  License Plan is a time-based access that provides the latest
                  features and updates. Simply purchase the license whenever you
                  need more, giving you full flexibility.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Starter */}
                  <PlanCard
                    title="Starter (Free)"
                    features={[
                      {
                        category: "Live Update",
                        items: [
                          "Maintenance updates",
                          "Access to new features",
                        ],
                      },
                      {
                        category: "Log-in",
                        items: [
                          "Offline license timeout not supported",
                        ],
                      },
                      {
                        category: "Capture",
                        items: [
                          "3 second AI calibration",
                          "Markerless full-body mocap",
                          "Night mode (low-light) mocap",
                          "30 min/month mocap recording",
                          "30 min limited recording duration",
                          "Export motion to .fbx, .bvh format",
                          "Single-user operation only",
                        ],
                      },
                      {
                        category: "Hands capture",
                        items: [
                          "Fingers mocap by MOVIN (Beta)",
                          "Wrist mocap by MOVIN (Beta)",
                          "Hands mocap by third-party gloves",
                        ],
                      },
                      {
                        category: "Unlimited Live Streaming",
                        items: [
                          "Warudo",
                          "VRChat",
                          "Meligo",
                          "Unity",
                          "Unreal Engine",
                          "Blender",
                          "Notch",
                          "TouchDesigner",
                          "ROS (2026 Q1)",
                          "Isaac Sim (2026 Q1)",
                          "OSC (Beta)",
                        ],
                      },
                      {
                        category: "Retargeting",
                        items: [
                          "Import custom character",
                          "Control actor offset",
                          "Full-body & Hands FK retargeting",
                          "Advanced IK retargeting",
                        ],
                      },
                      {
                        category: "Real-Time AI Cleanup",
                        items: [
                          "Foot sliding removal",
                          "Jitter (noise) removal",
                          "Ground penetration removal",
                        ],
                      },
                      {
                        category: "Editing",
                        items: [
                          "Trimming",
                          "Motion clip post-processing (2026 H1)",
                          "Motion clip frame editing (2026 H1)",
                          "Motion generation (2026 H2)",
                          "Motion mixing (2026 H2)",
                        ],
                      },
                      {
                        category: "Objects",
                        items: ["Object masking (2026 H1)"],
                      },
                    ]}
                  />

                  {/* Unlimited */}
                  <PlanCard
                    title="Unlimited (Monthly / Yearly)"
                    features={[
                      {
                        category: "Live Update",
                        items: [
                          "Maintenance updates",
                          "Access to new features",
                        ],
                      },
                      {
                        category: "Log-in",
                        items: [
                          "Offline license timeout lasts for 24 hours",
                        ],
                      },
                      {
                        category: "Capture",
                        items: [
                          "3 second AI calibration",
                          "Markerless full-body mocap",
                          "Night mode (low-light) mocap",
                          "Unlimited mocap recording",
                          "Unlimited recording duration",
                          "Export motion to .fbx, .bvh format",
                          "Single-user operation only",
                        ],
                      },
                      {
                        category: "Hands capture",
                        items: [
                          "Fingers mocap by MOVIN (Beta)",
                          "Wrist mocap by MOVIN (Beta)",
                          "Hands mocap by third-party gloves",
                        ],
                      },
                      {
                        category: "Unlimited Live Streaming",
                        items: [
                          "Warudo",
                          "VRChat",
                          "Meligo",
                          "Unity",
                          "Unreal Engine",
                          "Blender",
                          "Notch",
                          "TouchDesigner",
                          "ROS (2026 Q1)",
                          "Isaac Sim (2026 Q1)",
                          "OSC (Beta)",
                        ],
                      },
                      {
                        category: "Retargeting",
                        items: [
                          "Import custom character",
                          "Control actor offset",
                          "Full-body & Hands FK retargeting",
                          "Advanced IK retargeting",
                        ],
                      },
                      {
                        category: "Real-Time AI Cleanup",
                        items: [
                          "Foot sliding removal",
                          "Jitter (noise) removal",
                          "Ground penetration removal",
                        ],
                      },
                      {
                        category: "Editing",
                        items: [
                          "Trimming",
                          "Motion clip post-processing (2026 H1)",
                          "Motion clip frame editing (2026 H1)",
                          "Motion generation (2026 H2)",
                          "Motion mixing (2026 H2)",
                        ],
                      },
                      {
                        category: "Objects",
                        items: ["Object masking (2026 H1)"],
                      },
                    ]}
                  />
                </div>
              </div>
            )}

            {/* Perpetual Package Tab */}
            {activeTab === "perpetual" && (
              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <p className="font-body text-sm leading-relaxed text-gray-400">
                    Perpetual Package is a one-time software purchase that
                    bundles stable, production-ready features into a single
                    package.
                  </p>
                  <p className="mt-2 font-body text-xs text-gray-500">
                    *Ongoing updates and future improvements will be available
                    through optional upgrade packages.
                  </p>
                </div>
                <div className="mx-auto max-w-lg">
                  <PlanCard
                    title="Perpetual Package V1 Key Features"
                    features={[
                      {
                        category: "Capture",
                        items: [
                          "3 second AI calibration",
                          "Markerless full-body tracking",
                          "Unlimited MoCap recording",
                          "Unlimited recording duration",
                          "Export motion to .fbx, .bvh format",
                          "Single-user operation only",
                        ],
                      },
                      {
                        category: "Retargeting",
                        items: [
                          "Import custom character",
                          "Custom character FK retargeting",
                        ],
                      },
                      {
                        category: "Real-Time AI Cleanup",
                        items: [
                          "Foot sliding removal",
                          "Jitter (noise) removal",
                          "Ground penetration removal",
                        ],
                      },
                      {
                        category: "Live Streaming",
                        items: [
                          "Warudo",
                          "VR Chat",
                          "Unity",
                          "Unreal Engine",
                          "Notch",
                        ],
                      },
                      {
                        category: "Editing",
                        items: ["Trimming"],
                      },
                      {
                        category: "Additional Features",
                        items: [
                          "Finger tracking by 3rd party gloves (ROKOKO, MANUS)",
                        ],
                      },
                    ]}
                  />
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────── Plan Card Component ─────────────────── */
interface PlanFeature {
  category: string;
  items: string[];
}

function PlanCard({
  title,
  features,
}: {
  title: string;
  features: PlanFeature[];
}) {
  return (
    <div className="rounded-2xl bg-[#2a2a2a] p-6">
      <h3 className="mb-6 font-body text-lg font-bold text-white">{title}</h3>
      <div className="space-y-5">
        {features.map((feature, i) => (
          <div key={i} className="border-t border-gray-700 pt-4">
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
              {feature.category}
            </p>
            <ul className="space-y-1">
              {feature.items.map((item, j) => {
                const isFuture =
                  item.includes("2026") || item.includes("Beta");
                return (
                  <li
                    key={j}
                    className={`font-body text-sm ${
                      isFuture ? "text-gray-500" : "text-gray-200"
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────── CTA Section ─────────────────── */
function CTASection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1080px] px-6 text-center">
        <ScrollReveal>
          <h2 className="font-body text-[40px] font-bold text-[#1a1a1a] md:text-[48px]">
            Ready to Get MOVIN?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Link
            href="https://shop.movin3d.com/collections/all"
            target="_blank"
            className="mt-8 inline-block rounded-full bg-[#1a1a1a] px-10 py-4 font-body text-base font-medium text-white transition-colors hover:bg-black"
          >
            Order Now
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-8 font-body text-base text-gray-500">
            Ask for a Free Demo Session, or Consult With an Expert for Your Use
            Case.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <Link
            href="/online-demo"
            className="mt-4 inline-block rounded-full border border-[#1a1a1a] px-8 py-3 font-body text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
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
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1080px] px-6">
        <p className="font-body text-[10px] leading-[16px] text-gray-400">
          Products are shipped using reliable third-party logistics providers.
          While we strive to provide accurate shipping timelines, all delivery
          dates are estimates and may be subject to delay due to unforeseen
          circumstances. We cannot be held liable for shipping delays outside our
          control, including customs clearance or courier disruptions.
        </p>
        <p className="mt-3 font-body text-[10px] leading-[16px] text-gray-400">
          We aim for customer satisfaction and may honor return or refund
          requests in accordance with applicable law and our internal policies.
          Unless otherwise required by law, all sales are final. For defective
          items covered under warranty, a return or exchange may be offered
          subject to verification and within the warranty period.
        </p>
        <p className="mt-3 font-body text-[10px] leading-[16px] text-gray-400">
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
        <p className="mt-3 font-body text-[10px] leading-[16px] text-gray-400">
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

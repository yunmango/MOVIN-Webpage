import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES, DOWNLOAD_LINKS, SHOP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Downloads - MOVIN Studio & Plugins",
  description:
    "Download MOVIN Studio and plugins for Unity, Unreal Engine, Blender, and TouchDesigner. Sample motion data included.",
};

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pb-8 pt-40 md:pt-48">
      <ScrollReveal>
        <h1 className="text-center font-heading text-[64px] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-[#1a1a1a] md:text-[96px] lg:text-[120px]">
          DOWNLOADS
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mt-6 text-center font-body text-[14px] uppercase leading-[1.6] tracking-[0.15em] text-[#999]">
          FIND ALL THE ESSENTIAL TOOLS AND RESOURCES YOU NEED TO START.
        </p>
      </ScrollReveal>
    </section>
  );
}

/* ─── MOVIN Studio Section ─── */
function MovinStudioSection() {
  return (
    <section className="px-6 pb-0 pt-16 md:pt-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Title */}
        <ScrollReveal>
          <h2 className="text-center font-heading text-[48px] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#1a1a1a] md:text-[64px] lg:text-[80px]">
            MOVIN STUDIO
          </h2>
        </ScrollReveal>

        {/* Large Dark Image Block */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[20px] bg-black md:mt-14">
            <div className="relative aspect-[16/9] w-full md:aspect-[2.2/1]">
              <Image
                src={IMAGES.downloadStudioWithTracin}
                alt="MOVIN Studio with TRACIN"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-12 max-w-[720px] text-center font-body text-[16px] leading-[1.7] tracking-[0.01em] text-[#666] md:mt-16 md:text-[18px]">
            MOVIN Studio is the dedicated control and visualization application
            built for MOVIN TRACIN.{" "}
            <span className="font-semibold text-[#1a1a1a]">
              A smooth and intuitive interface
            </span>{" "}
            keeps you focused on the quality of the motion.
          </p>
        </ScrollReveal>

        {/* Currently available for Windows */}
        <ScrollReveal delay={0.2}>
          <p className="mt-10 text-center font-body text-[14px] tracking-[0.02em] text-[#999] md:mt-12">
            Currently available for Windows
          </p>
        </ScrollReveal>

        {/* Download MOVIN Studio Button */}
        <ScrollReveal delay={0.25}>
          <div className="mt-6 flex justify-center">
            <Link
              href={DOWNLOAD_LINKS.movinStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#1a1a1a] px-7 py-3.5 font-ui text-[14px] font-normal text-white transition-opacity hover:opacity-80"
            >
              <Image
                src={IMAGES.downloadFavicon}
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              Download MOVIN Studio
            </Link>
          </div>
        </ScrollReveal>

        {/* Plugin Download Links */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:mt-12">
            {/* Unity Plugin */}
            <Link
              href={DOWNLOAD_LINKS.unityPlugin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[14px] text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              <Image
                src={IMAGES.pluginUnity}
                alt="Unity"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Download Unity Plugin →
            </Link>

            {/* Unreal Engine Plugin */}
            <Link
              href={DOWNLOAD_LINKS.unrealPlugin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[14px] text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              <Image
                src={IMAGES.pluginUnreal}
                alt="Unreal Engine"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              Download Unreal Engine Plugin →
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {/* Blender Plugin */}
            <Link
              href={DOWNLOAD_LINKS.blenderPlugin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[14px] text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              Download Blender Plugin →
            </Link>

            {/* TouchDesigner Sample Project */}
            <Link
              href={DOWNLOAD_LINKS.touchDesigner}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[14px] text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              Download TouchDesigner Sample Project →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Sample Motion Data Section ─── */
function SampleDataSection() {
  return (
    <section className="px-6 pb-0 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Title */}
        <ScrollReveal>
          <h2 className="text-center font-heading text-[48px] font-bold leading-[1] tracking-[-0.02em] text-[#1a1a1a] md:text-[64px] lg:text-[80px]">
            Sample motion data
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-[720px] text-center font-body text-[16px] leading-[1.7] tracking-[0.01em] text-[#666] md:text-[18px]">
            MOVIN TRACIN delivers{" "}
            <span className="font-semibold text-[#1a1a1a]">
              a level of performance that&apos;s hard to find elsewhere.
            </span>{" "}
            Explore our sample motion data, captured{" "}
            <span className="font-semibold text-[#1a1a1a]">
              without any post-processing or cleanup.
            </span>
          </p>
        </ScrollReveal>

        {/* BVH Motion Viewer */}
        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-[1080px]">
            <div className="relative w-full overflow-hidden rounded-[16px]" style={{ height: "600px" }}>
              <iframe
                src="https://bvh-viewer-main.vercel.app/"
                title="BVH Motion Viewer"
                allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Locomotion & Dynamic Actions */}
        <div className="mt-24 md:mt-32">
          <ScrollReveal>
            <h3 className="text-center font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1a1a] md:text-[40px]">
              Locomotion &amp; Dynamic Actions
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-[640px] text-center font-body text-[15px] leading-[1.7] tracking-[0.01em] text-[#999]">
              Experience motion data captured with MOVIN TRACIN, spanning everyday
              locomotion and expressive actions like big jumps, duckwalk, and
              slickback.
            </p>
          </ScrollReveal>

          {/* YouTube Embed - Locomotion */}
          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-10 max-w-[800px]">
              <div className="relative w-full overflow-hidden rounded-[16px]" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/wlgI0-EoexQ?rel=0&controls=0&autoplay=1&mute=1&start=0"
                  title="Locomotion & Dynamic Actions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Download Sample Data Button */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <Link
                href={DOWNLOAD_LINKS.sampleLocomotion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#1a1a1a] px-6 py-3 font-ui text-[13px] font-normal text-white transition-opacity hover:opacity-80"
              >
                Download Sample Data
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* K-pop Dances */}
        <div className="mt-24 md:mt-32">
          <ScrollReveal>
            <h3 className="text-center font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.01em] text-[#1a1a1a] md:text-[40px]">
              K-pop Dances
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-[640px] text-center font-body text-[15px] leading-[1.7] tracking-[0.01em] text-[#999]">
              K-pop dance data captured with MOVIN TRACIN showcases smooth
              movements and fluid transitions, embodying the energy of
              contemporary performance.
            </p>
          </ScrollReveal>

          {/* YouTube Embed - K-pop */}
          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-10 max-w-[800px]">
              <div className="relative w-full overflow-hidden rounded-[16px]" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/0nGDJ55SPNM?rel=0&controls=0&autoplay=1&mute=1&start=0"
                  title="K-pop Dances"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Download Sample Data Button */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <Link
                href={DOWNLOAD_LINKS.sampleKpop}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#1a1a1a] px-6 py-3 font-ui text-[13px] font-normal text-white transition-opacity hover:opacity-80"
              >
                Download Sample Data
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="px-6 pb-0 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1080px]">
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
              href={`${SHOP_URL}/collections/all`}
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

/* ─── Disclaimer Section ─── */
function DisclaimerSection() {
  return (
    <section className="px-6 pb-12 pt-24 md:pt-32">
      <div className="mx-auto max-w-[720px]">
        <p className="font-body text-[12px] uppercase leading-[1.6] text-[rgb(145,145,145)]">
          Products are shipped using reliable third-party logistics providers.
          While we strive to provide accurate shipping timelines, all delivery
          dates are estimates and may be subject to delay due to unforeseen
          circumstances. We cannot be held liable for shipping delays outside our
          control, including customs clearance or courier disruptions.
          <br />
          <br />
          We aim for customer satisfaction and may honor return or refund requests
          in accordance with applicable law and our internal policies. Unless
          otherwise required by law, all sales are final. For defective items
          covered under warranty, a return or exchange may be offered subject to
          verification and within the warranty period.
          <br />
          <br />
          We Use the Hesai JT128, 905nm LiDAR, which operates at a 905nm
          wavelength and is intended for short-range detection up to 30 meters.
          This wavelength is widely used in service robots, vacuums, and
          industrial automation due to its proven safety and reliability. All
          commercial LiDARs, including ours, are certified as &ldquo;CLASS 1
          EYE-SAFE&rdquo; under IEC 60825-1 standards. This means the product does
          not pose a hazard to the human eye or skin during normal use. In
          contrast, 1550nm LiDARs &mdash; used in long-range automotive
          applications &mdash; operate at different power levels and have separate
          safety considerations.
          <br />
          <br />
          Our products include built-in LiDAR and camera sensors. MOVIN DOES NOT
          STORE, TRANSMIT, OR UPLOAD ANY VIDEO OR SENSOR DATA TO ITS SERVERS. All
          visual and depth data remain solely on your local device or secure
          environment. Users retain full control of their data. MOVIN is committed
          to safeguarding your privacy and complying with applicable laws.
        </p>
      </div>
    </section>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <HeroSection />
      <MovinStudioSection />
      <SampleDataSection />
      <CTASection />
      <DisclaimerSection />
    </>
  );
}

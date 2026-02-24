import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES, DOWNLOAD_LINKS, SHOP_URL } from "@/lib/constants";
import { cn, BTN_PRIMARY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Downloads - MOVIN Studio & Plugins",
  description:
    "Download MOVIN Studio and plugins for Unity, Unreal Engine, Blender, and TouchDesigner. Sample motion data included.",
};

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center pb-12 pt-48 md:pt-56">
      <ScrollReveal>
        <h1 className="text-center font-heading text-[56px] font-bold leading-[0.95] tracking-[-0.02em] text-[#1a1a1a] md:text-[72px] lg:text-[88px]">
          Downloads
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="mt-8 text-center font-body text-base leading-[1.6] text-[#666] md:text-xl">
          Find all the essential tools and resources you need to start.
        </p>
      </ScrollReveal>
    </section>
  );
}

/* ─── Plugin Links Data ─── */
const PLUGINS = [
  {
    name: "Unity Plugin",
    href: DOWNLOAD_LINKS.unityPlugin,
    icon: IMAGES.pluginUnity,
    iconAlt: "Unity",
  },
  {
    name: "Unreal Engine Plugin",
    href: DOWNLOAD_LINKS.unrealPlugin,
    icon: IMAGES.pluginUnreal,
    iconAlt: "Unreal Engine",
  },
  {
    name: "Blender Plugin",
    href: DOWNLOAD_LINKS.blenderPlugin,
    icon: null,
    iconAlt: "",
  },
  {
    name: "TouchDesigner Sample",
    href: DOWNLOAD_LINKS.touchDesigner,
    icon: null,
    iconAlt: "",
  },
];

/* ─── MOVIN Studio Section ─── */
function MovinStudioSection() {
  return (
    <section className="px-6 pb-0 pt-16 md:pt-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Title */}
        <ScrollReveal>
          <h2 className="text-center font-heading text-[48px] font-bold leading-[1] tracking-[-0.02em] text-[#1a1a1a] md:text-[64px] lg:text-[80px]">
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
          <p className="mx-auto mt-12 max-w-[720px] text-center font-body text-base leading-[1.7] tracking-[0.01em] text-[#666] md:mt-16 md:text-lg">
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
              className={cn("gap-2.5 rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
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

        {/* Plugin Download Cards */}
        <ScrollReveal delay={0.3}>
          <div className="mx-auto mt-10 grid max-w-[600px] grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12">
            {PLUGINS.map((plugin) => (
              <Link
                key={plugin.name}
                href={plugin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[#e8e8e8] px-5 py-3 font-body text-[14px] text-[#1a1a1a] transition-all hover:border-[#1a1a1a] hover:shadow-sm"
              >
                {plugin.icon && (
                  <Image
                    src={plugin.icon}
                    alt={plugin.iconAlt}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                )}
                <span>Download {plugin.name} →</span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Sample Motion Data Section ─── */
function SampleDataSection() {
  return (
    <section className="bg-[#fafafa] px-6 pb-0 pt-32 md:pt-40">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Title */}
        <ScrollReveal>
          <h2 className="text-center font-heading text-[48px] font-bold leading-[1] tracking-[-0.02em] text-[#1a1a1a] md:text-[64px] lg:text-[80px]">
            Sample motion data
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-[720px] text-center font-body text-base leading-[1.7] tracking-[0.01em] text-[#666] md:text-lg">
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
            <div className="relative w-full overflow-hidden rounded-[16px]" style={{ height: "min(80vh, 900px)" }}>
              <iframe
                src="https://bvh-viewer-main.vercel.app/"
                title="BVH Motion Viewer"
                allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope; magnetometer"
                loading="lazy"
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
              <div className="relative w-full overflow-hidden rounded-[16px] shadow-lg" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/wlgI0-EoexQ?rel=0&controls=0&autoplay=1&mute=1&start=0"
                  title="Locomotion & Dynamic Actions"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
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
                className={cn("rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
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
              <div className="relative w-full overflow-hidden rounded-[16px] shadow-lg" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/0nGDJ55SPNM?rel=0&controls=0&autoplay=1&mute=1&start=0"
                  title="K-pop Dances"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Download Sample Data Button */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 flex justify-center pb-20">
              <Link
                href={DOWNLOAD_LINKS.sampleKpop}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
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
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center">
        {/* Ready to Get MOVIN? */}
        <ScrollReveal>
          <p className="text-center font-ui text-[24px] font-normal tracking-[-0.8px] text-[#1a1a1a] md:text-[40px]">
            Ready to Get MOVIN?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8">
            <Link
              href={`${SHOP_URL}/collections/all`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
            >
              Order Now
            </Link>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="my-16 h-px w-16 bg-[#e0e0e0] md:my-20" />

        {/* Free Demo */}
        <ScrollReveal>
          <p className="mx-auto max-w-[520px] text-center font-ui text-[24px] font-normal tracking-[-0.8px] text-[#1a1a1a] md:text-[40px]">
            Ask for a Free Demo Session, or Consult With an Expert for Your
            Use Case.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8">
            <Link
              href="/online-demo"
              className={cn("rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
            >
              Get a Free Demo
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Link
            href="mailto:contact@movin3d.com"
            className="mt-6 font-body text-lg font-normal leading-[140%] tracking-[0.02em] text-[#c04bf7] transition-opacity hover:opacity-70"
          >
            Contact a MOVIN Expert →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Disclaimer Section ─── */
function DisclaimerSection() {
  return (
    <section className="bg-[#fafafa] px-6 pb-12 pt-24 md:pt-32">
      <div className="mx-auto max-w-[720px]">
        <p className="font-body text-[11px] leading-[1.8] text-[rgb(145,145,145)]">
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

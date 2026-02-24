import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { STUDIO_FEATURES } from "@/data/purchase";
import { IMAGES } from "@/lib/constants";

export function StudioFeaturesSection() {
  return (
    <section className="flex flex-col items-center bg-[#1a1a1a] px-6 py-16 md:py-24">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <p className="text-center font-ui text-[13px] font-normal uppercase tracking-[0.15em] text-white/50">
            Companion Software
          </p>
          <h2 className="mt-3 text-center font-ui text-[28px] font-normal text-white md:text-[32px]">
            MOVIN Studio
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[640px] text-center font-body text-[16px] leading-[1.5] text-white/60 md:text-[18px]">
            Powerful software to preview, retarget, clean up, and export your
            motion capture data.
          </p>
        </ScrollReveal>

        {/* Studio image */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[16px]">
            <Image
              src={IMAGES.movinStudio}
              alt="MOVIN Studio"
              width={2560}
              height={1440}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 1080px"
            />
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STUDIO_FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.05 * (i + 1)}>
              <div className="rounded-[12px] bg-white/[0.06] p-5">
                <h3 className="font-ui text-[15px] font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-[1.5] text-white/50">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 px-8 py-2.5 font-ui text-[14px] font-light text-white transition-colors hover:bg-white/10"
            >
              Learn More about Studio
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

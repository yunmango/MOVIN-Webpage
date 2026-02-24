import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { IMAGES } from "@/lib/constants";
import { cn, BTN_PRIMARY } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1080px]">
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
              <p className="mt-8 font-body text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
                MOVIN&apos;s on-device AI fuses LiDAR point clouds and vision to
                turn raw capture into production-ready motion data. Built for
                entertainments, robotics, sports, and more.
              </p>
              <div className="mt-10">
                <Link
                  href="/online-demo"
                  className={cn("rounded-[8px] bg-[#1a1a1a] px-10 py-2.5 font-ui text-[16px] font-light text-white", BTN_PRIMARY)}
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

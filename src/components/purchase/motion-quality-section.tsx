import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { STATS } from "@/data/purchase";

export function MotionQualitySection() {
  return (
    <section className="flex flex-col items-center px-6 py-16 md:py-24">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Studio-Grade Mocap. Zero Markers.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[640px] text-center font-body text-[16px] leading-[1.5] text-[#666] md:text-[18px]">
            See how MOVIN TRACIN compares to industry-standard marker-based systems
            in a side-by-side accuracy test.
          </p>
        </ScrollReveal>

        {/* YouTube Embed */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[16px]">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/wlgI0-EoexQ?rel=0&controls=1&autoplay=0&mute=0"
                title="MOVIN TRACIN vs Vicon vs Xsens Comparison"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={0.15 + i * 0.05}>
              <div className="rounded-[12px] bg-[#f9f9f9] p-5 text-center md:p-6">
                <p className="font-ui text-[24px] font-light tracking-[-0.02em] text-[#1a1a1a] md:text-[32px]">
                  {stat.value}
                </p>
                <p className="mt-1 font-body text-[13px] text-[#888] md:text-[14px]">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

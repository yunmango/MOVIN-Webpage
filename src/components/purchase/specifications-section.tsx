import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SPECIFICATIONS } from "@/data/purchase";

export function SpecificationsSection() {
  return (
    <section className="flex flex-col items-center bg-[#f9f9f9] px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Technical Specifications
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SPECIFICATIONS.map((group, i) => (
            <ScrollReveal key={group.category} delay={0.05 * (i + 1)}>
              <div className="rounded-[16px] bg-white p-6">
                <h3 className="font-ui text-[16px] font-medium text-[#1a1a1a]">
                  {group.category}
                </h3>
                <div className="mt-4 space-y-3">
                  {group.specs.map((spec) => (
                    <div key={spec.label} className="flex items-start justify-between gap-3">
                      <span className="font-body text-[13px] text-[#888]">
                        {spec.label}
                      </span>
                      <span className="text-right font-ui text-[13px] font-medium text-[#1a1a1a]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

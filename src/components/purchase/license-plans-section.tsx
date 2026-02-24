import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { LICENSE_PLANS } from "@/data/purchase";
import { cn } from "@/lib/utils";

export function LicensePlansSection() {
  return (
    <section className="flex flex-col items-center px-6 py-16 md:py-24">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Studio License Plans
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-[640px] text-center font-body text-[16px] leading-[1.5] text-[#666] md:text-[18px]">
            Every TRACIN includes a Starter license. Upgrade for the full suite of
            professional tools.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-[720px] grid-cols-1 gap-6 md:grid-cols-2">
          {LICENSE_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={0.05 * (i + 1)}>
              <div
                className={cn(
                  "flex flex-col rounded-[16px] p-6 md:p-8",
                  plan.highlighted
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#f9f9f9] text-[#1a1a1a]"
                )}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 font-ui text-[11px] font-medium text-white/80">
                    RECOMMENDED
                  </span>
                )}
                <h3 className="font-ui text-[20px] font-medium">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-ui text-[32px] font-light tracking-[-0.02em]">
                    {plan.price}
                  </span>
                  <span
                    className={cn(
                      "font-body text-[14px]",
                      plan.highlighted ? "text-white/50" : "text-[#999]"
                    )}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-3 font-body text-[14px]",
                    plan.highlighted ? "text-white/60" : "text-[#666]"
                  )}
                >
                  {plan.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 flex-shrink-0",
                          plan.highlighted ? "text-white/60" : "text-[#1a1a1a]"
                        )}
                      />
                      <span
                        className={cn(
                          "font-body text-[14px]",
                          plan.highlighted ? "text-white/80" : "text-[#444]"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

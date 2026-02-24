import { Brain, Sun, User, Monitor } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { CAPABILITIES } from "@/data/purchase";

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6" />,
  sun: <Sun className="h-6 w-6" />,
  user: <User className="h-6 w-6" />,
  monitor: <Monitor className="h-6 w-6" />,
};

export function CapabilitiesSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Built for Real Production
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-[640px] text-center font-body text-[16px] leading-[1.5] text-[#666] md:text-[18px]">
            MOVIN TRACIN is designed to handle the demands of professional motion
            capture workflows.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={0.05 * (i + 1)}>
              <TiltCard maxDeg={4}>
                <div className="rounded-[16px] bg-[#f9f9f9] p-6 md:p-8 transition-shadow hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#1a1a1a] text-white">
                    {CAPABILITY_ICONS[cap.icon]}
                  </div>
                  <h3 className="mt-5 font-ui text-[18px] font-medium text-[#1a1a1a]">
                    {cap.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-[1.6] text-[#666]">
                    {cap.description}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

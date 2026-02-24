import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SETUP_STEPS, SETUP_REQUIREMENTS } from "@/data/purchase";

export function SetupSection() {
  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Setup in Under 3 Minutes
          </h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left: YouTube Video */}
          <ScrollReveal delay={0.05} className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-[16px]">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/t7ng0YRxkZ4?rel=0&controls=1"
                  title="MOVIN TRACIN Setup Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Steps */}
          <ScrollReveal delay={0.1} className="w-full lg:w-1/2">
            <div className="space-y-5">
              {SETUP_STEPS.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-ui text-[14px] font-medium text-white">
                    {step.step}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-ui text-[16px] font-medium text-[#1a1a1a]">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-body text-[14px] leading-[1.5] text-[#666]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Requirements */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 rounded-[16px] bg-[#f9f9f9] p-6 md:p-8">
            <h3 className="font-ui text-[18px] font-medium text-[#1a1a1a]">
              Setup Requirements
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SETUP_REQUIREMENTS.map((req) => (
                <div key={req.label}>
                  <p className="font-ui text-[13px] font-medium text-[#999]">
                    {req.label}
                  </p>
                  <p className="mt-1 font-body text-[14px] text-[#1a1a1a]">
                    {req.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function SimulatorSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-ui text-[24px] md:text-[40px] font-normal text-[rgb(26,26,26)] tracking-[-0.8px]">
            Plan your setup in 3D
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-body text-base md:text-xl text-[rgb(102,102,102)]">
            Use our 3D simulator to map your mocap zone, check lighting
            conditions, and preview what spaces work best before you deploy.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-10 overflow-hidden rounded-2xl">
          <iframe
            src="https://tracin-simulator-web.vercel.app/"
            className="h-[640px] md:h-[900px] w-full border-0"
            title="TRACIN 3D Simulator"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          />
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

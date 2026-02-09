import { HeroSection } from "@/components/home/hero-section";
import { TrustedBySection } from "@/components/home/trusted-by-section";
import { ShowcaseSection } from "@/components/home/showcase-section";
import { AiTechSection } from "@/components/home/ai-tech-section";
import { EcosystemSection } from "@/components/home/ecosystem-section";
import { UseCasesSection } from "@/components/home/use-cases-section";
import { SimulatorSection } from "@/components/home/simulator-section";
import { PartnersSection } from "@/components/home/partners-section";
import { MissionSection } from "@/components/home/mission-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ShowcaseSection />
      <AiTechSection />
      <EcosystemSection />
      <UseCasesSection />
      <SimulatorSection />
      <PartnersSection />
      <MissionSection />
    </>
  );
}

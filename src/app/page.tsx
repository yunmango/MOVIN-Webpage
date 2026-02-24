import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/hero-section";
import { TrustedBySection } from "@/components/home/trusted-by-section";
import { UseCasesSection } from "@/components/home/use-cases-section";
import { SimulatorSection } from "@/components/home/simulator-section";
import { PartnersSection } from "@/components/home/partners-section";
import { CTASection } from "@/components/home/cta-section";
import { MissionSection } from "@/components/home/mission-section";

const ShowcaseSection = dynamic(
  () =>
    import("@/components/home/showcase-section").then(
      (mod) => mod.ShowcaseSection
    ),
  { ssr: true }
);

const AiTechSection = dynamic(
  () =>
    import("@/components/home/ai-tech-section").then(
      (mod) => mod.AiTechSection
    ),
  { ssr: true }
);

const EcosystemSection = dynamic(
  () =>
    import("@/components/home/ecosystem-section").then(
      (mod) => mod.EcosystemSection
    ),
  { ssr: true }
);

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
      <CTASection />
      <MissionSection />
    </>
  );
}

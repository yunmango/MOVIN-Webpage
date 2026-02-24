import type { Metadata } from "next";
import { ProductHeroSection } from "@/components/purchase/product-hero-section";
import { PurchasePanel } from "@/components/purchase/purchase-panel";
import { PackageContentsSection } from "@/components/purchase/package-contents-section";
import { MotionQualitySection } from "@/components/purchase/motion-quality-section";
import { CapabilitiesSection } from "@/components/purchase/capabilities-section";
import { StudioFeaturesSection } from "@/components/purchase/studio-features-section";
import { LicensePlansSection } from "@/components/purchase/license-plans-section";
import { MotionExamplesSection } from "@/components/purchase/motion-examples-section";
import { SetupSection } from "@/components/purchase/setup-section";
import { SpecificationsSection } from "@/components/purchase/specifications-section";
import { FAQSection } from "@/components/purchase/faq-section";
import { MobilePurchaseBar } from "@/components/purchase/mobile-purchase-bar";

export const metadata: Metadata = {
  title: "Purchase MOVIN TRACIN - Markerless Motion Capture",
  description:
    "Purchase MOVIN TRACIN — real-time, markerless motion capture powered by on-device AI. Starting at $11,000 with free worldwide shipping.",
};

export default function PurchasePage() {
  return (
    <>
      <ProductHeroSection />
      <PurchasePanel />
      <PackageContentsSection />
      <MotionQualitySection />
      <CapabilitiesSection />
      <StudioFeaturesSection />
      <LicensePlansSection />
      <MotionExamplesSection />
      <SetupSection />
      <SpecificationsSection />
      <FAQSection />
      <MobilePurchaseBar />
    </>
  );
}

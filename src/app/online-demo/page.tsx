import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { BookingSection } from "@/components/online-demo/booking-section";

export const metadata: Metadata = {
  title: "Online Demo - MOVIN TRACIN",
  description:
    "See MOVIN TRACIN in action and schedule your free demo session. Effortless setup, no markers required.",
};

function HeroSection() {
  return (
    <section className="flex min-h-[60vh] items-center bg-black text-white md:min-h-[50vh]">
      <div className="mx-auto max-w-[1080px] px-6 py-32 md:py-40">
        <h1 className="max-w-[700px] font-ui text-[32px] font-normal leading-[1.3] md:text-[48px]">
          Effortless setup,
          <br />
          no markers required.
          <br />
          Discover how MOVIN simplifies motion capture for you.
        </h1>
        <p className="mt-6 max-w-[600px] font-body text-[16px] leading-[1.6] text-gray-300 md:text-[18px]">
          Check out our latest online demo video in advance to tailor the live
          session fully to your needs.
        </p>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-black px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <div className="relative w-full overflow-hidden rounded-[24px]" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/t7ng0YRxkZ4?rel=0&controls=0&autoplay=1&mute=1&start=417&modestbranding=1&playsinline=1"
              title="MOVIN TRACIN Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function OnlineDemoPage() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <BookingSection />
    </>
  );
}

"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";

function HeroSection() {
  return (
    <section className="flex h-[60vh] items-center justify-center bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-ui text-4xl font-normal md:text-6xl">
          Effortless setup,
          <br />
          no markers required.
        </h1>
        <p className="mt-6 font-body text-lg text-gray-400">
          See MOVIN TRACIN in action and schedule your free demo session.
        </p>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl bg-black">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="MOVIN TRACIN Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function BookingSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-ui text-3xl font-normal text-black md:text-4xl">
            Book a Demo Session
          </h2>
          <p className="mt-4 font-body text-base text-gray-600">
            Experience MOVIN TRACIN firsthand. Schedule a free 30-minute demo
            session with our team.
          </p>

          <form
            className="mt-8 space-y-4 text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-ui text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-sm focus:border-black focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block font-ui text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-sm focus:border-black focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-ui text-sm text-gray-600">
                Company / Organization
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-sm focus:border-black focus:outline-none"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="mb-1 block font-ui text-sm text-gray-600">
                Use Case
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-4 py-3 font-body text-sm focus:border-black focus:outline-none"
                rows={4}
                placeholder="Tell us about your intended use case..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-black px-8 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Request Demo
            </button>
          </form>
        </div>
      </ScrollReveal>
    </SectionWrapper>
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

import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

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
        <p className="mt-6 max-w-[600px] font-body text-[16px] leading-[1.6] text-gray-400 md:text-[18px]">
          Check out our latest online demo video in advance to tailor the live
          session fully to your needs.
        </p>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-black px-6 pb-16">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <div className="relative w-full overflow-hidden rounded-[24px]" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/t7ng0YRxkZ4?rel=0&controls=0&autoplay=1&mute=1&start=417"
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

function BookingSection() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <div className="mb-10">
            <h2 className="font-ui text-[24px] font-normal md:text-[28px]">
              Online Demo
            </h2>
            <p className="mt-3 font-body text-[16px] leading-[1.6] text-gray-400">
              Ready to see MOVIN Tracin and Studio in action?
              <br />
              Fill out the form below to schedule your online demo.
            </p>
          </div>
        </ScrollReveal>

        <form action="#" className="space-y-6">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Your Name */}
          <div>
            <label htmlFor="name" className="mb-2 block font-body text-[14px] font-normal text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            />
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position" className="mb-2 block font-body text-[14px] font-normal text-gray-300">
              Your position in your company / institution
            </label>
            <input
              type="text"
              id="position"
              name="position"
              required
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="mb-2 block font-body text-[14px] font-normal text-gray-300">
              Name of your company / institution
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1 block font-body text-[14px] font-normal text-gray-300">
              Email address
            </label>
            <p className="mb-2 font-body text-[12px] text-gray-500">
              * Please double check, we will contact directly to your email.
            </p>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="mb-2 block font-body text-[14px] font-normal text-gray-300">
              Country (Region)
            </label>
            <input
              type="text"
              id="country"
              name="country"
              required
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            />
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="mb-2 block font-body text-[14px] font-normal text-gray-300">
              Budget Expectations
            </label>
            <select
              id="budget"
              name="budget"
              required
              defaultValue=""
              className="w-full appearance-none rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            >
              <option value="" disabled>
                Select one...
              </option>
              <option value="~5000">~ $5,000</option>
              <option value="5000~10000">$5,000 ~ $10,000</option>
              <option value="10000~15000">$10,000 ~ $15,000</option>
              <option value="15000~">$15,000 ~</option>
            </select>
          </div>

          {/* Discovery Channel */}
          <div>
            <label htmlFor="discovery" className="mb-1 block font-body text-[14px] font-normal text-gray-300">
              Discovery Channel
            </label>
            <p className="mb-2 font-body text-[12px] text-gray-500">
              * Please let us know how you heard about us.
            </p>
            <input
              type="text"
              id="discovery"
              name="discovery"
              required
              placeholder="e.g., YouTube, LinkedIn, a colleague, events, Google, etc."
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] placeholder:text-[#999] outline-none"
            />
          </div>

          {/* Intended use */}
          <div>
            <label htmlFor="use-details" className="mb-1 block font-body text-[14px] font-normal text-gray-300">
              Intended use and details
            </label>
            <p className="mb-2 font-body text-[12px] text-gray-500">
              * Please describe your intended use of the product in detail.
              Include specifics such as the scope of motion capture required, the
              number of people involved, and any other relevant details.
            </p>
            <input
              type="text"
              id="use-details"
              name="use-details"
              required
              className="w-full rounded-[4px] bg-[#d9d9d9] px-4 py-3 font-body text-[14px] text-[#1a1a1a] outline-none"
            />
          </div>

          {/* Submit row */}
          <div className="flex flex-col items-start justify-between gap-6 pt-4 md:flex-row md:items-center">
            <p className="font-body text-[14px] leading-[1.6] text-gray-400">
              Thank you for requesting an online demo.
              <br />
              We will email you shortly to schedule the demo.
            </p>
            <button
              type="submit"
              className="shrink-0 rounded-full border border-[#c8ff00] bg-transparent px-8 py-2.5 font-ui text-[14px] font-normal text-[#c8ff00] transition-colors hover:bg-[#c8ff00] hover:text-[#1a1a1a]"
            >
              Submit
            </button>
          </div>
        </form>
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

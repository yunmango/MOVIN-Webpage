"use client";

import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const inputClasses =
  "w-full rounded-lg border border-[#333] bg-[#252525] px-4 py-3 font-body text-[15px] text-white outline-none transition-all duration-200 placeholder:text-[#666] focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00]/30";

export function BookingSection() {
  return (
    <section className="bg-[#1a1a1a] px-6 py-16 text-white md:py-28">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <div className="mb-14">
            <h2 className="font-ui text-[32px] font-normal md:text-[40px]">
              Online Demo
            </h2>
            <p className="mt-3 font-body text-[16px] leading-[1.6] text-[#999] md:text-[18px]">
              Ready to see MOVIN Tracin and Studio in action?
              <br />
              Fill out the form below to schedule your online demo.
            </p>
          </div>
        </ScrollReveal>

        <form action="#" className="space-y-8 md:space-y-10">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Your Name */}
          <ScrollReveal delay={0.05 * 0}>
            <div>
              <label htmlFor="name" className="mb-3 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={inputClasses}
              />
            </div>
          </ScrollReveal>

          {/* Position */}
          <ScrollReveal delay={0.05 * 1}>
            <div>
              <label htmlFor="position" className="mb-3 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Your position in your company / institution
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                className={inputClasses}
              />
            </div>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal delay={0.05 * 2}>
            <div>
              <label htmlFor="company" className="mb-3 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Name of your company / institution
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className={inputClasses}
              />
            </div>
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal delay={0.05 * 3}>
            <div>
              <label htmlFor="email" className="mb-1 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Email address
              </label>
              <p className="mb-3 font-body text-[13px] leading-[1.5] text-[#888]">
                * Please double check, we will contact directly to your email.
              </p>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={inputClasses}
              />
            </div>
          </ScrollReveal>

          {/* Country */}
          <ScrollReveal delay={0.05 * 4}>
            <div>
              <label htmlFor="country" className="mb-3 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Country (Region)
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                className={inputClasses}
              />
            </div>
          </ScrollReveal>

          {/* Budget */}
          <ScrollReveal delay={0.05 * 5}>
            <div>
              <label htmlFor="budget" className="mb-3 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Budget Expectations
              </label>
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className={`${inputClasses} cursor-pointer appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  <option value="~5000">~ $5,000</option>
                  <option value="5000~10000">$5,000 ~ $10,000</option>
                  <option value="10000~15000">$10,000 ~ $15,000</option>
                  <option value="15000~">$15,000 ~</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#666]" />
              </div>
            </div>
          </ScrollReveal>

          {/* Discovery Channel */}
          <ScrollReveal delay={0.05 * 6}>
            <div>
              <label htmlFor="discovery" className="mb-1 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Discovery Channel
              </label>
              <p className="mb-3 font-body text-[13px] leading-[1.5] text-[#888]">
                * Please let us know how you heard about us.
              </p>
              <input
                type="text"
                id="discovery"
                name="discovery"
                required
                placeholder="e.g., YouTube, LinkedIn, a colleague, events, Google, etc."
                className={inputClasses}
              />
            </div>
          </ScrollReveal>

          {/* Intended use */}
          <ScrollReveal delay={0.05 * 7}>
            <div>
              <label htmlFor="use-details" className="mb-1 block font-ui text-[16px] font-normal text-white md:text-[18px]">
                Intended use and details
              </label>
              <p className="mb-3 font-body text-[13px] leading-[1.5] text-[#888]">
                * Please describe your intended use of the product in detail.
                Include specifics such as the scope of motion capture required, the
                number of people involved, and any other relevant details.
              </p>
              <textarea
                id="use-details"
                name="use-details"
                required
                rows={4}
                className={`${inputClasses} min-h-[120px] resize-y`}
              />
            </div>
          </ScrollReveal>

          {/* Submit row */}
          <ScrollReveal delay={0.05 * 8}>
            <div className="flex flex-col items-start justify-between gap-6 pt-4 md:flex-row md:items-center">
              <p className="font-body text-[14px] leading-[1.6] text-gray-400">
                Thank you for requesting an online demo.
                <br />
                We will email you shortly to schedule the demo.
              </p>
              <button
                type="submit"
                className="w-full shrink-0 rounded-full bg-[#c8ff00] px-10 py-3 font-ui text-[14px] font-medium text-black transition-all active:scale-[0.98] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)] hover:brightness-110 md:w-auto"
              >
                Submit
              </button>
            </div>
          </ScrollReveal>
        </form>
      </div>
    </section>
  );
}

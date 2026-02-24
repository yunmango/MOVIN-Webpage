"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { cn, BTN_PRIMARY } from "@/lib/utils";

const inputClasses =
  "w-full rounded-[8px] border border-[#e8e8e8] bg-white px-4 py-3 font-body text-[15px] text-[#1a1a1a] outline-none transition-all duration-200 placeholder:text-[#999] focus:border-[#1a1a1a] focus:ring-2 focus:ring-[#1a1a1a]/10 focus:shadow-[0_0_0_3px_rgba(26,26,26,0.06)]";

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#fafafa] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal>
          <div className="mb-16 md:mb-20">
            <h2 className="font-ui text-[32px] font-normal text-[#1a1a1a] md:text-[40px]">
              Online Demo
            </h2>
            <p className="mt-3 font-body text-[16px] leading-[1.6] text-[#666] md:text-[18px]">
              Ready to see MOVIN Tracin and Studio in action?
              <br />
              Fill out the form below to schedule your online demo.
            </p>
          </div>
        </ScrollReveal>

        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
          </div>

          {/* Your Name */}
          <ScrollReveal delay={0.05 * 0}>
            <div>
              <label htmlFor="name" className="mb-3 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
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
              <label htmlFor="position" className="mb-3 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
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
              <label htmlFor="company" className="mb-3 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
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
              <label htmlFor="email" className="mb-1 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
                Email address
              </label>
              <p className="mb-3 font-body text-[13px] leading-[1.5] text-[#999]">
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
              <label htmlFor="country" className="mb-3 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
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
              <label htmlFor="budget" className="mb-3 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
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
              <label htmlFor="discovery" className="mb-1 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
                Discovery Channel
              </label>
              <p className="mb-3 font-body text-[13px] leading-[1.5] text-[#999]">
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
              <label htmlFor="use-details" className="mb-1 block font-ui text-[16px] font-normal text-[#1a1a1a] md:text-[18px]">
                Intended use and details
              </label>
              <p className="mb-3 font-body text-[13px] leading-[1.5] text-[#999]">
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
              <p className="font-body text-[14px] leading-[1.6] text-[#999]">
                Thank you for requesting an online demo.
                <br />
                We will email you shortly to schedule the demo.
              </p>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "w-full shrink-0 rounded-[8px] bg-[#1a1a1a] px-10 py-3 font-ui text-[14px] font-medium text-white md:w-auto disabled:opacity-70",
                  BTN_PRIMARY
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <LoadingSpinner className="h-4 w-4" />
                    Submitting...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Submitted!
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </ScrollReveal>
        </form>

        {isSubmitted && (
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 rounded-[12px] bg-[#e8f5e9] px-6 py-4 text-center"
            >
              <p className="font-ui text-[15px] font-medium text-[#2e7d32]">
                Thank you! Your demo request has been submitted successfully.
              </p>
              <p className="mt-1 font-body text-[13px] text-[#388e3c]">
                We&apos;ll contact you shortly to schedule your session.
              </p>
            </m.div>
          </LazyMotion>
        )}
      </div>
    </section>
  );
}

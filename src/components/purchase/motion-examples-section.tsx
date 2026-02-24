"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { WELL_SUPPORTED_MOTIONS, CHALLENGING_MOTIONS } from "@/data/purchase";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Tab = "supported" | "challenging";

export function MotionExamplesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("supported");

  const motions =
    activeTab === "supported" ? WELL_SUPPORTED_MOTIONS : CHALLENGING_MOTIONS;

  return (
    <section className="flex flex-col items-center bg-[#f9f9f9] px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            Motion Support
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-[640px] text-center font-body text-[16px] leading-[1.5] text-[#666] md:text-[18px]">
            Understanding what MOVIN TRACIN handles best — and where to plan
            accordingly.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-[10px] bg-white p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("supported")}
                className={cn(
                  "rounded-[8px] px-5 py-2 font-ui text-[14px] font-medium transition-colors",
                  activeTab === "supported"
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#666] hover:text-[#1a1a1a]"
                )}
              >
                Well Supported
              </button>
              <button
                onClick={() => setActiveTab("challenging")}
                className={cn(
                  "rounded-[8px] px-5 py-2 font-ui text-[14px] font-medium transition-colors",
                  activeTab === "challenging"
                    ? "bg-[#1a1a1a] text-white"
                    : "text-[#666] hover:text-[#1a1a1a]"
                )}
              >
                Challenging
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {motions.map((motion, i) => (
            <div
              key={motion.title}
              className="rounded-[12px] bg-white p-5"
              style={{
                animation: `fadeInUp 0.4s ease-out ${i * 0.05}s both`,
              }}
            >
              <div className="flex items-start gap-3">
                {activeTab === "supported" ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2e7d32]" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#f59e0b]" />
                )}
                <div>
                  <h3 className="font-ui text-[15px] font-medium text-[#1a1a1a]">
                    {motion.title}
                  </h3>
                  <p className="mt-1 font-body text-[13px] leading-[1.5] text-[#888]">
                    {motion.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

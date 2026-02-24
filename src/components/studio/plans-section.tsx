"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface PlanFeature {
  category: string;
  items: string[];
}

function PlanCard({
  title,
  features,
}: {
  title: string;
  features: PlanFeature[];
}) {
  return (
    <div className="rounded-2xl bg-[#2a2a2a] p-6">
      <h3 className="mb-6 font-body text-lg font-bold text-white">{title}</h3>
      <div className="space-y-5">
        {features.map((feature, i) => (
          <div key={i} className="border-t border-gray-700 pt-4">
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-wider text-gray-400">
              {feature.category}
            </p>
            <ul className="space-y-1">
              {feature.items.map((item, j) => {
                const isFuture =
                  item.includes("2026") || item.includes("Beta");
                return (
                  <li
                    key={j}
                    className={`font-body text-sm ${
                      isFuture ? "text-gray-500" : "text-gray-200"
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const STARTER_FEATURES: PlanFeature[] = [
  {
    category: "Live Update",
    items: ["Maintenance updates", "Access to new features"],
  },
  {
    category: "Log-in",
    items: ["Offline license timeout not supported"],
  },
  {
    category: "Capture",
    items: [
      "3 second AI calibration",
      "Markerless full-body mocap",
      "Night mode (low-light) mocap",
      "30 min/month mocap recording",
      "30 min limited recording duration",
      "Export motion to .fbx, .bvh format",
      "Single-user operation only",
    ],
  },
  {
    category: "Hands capture",
    items: [
      "Fingers mocap by MOVIN (Beta)",
      "Wrist mocap by MOVIN (Beta)",
      "Hands mocap by third-party gloves",
    ],
  },
  {
    category: "Unlimited Live Streaming",
    items: [
      "Warudo",
      "VRChat",
      "Meligo",
      "Unity",
      "Unreal Engine",
      "Blender",
      "Notch",
      "TouchDesigner",
      "ROS (2026 Q1)",
      "Isaac Sim (2026 Q1)",
      "OSC (Beta)",
    ],
  },
  {
    category: "Retargeting",
    items: [
      "Import custom character",
      "Control actor offset",
      "Full-body & Hands FK retargeting",
      "Advanced IK retargeting",
    ],
  },
  {
    category: "Real-Time AI Cleanup",
    items: [
      "Foot sliding removal",
      "Jitter (noise) removal",
      "Ground penetration removal",
    ],
  },
  {
    category: "Editing",
    items: [
      "Trimming",
      "Motion clip post-processing (2026 H1)",
      "Motion clip frame editing (2026 H1)",
      "Motion generation (2026 H2)",
      "Motion mixing (2026 H2)",
    ],
  },
  {
    category: "Objects",
    items: ["Object masking (2026 H1)"],
  },
];

const UNLIMITED_FEATURES: PlanFeature[] = [
  {
    category: "Live Update",
    items: ["Maintenance updates", "Access to new features"],
  },
  {
    category: "Log-in",
    items: ["Offline license timeout lasts for 24 hours"],
  },
  {
    category: "Capture",
    items: [
      "3 second AI calibration",
      "Markerless full-body mocap",
      "Night mode (low-light) mocap",
      "Unlimited mocap recording",
      "Unlimited recording duration",
      "Export motion to .fbx, .bvh format",
      "Single-user operation only",
    ],
  },
  {
    category: "Hands capture",
    items: [
      "Fingers mocap by MOVIN (Beta)",
      "Wrist mocap by MOVIN (Beta)",
      "Hands mocap by third-party gloves",
    ],
  },
  {
    category: "Unlimited Live Streaming",
    items: [
      "Warudo",
      "VRChat",
      "Meligo",
      "Unity",
      "Unreal Engine",
      "Blender",
      "Notch",
      "TouchDesigner",
      "ROS (2026 Q1)",
      "Isaac Sim (2026 Q1)",
      "OSC (Beta)",
    ],
  },
  {
    category: "Retargeting",
    items: [
      "Import custom character",
      "Control actor offset",
      "Full-body & Hands FK retargeting",
      "Advanced IK retargeting",
    ],
  },
  {
    category: "Real-Time AI Cleanup",
    items: [
      "Foot sliding removal",
      "Jitter (noise) removal",
      "Ground penetration removal",
    ],
  },
  {
    category: "Editing",
    items: [
      "Trimming",
      "Motion clip post-processing (2026 H1)",
      "Motion clip frame editing (2026 H1)",
      "Motion generation (2026 H2)",
      "Motion mixing (2026 H2)",
    ],
  },
  {
    category: "Objects",
    items: ["Object masking (2026 H1)"],
  },
];

const PERPETUAL_FEATURES: PlanFeature[] = [
  {
    category: "Capture",
    items: [
      "3 second AI calibration",
      "Markerless full-body tracking",
      "Unlimited MoCap recording",
      "Unlimited recording duration",
      "Export motion to .fbx, .bvh format",
      "Single-user operation only",
    ],
  },
  {
    category: "Retargeting",
    items: [
      "Import custom character",
      "Custom character FK retargeting",
    ],
  },
  {
    category: "Real-Time AI Cleanup",
    items: [
      "Foot sliding removal",
      "Jitter (noise) removal",
      "Ground penetration removal",
    ],
  },
  {
    category: "Live Streaming",
    items: ["Warudo", "VR Chat", "Unity", "Unreal Engine", "Notch"],
  },
  {
    category: "Editing",
    items: ["Trimming"],
  },
  {
    category: "Additional Features",
    items: [
      "Finger tracking by 3rd party gloves (ROKOKO, MANUS)",
    ],
  },
];

export function PlansSection() {
  const [activeTab, setActiveTab] = useState<"license" | "perpetual">(
    "license"
  );

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-body text-[64px] font-bold uppercase tracking-wider text-[#1a1a1a] md:text-[80px]">
              PLANS
            </h2>
            <p className="mt-4 font-body text-[16px] uppercase tracking-[3px] text-gray-400">
              UNLIMITED ACCESS. UNLIMITED YOU.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-[#1a1a1a]">
            <div className="flex">
              <button
                onClick={() => setActiveTab("license")}
                className={`flex-1 py-4 text-center font-body text-base font-medium transition-colors ${
                  activeTab === "license"
                    ? "bg-[#333] text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                License Plans
              </button>
              <button
                onClick={() => setActiveTab("perpetual")}
                className={`flex-1 py-4 text-center font-body text-base font-medium transition-colors ${
                  activeTab === "perpetual"
                    ? "bg-[#333] text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                Perpetual Packages
              </button>
            </div>

            {/* License Plans Tab */}
            {activeTab === "license" && (
              <div className="p-6 md:p-8">
                <p className="mb-8 text-center font-body text-sm leading-relaxed text-gray-400">
                  License Plan is a time-based access that provides the latest
                  features and updates. Simply purchase the license whenever you
                  need more, giving you full flexibility.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <PlanCard
                    title="Starter (Free)"
                    features={STARTER_FEATURES}
                  />
                  <PlanCard
                    title="Unlimited (Monthly / Yearly)"
                    features={UNLIMITED_FEATURES}
                  />
                </div>
              </div>
            )}

            {/* Perpetual Package Tab */}
            {activeTab === "perpetual" && (
              <div className="p-6 md:p-8">
                <div className="mb-8 text-center">
                  <p className="font-body text-sm leading-relaxed text-gray-400">
                    Perpetual Package is a one-time software purchase that
                    bundles stable, production-ready features into a single
                    package.
                  </p>
                  <p className="mt-2 font-body text-xs text-gray-500">
                    *Ongoing updates and future improvements will be available
                    through optional upgrade packages.
                  </p>
                </div>
                <div className="mx-auto max-w-lg">
                  <PlanCard
                    title="Perpetual Package V1 Key Features"
                    features={PERPETUAL_FEATURES}
                  />
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

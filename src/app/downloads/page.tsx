"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Download } from "lucide-react";

const PLUGINS = [
  {
    name: "Unreal Engine Plugin",
    description: "Real-time streaming into Unreal Engine 5",
    version: "v1.2.0",
  },
  {
    name: "Unity Plugin",
    description: "Real-time streaming into Unity",
    version: "v1.1.0",
  },
  {
    name: "Blender Add-on",
    description: "Import and retarget motion data in Blender",
    version: "v1.0.0",
  },
  {
    name: "Notch Plugin",
    description: "Real-time motion data for Notch",
    version: "v1.0.0",
  },
  {
    name: "TouchDesigner Plugin",
    description: "MOVIN integration for TouchDesigner",
    version: "v1.0.0",
  },
];

const RESOURCES = [
  {
    name: "Sample FBX Data",
    description: "Example motion capture data in FBX format",
  },
  {
    name: "Sample BVH Data",
    description: "Example motion capture data in BVH format",
  },
];

function HeroSection() {
  return (
    <section className="flex h-[60vh] items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="font-ui text-5xl font-bold md:text-7xl">DOWNLOADS</h1>
        <p className="mt-4 font-body text-lg text-gray-400">
          Software, plugins, and resources for your MOVIN workflow.
        </p>
      </div>
    </section>
  );
}

function StudioDownloadSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <div className="rounded-2xl border border-gray-200 p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-ui text-2xl font-semibold text-black">
                MOVIN Studio
              </h2>
              <p className="mt-2 font-body text-base text-gray-600">
                The companion software for MOVIN TRACIN. Configure, calibrate,
                record, and export.
              </p>
              <p className="mt-1 font-body text-sm text-gray-400">
                Windows only
              </p>
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-black px-8 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              <Download className="h-4 w-4" />
              Download
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function PluginsSection() {
  return (
    <SectionWrapper className="bg-gray-50">
      <ScrollReveal>
        <h2 className="font-ui text-2xl font-normal text-black md:text-3xl">
          Plugins
        </h2>
      </ScrollReveal>

      <div className="mt-8 space-y-4">
        {PLUGINS.map((plugin, i) => (
          <ScrollReveal key={plugin.name} delay={i * 0.05}>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6">
              <div>
                <h3 className="font-ui text-base font-semibold text-black">
                  {plugin.name}
                </h3>
                <p className="mt-1 font-body text-sm text-gray-500">
                  {plugin.description}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-body text-xs text-gray-400">
                  {plugin.version}
                </span>
                <Link
                  href="#"
                  className="rounded-full border border-gray-300 px-4 py-2 font-ui text-xs font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Download
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ResourcesSection() {
  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <h2 className="font-ui text-2xl font-normal text-black md:text-3xl">
          Sample Data
        </h2>
      </ScrollReveal>

      <div className="mt-8 space-y-4">
        {RESOURCES.map((resource, i) => (
          <ScrollReveal key={resource.name} delay={i * 0.05}>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-6">
              <div>
                <h3 className="font-ui text-base font-semibold text-black">
                  {resource.name}
                </h3>
                <p className="mt-1 font-body text-sm text-gray-500">
                  {resource.description}
                </p>
              </div>
              <Link
                href="#"
                className="rounded-full border border-gray-300 px-4 py-2 font-ui text-xs font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                Download
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default function DownloadsPage() {
  return (
    <>
      <HeroSection />
      <StudioDownloadSection />
      <PluginsSection />
      <ResourcesSection />
    </>
  );
}

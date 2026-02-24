"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Link from "next/link";
import { IMAGES } from "@/lib/constants";
import { useTilt } from "@/hooks/use-tilt";

const HARDWARE_PRODUCTS = [
  {
    name: "TRACIN",
    description:
      "MOVIN delivers real-time markerless motion capture using a single device powered by LiDAR and AI. Setup takes just minutes, but results look astonishingly polished.",
    href: "/tracin",
    image: IMAGES.tracin,
    available: true,
  },
  {
    name: "TRACIN Lite",
    description:
      "A compact, affordable motion console for home. Designed to bring real-time motion capture to everyday spaces with a lightweight, consumer-friendly form factor.",
    href: "#",
    badge: "Coming Soon",
    image: IMAGES.tracInLite,
    available: false,
  },
  {
    name: "TRACIN Multi",
    description:
      "Multi-person tracking for large spaces and live shows. Capture multiple performers at once in wide-area environments. A customizable B2B solution tailored to each deployment.",
    href: "#",
    badge: "Coming Soon",
    image: IMAGES.tracInMulti,
    available: false,
  },
];

const SOFTWARE_PRODUCTS = [
  {
    name: "Studio",
    description:
      "A dedicated application built for TRACIN. Set up in 3 minutes, and calibrate in 3 seconds.",
    href: "/studio",
    badge: undefined as string | undefined,
    image: IMAGES.movinStudio,
    available: true,
  },
];

export function EcosystemSection() {
  const [activeTab, setActiveTab] = useState<"hardware" | "software">(
    "hardware"
  );

  const products =
    activeTab === "hardware" ? HARDWARE_PRODUCTS : SOFTWARE_PRODUCTS;

  return (
    <SectionWrapper className="bg-white">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="font-ui text-[24px] md:text-[40px] font-normal text-[rgb(26,26,26)] tracking-[-0.8px]">
            The MOVIN Ecosystem
          </h2>
          <p className="mx-auto mt-6 md:mt-8 max-w-3xl font-body text-base md:text-xl text-[rgb(102,102,102)]">
            From flagship performance capture to multi-person tracking and an
            upcoming home motion console, MOVIN offers a complete motion capture
            system built for real-world deployment.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-full md:max-w-[600px] gap-1.5 rounded-3xl bg-white p-1.5 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
            <button
              onClick={() => setActiveTab("hardware")}
              className={`flex-1 rounded-2xl px-4 py-2.5 md:px-8 md:py-3 font-ui text-sm font-medium transition-colors ${
                activeTab === "hardware"
                  ? "bg-gray-100 text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Hardware
            </button>
            <button
              onClick={() => setActiveTab("software")}
              className={`flex-1 rounded-2xl px-4 py-2.5 md:px-8 md:py-3 font-ui text-sm font-medium transition-colors ${
                activeTab === "software"
                  ? "bg-gray-100 text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Software
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className={`mt-8 flex flex-col gap-4 md:flex-row ${activeTab === "software" ? "md:justify-center" : ""}`}>
          {products.map((product) => (
            <EcosystemCard
              key={product.name}
              product={product}
              isSoftware={activeTab === "software"}
            />
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}

function EcosystemCard({
  product,
  isSoftware,
}: {
  product: (typeof HARDWARE_PRODUCTS)[number];
  isSoftware: boolean;
}) {
  const { wrapperRef, contentRef, handleMouseMove, handleMouseLeave } =
    useTilt();

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${isSoftware ? "w-full md:w-[600px]" : "w-full md:flex-1"}`}
      style={{ perspective: "2000px" }}
    >
      <div
        ref={contentRef}
        className="group relative flex h-[340px] flex-col overflow-hidden rounded-3xl bg-cover bg-center p-6 will-change-transform"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Title with hover animation */}
        <div className="relative z-10 flex items-center gap-2 transition-transform duration-200 ease-out group-hover:translate-x-4 group-hover:scale-[1.2] origin-left">
          <h3 className="font-ui text-2xl font-semibold text-white">
            {product.name}
          </h3>
          {product.available && (
            <svg
              viewBox="0 0 15 15"
              className="h-4 w-4 text-white"
              fill="currentColor"
            >
              <path d="M9.95 7.5a.45.45 0 0 1-.132.319l-3 3a.45.45 0 0 1-.636-.637L8.863 7.5L6.182 4.82l-.058-.07a.451.451 0 0 1 .624-.625l.07.058l3 3a.45.45 0 0 1 .132.318" />
            </svg>
          )}
        </div>

        {product.badge && (
          <span className="relative z-10 mt-1 inline-block w-fit rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white/80">
            {product.badge}
          </span>
        )}

        <p className="relative z-10 mt-3 font-body text-sm leading-relaxed text-white/80 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 max-w-[540px]">
          {product.description}
        </p>

        {product.available && product.href !== "#" && (
          <Link
            href={product.href}
            className="absolute inset-0 z-20"
            aria-label={`Learn more about ${product.name}`}
          />
        )}
      </div>
    </div>
  );
}

"use client";

import { LogoMarquee } from "@/components/shared/logo-marquee";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import {
  TrustedLogo0,
  TrustedLogo1,
  TrustedLogo2,
  TrustedLogo3,
  TrustedLogo4,
  TrustedLogo5,
  TrustedLogo6,
} from "@/components/icons/trusted-by-logos";

const LOGOS = [
  { key: "logo0", Component: TrustedLogo0, className: "h-8 w-auto text-gray-400" },
  { key: "logo1", Component: TrustedLogo1, className: "h-10 w-auto text-gray-400" },
  { key: "logo2", Component: TrustedLogo2, className: "h-8 w-auto text-gray-400" },
  { key: "logo3", Component: TrustedLogo3, className: "h-8 w-auto text-gray-400" },
  { key: "logo4", Component: TrustedLogo4, className: "h-6 w-auto text-gray-400" },
  { key: "logo5", Component: TrustedLogo5, className: "h-10 w-auto text-gray-400" },
  { key: "logo6", Component: TrustedLogo6, className: "h-10 w-auto text-gray-400" },
];

export function TrustedBySection() {
  return (
    <SectionWrapper className="bg-white py-12 md:py-16" fullWidth>
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="mb-8 font-body text-sm font-medium text-gray-500">
          Trusted by
        </p>
      </div>
      <LogoMarquee speed={40}>
        {LOGOS.map(({ key, Component, className }) => (
          <Component key={key} className={className} />
        ))}
      </LogoMarquee>
    </SectionWrapper>
  );
}

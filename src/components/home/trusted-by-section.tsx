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
  { key: "logo0", Component: TrustedLogo0, className: "h-9 w-auto text-[rgb(102,102,102)]" },
  { key: "logo1", Component: TrustedLogo1, className: "h-12 w-auto text-[rgb(102,102,102)]" },
  { key: "logo2", Component: TrustedLogo2, className: "h-9 w-auto text-[rgb(102,102,102)]" },
  { key: "logo3", Component: TrustedLogo3, className: "h-9 w-auto text-[rgb(102,102,102)]" },
  { key: "logo4", Component: TrustedLogo4, className: "h-6 w-auto text-[rgb(102,102,102)]" },
  { key: "logo5", Component: TrustedLogo5, className: "h-12 w-auto text-[rgb(102,102,102)]" },
  { key: "logo6", Component: TrustedLogo6, className: "h-12 w-auto text-[rgb(102,102,102)]" },
];

export function TrustedBySection() {
  return (
    <SectionWrapper className="bg-white py-16 md:py-20" fullWidth>
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <p className="mb-8 font-ui text-xl font-normal text-[rgb(102,102,102)]">
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

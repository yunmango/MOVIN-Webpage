import { Package, Puzzle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PACKAGE_INCLUDED, PACKAGE_ACCESSORIES } from "@/data/purchase";

export function PackageContentsSection() {
  return (
    <section className="flex flex-col items-center bg-[#f9f9f9] px-6 py-16 md:py-24">
      <div className="w-full max-w-[1080px]">
        <ScrollReveal>
          <h2 className="text-center font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
            What&apos;s in the Box
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Included */}
          <ScrollReveal delay={0.05}>
            <div className="rounded-[16px] bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#1a1a1a] text-white">
                  <Package className="h-5 w-5" />
                </div>
                <h3 className="font-ui text-[18px] font-medium text-[#1a1a1a]">
                  Included
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {PACKAGE_INCLUDED.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1a1a1a]" />
                    <div>
                      <p className="font-ui text-[14px] font-medium text-[#1a1a1a]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 font-body text-[13px] text-[#888]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Accessories */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-[16px] bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-white text-[#1a1a1a] ring-1 ring-[#e5e5e5]">
                  <Puzzle className="h-5 w-5" />
                </div>
                <h3 className="font-ui text-[18px] font-medium text-[#1a1a1a]">
                  Optional Accessories
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {PACKAGE_ACCESSORIES.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ccc]" />
                    <div>
                      <p className="font-ui text-[14px] font-medium text-[#1a1a1a]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 font-body text-[13px] text-[#888]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-body text-[13px] text-[#999]">
                Available separately at checkout
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

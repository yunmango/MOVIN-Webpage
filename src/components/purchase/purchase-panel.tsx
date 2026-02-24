"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Check, Truck, Shield } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PURCHASE_PRICE, ADDONS, HIGHLIGHTS, SHIPPING_INFO, WARRANTY_INFO } from "@/data/purchase";
import { SHOP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  cpu: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
  brain: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5.5 4 7.5L12 22l3-5.5c2-2 4-4.5 4-7.5a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  scan: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  timer: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5M10 2h4" />
    </svg>
  ),
};

export function PurchasePanel() {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const addonTotal = ADDONS.filter((a) => selectedAddons.includes(a.id)).reduce(
    (sum, a) => sum + a.price,
    0
  );
  const totalPrice = PURCHASE_PRICE.sale * quantity + addonTotal;

  return (
    <section className="flex flex-col items-center px-6 py-20 md:py-28">
      <div className="w-full max-w-[1080px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left: Highlights + Promos */}
          <div className="w-full lg:w-[55%]">
            <ScrollReveal>
              <h2 className="font-ui text-[28px] font-normal text-[#1a1a1a] md:text-[32px]">
                Why MOVIN TRACIN
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.05 * (i + 1)}>
                  <div className="flex gap-4 rounded-[12px] bg-[#f9f9f9] p-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#1a1a1a] text-white">
                      {HIGHLIGHT_ICONS[item.icon]}
                    </div>
                    <div>
                      <h3 className="font-ui text-[15px] font-medium text-[#1a1a1a]">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-body text-[13px] leading-[1.5] text-[#888]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Promo Badges */}
            <ScrollReveal delay={0.3}>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 rounded-[10px] border border-[#e5e5e5] px-5 py-3.5">
                  <span className="flex h-6 items-center rounded-full bg-[#1a1a1a] px-3 font-ui text-[11px] font-medium text-white">
                    INDIE
                  </span>
                  <p className="font-body text-[14px] text-[#666]">
                    Welcome Indies discount available —{" "}
                    <span className="font-medium text-[#1a1a1a]">contact sales</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-[10px] border border-[#e5e5e5] px-5 py-3.5">
                  <span className="flex h-6 items-center rounded-full bg-[#1a1a1a] px-3 font-ui text-[11px] font-medium text-white">
                    EDU
                  </span>
                  <p className="font-body text-[14px] text-[#666]">
                    Special educational pricing for institutions & students
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Sticky Purchase Card */}
          <div className="w-full lg:w-[45%]">
            <div className="lg:sticky lg:top-[88px]">
              <ScrollReveal delay={0.1}>
                <div className="rounded-[16px] border border-[#e5e5e5] bg-white p-6 shadow-sm md:p-8">
                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-ui text-[36px] font-light tracking-[-0.02em] text-[#1a1a1a]">
                      ${PURCHASE_PRICE.sale.toLocaleString()}
                    </span>
                    <span className="font-body text-[16px] text-[#999] line-through">
                      ${PURCHASE_PRICE.original.toLocaleString()}
                    </span>
                    <span className="rounded-full bg-[#e8f5e9] px-2.5 py-0.5 font-ui text-[12px] font-medium text-[#2e7d32]">
                      Save ${(PURCHASE_PRICE.original - PURCHASE_PRICE.sale).toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="mt-6">
                    <label className="font-ui text-[13px] font-medium text-[#666]">
                      Quantity
                    </label>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#e5e5e5] text-[#666] transition-colors hover:bg-[#f5f5f5]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-ui text-[16px] font-medium text-[#1a1a1a]">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => Math.min(5, q + 1))}
                        className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[#e5e5e5] text-[#666] transition-colors hover:bg-[#f5f5f5]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="mt-6">
                    <label className="font-ui text-[13px] font-medium text-[#666]">
                      Add-ons
                    </label>
                    <div className="mt-2 space-y-2">
                      {ADDONS.map((addon) => (
                        <button
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-[10px] border px-4 py-3 text-left transition-colors",
                            selectedAddons.includes(addon.id)
                              ? "border-[#1a1a1a] bg-[#fafafa]"
                              : "border-[#e5e5e5] hover:border-[#ccc]"
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[4px] border transition-colors",
                              selectedAddons.includes(addon.id)
                                ? "border-[#1a1a1a] bg-[#1a1a1a]"
                                : "border-[#ccc]"
                            )}
                          >
                            {selectedAddons.includes(addon.id) && (
                              <Check className="h-3 w-3 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <span className="font-body text-[14px] text-[#1a1a1a]">
                              {addon.label}
                            </span>
                          </div>
                          <span className="font-ui text-[14px] font-medium text-[#1a1a1a]">
                            +${addon.price.toLocaleString()}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Total + Buy */}
                  <div className="mt-6 border-t border-[#e5e5e5] pt-6">
                    <div className="flex items-baseline justify-between">
                      <span className="font-ui text-[14px] text-[#666]">Total</span>
                      <span className="font-ui text-[28px] font-light tracking-[-0.02em] text-[#1a1a1a]">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <Link
                      href={`${SHOP_URL}/products/movin-tracin`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#1a1a1a] font-ui text-[16px] font-medium text-white transition-opacity hover:opacity-85"
                    >
                      Buy Now
                    </Link>
                    <p className="mt-3 text-center font-body text-[12px] text-[#999]">
                      Redirects to secure Shopify checkout
                    </p>
                  </div>

                  {/* Shipping / Warranty Accordion */}
                  <div className="mt-4 border-t border-[#e5e5e5] pt-2">
                    <Accordion type="multiple">
                      <AccordionItem value="shipping" className="border-b border-[#f0f0f0]">
                        <AccordionTrigger className="py-3 font-ui text-[14px] font-medium text-[#1a1a1a] hover:no-underline">
                          <span className="flex items-center gap-2">
                            <Truck className="h-4 w-4 text-[#888]" />
                            Shipping
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1.5">
                            {SHIPPING_INFO.map((item) => (
                              <li
                                key={item}
                                className="font-body text-[13px] leading-[1.5] text-[#666]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="warranty" className="border-b-0">
                        <AccordionTrigger className="py-3 font-ui text-[14px] font-medium text-[#1a1a1a] hover:no-underline">
                          <span className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-[#888]" />
                            Warranty
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1.5">
                            {WARRANTY_INFO.map((item) => (
                              <li
                                key={item}
                                className="font-body text-[13px] leading-[1.5] text-[#666]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

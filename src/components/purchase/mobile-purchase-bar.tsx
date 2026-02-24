"use client";

import Link from "next/link";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { PURCHASE_PRICE } from "@/data/purchase";
import { SHOP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobilePurchaseBar() {
  const scrolled = useScrollPosition(400);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-[#e5e5e5] bg-white/95 px-5 py-3 backdrop-blur-md transition-transform duration-300 lg:hidden",
        scrolled ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-ui text-[11px] font-medium uppercase tracking-[0.05em] text-[#999]">
            MOVIN TRACIN
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-ui text-[20px] font-light text-[#1a1a1a]">
              ${PURCHASE_PRICE.sale.toLocaleString()}
            </span>
            <span className="font-body text-[13px] text-[#999] line-through">
              ${PURCHASE_PRICE.original.toLocaleString()}
            </span>
          </div>
        </div>
        <Link
          href={`${SHOP_URL}/products/movin-tracin`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[44px] items-center rounded-[10px] bg-[#1a1a1a] px-7 font-ui text-[15px] font-medium text-white transition-opacity hover:opacity-85"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}

"use client";

import { memo } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_ITEMS, NAV_CTA } from "@/data/navigation";
import { MovinLogo } from "@/components/icons/movin-logo";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  scrolled: boolean;
}

export const MobileMenu = memo(function MobileMenu({ scrolled }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={cn(
            "p-2 transition-colors",
            scrolled ? "text-black" : "text-white"
          )}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white p-6">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="mb-8">
          <MovinLogo className="h-5 w-auto text-black" />
        </div>
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="font-ui text-lg font-medium text-black hover:opacity-70"
            >
              {item.label}
            </Link>
          ))}
          <hr className="my-4 border-gray-200" />
          <Link
            href={NAV_CTA.demo.href}
            className="rounded-full border border-black px-5 py-2.5 text-center font-ui text-sm font-medium text-black hover:bg-black hover:text-white"
          >
            {NAV_CTA.demo.label}
          </Link>
          <Link
            href={NAV_CTA.purchase.href}
            className="rounded-full bg-black px-5 py-2.5 text-center font-ui text-sm font-medium text-white hover:bg-gray-800"
          >
            {NAV_CTA.purchase.label}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
});

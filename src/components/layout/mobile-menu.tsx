"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
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

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export const MobileMenu = memo(function MobileMenu({ scrolled }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

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
        <LazyMotion features={domAnimation} strict>
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, i) => (
              <m.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "font-ui text-lg font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              </m.div>
            ))}
            <m.div
              custom={NAV_ITEMS.length}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <hr className="my-4 border-gray-200" />
            </m.div>
            <m.div
              custom={NAV_ITEMS.length + 1}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <Link
                href={NAV_CTA.demo.href}
                className="rounded-full border border-black px-5 py-2.5 text-center font-ui text-sm font-medium text-black transition-all duration-200 hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-md block"
              >
                {NAV_CTA.demo.label}
              </Link>
            </m.div>
            <m.div
              custom={NAV_ITEMS.length + 2}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <Link
                href={NAV_CTA.purchase.href}
                className="rounded-full bg-black px-5 py-2.5 text-center font-ui text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md block"
              >
                {NAV_CTA.purchase.label}
              </Link>
            </m.div>
          </nav>
        </LazyMotion>
      </SheetContent>
    </Sheet>
  );
});

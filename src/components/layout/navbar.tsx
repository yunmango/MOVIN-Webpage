"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { MovinLogo } from "@/components/icons/movin-logo";
import { NAV_ITEMS, NAV_CTA } from "@/data/navigation";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

const DARK_HERO_ROUTES = ["/", "/tracin", "/downloads", "/online-demo"];

export function Navbar() {
  const scrolled = useScrollPosition(50);
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_ROUTES.includes(pathname);
  const useDarkText = scrolled || !hasDarkHero;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link href="/" className="flex-shrink-0">
          <MovinLogo
            className={cn(
              "h-5 w-auto transition-colors duration-300",
              useDarkText ? "text-black" : "text-white"
            )}
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "flex items-center gap-1 font-ui text-sm font-medium transition-colors duration-300 hover:opacity-70",
                useDarkText ? "text-black" : "text-white"
              )}
            >
              {item.label}
              {item.hasDropdown && (
                <svg viewBox="0 0 15 15" className="h-3 w-3" fill="currentColor">
                  <path d="M7.5 9.95a.45.45 0 0 0 .319-.132l3-3a.45.45 0 0 0-.637-.637L7.5 8.863L4.82 6.181l-.07-.057a.451.451 0 0 0-.625.624l.058.07l3 3a.45.45 0 0 0 .318.132" />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={NAV_CTA.demo.href}
            className={cn(
              "rounded-full border px-5 py-2 font-ui text-sm font-medium transition-all duration-300 hover:opacity-80",
              useDarkText
                ? "border-black text-black hover:bg-black hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            )}
          >
            {NAV_CTA.demo.label}
          </Link>
          <Link
            href={NAV_CTA.purchase.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full px-5 py-2 font-ui text-sm font-medium transition-all duration-300",
              useDarkText
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            )}
          >
            {NAV_CTA.purchase.label}
          </Link>
        </div>

        <div className="lg:hidden">
          <MobileMenu scrolled={useDarkText} />
        </div>
      </nav>
    </header>
  );
}

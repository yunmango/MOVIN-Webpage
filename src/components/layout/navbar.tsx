"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { MovinLogo } from "@/components/icons/movin-logo";
import { NAV_ITEMS, NAV_CTA } from "@/data/navigation";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";

const DARK_HERO_ROUTES = ["/"];

export function Navbar() {
  const scrolled = useScrollPosition(50);
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_ROUTES.includes(pathname);
  const useDarkText = scrolled || !hasDarkHero;

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
        <Link href="/" className="flex-shrink-0 transition-transform duration-200 ease-out hover:scale-105">
          <MovinLogo
            className={cn(
              "h-5 w-auto transition-colors duration-200",
              useDarkText ? "text-black" : "text-white"
            )}
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "group relative flex items-center gap-1 font-ui text-[15px] font-semibold tracking-tight transition-colors duration-200 ease-out",
                useDarkText
                  ? isActive(item.href)
                    ? "text-black"
                    : "text-black/70 hover:text-black"
                  : isActive(item.href)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  viewBox="0 0 15 15"
                  className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-y-0.5"
                  fill="currentColor"
                >
                  <path d="M7.5 9.95a.45.45 0 0 0 .319-.132l3-3a.45.45 0 0 0-.637-.637L7.5 8.863L4.82 6.181l-.07-.057a.451.451 0 0 0-.625.624l.058.07l3 3a.45.45 0 0 0 .318.132" />
                </svg>
              )}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-200 ease-out",
                  useDarkText ? "bg-black" : "bg-white",
                  isActive(item.href)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={NAV_CTA.demo.href}
            className={cn(
              "flex h-10 items-center rounded-lg px-4 font-ui text-[14px] font-medium transition-all duration-200 ease-out",
              useDarkText
                ? "text-black/80 hover:bg-black/5 hover:text-black"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            )}
          >
            {NAV_CTA.demo.label}
          </Link>
          <Link
            href={NAV_CTA.purchase.href}
            className="flex h-10 items-center rounded-lg bg-black px-5 font-ui text-[14px] font-medium text-white shadow-sm transition-all duration-200 ease-out hover:bg-gray-800 hover:-translate-y-px hover:shadow-md active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/30 focus-visible:ring-offset-2"
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

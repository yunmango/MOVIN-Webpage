"use client";

import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export function LogoMarquee({
  children,
  className,
  speed = 30,
  reverse = false,
}: LogoMarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-12",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={
          { "--marquee-duration": `${speed}s` } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}

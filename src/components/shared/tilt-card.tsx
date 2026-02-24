"use client";

import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxDeg?: number;
  perspective?: number;
}

export function TiltCard({
  children,
  className,
  maxDeg = 9,
  perspective = 2000,
}: TiltCardProps) {
  const { wrapperRef, contentRef, handleMouseMove, handleMouseLeave } =
    useTilt(maxDeg);

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: `${perspective}px` }}
    >
      <div ref={contentRef} className={cn("will-change-transform", className)}>
        {children}
      </div>
    </div>
  );
}

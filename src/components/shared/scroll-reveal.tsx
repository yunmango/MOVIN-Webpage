"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  staggerChildren?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  staggerChildren,
}: ScrollRevealProps) {
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionMap[direction];
  const ease = [0.16, 1, 0.3, 1] as const;

  if (staggerChildren) {
    return (
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren }}
          className={cn(className)}
        >
          {children}
        </m.div>
      </LazyMotion>
    );
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay, ease }}
        className={cn(className)}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export const scrollRevealChildVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

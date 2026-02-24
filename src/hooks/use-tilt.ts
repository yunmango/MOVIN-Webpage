"use client";

import { useRef, useCallback, useEffect } from "react";

export function useTilt(maxDeg = 9, lerpSpeed = 0.08) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const disabled = useRef(false);

  useEffect(() => {
    disabled.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const animate = useCallback(() => {
    current.current.x += (target.current.x - current.current.x) * lerpSpeed;
    current.current.y += (target.current.y - current.current.y) * lerpSpeed;

    const el = contentRef.current;
    if (el) {
      el.style.transform = `rotateY(${current.current.x}deg) rotateX(${current.current.y}deg)`;
    }

    if (
      Math.abs(target.current.x - current.current.x) > 0.01 ||
      Math.abs(target.current.y - current.current.y) > 0.01
    ) {
      raf.current = requestAnimationFrame(animate);
    } else {
      raf.current = 0;
    }
  }, [lerpSpeed]);

  const startLoop = useCallback(() => {
    if (!raf.current) raf.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled.current) return;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      target.current.x = (nx - 0.5) * maxDeg * 2;
      target.current.y = (0.5 - ny) * maxDeg * 2;
      startLoop();
    },
    [maxDeg, startLoop]
  );

  const handleMouseLeave = useCallback(() => {
    if (disabled.current) return;
    target.current = { x: 0, y: 0 };
    startLoop();
  }, [startLoop]);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return { wrapperRef, contentRef, handleMouseMove, handleMouseLeave };
}

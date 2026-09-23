"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  radius?: number;
}

export function SpotlightCard({
  children,
  className = "",
  radius = 210,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafId = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (rafId.current !== null) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!cardRef.current) return;
      if (!rectRef.current) {
        rectRef.current = cardRef.current.getBoundingClientRect();
      }
      const x = clientX - rectRef.current.left;
      const y = clientY - rectRef.current.top;

      cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
      cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
    });
  }, []);

  const handlePointerLeave = () => {
    setIsHovered(false);
    rectRef.current = null;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={cn("bento-card relative overflow-hidden group", className)}
      {...props}
    >
      {/* 1. Circular internal spotlight following the cursor */}
      <div
        className={`pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(${radius}px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), hsla(var(--primary) / 0.16), transparent 75%)`,
        }}
      />

      {/* 2. Focused border glow illumination under cursor */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          border: "1px solid hsla(var(--primary) / 0.65)",
          maskImage: `radial-gradient(${radius * 0.8}px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(${radius * 0.8}px circle at var(--spotlight-x, -500px) var(--spotlight-y, -500px), black 20%, transparent 100%)`,
        }}
      />

      {/* 3. Card Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

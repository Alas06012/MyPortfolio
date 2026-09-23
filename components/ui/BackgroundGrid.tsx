"use client";

import React, { useEffect, useRef, useState } from "react";

export function BackgroundGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPointerInside, setIsPointerInside] = useState(false);

  useEffect(() => {
    let rafId: number;

    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--glow-x", `${clientX}px`);
          containerRef.current.style.setProperty("--glow-y", `${clientY}px`);
          if (!isPointerInside) {
            setIsPointerInside(true);
          }
        }
      });
    };

    const handlePointerLeave = () => {
      setIsPointerInside(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isPointerInside]);

  return (
    <div ref={containerRef} className="pointer-events-none">
      {/* 1. Base subtle grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-20" />

      {/* 2. Interactive illuminated grid lines under cursor (medium radius ~200px) */}
      <div
        className={`fixed inset-0 bg-grid-pattern-glow pointer-events-none -z-19 transition-opacity duration-300 ${
          isPointerInside ? "opacity-100" : "opacity-0"
        }`}
        style={{
          maskImage:
            "radial-gradient(200px circle at var(--glow-x, -500px) var(--glow-y, -500px), black 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(200px circle at var(--glow-x, -500px) var(--glow-y, -500px), black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}

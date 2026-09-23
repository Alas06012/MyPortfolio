"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { FloatingControlsTag } from "./FloatingControlsTag";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { dictionary } = useLanguage();
  const controlsRef = useRef<HTMLDivElement>(null);
  const [isControlsVisible, setIsControlsVisible] = useState(true);

  useEffect(() => {
    const el = controlsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsControlsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 pt-2">
        <div className="flex items-center justify-between backdrop-blur-xl bg-card/70 border border-border/80 px-4 sm:px-6 py-3 rounded-2xl shadow-sm transition-all duration-300 hover:border-border">
          {/* Brand / Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-primary/30 shadow-md shadow-primary/20 shrink-0 bg-muted">
              <Image
                src="/profile.jpg"
                alt="Diego Alas"
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-foreground flex items-center gap-1.5">
                Diego Alas
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              </span>
              <p className="text-[11px] text-muted-foreground font-medium hidden sm:block">
                {dictionary.profile.role}
              </p>
            </div>
          </div>

          {/* Live Availability Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-muted-foreground font-normal">
              {dictionary.common.availableForWork}
            </span>
          </div>

          {/* Original Controls in Header */}
          <div ref={controlsRef} className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hanging Unrolled Tag for Scroll State */}
      <FloatingControlsTag visible={!isControlsVisible} />
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SpainFlagIcon, UsaFlagIcon } from "./Icons";

export function LanguageToggle() {
  const { language, toggleLanguage, dictionary } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 px-3 rounded-xl bg-card border border-border flex items-center justify-center opacity-60">
        <span className="w-8 h-4 rounded bg-muted-foreground/30 animate-pulse" />
      </div>
    );
  }

  const isEs = language === "es";

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label={dictionary.common.switchLanguage}
      title={dictionary.common.switchLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all duration-200 hover:scale-105 active:scale-95 text-xs font-semibold tracking-wider focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
    >
      {/* Flag icon with smooth transition (similar to Sun/Moon) */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        <div
          className={`transition-all duration-300 absolute flex items-center justify-center ${
            isEs
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-0 pointer-events-none"
          }`}
        >
          <SpainFlagIcon className="w-4.5 h-4.5 rounded-full shadow-xs ring-1 ring-border/80" />
        </div>

        <div
          className={`transition-all duration-300 absolute flex items-center justify-center ${
            isEs
              ? "opacity-0 rotate-90 scale-0 pointer-events-none"
              : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <UsaFlagIcon className="w-4.5 h-4.5 rounded-full shadow-xs ring-1 ring-border/80" />
        </div>
      </div>

      {/* Language label */}
      <span className="font-bold text-xs uppercase tracking-wider text-foreground">
        {isEs ? "ES" : "EN"}
      </span>
    </button>
  );
}

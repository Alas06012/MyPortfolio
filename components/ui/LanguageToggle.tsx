"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label={dictionary.common.switchLanguage}
      title={dictionary.common.switchLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all duration-200 hover:scale-105 active:scale-95 text-xs font-semibold tracking-wider focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="flex items-center gap-1">
        <span className={language === "es" ? "text-primary font-bold" : "text-muted-foreground"}>
          ES
        </span>
        <span className="text-muted-foreground/40">/</span>
        <span className={language === "en" ? "text-primary font-bold" : "text-muted-foreground"}>
          EN
        </span>
      </span>
    </button>
  );
}

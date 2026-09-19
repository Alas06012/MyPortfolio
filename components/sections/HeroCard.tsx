"use client";

import React from "react";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroCard() {
  const { dictionary } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
      
      {/* Top Tag & Status */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
          <Terminal className="w-3.5 h-3.5" />
          <span>{dictionary.hero.role}</span>
        </div>
        
        <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          v2.4
        </span>
      </div>

      {/* Main Copy */}
      <div className="my-6 sm:my-8 z-10">
        <h2 className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-2">
          {dictionary.hero.greeting}
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15] mb-4">
          {dictionary.hero.title}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
          {dictionary.hero.description}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 z-10">
        <button
          onClick={() => handleScrollTo("featured-project")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25 cursor-pointer"
        >
          <span>{dictionary.hero.primaryCta}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => handleScrollTo("contact-section")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card hover:bg-muted border border-border text-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span>{dictionary.hero.secondaryCta}</span>
        </button>
      </div>

      {/* Subtle corner badge */}
      <div className="absolute bottom-3 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
        <Code2 className="w-24 h-24 text-primary" />
      </div>
    </div>
  );
}

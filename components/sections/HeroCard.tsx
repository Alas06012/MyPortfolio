"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function HeroCard() {
  const { dictionary } = useLanguage();

  const titles =
    dictionary.hero.titles && dictionary.hero.titles.length > 0
      ? dictionary.hero.titles
      : [dictionary.hero.title];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [titles.length]);

  const currentTitle = titles[currentIndex % titles.length];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SpotlightCard className="p-6 sm:p-8">
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

        {/* Animated Autoscroll Title (Downward reel every 2.5s) */}
        <div className="relative h-24 sm:h-24 lg:h-28 overflow-hidden mb-4">
          <AnimatePresence initial={false}>
            <motion.div
              key={`${currentIndex}-${currentTitle}`}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center"
            >
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
                {currentTitle}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

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
    </SpotlightCard>
  );
}

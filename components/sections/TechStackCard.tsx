"use client";

import React, { useState } from "react";
import { Cpu, Code, Server, BarChart3, Terminal, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TechIcon } from "@/components/ui/TechIcons";

export function TechStackCard() {
  const { dictionary } = useLanguage();
  const tech = dictionary.techStack;
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-3.5 h-3.5" />;
      case 1:
        return <Server className="w-3.5 h-3.5" />;
      case 2:
        return <BarChart3 className="w-3.5 h-3.5" />;
      default:
        return <Terminal className="w-3.5 h-3.5" />;
    }
  };

  const currentCat = tech.categories[activeCategory] || tech.categories[0];
  const skills = currentCat.skills;

  // Single-row list for large screens (replicated 4 times)
  const fullDisplaySkills = [
    ...skills,
    ...skills,
    ...skills,
    ...skills,
  ];

  // Two-tier split for small screens (replicated 4 times)
  const half = Math.ceil(skills.length / 2);
  const row1Skills = skills.slice(0, half);
  const row2Skills = skills.slice(half);

  const row1Display = [...row1Skills, ...row1Skills, ...row1Skills, ...row1Skills];
  const row2Display = [...row2Skills, ...row2Skills, ...row2Skills, ...row2Skills];

  return (
    <SpotlightCard className="p-6 sm:p-8">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <Cpu className="w-3.5 h-3.5" />
            <span>{tech.badge}</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Interactive Ecosystem
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-1">
            {tech.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {tech.subtitle}
          </p>
        </div>
      </div>

      {/* Category Tabs: grid-cols-1 (<380px), grid-cols-2 (380-639px), flex centered on >=sm */}
      <div className="relative z-10 grid grid-cols-1 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-2.5 mb-6">
        {tech.categories.map((cat, idx) => {
          const isActive = activeCategory === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer w-full sm:w-auto ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/25 font-semibold scale-[1.02]"
                  : "bg-muted/50 hover:bg-muted border border-border/70 text-muted-foreground hover:text-foreground"
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Infinite Marquee Carousel */}
      <div className="relative z-10 my-2 pause-hover">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full overflow-hidden py-2"
          >
            {/* Left & Right gradient masks for smooth edge fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-card to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-card to-transparent z-10" />

            {/* DESKTOP / TABLET (>= sm): 1 single wide carousel */}
            <div className="hidden sm:block">
              <div className="animate-marquee-ltr flex items-center gap-3 sm:gap-4 py-1">
                {fullDisplaySkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:bg-muted/60 transition-all duration-300 shadow-sm shrink-0 select-none group/item hover:scale-[1.03]"
                  >
                    <div className="w-9 h-9 rounded-xl bg-muted/60 flex items-center justify-center p-1.5 shrink-0 border border-border/60 group-hover/item:border-primary/40 transition-colors">
                      <TechIcon name={skill} className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight whitespace-nowrap">
                        {skill}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                        {currentCat.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MOBILE (< sm): 2 rows to see technologies 2x faster */}
            <div className="block sm:hidden space-y-2.5">
              {/* Row 1 */}
              <div className="animate-marquee-ltr-fast flex items-center gap-2.5">
                {row1Display.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-card border border-border/80 hover:border-primary/50 hover:bg-muted/60 transition-all duration-300 shadow-xs shrink-0 select-none group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-muted/60 flex items-center justify-center p-1 shrink-0 border border-border/60">
                      <TechIcon name={skill} className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground tracking-tight whitespace-nowrap">
                        {skill}
                      </span>
                      <span className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider">
                        {currentCat.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="animate-marquee-ltr-fast-2 flex items-center gap-2.5">
                {row2Display.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-card border border-border/80 hover:border-primary/50 hover:bg-muted/60 transition-all duration-300 shadow-xs shrink-0 select-none group/item"
                  >
                    <div className="w-7 h-7 rounded-lg bg-muted/60 flex items-center justify-center p-1 shrink-0 border border-border/60">
                      <TechIcon name={skill} className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-foreground tracking-tight whitespace-nowrap">
                        {skill}
                      </span>
                      <span className="text-[9px] text-muted-foreground font-medium uppercase tracking-wider">
                        {currentCat.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

     
    </SpotlightCard>
  );
}

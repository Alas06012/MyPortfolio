"use client";

import React, { useState } from "react";
import { Cpu, Layers, Code, Server, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
      default:
        return <Wrench className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <Cpu className="w-3.5 h-3.5" />
            <span>{tech.badge}</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Modern Ecosystem</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
          {tech.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-5">
          {tech.subtitle}
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-muted/60 border border-border/70 mb-5">
          {tech.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === idx
                  ? "bg-card text-foreground shadow-sm border border-border font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {getCategoryIcon(idx)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid for active category */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {tech.categories[activeCategory]?.skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-card border border-border/80 hover:border-primary/40 hover:bg-muted/40 transition-all duration-200 group/skill"
            >
              <div className="w-2 h-2 rounded-full bg-primary/70 group-hover/skill:bg-primary transition-colors" />
              <span className="text-xs font-medium text-foreground tracking-tight">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-primary" />
          Component-Driven Architecture
        </span>
        <span className="font-mono text-primary font-medium">100% Type-Safe</span>
      </div>
    </div>
  );
}

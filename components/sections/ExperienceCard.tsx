"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ExperienceCard() {
  const { dictionary } = useLanguage();
  const exp = dictionary.experience;

  return (
    <div className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{exp.badge}</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Proven Delivery</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
          {exp.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-6">
          {exp.subtitle}
        </p>

        {/* Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-2.5 before:w-0.5 before:bg-border">
          {exp.items.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 pl-6 group/item">
              {/* Dot */}
              <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-card transition-transform group-hover/item:scale-125" />

              <div className="space-y-1 w-full">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-foreground">
                    {item.role}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-medium text-muted-foreground">
                  {item.company}
                </p>

                <p className="text-xs text-muted-foreground/90 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

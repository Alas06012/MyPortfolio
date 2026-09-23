"use client";

import React from "react";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { CompanyLogo } from "@/components/ui/CompanyLogos";

export function ExperienceCard() {
  const { dictionary } = useLanguage();
  const exp = dictionary.experience;

  return (
    <SpotlightCard className="p-6 sm:p-7">
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

        {/* Timeline with Company Logos */}
        <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-[19px] before:w-0.5 before:bg-border/70">
          {exp.items.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 group/item">
              {/* Company Logo Node */}
              <div className="relative z-10 w-10 h-10 rounded-xl bg-card border border-border/80 p-0.5 shrink-0 shadow-xs group-hover/item:border-primary/50 group-hover/item:scale-105 transition-all duration-200">
                <CompanyLogo name={item.company} className="w-full h-full rounded-[10px]" />
              </div>

              <div className="space-y-1 w-full pt-0.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <h4 className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">
                    {item.role}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-semibold text-muted-foreground/90">
                  {item.company}
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed pt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        {exp.education && (
          <div className="mt-8 pt-6 border-t border-border/60">
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-semibold text-primary">
                <GraduationCap className="w-3 h-3" />
                <span>{exp.education.badge}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/edu hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-card border border-border/80 p-0.5 shrink-0 shadow-xs group-hover/edu:border-primary/50 transition-colors">
                  <CompanyLogo name={exp.education.institution} className="w-full h-full rounded-[10px]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {exp.education.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground font-medium">
                    {exp.education.institution}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20 shrink-0 self-start sm:self-center">
                <Calendar className="w-3 h-3" />
                {exp.education.period}
              </span>
            </div>
          </div>
        )}
      </div>
    </SpotlightCard>
  );
}

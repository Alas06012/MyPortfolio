"use client";

import React from "react";
import { ExternalLink, CheckCircle2, Home, Layers, Activity } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectCard() {
  const { dictionary } = useLanguage();
  const project = dictionary.featuredProject;

  return (
    <div
      id="featured-project"
      className="bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Top bar with badge and links */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <Home className="w-3.5 h-3.5" />
            <span>{project.badge}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dictionary.common.sourceCode}
              title={dictionary.common.sourceCode}
              className="p-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dictionary.common.liveDemo}
              title={dictionary.common.liveDemo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-white text-xs font-medium transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-sm shadow-primary/20"
            >
              <span>{dictionary.common.liveDemo}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-primary font-medium mt-0.5">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Features List */}
        <div className="space-y-2 mb-6">
          {project.keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-muted/50 border border-border/80 mb-5">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-base sm:text-xl font-extrabold text-foreground tracking-tight">
                {metric.value}
              </span>
              <span className="block text-[10px] sm:text-xs text-muted-foreground font-medium mt-0.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="pt-2 border-t border-border/70 flex flex-wrap items-center gap-1.5 sm:gap-2">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-lg bg-card border border-border text-[11px] font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

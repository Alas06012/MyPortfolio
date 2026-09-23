"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  HardHat
} from "lucide-react";
import { GooglePlayIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { HogarenoPhoneMockup } from "@/components/projects/HogarenoPhoneMockup";
import { ConstructionAnimation } from "@/components/projects/ConstructionAnimation";

export function ProjectCard() {
  const { dictionary } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [logoError, setLogoError] = useState(false);

  const projects = dictionary.featuredProjects?.items || (dictionary.featuredProject ? [
    {
      id: "hogareno",
      badge: dictionary.featuredProject.badge || "Hogareño",
      title: dictionary.featuredProject.title || "Hogareño",
      tagline: dictionary.featuredProject.tagline || "",
      description: dictionary.featuredProject.description || "",
      keyFeatures: dictionary.featuredProject.keyFeatures || [],
      metrics: dictionary.featuredProject.metrics || [],
      tags: dictionary.featuredProject.tags || [],
      liveUrl: dictionary.featuredProject.liveUrl || "https://xn--hogareo-9za.app",
      liveUrlLabel: "hogareño.app",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.hogareno.app&hl=es_SV",
    }
  ] : []);

  const currentProject = projects[currentIndex] || projects[0];
  const isHogareno = currentProject?.id === "hogareno";

  const handleNext = () => {
    if (!projects.length) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    if (!projects.length) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  if (!currentProject) return null;

  return (
    <SpotlightCard 
      id="featured-project" 
      radius={280}
      className={`p-5 sm:p-7 md:p-8 pb-0 sm:pb-0 md:pb-0 transition-colors duration-200 ${
        isHogareno 
          ? "border-[rgb(72_59_193/0.25)] hover:border-[rgb(72_59_193/0.45)]" 
          : "border-border/70 hover:border-border"
      }`}
    >
      {/* Background Brand Ambience: Only for Hogareño */}
      {isHogareno && (
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 opacity-25"
          style={{
            background: "radial-gradient(circle, rgb(72 59 193) 0%, rgb(100 121 226 / 0.4) 50%, transparent 80%)",
          }}
        />
      )}

      <div className="w-full flex-1 flex flex-col justify-between">
        {/* Top Control Bar: Category Indicators & Manual Carousel Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/60">
          {/* Left: Project Selector Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {projects.map((proj, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? idx === 0
                        ? "bg-[rgb(72_59_193)] text-white shadow-md shadow-[rgb(72_59_193/0.3)] scale-[1.02]"
                        : "bg-amber-500 text-white shadow-md shadow-amber-500/30 scale-[1.02]"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {idx === 0 ? (
                    <div className="relative w-5 h-5 shrink-0">
                      <Image
                        src="/projects/hogareno/icon.ico"
                        alt="Hogareño"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <HardHat className="w-3.5 h-3.5 shrink-0" />
                  )}
                  <span>{proj.badge}</span>
                  <span className="text-[10px] opacity-75 font-mono">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Manual Carousel Arrows & Counter */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground mr-1">
              <strong className="text-foreground">0{currentIndex + 1}</strong>
              <span className="mx-1 text-muted-foreground/60">/</span>
              0{projects.length}
            </span>

            <button
              onClick={handlePrev}
              aria-label={dictionary.common.previousProject}
              title={dictionary.common.previousProject}
              className="p-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNext}
              aria-label={dictionary.common.nextProject}
              title={dictionary.common.nextProject}
              className="p-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Carousel Slide Content */}
        <div className="relative min-h-[440px] sm:min-h-[460px] flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: direction * 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction * -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ willChange: "transform, opacity" }}
              className="w-full flex-1 flex flex-col justify-center"
            >
              {isHogareno ? (
                /* Hogareño Slide: Protruding Straight Phone + Right Details */
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 items-end w-full mt-auto">
                  {/* Phone Mockup Column: below details on small screens (order-2), left column on desktop (lg:order-1) */}
                  <div className="order-2 lg:order-1 lg:col-span-5 flex items-end justify-center self-end w-full">
                    <HogarenoPhoneMockup />
                  </div>

                  {/* Project Details Column: top on small screens (order-1), right column on desktop (lg:order-2) */}
                  <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-between pb-6 sm:pb-8 w-full">
                    <div>
                      {/* Top Subtitle / Tagline */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[rgb(72_59_193)] dark:text-[rgb(100_121_226)]">
                          {currentProject.badge}
                        </span>
                        <span className="text-muted-foreground/40">•</span>
                        <span className="text-xs text-muted-foreground font-medium">
                          Mobile & Web Platform
                        </span>
                      </div>

                      {/* Title: Transparent Logo or Text Fallback */}
                      <div className="mb-3">
                        {!logoError ? (
                          <div className="relative h-10 sm:h-12 w-44 sm:w-52">
                            <Image
                              src="/projects/hogareno/logo.webp"
                              alt="Hogareño"
                              fill
                              className="object-contain object-left drop-shadow-sm brightness-110"
                              priority
                              onError={() => setLogoError(true)}
                            />
                          </div>
                        ) : (
                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                            {currentProject.title}
                          </h3>
                        )}
                        <p className="text-sm sm:text-base font-medium mt-1 text-[rgb(72_59_193)] dark:text-[rgb(100_121_226)]">
                          {currentProject.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                        {currentProject.description}
                      </p>

                      {/* Key Highlights / Features */}
                      <div className="space-y-2 mb-6">
                        {currentProject.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-foreground/90 font-medium">
                            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[rgb(72_59_193)] dark:text-[rgb(100_121_226)]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Row & Action Buttons */}
                    <div className="space-y-4 pt-3 border-t border-border/60">
                      {/* Metrics Row */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 p-3 rounded-2xl bg-muted/40 border border-border/80">
                        {currentProject.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <span className="block text-sm sm:text-lg font-extrabold tracking-tight truncate text-[rgb(72_59_193)] dark:text-[rgb(100_121_226)]">
                              {metric.value}
                            </span>
                            <span className="block text-[10px] sm:text-xs text-muted-foreground font-medium mt-0.5">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                        {/* Live Website Button */}
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={dictionary.common.visitWebsite}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-semibold shadow-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                          style={{
                            backgroundColor: "rgb(72 59 193)",
                            boxShadow: "0 4px 14px 0 rgba(72, 59, 193, 0.35)",
                          }}
                        >
                          <span>{currentProject.liveUrlLabel || dictionary.common.visitWebsite}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* Google Play Store Button */}
                        {currentProject.playStoreUrl && (
                          <a
                            href={currentProject.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={dictionary.common.playStore}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-muted border border-[rgb(100_121_226/0.4)] text-foreground text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                          >
                            <GooglePlayIcon className="w-4 h-4" />
                            <span>{dictionary.common.playStore}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Coming Soon Slide: Centered Coming Soon Typography + Corner Hammer & Rotating Nail */
                <div className="w-full flex-1 flex items-center justify-center my-auto py-10 sm:py-12">
                  <ConstructionAnimation />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SpotlightCard>
  );
}

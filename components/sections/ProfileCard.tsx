"use client";

import React from "react";
import { MapPin, Quote, User, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ProfileCard() {
  const { dictionary } = useLanguage();

  return (
    <div className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-semibold text-muted-foreground">
            <User className="w-3.5 h-3.5 text-primary" />
            <span>{dictionary.profile.tag}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{dictionary.profile.location}</span>
          </div>
        </div>

        {/* Identity & Status */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary via-indigo-500 to-purple-500 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-primary/20">
              DA
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-card" />
          </div>

          <div>
            <h3 className="font-bold text-lg text-foreground tracking-tight">
              {dictionary.profile.name}
            </h3>
            <p className="text-xs text-primary font-medium">
              {dictionary.profile.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {dictionary.profile.bio}
        </p>
      </div>

      {/* Quote / Philosophy Box */}
      <div className="mt-5 pt-4 border-t border-border/80">
        <div className="flex items-start gap-2.5">
          <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-xs italic text-foreground/80 font-medium">
            {dictionary.profile.quote}
          </p>
        </div>
      </div>
    </div>
  );
}

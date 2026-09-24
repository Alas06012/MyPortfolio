"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Quote, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function ProfileCard() {
  const { dictionary } = useLanguage();

  return (
    <SpotlightCard className="@container p-5 sm:p-6 flex flex-col justify-between h-full">
      <div className="flex flex-col">
        {/* Top Header / Badges */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <User className="w-3.5 h-3.5" />
            <span>{dictionary.profile.tag}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>{dictionary.profile.location}</span>
          </div>
        </div>

        {/* Responsive Content: Stacks when narrow, moves side-by-side when the card has space to fill */}
        <div className="flex flex-col @[420px]:flex-row items-center @[420px]:items-start gap-4 @[420px]:gap-6 mb-4">
          {/* Photo Frame */}
          <div className="relative w-40 h-40 sm:w-44 sm:h-44 shrink-0 aspect-square rounded-2xl overflow-hidden border border-border/80 group-hover:border-primary/50 transition-all duration-500 shadow-md bg-muted/40">
            <Image
              src="/profile.jpg"
              alt={dictionary.profile.name}
              fill
              sizes="(max-width: 640px) 160px, 180px"
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Name & Description Block (Moves to the right of the photo when space is available) */}
          <div className="flex-1 flex flex-col justify-center text-center @[420px]:text-left">
            <div className="mb-2">
              <h3 className="font-bold text-xl text-foreground tracking-tight flex items-center justify-center @[420px]:justify-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                {dictionary.profile.name}
                <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              </h3>
              <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5">
                {dictionary.profile.role}
              </p>
            </div>

            {/* Bio description */}
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {dictionary.profile.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Quote / Philosophy Box */}
      <div className="pt-3.5 border-t border-border/80 mt-auto">
        <div className="flex items-start gap-2.5">
          <Quote className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-xs italic text-foreground/80 font-medium">
            {dictionary.profile.quote}
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
}

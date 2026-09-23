"use client";

import React from "react";
import { Hammer, Pin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ConstructionAnimation() {
  const { language } = useLanguage();
  const text = language === "es" ? "Próximamente..." : "Coming Soon...";

  return (
    <div className="relative w-full min-h-[220px] sm:min-h-[260px] flex items-center justify-center py-6 px-4 select-none">
      {/* Centered Typography with Corner Lucide Icons (Static) */}
      <div className="relative inline-block my-auto">
        
        {/* 1. Static Lucide Hammer in Top-Right Corner */}
        <div className="absolute -top-7 -right-8 sm:-top-8 sm:-right-9 z-20 pointer-events-none text-amber-500 -rotate-12">
          <Hammer className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] drop-shadow-[0_2px_8px_rgba(245,158,11,0.35)]" />
        </div>

        {/* 2. Static Lucide Pin / Nail in Bottom-Left Corner */}
        <div className="absolute -bottom-6 -left-8 sm:-bottom-7 sm:-left-9 z-20 pointer-events-none text-amber-500 rotate-45">
          <Pin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] drop-shadow-[0_2px_8px_rgba(245,158,11,0.35)]" />
        </div>

        {/* 3. Main Centered Typography */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 drop-shadow-sm px-2 py-1">
          {text}
        </h3>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { 
  Wifi, 
  Battery, 
  Search, 
  ShieldCheck, 
  Star, 
  Wrench, 
  Zap, 
  Paintbrush, 
  Hammer,
  Home,
  Compass,
  FileText,
  User
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HogarenoPhoneMockup() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const content = {
    searchTitle: isEs ? "¿Qué necesitas para tu hogar hoy?" : "What do you need for your home today?",
    searchPlaceholder: isEs ? "Plomero, electricista, pintor..." : "Plumber, electrician, painter...",
    popularCategories: isEs ? "Categorías Populares" : "Popular Categories",
    categories: [
      { name: isEs ? "Albañil" : "Mason", icon: Hammer, color: "text-amber-500" },
      { name: isEs ? "Eléctrico" : "Electrician", icon: Zap, color: "text-yellow-500" },
      { name: isEs ? "Plomero" : "Plumber", icon: Wrench, color: "text-sky-500" },
      { name: isEs ? "Pintor" : "Painter", icon: Paintbrush, color: "text-purple-500" },
    ],
    verifiedPros: isEs ? "Profesionales Destacados" : "Featured Professionals",
    professionals: [
      {
        initials: "CM",
        name: "Carlos M.",
        role: isEs ? "Electricista" : "Electrician",
        rating: "4.9",
        services: isEs ? "84 servicios" : "84 jobs",
        available: isEs ? "Disponible" : "Available",
        color: "bg-[#6378da]",
      },
      {
        initials: "RS",
        name: "Roberto S.",
        role: isEs ? "Fontanero" : "Plumber",
        rating: "4.8",
        services: isEs ? "62 servicios" : "62 jobs",
        available: isEs ? "Disponible" : "Available",
        color: "bg-[#483bc1]",
      },
    ],
    guaranteeTitle: isEs ? "Garantía Hogareño" : "Hogareño Guarantee",
    guaranteeSubtitle: isEs ? "Trabajos seguros y protegidos" : "Protected & secure work",
    navHome: isEs ? "Inicio" : "Home",
    navExplore: isEs ? "Explorar" : "Explore",
    navQuotes: isEs ? "Cotizar" : "Quotes",
    navProfile: isEs ? "Perfil" : "Profile",
  };

  return (
    <div className="relative w-full flex items-end justify-center">
      {/* Straight Smartphone Container - Upright & perfectly vertical */}
      <div className="relative z-10 select-none translate-y-9">
        {/* Physical Side Buttons for Flagship Realism */}
        <div className="absolute -left-[4px] top-24 w-[3.5px] h-6 rounded-l-sm bg-gradient-to-r from-zinc-700 to-zinc-800 shadow-sm" />
        <div className="absolute -left-[4px] top-33 w-[3.5px] h-10 rounded-l-sm bg-gradient-to-r from-zinc-700 to-zinc-800 shadow-sm" />
        <div className="absolute -left-[4px] top-46 w-[3.5px] h-10 rounded-l-sm bg-gradient-to-r from-zinc-700 to-zinc-800 shadow-sm" />
        <div className="absolute -right-[4px] top-32 w-[3.5px] h-14 rounded-r-sm bg-gradient-to-l from-zinc-700 to-zinc-800 shadow-sm" />

        {/* Phone Outer Chassis: Multi-layer Flagship Titanium Rim */}
        <div className="relative w-[230px] sm:w-[260px] h-[440px] sm:h-[490px] rounded-[44px] p-[2.5px] bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
          
          {/* Middle Titanium Body */}
          <div className="w-full h-full rounded-[41px] p-[5px] sm:p-[6px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-700/50">
            
            {/* Inner Screen Bezel with Thin Minimalist Border */}
            <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-white flex flex-col border border-zinc-800 shadow-inner">
              
              {/* Screen Glass Reflection Shimmer Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.14] to-transparent pointer-events-none z-30" />

              {/* Top Status Bar (Dynamic Island & Indicators in #6378da) */}
              <div className="relative z-20 pt-2 px-4 pb-1 bg-[#6378da] flex items-center justify-between text-[10px] font-medium text-white shrink-0">
                <span className="font-semibold tracking-tight">9:41</span>

                {/* Dynamic Island Pill with Camera & Sensor */}
                <div className="w-15 h-3.5 sm:w-16 sm:h-4 bg-black rounded-full border border-black/40 flex items-center justify-end px-1.5 gap-1 shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-950/70" />
                  <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
                </div>

                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3 text-white" />
                  <Battery className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Header Navigation Bar with Logo in #6378da */}
              <div className="relative z-20 px-3.5 py-1.5 sm:py-2 bg-[#6378da] flex items-center justify-start shrink-0 shadow-xs">
                <div className="relative h-5 sm:h-6 w-24 sm:w-28">
                  <Image
                    src="/projects/hogareno/logo.webp"
                    alt="Hogareño Logo"
                    fill
                    className="object-contain object-left brightness-125 drop-shadow-sm"
                    priority
                  />
                </div>
              </div>

              {/* Main Content Area in White Background - 100% STATIC (NO SCROLL) */}
              <div className="relative z-10 flex-1 px-3 pt-2 pb-2 bg-white overflow-hidden flex flex-col justify-between gap-1.5 text-zinc-900 select-none">
                
                {/* Search Prompt Box - with #6378da border */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-50/50 border border-[#6378da]/50 shadow-2xs">
                  <p className="text-[9px] sm:text-[9.5px] font-bold text-zinc-900 leading-tight mb-1">
                    {content.searchTitle}
                  </p>
                  <div className="flex items-center gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-white border border-[#6378da]/40 text-zinc-400 text-[8.5px] sm:text-[9px] shadow-2xs">
                    <Search className="w-2.5 h-2.5 text-[#6378da] shrink-0" />
                    <span className="truncate">{content.searchPlaceholder}</span>
                  </div>
                </div>

                {/* Popular Categories - with #6378da borders */}
                <div>
                  <span className="text-[8px] sm:text-[8.5px] uppercase tracking-wider font-bold text-zinc-500 block mb-1">
                    {content.popularCategories}
                  </span>
                  <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                    {content.categories.map((cat, i) => (
                      <div
                        key={i}
                        className="p-1 rounded-xl bg-zinc-50/80 border border-[#6378da]/40 flex flex-col items-center gap-0.5 text-center shadow-2xs hover:border-[#6378da] transition-colors"
                      >
                        <cat.icon className={`w-3 h-3 ${cat.color}`} />
                        <span className="text-[7px] sm:text-[7.5px] font-semibold text-zinc-700 leading-tight">
                          {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Multiple Verified Professional Cards - Aesthetic 2-Col Grid with #6378da borders */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] sm:text-[8.5px] uppercase tracking-wider font-bold text-zinc-500">
                      {content.verifiedPros}
                    </span>
                    <span className="text-[7.5px] sm:text-[8px] font-bold text-[#6378da]">
                      ★ 4.8+
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {content.professionals.map((pro, idx) => (
                      <div 
                        key={idx} 
                        className="p-1.5 rounded-xl bg-white border border-[#6378da]/55 shadow-2xs flex flex-col justify-between gap-1"
                      >
                        <div className="flex items-center gap-1.5">
                          <div className={`w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full ${pro.color} flex items-center justify-center text-[8px] sm:text-[8.5px] font-bold text-white shadow-2xs shrink-0`}>
                            {pro.initials}
                          </div>
                          <div className="min-w-0">
                            <span className="text-[8px] sm:text-[8.5px] font-bold text-zinc-900 truncate block">{pro.name}</span>
                            <span className="text-[6.5px] sm:text-[7px] text-zinc-500 truncate block">{pro.role}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-zinc-100 text-[6.5px] sm:text-[7px]">
                          <div className="flex items-center gap-0.5 text-amber-600 font-bold">
                            <Star className="w-2 h-2 fill-amber-500 text-amber-500" />
                            <span>{pro.rating}</span>
                          </div>
                          <span className="text-[#6378da] font-semibold">{pro.available}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badge Banner - with #6378da border */}
                <div className="p-1.5 sm:p-2 rounded-xl bg-indigo-50/50 border border-[#6378da]/50 flex items-center gap-2 shrink-0">
                  <div className="p-1 rounded-md bg-[#6378da] text-white shrink-0 shadow-2xs">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <div>
                    <span className="text-[8.5px] sm:text-[9px] font-bold text-zinc-900 block">{content.guaranteeTitle}</span>
                    <span className="text-[7px] sm:text-[7.5px] text-zinc-500 block">{content.guaranteeSubtitle}</span>
                  </div>
                </div>

                {/* Bottom In-App Navigation Bar */}
                <div className="pt-1 pb-0.5 border-t border-zinc-200 flex items-center justify-between text-zinc-400 px-2 shrink-0">
                  <div className="flex flex-col items-center gap-0.5 text-[#6378da] font-bold">
                    <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[6.5px] sm:text-[7px]">{content.navHome}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-zinc-600">
                    <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[6.5px] sm:text-[7px]">{content.navExplore}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-zinc-600">
                    <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[6.5px] sm:text-[7px]">{content.navQuotes}</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 hover:text-zinc-600">
                    <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="text-[6.5px] sm:text-[7px]">{content.navProfile}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

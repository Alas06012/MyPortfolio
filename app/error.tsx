"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { dictionary } = useLanguage();

  useEffect(() => {
    // Log runtime error to monitoring service if needed
    console.error("Application runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="bento-card max-w-md w-full p-8 text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-destructive/10 text-rose-500 mx-auto flex items-center justify-center border border-rose-500/20">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            {dictionary.error.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {dictionary.error.description}
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md shadow-primary/20 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>{dictionary.error.retry}</span>
        </button>
      </div>
    </div>
  );
}

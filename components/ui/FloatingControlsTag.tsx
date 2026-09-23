"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

interface FloatingControlsTagProps {
  visible: boolean;
}

export function FloatingControlsTag({ visible }: FloatingControlsTagProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="px-4 sm:px-6">
          <AnimatePresence>
            {visible && (
              <motion.div
                key="floating-controls-tag"
                initial={{ y: -65, scaleY: 0.2, opacity: 0 }}
                animate={{ y: 0, scaleY: 1, opacity: 1 }}
                exit={{ y: -65, scaleY: 0.2, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 28,
                  mass: 0.8,
                }}
                style={{ originY: 0 }}
                className="pointer-events-auto flex flex-col items-center"
              >
                {/* Unrolling Tag Body */}
                <div className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 pt-1.5 pb-2 rounded-b-2xl bg-card/90 backdrop-blur-xl border-x border-b border-border/90 shadow-xl shadow-black/10 dark:shadow-primary/10">
                  {/* Hanging decorative slit/notch */}
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary/40 rounded-b-full" />

                  <LanguageToggle />
                  <ThemeToggle />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

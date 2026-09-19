"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Dictionary, Language } from "@/types/dictionary";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

interface LanguageContextType {
  language: Language;
  dictionary: Dictionary;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const dictionaries: Record<Language, Dictionary> = {
  en: en as Dictionary,
  es: es as Dictionary,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "portfolio_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
      if (stored === "en" || stored === "es") {
        setLanguageState(stored);
      } else {
        const browserLang = navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
        setLanguageState(browserLang);
      }
    } catch {
      // Ignore storage errors in private browsing
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const currentDictionary = dictionaries[language] || dictionaries.es;

  return (
    <LanguageContext.Provider
      value={{
        language,
        dictionary: currentDictionary,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

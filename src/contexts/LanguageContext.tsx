
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, ar: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const isRtl = language === "ar";

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    document.documentElement.className = language === "en" ? "rtl" : "ltr";
  };

  const t = (en: string, ar: string) => {
    return language === "en" ? en : ar;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

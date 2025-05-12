
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, Globe, WhatsApp } from "lucide-react";

const Header: React.FC = () => {
  const { t, toggleLanguage, language, isRtl } = useLanguage();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="bg-tech-blue text-white p-2 rounded-lg">
                <span className="font-bold text-xl">TS</span>
              </div>
              <h1 className="text-xl font-bold">
                {t("Tech Services", "الخدمات التقنية")}
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:items-center mt-4 md:mt-0">
            <div className="flex gap-4">
              <a href="mailto:ahmedmokireldin@gmail.com" className="contact-link">
                <Mail size={18} />
                <span className="hidden md:inline">ahmedmokireldin@gmail.com</span>
              </a>
              <a href="tel:+201004101309" className="contact-link">
                <Phone size={18} />
                <span className="hidden md:inline">+201004101309</span>
              </a>
              <a href="https://wa.me/201006334062" target="_blank" rel="noopener noreferrer" className="contact-link">
                <WhatsApp size={18} />
                <span className="hidden md:inline">+201006334062</span>
              </a>
            </div>
            
            <Button 
              onClick={toggleLanguage} 
              variant="outline" 
              className="ml-2 flex items-center gap-1"
            >
              <Globe size={16} />
              <span>{language === "en" ? "العربية" : "English"}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

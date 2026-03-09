
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Tech Services Logo" className="h-8 w-8 object-contain" />
              <span className="font-bold">{t("Ahmed Mo Kireldin", "أحمد محمد كيرالدين")}</span>
            </div>
          </div>
          
          <div>
            <ul className="flex gap-6">
              <li>
                <a href="#services" className="hover:text-tech-blue transition-colors">
                  {t("Services", "الخدمات")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-tech-blue transition-colors">
                  {t("Pricing", "الأسعار")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tech-blue transition-colors">
                  {t("Contact", "اتصل بنا")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-6 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {t("Ahmed Mo Kireldin. All rights reserved.", "أحمد محمد كيرالدين. جميع الحقوق محفوظة.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

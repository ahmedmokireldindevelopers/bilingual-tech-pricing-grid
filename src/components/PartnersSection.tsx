import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

interface Country {
  name: { en: string; ar: string };
  flag: string;
  companies: string;
}

const PartnersSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const countries: Country[] = [
    { name: { en: "Egypt", ar: "مصر" }, flag: "🇪🇬", companies: "HQ" },
    { name: { en: "Saudi Arabia", ar: "السعودية" }, flag: "🇸🇦", companies: "10+" },
    { name: { en: "UAE", ar: "الإمارات" }, flag: "🇦🇪", companies: "8+" },
    { name: { en: "Oman", ar: "عُمان" }, flag: "🇴🇲", companies: "5+" },
    { name: { en: "Kuwait", ar: "الكويت" }, flag: "🇰🇼", companies: "3+" },
    { name: { en: "Bahrain", ar: "البحرين" }, flag: "🇧🇭", companies: "2+" },
    { name: { en: "Qatar", ar: "قطر" }, flag: "🇶🇦", companies: "2+" },
  ];

  const internationalPartners = [
    { name: "N8N", icon: "⚡" },
    { name: "Make.com", icon: "🔗" },
    { name: "SendPulse", icon: "📧" },
    { name: "WhatsApp Business", icon: "💬" },
    { name: "Shopify", icon: "🛒" },
    { name: "WordPress", icon: "📝" },
  ];

  return (
    <section id="partners" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? "font-arabic" : "font-english"}`}>
          {t("Our Partners & Clients", "شركاؤنا وعملاؤنا")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "Trusted by businesses across the Gulf region and international markets",
            "موثوق بنا من قبل شركات في منطقة الخليج والأسواق الدولية"
          )}
        </p>

        {/* Countries grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12 mb-14">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-card border border-border/60 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all"
            >
              <span className="text-5xl mb-3">{country.flag}</span>
              <span className="font-semibold text-foreground text-sm text-center">
                {isRtl ? country.name.ar : country.name.en}
              </span>
              <span className="text-xs text-primary font-medium mt-1.5 bg-primary/10 px-2.5 py-0.5 rounded-full">
                {country.companies === "HQ"
                  ? t("Headquarters", "المقر الرئيسي")
                  : `${country.companies} ${t("clients", "عميل")}`}
              </span>
            </div>
          ))}
        </div>

        {/* International partners */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium mb-6">
            <Globe size={16} />
            <span>{t("International Technology Partners", "شركاء التكنولوجيا الدوليون")}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {internationalPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card border border-border/60 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xl">{partner.icon}</span>
                <span className="font-medium text-foreground text-sm">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

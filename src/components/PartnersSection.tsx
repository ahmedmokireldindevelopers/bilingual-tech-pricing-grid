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

  const partnerLogos = [
    { name: "N8N", color: "#EA4B71", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#EA4B71"/>
        <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">n8n</text>
      </svg>
    )},
    { name: "Make.com", color: "#6D00CC", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#6D00CC"/>
        <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Make</text>
      </svg>
    )},
    { name: "SendPulse", color: "#0084FF", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#0084FF"/>
        <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">SP</text>
      </svg>
    )},
    { name: "WhatsApp", color: "#25D366", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#25D366"/>
        <path d="M20 10c-5.5 0-10 4.5-10 10 0 1.8.5 3.5 1.3 5L10 30l5.2-1.3c1.4.8 3 1.3 4.8 1.3 5.5 0 10-4.5 10-10s-4.5-10-10-10z" fill="white" opacity="0.9"/>
      </svg>
    )},
    { name: "Shopify", color: "#96BF48", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#96BF48"/>
        <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Shop</text>
      </svg>
    )},
    { name: "WordPress", color: "#21759B", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#21759B"/>
        <text x="20" y="27" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">W</text>
      </svg>
    )},
    { name: "Facebook", color: "#1877F2", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#1877F2"/>
        <text x="20" y="28" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">f</text>
      </svg>
    )},
    { name: "Zapier", color: "#FF4A00", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#FF4A00"/>
        <path d="M20 12l8 8-8 8-8-8z" fill="white" opacity="0.9"/>
      </svg>
    )},
    { name: "Instagram", color: "#E4405F", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="url(#ig)"/>
        <defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#FFDC80"/><stop offset="50%" stopColor="#E4405F"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs>
        <rect x="12" y="12" width="16" height="16" rx="4" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="20" r="4" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="27" cy="13" r="1.5" fill="white"/>
      </svg>
    )},
    { name: "WooCommerce", color: "#96588A", svg: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <rect width="40" height="40" rx="8" fill="#96588A"/>
        <text x="20" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">Woo</text>
      </svg>
    )},
  ];

  // Double the logos for seamless infinite scroll
  const doubledLogos = [...partnerLogos, ...partnerLogos];

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

        {/* Countries with animated entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12 mb-14">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-card border border-border/60 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
            >
              <span className="text-5xl mb-3 hover:scale-110 transition-transform duration-300">{country.flag}</span>
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

        {/* Infinite scrolling partner logos */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm font-medium mb-8">
            <Globe size={16} />
            <span>{t("International Technology Partners", "شركاء التكنولوجيا الدوليون")}</span>
          </div>

          <div className="relative overflow-hidden py-4">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

            {/* Scrolling row */}
            <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
              {doubledLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 bg-card border border-border/60 rounded-xl px-6 py-4 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  {partner.svg}
                  <span className="font-semibold text-foreground whitespace-nowrap">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

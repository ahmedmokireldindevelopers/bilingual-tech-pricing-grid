import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, MapPin, Building2, Landmark, ShoppingBag, Briefcase, Factory, Plane, Fuel, CreditCard, Smartphone, Building } from "lucide-react";

// Lightweight flag images from flagcdn.com (open-source, CDN-hosted, tiny file size)
const FlagIcon: React.FC<{ code: string; alt: string }> = ({ code, alt }) => (
  <img
    src={`https://flagcdn.com/w160/${code}.png`}
    srcSet={`https://flagcdn.com/w320/${code}.png 2x`}
    alt={alt}
    className="w-full h-full object-cover rounded-lg shadow-sm"
    loading="lazy"
  />
);

const PartnersSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const countries = [
    {
      name: { en: "Egypt", ar: "مصر" },
      flagCode: "eg",
      companies: "HQ",
      description: { en: "Our Headquarters", ar: "مقرنا الرئيسي" },
      color: "#CE1126",
      icons: [
        { icon: <Building2 size={14} />, label: "Orascom" },
        { icon: <Smartphone size={14} />, label: "Vodafone EG" },
        { icon: <Landmark size={14} />, label: "CIB" },
      ],
    },
    {
      name: { en: "Saudi Arabia", ar: "السعودية" },
      flagCode: "sa",
      companies: "10+",
      description: { en: "Largest market", ar: "أكبر سوق" },
      color: "#006C35",
      icons: [
        { icon: <Fuel size={14} />, label: "Aramco" },
        { icon: <Building size={14} />, label: "SABIC" },
        { icon: <CreditCard size={14} />, label: "Al Rajhi" },
      ],
    },
    {
      name: { en: "UAE", ar: "الإمارات" },
      flagCode: "ae",
      companies: "8+",
      description: { en: "Key partner", ar: "شريك رئيسي" },
      color: "#00732F",
      icons: [
        { icon: <Plane size={14} />, label: "Emirates" },
        { icon: <Building2 size={14} />, label: "Emaar" },
        { icon: <Briefcase size={14} />, label: "Etisalat" },
      ],
    },
    {
      name: { en: "Oman", ar: "عُمان" },
      flagCode: "om",
      companies: "5+",
      description: { en: "Growing market", ar: "سوق متنامي" },
      color: "#DB161B",
      icons: [
        { icon: <Factory size={14} />, label: "OQ" },
        { icon: <Briefcase size={14} />, label: "Omantel" },
      ],
    },
    {
      name: { en: "Kuwait", ar: "الكويت" },
      flagCode: "kw",
      companies: "3+",
      description: { en: "Active clients", ar: "عملاء نشطون" },
      color: "#007A3D",
      icons: [
        { icon: <Landmark size={14} />, label: "NBK" },
        { icon: <ShoppingBag size={14} />, label: "Alshaya" },
      ],
    },
    {
      name: { en: "Bahrain", ar: "البحرين" },
      flagCode: "bh",
      companies: "2+",
      description: { en: "Expanding", ar: "قيد التوسع" },
      color: "#CE1126",
      icons: [
        { icon: <Landmark size={14} />, label: "Ahli Bank" },
        { icon: <Briefcase size={14} />, label: "Batelco" },
      ],
    },
    {
      name: { en: "Qatar", ar: "قطر" },
      flagCode: "qa",
      companies: "2+",
      description: { en: "New market", ar: "سوق جديد" },
      color: "#8A1538",
      icons: [
        { icon: <Plane size={14} />, label: "Qatar Airways" },
        { icon: <Briefcase size={14} />, label: "Ooredoo" },
      ],
    },
  ];

  const partnerLogos = [
    { name: "N8N", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#EA4B71"/><text x="22" y="28" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14" fontFamily="sans-serif">n8n</text></svg>
    )},
    { name: "Make.com", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#6D00CC"/><path d="M10 18h5l7 10 7-10h5v12h-4.5v-7l-5.5 7h-4l-5.5-7v7H10V18z" fill="white"/></svg>
    )},
    { name: "SendPulse", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#0084FF"/><path d="M12 14l10 8 10-8v16H12V14z" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    )},
    { name: "WhatsApp", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#25D366"/><path d="M22 10c-6.6 0-12 5.4-12 12 0 2.1.6 4.1 1.5 5.8L10 34l6.4-1.6c1.6.9 3.5 1.4 5.4 1.4h.2c6.6 0 12-5.4 12-12s-5.4-12-12-12zm6.5 16.8c-.3.8-1.7 1.5-2.3 1.6-.6.1-1.4.2-4.5-1-3.9-1.5-6.3-5.5-6.5-5.8-.2-.3-1.6-2.1-1.6-4s1-2.8 1.4-3.2c.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .9.7.3.7 1.1 2.7 1.2 2.9.1.2.2.4.1.7-.1.2-.2.4-.3.6-.2.2-.3.4-.5.6-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.1.9-.1.2-.2 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.2 2.3 1.1 2.7 1.3.4.2.6.3.7.5.1.1.1.8-.2 1.6z" fill="white"/></svg>
    )},
    { name: "Shopify", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#96BF48"/><path d="M28.5 12.5s-.2-.5-.6-.7c-.4-.2-.9-.1-.9-.1s-1.8.3-2.4.4c-.3-.8-.8-1.8-1.7-1.8h-.2c-.5-.6-1.1-.9-1.6-.9-3.9 0-5.8 4.9-6.4 7.4l-2.7.8c-.8.3-.9.3-.9 1.1L9.5 32l15.1 2.8 8.2-1.8S28.5 12.8 28.5 12.5zm-6.3-1.2c-.5.2-1.1.3-1.7.5 0-1 .1-2.4.7-3.5.9.2 1.3 1.5 1 3zm-2.9.9c-1.2.4-2.4.7-2.4.7s1-3.8 3-3.8c.3 0 .5.1.7.2-.5.9-.8 2-.3 2.9zm1.6-4.4c.2 0 .4.1.5.2-1.2.6-1.8 2.1-1.8 3.7l-2 .6c.5-2.1 2-4.5 3.3-4.5z" fill="white"/></svg>
    )},
    { name: "WordPress", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#21759B"/><text x="22" y="29" textAnchor="middle" fill="white" fontWeight="bold" fontSize="20" fontFamily="serif">W</text></svg>
    )},
    { name: "Facebook", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#1877F2"/><path d="M25 23h3l1-5h-4v-2.5c0-1.4.4-2.5 2.5-2.5H29v-4.4c-.8-.1-1.8-.3-3.2-.3-3.3 0-5.3 2-5.3 5.7V18h-3.5v5H21v13h4V23z" fill="white"/></svg>
    )},
    { name: "Zapier", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#FF4A00"/><path d="M28 16h-4l-2 4-2-4h-4l4 6-4 6h4l2-4 2 4h4l-4-6z" fill="white"/></svg>
    )},
    { name: "Instagram", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11">
        <defs><linearGradient id="igp" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#FFDC80"/><stop offset="50%" stopColor="#E4405F"/><stop offset="100%" stopColor="#833AB4"/></linearGradient></defs>
        <rect width="44" height="44" rx="10" fill="url(#igp)"/>
        <rect x="11" y="11" width="22" height="22" rx="6" fill="none" stroke="white" strokeWidth="2.5"/>
        <circle cx="22" cy="22" r="5" fill="none" stroke="white" strokeWidth="2.5"/>
        <circle cx="30" cy="14" r="1.5" fill="white"/>
      </svg>
    )},
    { name: "WooCommerce", svg: (
      <svg viewBox="0 0 44 44" className="w-11 h-11"><rect width="44" height="44" rx="10" fill="#96588A"/><rect x="8" y="14" width="28" height="16" rx="3" fill="white" opacity="0.15"/><text x="22" y="26" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10" fontFamily="sans-serif">Woo</text></svg>
    )},
  ];

  const doubledCountries = [...countries, ...countries];
  const doubledLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? "font-arabic" : "font-english"}`}>
          {t("Our Partners & Clients", "شركاؤنا وعملاؤنا")}
        </h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          {t(
            "Trusted by businesses across the Gulf region and international markets",
            "موثوق بنا من قبل شركات في منطقة الخليج والأسواق الدولية"
          )}
        </p>

        {/* Countries - Animated marquee */}
        <div className="mt-14 mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("Countries We Serve", "الدول التي نخدمها")}
            </span>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
              {doubledCountries.map((country, index) => (
                <div
                  key={`c-${index}`}
                  className="flex-shrink-0 w-44 bg-card border border-border/60 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Flag */}
                  <div className="w-full h-20 mb-3 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <FlagIcon code={country.flagCode} alt={country.name.en} />
                  </div>

                  {/* Country info */}
                  <h4 className="font-bold text-foreground text-center text-sm mb-1">
                    {isRtl ? country.name.ar : country.name.en}
                  </h4>
                  <p className="text-xs text-muted-foreground text-center mb-2">
                    {isRtl ? country.description.ar : country.description.en}
                  </p>

                  {/* Company icons */}
                  <div className="flex flex-wrap justify-center gap-1 mb-3">
                    {country.icons.map((comp, i) => (
                      <span key={i} className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground bg-muted/60 rounded-full px-2 py-0.5">
                        {comp.icon}
                        {comp.label}
                      </span>
                    ))}
                  </div>

                  {/* Badge */}
                  <div className="flex justify-center">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: country.color }}
                    >
                      {country.companies === "HQ"
                        ? t("HQ", "المقر")
                        : `${country.companies} ${t("clients", "عميل")}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* International partners - Animated marquee (reverse direction) */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Globe size={18} className="text-primary" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t("Technology Partners", "شركاء التكنولوجيا")}
            </span>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
              {doubledLogos.map((partner, index) => (
                <div
                  key={`p-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 bg-card border border-border/60 rounded-xl px-6 py-4 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {partner.svg}
                  </div>
                  <span className="font-semibold text-foreground whitespace-nowrap text-sm">{partner.name}</span>
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

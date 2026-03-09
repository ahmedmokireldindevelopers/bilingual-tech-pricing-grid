import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const IntegratedPlatforms: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const platforms = [
    {
      name: "Facebook",
      color: "#1877F2",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#1877F2"/>
          <path d="M26.5 25.5h3.5l1.5-6h-5v-3c0-1.6.5-3 3-3h2v-5.1c-1-.1-2.2-.4-4-.4-4 0-6.5 2.4-6.5 7v4.5h-4.5v6H21V38h5.5V25.5z" fill="white"/>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      color: "#25D366",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#25D366"/>
          <path d="M24 11c-7.2 0-13 5.8-13 13 0 2.3.6 4.5 1.7 6.4L11 37l6.8-1.7c1.8 1 3.8 1.5 6 1.5h.2c7.2 0 13-5.8 13-13S31.2 11 24 11zm0 23.8c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1 1-3.8-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.8 0-5.9 4.8-10.8 10.8-10.8 2.9 0 5.6 1.1 7.6 3.2 2 2 3.2 4.7 3.2 7.6-.1 6-4.9 10.7-10.8 10.7zm5.9-8c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7 0-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5s-.7-1.7-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z" fill="white"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      color: "#E4405F",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <defs><radialGradient id="ig2" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497"/><stop offset="5%" stopColor="#fdf497"/><stop offset="45%" stopColor="#fd5949"/><stop offset="60%" stopColor="#d6249f"/><stop offset="90%" stopColor="#285AEB"/></radialGradient></defs>
          <circle cx="24" cy="24" r="24" fill="url(#ig2)"/>
          <rect x="12" y="12" width="24" height="24" rx="6" fill="none" stroke="white" strokeWidth="2.5"/>
          <circle cx="24" cy="24" r="5.5" fill="none" stroke="white" strokeWidth="2.5"/>
          <circle cx="32" cy="16" r="1.8" fill="white"/>
        </svg>
      ),
    },
    {
      name: "SendPulse",
      color: "#0084FF",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#0084FF"/>
          <path d="M14 16l10 8 10-8v16H14V16zm0 0l10 8 10-8" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: "WordPress",
      color: "#21759B",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#21759B"/>
          <text x="24" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="22" fontFamily="serif">W</text>
        </svg>
      ),
    },
    {
      name: "Make.com",
      color: "#6D00CC",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#6D00CC"/>
          <path d="M15 20h4l5 8 5-8h4v10h-3.5v-6l-4 6h-3l-4-6v6H15V20z" fill="white"/>
        </svg>
      ),
    },
    {
      name: "N8N",
      color: "#EA4B71",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#EA4B71"/>
          <text x="24" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14" fontFamily="sans-serif">n8n</text>
        </svg>
      ),
    },
    {
      name: "Zapier",
      color: "#FF4A00",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#FF4A00"/>
          <path d="M24 14l4 7h8l-6 5 2 8-8-5-8 5 2-8-6-5h8z" fill="white"/>
        </svg>
      ),
    },
    {
      name: "Shopify",
      color: "#96BF48",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#96BF48"/>
          <path d="M28 13c0 0-1 .3-1 .3s-.2-1-1-1c-.5 0-1 .3-1 .3s-.5-1.5-2-1.5c-2 0-3 2.5-3 2.5l-1 .3s0 0 0 0l-1 14 10 2 5-1.5S28 13 28 13z" fill="white" opacity="0.9"/>
          <path d="M22 21v2c0 0-1-.5-2-.5-1.5 0-2 1-2 1.5 0 1.5 2 2 2 3.5 0 2-1.5 3-3.5 3-2 0-3-.5-3-.5l.5-2s1 .5 2 .5 1.5-.5 1.5-1c0-1.5-2-2-2-3.5 0-2.5 2-4.5 5-4.5 1 0 1.5.5 1.5.5z" fill="white"/>
        </svg>
      ),
    },
    {
      name: "WooCommerce",
      color: "#96588A",
      svg: (
        <svg viewBox="0 0 48 48" className="w-12 h-12">
          <circle cx="24" cy="24" r="24" fill="#96588A"/>
          <rect x="10" y="16" width="28" height="16" rx="3" fill="white" opacity="0.2"/>
          <text x="24" y="28" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10" fontFamily="sans-serif">Woo</text>
        </svg>
      ),
    },
  ];

  // Double for seamless loop
  const doubled = [...platforms, ...platforms];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? "font-arabic" : "font-english"}`}>
          {t("Integrated Platforms", "المنصات المتكاملة")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "Connect and automate your workflow with these powerful platforms",
            "قم بالربط وأتمتة سير العمل الخاص بك مع هذه المنصات القوية"
          )}
        </p>

        <div className="mt-12 relative overflow-hidden py-6">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          {/* Row 1 - scroll left */}
          <div className="flex gap-6 mb-6 animate-marquee hover:[animation-play-state:paused]">
            {doubled.map((platform, index) => (
              <div
                key={`r1-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-36 bg-background border border-border/60 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.svg}
                </div>
                <span className="text-sm font-semibold text-foreground">{platform.name}</span>
              </div>
            ))}
          </div>

          {/* Row 2 - scroll right */}
          <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
            {doubled.reverse().map((platform, index) => (
              <div
                key={`r2-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-36 h-36 bg-background border border-border/60 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.svg}
                </div>
                <span className="text-sm font-semibold text-foreground">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedPlatforms;

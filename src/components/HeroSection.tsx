import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bot, MessageSquare, Workflow, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const highlights = [
    {
      icon: <Bot size={28} />,
      label: { en: "CRM Automation", ar: "أتمتة CRM" },
    },
    {
      icon: <MessageSquare size={28} />,
      label: { en: "WhatsApp Platforms", ar: "منصات واتساب" },
    },
    {
      icon: <Workflow size={28} />,
      label: { en: "N8N & Make", ar: "N8N و Make" },
    },
    {
      icon: <Users size={28} />,
      label: { en: "30+ Companies", ar: "+30 شركة" },
    },
    {
      icon: <Globe size={28} />,
      label: { en: "Gulf & International", ar: "خليجي ودولي" },
    },
    {
      icon: <Shield size={28} />,
      label: { en: "Expert Team", ar: "فريق متخصص" },
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 md:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe size={16} />
            <span>{t("Based in Egypt • Serving the Gulf & Beyond", "مقرنا مصر • نخدم الخليج والعالم")}</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight ${isRtl ? "font-arabic" : "font-english"}`}>
            {t(
              "Smart Automation Solutions for Your Business",
              "حلول أتمتة ذكية لأعمالك"
            )}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {t(
              "We specialize in CRM automation systems using N8N and Make, WhatsApp customer service platforms, and comprehensive digital solutions. Trusted by 30+ companies across Saudi Arabia, UAE, Oman, and the Gulf region.",
              "نتخصص في أنظمة أتمتة CRM باستخدام N8N و Make، ومنصات واتساب لخدمة العملاء، وحلول رقمية شاملة. موثوق بنا من قبل أكثر من 30 شركة في السعودية والإمارات وعُمان ومنطقة الخليج."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Get Started", "ابدأ الآن")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-xl"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Our Services", "خدماتنا")}
            </Button>
          </div>

          {/* Highlight pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 bg-card border border-border/60 shadow-sm rounded-xl px-5 py-3 transition-all hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="font-medium text-foreground text-sm">
                  {isRtl ? item.label.ar : item.label.en}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

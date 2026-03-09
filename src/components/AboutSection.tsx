import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Globe, Headphones, Zap, Target, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const stats = [
    { icon: <Users size={24} />, value: "30+", label: { en: "Companies Served", ar: "شركة نخدمها" } },
    { icon: <Globe size={24} />, value: "7+", label: { en: "Countries", ar: "دول" } },
    { icon: <Headphones size={24} />, value: "24/7", label: { en: "Support", ar: "دعم فني" } },
    { icon: <Zap size={24} />, value: "100+", label: { en: "Automations Built", ar: "أتمتة تم بناؤها" } },
  ];

  const values = [
    {
      icon: <Target size={24} />,
      title: { en: "Tailored Solutions", ar: "حلول مخصصة" },
      desc: {
        en: "We build custom CRM automation systems tailored to each business using N8N, Make.com, and other powerful platforms.",
        ar: "نبني أنظمة أتمتة CRM مخصصة لكل عمل باستخدام N8N و Make.com ومنصات قوية أخرى."
      },
    },
    {
      icon: <Award size={24} />,
      title: { en: "Cost-Effective WhatsApp Platforms", ar: "منصات واتساب اقتصادية" },
      desc: {
        en: "Our WhatsApp customer service platforms eliminate expensive subscription fees while providing enterprise-grade features.",
        ar: "منصات واتساب لخدمة العملاء تلغي رسوم الاشتراك الباهظة مع توفير ميزات على مستوى المؤسسات."
      },
    },
    {
      icon: <Globe size={24} />,
      title: { en: "Regional & International Reach", ar: "انتشار إقليمي ودولي" },
      desc: {
        en: "From our base in Egypt, our specialized team serves clients across the Gulf and international markets with dedication.",
        ar: "من مقرنا في مصر، يخدم فريقنا المتخصص العملاء في الخليج والأسواق الدولية بتفانٍ."
      },
    },
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? "font-arabic" : "font-english"}`}>
          {t("Who We Are", "من نحن")}
        </h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {t(
            "A specialized Egyptian team providing cutting-edge automation and digital solutions to businesses across the Gulf region and beyond",
            "فريق مصري متخصص يقدم حلول أتمتة وحلول رقمية متطورة للشركات في منطقة الخليج وخارجها"
          )}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-card border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-3">{stat.icon}</div>
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground mt-1">
                {isRtl ? stat.label.ar : stat.label.en}
              </span>
            </div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {isRtl ? value.title.ar : value.title.en}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isRtl ? value.desc.ar : value.desc.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

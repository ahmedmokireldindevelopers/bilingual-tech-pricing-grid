
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, X, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageCalculator from "./MessageCalculator";

const PricingSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [showAnnual, setShowAnnual] = useState(true);
  
  const pricingPlans = [
    {
      id: 1,
      name: {
        en: "Complete Package",
        ar: "الباقة الكاملة"
      },
      description: {
        en: "All inclusive solution with all services",
        ar: "حل شامل مع جميع الخدمات"
      },
      price: {
        usd: showAnnual ? 850 : 1100,
        local: showAnnual ? "~32,000 EGP" : "~41,500 EGP"
      },
      features: [
        {
          en: "Facebook Business Manager Verification",
          ar: "توثيق مدير أعمال فيسبوك",
          included: true
        },
        {
          en: "WhatsApp Business API Setup",
          ar: "إعداد واجهة برمجة تطبيقات واتساب بزنس",
          included: true
        },
        {
          en: "SendPulse $5000 Grant",
          ar: "منحة SendPulse بقيمة 5000 دولار",
          included: true
        },
        {
          en: "Make.com Teams Plan",
          ar: "خطة Make.com للفرق",
          included: true
        },
        {
          en: "WordPress Integration",
          ar: "تكامل ووردبريس",
          included: true
        },
        {
          en: "3 Months Technical Support",
          ar: "دعم فني لمدة 3 أشهر",
          included: true
        }
      ],
      highlight: true
    },
    {
      id: 2,
      name: {
        en: "Fixed Package",
        ar: "الباقة الثابتة"
      },
      description: {
        en: "Standardized solution for most businesses",
        ar: "حل موحد لمعظم الأعمال"
      },
      price: {
        usd: 1000,
        local: "~37,800 EGP"
      },
      features: [
        {
          en: "Facebook Business Manager Verification",
          ar: "توثيق مدير أعمال فيسبوك",
          included: true
        },
        {
          en: "WhatsApp Business API Setup",
          ar: "إعداد واجهة برمجة تطبيقات واتساب بزنس",
          included: true
        },
        {
          en: "SendPulse $5000 Grant",
          ar: "منحة SendPulse بقيمة 5000 دولار",
          included: true
        },
        {
          en: "Make.com Teams Plan",
          ar: "خطة Make.com للفرق",
          included: true
        },
        {
          en: "WordPress Integration",
          ar: "تكامل ووردبريس",
          included: false
        },
        {
          en: "1 Month Technical Support",
          ar: "دعم فني لمدة شهر واحد",
          included: true
        }
      ],
      highlight: false
    },
    {
      id: 3,
      name: {
        en: "Optional Workflows",
        ar: "سير العمل الاختياري"
      },
      description: {
        en: "Add custom workflow automations",
        ar: "أضف أتمتة سير عمل مخصصة"
      },
      price: {
        usd: "From $50",
        local: "From ~1,890 EGP"
      },
      features: [
        {
          en: "Custom Integrations",
          ar: "تكاملات مخصصة",
          included: true
        },
        {
          en: "Workflow Automation",
          ar: "أتمتة سير العمل",
          included: true
        },
        {
          en: "API Connections",
          ar: "اتصالات API",
          included: true
        },
        {
          en: "Scheduled Tasks",
          ar: "المهام المجدولة",
          included: true
        },
        {
          en: "Data Transformation",
          ar: "تحويل البيانات",
          included: true
        },
        {
          en: "Ongoing Maintenance",
          ar: "صيانة مستمرة",
          included: false
        }
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>
          {t("Pricing Plans", "خطط الأسعار")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "Transparent pricing options to meet your business needs",
            "خيارات أسعار شفافة لتلبية احتياجات عملك"
          )}
        </p>

        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                showAnnual ? 'bg-tech-blue text-white' : 'text-gray-700'
              }`}
              onClick={() => setShowAnnual(true)}
            >
              {t("Annual", "سنوي")}
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !showAnnual ? 'bg-tech-blue text-white' : 'text-gray-700'
              }`}
              onClick={() => setShowAnnual(false)}
            >
              {t("One-time", "دفعة واحدة")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`price-card animate-scale-in ${
                plan.highlight ? 'border-tech-blue' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-tech-blue text-white py-1 px-4 text-sm">
                  {t("Popular", "الأكثر شيوعاً")}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">
                {isRtl ? plan.name.ar : plan.name.en}
              </h3>
              <p className="text-gray-600 mb-4">
                {isRtl ? plan.description.ar : plan.description.en}
              </p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-tech-blue">
                  ${typeof plan.price.usd === "number" ? plan.price.usd.toLocaleString() : plan.price.usd}
                </div>
                <div className="text-gray-500">
                  {plan.price.local}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                    ) : (
                      <X className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                    )}
                    <span className={feature.included ? "" : "text-gray-400"}>
                      {isRtl ? feature.ar : feature.en}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <a 
                  href="https://wa.me/201006334062" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  <span>{t("Contact on WhatsApp", "تواصل على واتساب")}</span>
                </a>
                <a 
                  href="mailto:ahmedmokireldin@gmail.com" 
                  className="secondary-button text-center"
                >
                  {t("Email Inquiry", "استفسار عبر البريد")}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-6 text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>
            {t("Calculate WhatsApp Message Costs", "حساب تكاليف رسائل واتساب")}
          </h3>
          <div className="max-w-2xl mx-auto">
            <MessageCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

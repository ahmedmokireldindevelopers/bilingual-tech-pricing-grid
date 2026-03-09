import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, MessageSquare, Zap, Crown, Rocket } from "lucide-react";

interface PricingTier {
  nameEn: string;
  nameAr: string;
  priceEn: string;
  priceAr: string;
  descriptionEn: string;
  descriptionAr: string;
  featuresEn: string[];
  featuresAr: string[];
  icon: React.ElementType;
  popular?: boolean;
  ctaEn: string;
  ctaAr: string;
}

const tiers: PricingTier[] = [
  {
    nameEn: "Starter",
    nameAr: "المبتدئ",
    priceEn: "$99",
    priceAr: "٩٩$",
    descriptionEn: "Perfect for small businesses starting with data-driven marketing.",
    descriptionAr: "مثالي للأعمال الصغيرة التي تبدأ بالتسويق المبني على البيانات.",
    icon: Zap,
    featuresEn: [
      "1 dataset of your choice",
      "Up to 10K records",
      "Email & phone numbers",
      "Excel / CSV format",
      "One-time download",
    ],
    featuresAr: [
      "قاعدة بيانات واحدة من اختيارك",
      "حتى ١٠ آلاف سجل",
      "بريد إلكتروني وأرقام هواتف",
      "صيغة Excel / CSV",
      "تحميل لمرة واحدة",
    ],
    ctaEn: "Get Started",
    ctaAr: "ابدأ الآن",
  },
  {
    nameEn: "Professional",
    nameAr: "المحترف",
    priceEn: "$299",
    priceAr: "٢٩٩$",
    descriptionEn: "Ideal for growing teams that need comprehensive, fresh data.",
    descriptionAr: "مثالي للفرق المتنامية التي تحتاج بيانات شاملة ومحدثة.",
    icon: Crown,
    popular: true,
    featuresEn: [
      "3 datasets of your choice",
      "Up to 50K records each",
      "Email, phone & social media",
      "Excel, CSV & API access",
      "Monthly updates for 3 months",
      "Dedicated support",
    ],
    featuresAr: [
      "٣ قواعد بيانات من اختيارك",
      "حتى ٥٠ ألف سجل لكل قاعدة",
      "بريد وهاتف ووسائل تواصل",
      "Excel, CSV ووصول API",
      "تحديثات شهرية لـ ٣ أشهر",
      "دعم مخصص",
    ],
    ctaEn: "Go Professional",
    ctaAr: "انطلق باحتراف",
  },
  {
    nameEn: "Enterprise",
    nameAr: "المؤسسات",
    priceEn: "Custom",
    priceAr: "مخصص",
    descriptionEn: "Tailored solutions for large organizations with specific data needs.",
    descriptionAr: "حلول مخصصة للمؤسسات الكبيرة ذات الاحتياجات الخاصة.",
    icon: Rocket,
    featuresEn: [
      "Unlimited datasets",
      "Custom record volumes",
      "Full data enrichment",
      "API integration support",
      "Real-time updates",
      "Account manager",
      "Custom data scraping",
    ],
    featuresAr: [
      "قواعد بيانات غير محدودة",
      "أحجام سجلات مخصصة",
      "إثراء بيانات كامل",
      "دعم تكامل API",
      "تحديثات في الوقت الفعلي",
      "مدير حساب مخصص",
      "جمع بيانات مخصص",
    ],
    ctaEn: "Contact Sales",
    ctaAr: "تواصل مع المبيعات",
  },
];

const DataStorePricing: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-20 bg-muted/20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-3">
            <Star size={12} className="mr-1" />
            {t("Pricing Plans", "خطط الأسعار")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t("Choose the Right Plan for You", "اختر الخطة المناسبة لك")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Flexible pricing to match your data needs. All plans include verified, high-quality data.",
              "أسعار مرنة تناسب احتياجاتك. جميع الخطط تتضمن بيانات موثقة وعالية الجودة."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in ${
                tier.popular
                  ? "border-primary ring-2 ring-primary/20 scale-[1.02]"
                  : ""
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-1 text-xs font-semibold">
                  {t("Most Popular", "الأكثر شعبية")}
                </div>
              )}

              <CardHeader className={`text-center ${tier.popular ? "pt-10" : "pt-6"}`}>
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <tier.icon size={28} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{t(tier.nameEn, tier.nameAr)}</CardTitle>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-foreground">{t(tier.priceEn, tier.priceAr)}</span>
                  {tier.priceEn !== "Custom" && (
                    <span className="text-muted-foreground text-sm ml-1">
                      / {t("package", "باقة")}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {t(tier.descriptionEn, tier.descriptionAr)}
                </p>
              </CardHeader>

              <CardContent className="pb-6">
                <ul className={`space-y-3 mb-6 ${isRtl ? "text-right" : "text-left"}`}>
                  {(t(tier.featuresEn.join("||"), tier.featuresAr.join("||"))).split("||").map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${tier.popular ? "" : "variant-outline"}`}
                  variant={tier.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <a
                    href={`https://wa.me/201006334062?text=${encodeURIComponent(
                      `I'm interested in the ${tier.nameEn} data package`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare size={16} />
                    {t(tier.ctaEn, tier.ctaAr)}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataStorePricing;

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Database, MessageSquare } from "lucide-react";

const DataStoreHero: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground py-20 md:py-32">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className={`container mx-auto px-4 relative z-10 ${isRtl ? "text-right" : "text-left"}`}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Database size={18} />
            <span className="text-sm font-medium">
              {t("Premium Data Packages", "باقات بيانات متميزة")}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t(
              "Data That Drives Your Business Forward",
              "بيانات تدفع أعمالك للأمام"
            )}
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            {t(
              "Access verified, up-to-date databases of companies, contacts, and leads across the Middle East and beyond. Fuel your marketing and sales with quality data.",
              "احصل على قواعد بيانات موثقة ومحدثة للشركات وجهات الاتصال والعملاء المحتملين في الشرق الأوسط وخارجه. عزز التسويق والمبيعات ببيانات عالية الجودة."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8"
              onClick={() => document.getElementById("datasets")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("Browse Datasets", "تصفح البيانات")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
              asChild
            >
              <a href="https://wa.me/201006334062" target="_blank" rel="noopener noreferrer">
                <MessageSquare size={18} />
                {t("Contact Us", "تواصل معنا")}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg mx-auto">
            {[
              { value: "50+", label: t("Datasets", "قاعدة بيانات") },
              { value: "1M+", label: t("Records", "سجل") },
              { value: "15+", label: t("Countries", "دولة") },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-75 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataStoreHero;

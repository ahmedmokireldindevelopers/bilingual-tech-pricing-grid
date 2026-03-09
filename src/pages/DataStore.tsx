import React, { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataStoreHero from "@/components/data-store/DataStoreHero";
import DatasetCard, { DatasetEntry } from "@/components/data-store/DatasetCard";
import DataStoreCTA from "@/components/data-store/DataStoreCTA";
import DataStorePricing from "@/components/data-store/DataStorePricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, RefreshCw, Headphones, Filter, X } from "lucide-react";

const datasets: DatasetEntry[] = [
  {
    id: "1",
    titleEn: "Saudi Companies Directory",
    titleAr: "دليل الشركات السعودية",
    descriptionEn: "Comprehensive directory of Saudi companies across all sectors with verified contact details.",
    descriptionAr: "دليل شامل للشركات السعودية في جميع القطاعات مع بيانات اتصال موثقة.",
    records: 125000,
    emails: 89000,
    phones: 110000,
    categoryEn: "Company Directory",
    categoryAr: "دليل شركات",
    countryEn: "Saudi Arabia",
    countryAr: "السعودية",
    featured: true,
  },
  {
    id: "2",
    titleEn: "UAE Business Database",
    titleAr: "قاعدة بيانات الأعمال الإماراتية",
    descriptionEn: "Updated database of UAE businesses including Dubai, Abu Dhabi, and Sharjah.",
    descriptionAr: "قاعدة بيانات محدثة للأعمال في الإمارات تشمل دبي وأبوظبي والشارقة.",
    records: 95000,
    emails: 72000,
    phones: 88000,
    categoryEn: "Company Directory",
    categoryAr: "دليل شركات",
    countryEn: "UAE",
    countryAr: "الإمارات",
    featured: true,
  },
  {
    id: "3",
    titleEn: "Egypt Marketing Companies",
    titleAr: "شركات التسويق في مصر",
    descriptionEn: "Marketing agencies, digital marketing firms, and advertising companies in Egypt.",
    descriptionAr: "وكالات التسويق وشركات التسويق الرقمي والإعلان في مصر.",
    records: 45000,
    emails: 38000,
    phones: 42000,
    categoryEn: "Marketing",
    categoryAr: "تسويق",
    countryEn: "Egypt",
    countryAr: "مصر",
  },
  {
    id: "4",
    titleEn: "Gulf Contractors & Construction",
    titleAr: "المقاولون والبناء في الخليج",
    descriptionEn: "Construction companies, contractors, and engineering firms across GCC countries.",
    descriptionAr: "شركات البناء والمقاولات والهندسة في دول مجلس التعاون الخليجي.",
    records: 67000,
    emails: 51000,
    phones: 63000,
    categoryEn: "Construction",
    categoryAr: "مقاولات",
    countryEn: "GCC",
    countryAr: "الخليج",
  },
  {
    id: "5",
    titleEn: "Healthcare Providers MENA",
    titleAr: "مقدمو الرعاية الصحية - الشرق الأوسط",
    descriptionEn: "Hospitals, clinics, pharmacies, and medical professionals across the MENA region.",
    descriptionAr: "مستشفيات وعيادات وصيدليات ومتخصصون طبيون في منطقة الشرق الأوسط وشمال أفريقيا.",
    records: 38000,
    emails: 29000,
    phones: 35000,
    categoryEn: "Healthcare",
    categoryAr: "رعاية صحية",
    countryEn: "MENA",
    countryAr: "الشرق الأوسط",
  },
  {
    id: "6",
    titleEn: "E-Commerce Stores Database",
    titleAr: "قاعدة بيانات المتاجر الإلكترونية",
    descriptionEn: "Online stores and e-commerce businesses operating in the Arab world.",
    descriptionAr: "المتاجر الإلكترونية وأعمال التجارة الإلكترونية في العالم العربي.",
    records: 28000,
    emails: 25000,
    phones: 22000,
    categoryEn: "E-Commerce",
    categoryAr: "تجارة إلكترونية",
    countryEn: "Arab World",
    countryAr: "العالم العربي",
  },
  {
    id: "7",
    titleEn: "Kuwait Business Directory",
    titleAr: "دليل أعمال الكويت",
    descriptionEn: "Complete directory of Kuwaiti businesses and commercial establishments.",
    descriptionAr: "دليل شامل للأعمال والمنشآت التجارية في الكويت.",
    records: 32000,
    emails: 24000,
    phones: 30000,
    categoryEn: "Company Directory",
    categoryAr: "دليل شركات",
    countryEn: "Kuwait",
    countryAr: "الكويت",
  },
  {
    id: "8",
    titleEn: "Real Estate Companies MENA",
    titleAr: "شركات العقارات - الشرق الأوسط",
    descriptionEn: "Real estate developers, agents, and property management companies across MENA.",
    descriptionAr: "مطورون عقاريون ووكلاء وشركات إدارة عقارات في الشرق الأوسط.",
    records: 41000,
    emails: 33000,
    phones: 39000,
    categoryEn: "Real Estate",
    categoryAr: "عقارات",
    countryEn: "MENA",
    countryAr: "الشرق الأوسط",
  },
  {
    id: "9",
    titleEn: "Oman Trade & Industry",
    titleAr: "التجارة والصناعة في عُمان",
    descriptionEn: "Industrial and trade companies operating in Oman with verified contacts.",
    descriptionAr: "شركات صناعية وتجارية تعمل في عُمان مع بيانات اتصال موثقة.",
    records: 19000,
    emails: 14000,
    phones: 17000,
    categoryEn: "Industry",
    categoryAr: "صناعة",
    countryEn: "Oman",
    countryAr: "عُمان",
  },
];

const DataStore: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const categories = useMemo(() => {
    const unique = [...new Set(datasets.map((d) => d.categoryEn))];
    return unique.map((cat) => ({
      en: cat,
      ar: datasets.find((d) => d.categoryEn === cat)?.categoryAr || cat,
    }));
  }, []);

  const countries = useMemo(() => {
    const unique = [...new Set(datasets.map((d) => d.countryEn).filter(Boolean))];
    return unique.map((c) => ({
      en: c!,
      ar: datasets.find((d) => d.countryEn === c)?.countryAr || c!,
    }));
  }, []);

  const filtered = useMemo(() => {
    return datasets.filter((d) => {
      if (selectedCategory && d.categoryEn !== selectedCategory) return false;
      if (selectedCountry && d.countryEn !== selectedCountry) return false;
      return true;
    });
  }, [selectedCategory, selectedCountry]);

  const hasFilters = selectedCategory || selectedCountry;

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      <Header />
      <DataStoreHero />

      {/* Trust badges */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, labelEn: "Verified Data", labelAr: "بيانات موثقة" },
              { icon: RefreshCw, labelEn: "Updated Monthly", labelAr: "تحديث شهري" },
              { icon: Headphones, labelEn: "24/7 Support", labelAr: "دعم متواصل" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                <item.icon size={20} className="text-primary" />
                <span className="text-sm font-medium">{t(item.labelEn, item.labelAr)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datasets Grid */}
      <section id="datasets" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">
              {t("Available Datasets", "البيانات المتاحة")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Browse Our Data Packages", "تصفح باقات البيانات")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Each dataset is carefully compiled and verified. Preview before you buy, or download a free sample.",
                "كل قاعدة بيانات مجمّعة بعناية وموثقة. يمكنك المعاينة قبل الشراء أو تحميل عينة مجانية."
              )}
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 p-4 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Filter size={16} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {t("Filter by", "تصفية حسب")}
              </span>
              {hasFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-muted-foreground ml-auto"
                  onClick={() => { setSelectedCategory(null); setSelectedCountry(null); }}
                >
                  <X size={14} />
                  {t("Clear all", "مسح الكل")}
                </Button>
              )}
            </div>

            {/* Category filters */}
            <div className="mb-3">
              <span className="text-xs text-muted-foreground mb-2 block">
                {t("Category", "الفئة")}
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat.en}
                    variant={selectedCategory === cat.en ? "default" : "outline"}
                    size="sm"
                    className="text-xs h-8 rounded-full"
                    onClick={() => setSelectedCategory(selectedCategory === cat.en ? null : cat.en)}
                  >
                    {t(cat.en, cat.ar)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Country filters */}
            <div>
              <span className="text-xs text-muted-foreground mb-2 block">
                {t("Country / Region", "الدولة / المنطقة")}
              </span>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <Button
                    key={c.en}
                    variant={selectedCountry === c.en ? "default" : "outline"}
                    size="sm"
                    className="text-xs h-8 rounded-full"
                    onClick={() => setSelectedCountry(selectedCountry === c.en ? null : c.en)}
                  >
                    {t(c.en, c.ar)}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-4 text-sm text-muted-foreground">
            {t(
              `Showing ${filtered.length} of ${datasets.length} datasets`,
              `عرض ${filtered.length} من ${datasets.length} قاعدة بيانات`
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dataset) => (
              <DatasetCard key={dataset.id} dataset={dataset} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {t("No datasets match your filters.", "لا توجد نتائج تطابق الفلاتر.")}
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => { setSelectedCategory(null); setSelectedCountry(null); }}
              >
                {t("Clear filters", "مسح الفلاتر")}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Section */}
      <DataStorePricing />

      {/* Custom CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("Need a Custom Package?", "تحتاج باقة مخصصة؟")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t(
              "We can create custom datasets tailored to your specific industry, region, or requirements. Contact us for a personalized quote.",
              "يمكننا إنشاء قواعد بيانات مخصصة حسب مجالك أو منطقتك أو متطلباتك. تواصل معنا للحصول على عرض سعر مخصص."
            )}
          </p>
          <a
            href="https://wa.me/201006334062?text=I%20need%20a%20custom%20data%20package"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {t("Get Custom Quote", "احصل على عرض سعر")}
          </a>
        </div>
      </section>

      <div className="pb-16">
        <Footer />
      </div>

      <DataStoreCTA />
    </div>
  );
};

export default DataStore;

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play, Users, Star, Clock, BookOpen, ChevronDown, ChevronUp,
  MessageSquare, Award, Target, Zap, TrendingUp, CheckCircle2
} from "lucide-react";

interface CourseModule {
  titleEn: string;
  titleAr: string;
  lessons: number;
  duration: string;
  topics: { en: string; ar: string }[];
}

const modules: CourseModule[] = [
  {
    titleEn: "Core Marketing Psychology",
    titleAr: "أساسيات علم نفس التسويق",
    lessons: 15,
    duration: "3h 13m",
    topics: [
      { en: "Introduction to Marketing", ar: "مقدمة في التسويق" },
      { en: "Branding Fundamentals", ar: "أساسيات العلامة التجارية" },
      { en: "Sales Funnels", ar: "قمع المبيعات" },
      { en: "Audience Research", ar: "بحث الجمهور" },
      { en: "Decision Making Principles", ar: "مبادئ صنع القرار" },
      { en: "Omni-Channel Marketing", ar: "التسويق متعدد القنوات" },
    ],
  },
  {
    titleEn: "Deep Technical Stack",
    titleAr: "المهارات التقنية المتقدمة",
    lessons: 24,
    duration: "10h 0m",
    topics: [
      { en: "Meta Ads Structure", ar: "هيكل إعلانات ميتا" },
      { en: "Campaign Setup & Budget", ar: "إعداد الحملات والميزانية" },
      { en: "Targeting & Tracking", ar: "الاستهداف والتتبع" },
      { en: "Ad Creative (Iron Ad)", ar: "تصميم الإعلان الحديدي" },
      { en: "Testing & Data Reading", ar: "الاختبار وقراءة البيانات" },
      { en: "E-Commerce Blueprint", ar: "مخطط التجارة الإلكترونية" },
      { en: "Lead Generation", ar: "توليد العملاء المحتملين" },
    ],
  },
  {
    titleEn: "TikTok Ads Mastery",
    titleAr: "احتراف إعلانات تيك توك",
    lessons: 8,
    duration: "34m",
    topics: [
      { en: "TikTok Ads Foundations", ar: "أساسيات إعلانات تيك توك" },
      { en: "Account & Pixel Setup", ar: "إعداد الحساب والبكسل" },
      { en: "Campaign Setup", ar: "إعداد الحملة" },
      { en: "Custom & Lookalike Audiences", ar: "الجماهير المخصصة والمشابهة" },
    ],
  },
  {
    titleEn: "Money Hacking & Scaling",
    titleAr: "مهارات كسب المال والتوسع",
    lessons: 12,
    duration: "2h 47m",
    topics: [
      { en: "How To Get Clients", ar: "كيف تحصل على عملاء" },
      { en: "Framework for Success", ar: "إطار عمل للنجاح" },
      { en: "Irresistible Offers", ar: "عروض لا تقاوم" },
      { en: "Sales Scripts", ar: "نصوص المبيعات" },
      { en: "Meeting Breakdowns", ar: "تحليل الاجتماعات" },
    ],
  },
  {
    titleEn: "Live Mentorship Sessions",
    titleAr: "جلسات إرشاد مباشرة",
    lessons: 9,
    duration: "7h 24m",
    topics: [
      { en: "Case Studies", ar: "دراسات حالة" },
      { en: "1:1 Consultations", ar: "استشارات فردية" },
      { en: "CRO Sessions", ar: "جلسات تحسين التحويل" },
      { en: "Q&A Sessions", ar: "جلسات أسئلة وأجوبة" },
    ],
  },
  {
    titleEn: "Guest Speakers & Success Stories",
    titleAr: "ضيوف شرف وقصص نجاح",
    lessons: 5,
    duration: "6h 3m",
    topics: [
      { en: "Industry Leaders Interviews", ar: "مقابلات قادة المجال" },
      { en: "Student Success Stories", ar: "قصص نجاح الطلاب" },
      { en: "Real Campaign Breakdowns", ar: "تحليل حملات حقيقية" },
    ],
  },
];

const stats = [
  { valueEn: "2500+", valueAr: "+٢٥٠٠", labelEn: "Students", labelAr: "طالب" },
  { valueEn: "30+", valueAr: "+٣٠", labelEn: "Hours of Content", labelAr: "ساعة محتوى" },
  { valueEn: "4.7/5", valueAr: "٤.٧/٥", labelEn: "Average Rating", labelAr: "متوسط التقييم" },
  { valueEn: "94%", valueAr: "٩٤٪", labelEn: "Success Rate", labelAr: "نسبة النجاح" },
];

const testimonials = [
  {
    nameEn: "Mohamed F.",
    nameAr: "محمد ف.",
    textEn: "After joining, I signed multiple clients and started getting them strong results immediately.",
    textAr: "بعد الانضمام، وقعت مع عدة عملاء وبدأت أحقق لهم نتائج قوية فورًا.",
    resultEn: "Multiple clients signed",
    resultAr: "توقيع عدة عملاء",
  },
  {
    nameEn: "Hazem",
    nameAr: "حازم",
    textEn: "Made 85,000 in sales for one of my clients after applying the course strategies.",
    textAr: "حققت ٨٥,٠٠٠ في المبيعات لأحد عملائي بعد تطبيق استراتيجيات الكورس.",
    resultEn: "85K in client sales",
    resultAr: "٨٥ ألف مبيعات",
  },
  {
    nameEn: "Hatem Y.",
    nameAr: "حاتم ي.",
    textEn: "Made over 1.3 Million for one of my clients using the exact strategies from the course.",
    textAr: "حققت أكثر من ١.٣ مليون لأحد عملائي باستخدام نفس استراتيجيات الكورس.",
    resultEn: "+1.3M revenue",
    resultAr: "+١.٣ مليون إيرادات",
  },
];

const Courses: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      <Header />

      {/* Hero Section - Dark theme inspired by reference */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/85 text-background py-20 md:py-28">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Top banner */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2.5">
              <Zap size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("BECOME A TOP 1% PERFORMANCE MARKETER", "كن من أفضل ١٪ في التسويق الأدائي")}
              </span>
              <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-bold">
                {t("JOIN NOW", "انضم الآن")}
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t("Make ", "حقق ")}
              <span className="text-primary italic">+100K</span>
              {t(" in ", " في ")}
              <span className="text-primary">90</span>
              {t(" Days", " يوم")}
            </h1>
            <p className="text-xl md:text-2xl opacity-80 mb-4">
              {t(
                "If you are a Beginner Media Buyer",
                "إذا كنت مبتدئ في شراء الإعلانات"
              )}
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 mb-10">
              {[
                { icon: Users, text: t("2500+ Students", "+٢٥٠٠ طالب") },
                { icon: Star, text: t("4.7/5 Rating", "تقييم ٤.٧/٥") },
                { icon: Award, text: t("200+ Reviews", "+٢٠٠ تقييم") },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm opacity-75">
                  <item.icon size={16} className="text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 py-6 text-lg"
                asChild
              >
                <a href="https://wa.me/201006334062?text=I%20want%20to%20enroll%20in%20the%20course" target="_blank" rel="noopener noreferrer">
                  {t("Enroll Now", "سجّل الآن")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 text-base px-10 py-6 text-lg"
                onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play size={18} />
                {t("View Curriculum", "عرض المنهج")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{t(stat.valueEn, stat.valueAr)}</div>
                <div className="text-sm text-muted-foreground mt-1">{t(stat.labelEn, stat.labelAr)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Phases */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">
              {t("Advanced Curriculum 2024", "منهج متقدم ٢٠٢٤")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Course Phases", "مراحل الكورس")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Master the art and science of media buying through a meticulously engineered progression from foundational principles to elite technical mastery.",
                "أتقن فن وعلم شراء الإعلانات من خلال مسار مصمم بدقة من المبادئ الأساسية إلى الإتقان التقني المتقدم."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => (
              <Card key={i} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border">
                <CardContent className="p-0">
                  {/* Phase header */}
                  <div className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs font-bold">
                        {t(`Phase ${String(i + 1).padStart(2, '0')}`, `المرحلة ${String(i + 1).padStart(2, '0')}`)}
                      </Badge>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen size={12} />
                          {mod.lessons}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {mod.duration}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {t(mod.titleEn, mod.titleAr)}
                    </h3>
                  </div>

                  {/* Topics */}
                  <div className="p-5">
                    <button
                      className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground mb-3"
                      onClick={() => setExpandedModule(expandedModule === i ? null : i)}
                    >
                      {t("Topics", "المواضيع")}
                      {expandedModule === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {expandedModule === i && (
                      <ul className="space-y-2">
                        {mod.topics.map((topic, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle2 size={14} className="text-primary shrink-0" />
                            {t(topic.en, topic.ar)}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section id="curriculum" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("What You'll Learn", "ماذا ستتعلم")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Target, titleEn: "Total Content", titleAr: "المحتوى الكلي", valueEn: "30+ Hours", valueAr: "+٣٠ ساعة" },
              { icon: TrendingUp, titleEn: "Success Rate", titleAr: "نسبة النجاح", valueEn: "94%", valueAr: "٩٤٪" },
              { icon: Zap, titleEn: "Average ROI", titleAr: "متوسط العائد", valueEn: "4.8x", valueAr: "٤.٨×" },
            ].map((item, i) => (
              <Card key={i} className="text-center p-6 border-primary/20">
                <item.icon size={32} className="mx-auto text-primary mb-3" />
                <div className="text-2xl font-bold text-foreground">{t(item.valueEn, item.valueAr)}</div>
                <div className="text-sm text-muted-foreground mt-1">{t(item.titleEn, item.titleAr)}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">
              {t("Student Results", "نتائج الطلاب")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Our Students Don't Just Learn — They Win!", "طلابنا لا يتعلمون فقط — بل يفوزون!")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t_item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t(t_item.nameEn, t_item.nameAr)}</div>
                      <Badge className="bg-primary/10 text-primary text-xs">
                        {t(t_item.resultEn, t_item.resultAr)}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{t(t_item.textEn, t_item.textAr)}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-20 bg-gradient-to-b from-foreground via-foreground/95 to-foreground/90 text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("Ready to Start?", "مستعد للبداية؟")}
          </h2>
          <p className="text-lg opacity-80 mb-3 max-w-xl mx-auto">
            {t(
              "Join 2500+ students who are already making results.",
              "انضم لأكثر من ٢٥٠٠ طالب يحققون نتائج بالفعل."
            )}
          </p>

          <div className="inline-block bg-background/10 backdrop-blur rounded-2xl p-8 mt-6 border border-background/20">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-lg line-through opacity-50">{t("LE 10,000", "١٠,٠٠٠ ج.م")}</span>
            </div>
            <div className="text-5xl font-bold text-primary mb-2">{t("LE 5,000", "٥,٠٠٠ ج.م")}</div>
            <p className="text-sm opacity-70 mb-6">{t("50% off — Limited time offer", "خصم ٥٠٪ — عرض محدود")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6"
                asChild
              >
                <a href="https://wa.me/201006334062?text=I%20want%20to%20enroll%20in%20the%20course" target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={18} />
                  {t("Enroll via WhatsApp", "سجّل عبر واتساب")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play, Users, Star, Clock, BookOpen, ChevronDown, ChevronUp,
  MessageSquare, Award, Target, Zap, TrendingUp, CheckCircle2,
  ArrowLeft, ArrowRight, Send, Database, Globe, Phone,
  Bot, Settings, BarChart3, Shield, Megaphone, Search,
  FileSpreadsheet, Mail, Smartphone, Layers
} from "lucide-react";

// ─── Course Data Types ───
interface CourseModule {
  titleEn: string;
  titleAr: string;
  lessons: number;
  duration: string;
  topics: { en: string; ar: string }[];
}

interface CourseTestimonial {
  nameEn: string;
  nameAr: string;
  textEn: string;
  textAr: string;
  resultEn: string;
  resultAr: string;
}

interface CourseData {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: React.ReactNode;
  color: string;
  heroTagEn: string;
  heroTagAr: string;
  stats: { valueEn: string; valueAr: string; labelEn: string; labelAr: string }[];
  modules: CourseModule[];
  highlights: { icon: React.ElementType; titleEn: string; titleAr: string; valueEn: string; valueAr: string }[];
  testimonials: CourseTestimonial[];
  priceOriginalEn: string;
  priceOriginalAr: string;
  priceEn: string;
  priceAr: string;
  discountEn: string;
  discountAr: string;
  whatsappLink: string;
  vimeoId: string;
}

// ─── Course 1: WhatsApp Professional ───
const whatsappCourse: CourseData = {
  id: "whatsapp",
  titleEn: "WhatsApp Marketing Mastery",
  titleAr: "احتراف تسويق واتساب",
  subtitleEn: "The Complete Professional WhatsApp Campaign Management Course",
  subtitleAr: "الكورس الاحترافي الشامل لإدارة حملات واتساب",
  descriptionEn: "Master all types of WhatsApp campaigns — from official WhatsApp Business API to mass campaigns using various software tools. Learn automation, chatbots, and advanced messaging strategies.",
  descriptionAr: "أتقن جميع أنواع حملات واتساب — من واتساب بزنس API الرسمي إلى الحملات الجماعية باستخدام برامج متنوعة. تعلّم الأتمتة، الشات بوت، واستراتيجيات المراسلة المتقدمة.",
  icon: <MessageSquare size={28} />,
  color: "from-green-500/20 to-emerald-500/10",
  heroTagEn: "BECOME A WHATSAPP MARKETING EXPERT",
  heroTagAr: "كن خبيرًا في تسويق واتساب",
  stats: [
    { valueEn: "1200+", valueAr: "+١٢٠٠", labelEn: "Students", labelAr: "طالب" },
    { valueEn: "25+", valueAr: "+٢٥", labelEn: "Hours of Content", labelAr: "ساعة محتوى" },
    { valueEn: "4.8/5", valueAr: "٤.٨/٥", labelEn: "Average Rating", labelAr: "متوسط التقييم" },
    { valueEn: "96%", valueAr: "٩٦٪", labelEn: "Success Rate", labelAr: "نسبة النجاح" },
  ],
  modules: [
    {
      titleEn: "WhatsApp Business API Fundamentals",
      titleAr: "أساسيات واتساب بزنس API",
      lessons: 12,
      duration: "4h 30m",
      topics: [
        { en: "Introduction to WhatsApp Business Platform", ar: "مقدمة في منصة واتساب بزنس" },
        { en: "API Setup & Configuration", ar: "إعداد وتهيئة الـ API" },
        { en: "Message Templates & Approval", ar: "قوالب الرسائل والموافقة عليها" },
        { en: "Webhook Integration", ar: "تكامل Webhook" },
        { en: "BSP Selection (360dialog, Twilio, etc.)", ar: "اختيار مزود الخدمة (360dialog, Twilio, إلخ)" },
        { en: "Green Tick Verification", ar: "توثيق العلامة الخضراء" },
      ],
    },
    {
      titleEn: "Mass WhatsApp Campaigns",
      titleAr: "حملات واتساب الجماعية",
      lessons: 15,
      duration: "5h 15m",
      topics: [
        { en: "Campaign Software Overview (WaSender, WATool, etc.)", ar: "نظرة عامة على برامج الحملات (WaSender, WATool, إلخ)" },
        { en: "Number Filtering & Validation", ar: "فلترة الأرقام والتحقق منها" },
        { en: "Anti-Ban Strategies & Best Practices", ar: "استراتيجيات منع الحظر وأفضل الممارسات" },
        { en: "Bulk Message Scheduling", ar: "جدولة الرسائل الجماعية" },
        { en: "Multi-Device & Multi-Account Setup", ar: "إعداد أجهزة وحسابات متعددة" },
        { en: "Group Marketing Techniques", ar: "تقنيات التسويق عبر المجموعات" },
      ],
    },
    {
      titleEn: "Chatbot & Automation",
      titleAr: "الشات بوت والأتمتة",
      lessons: 10,
      duration: "3h 45m",
      topics: [
        { en: "Building WhatsApp Chatbots", ar: "بناء شات بوت واتساب" },
        { en: "Flow Builder & Interactive Messages", ar: "بناء التدفقات والرسائل التفاعلية" },
        { en: "Auto-Reply & Quick Replies Setup", ar: "إعداد الردود التلقائية والسريعة" },
        { en: "Integration with CRM Systems", ar: "التكامل مع أنظمة إدارة العملاء" },
        { en: "N8N & Make.com Automations", ar: "أتمتة عبر N8N و Make.com" },
      ],
    },
    {
      titleEn: "Advanced Campaign Strategies",
      titleAr: "استراتيجيات الحملات المتقدمة",
      lessons: 8,
      duration: "3h 0m",
      topics: [
        { en: "Segmentation & Targeting", ar: "التقسيم والاستهداف" },
        { en: "A/B Testing Messages", ar: "اختبار A/B للرسائل" },
        { en: "Conversion Tracking & Analytics", ar: "تتبع التحويلات والتحليلات" },
        { en: "Retargeting via WhatsApp", ar: "إعادة الاستهداف عبر واتساب" },
      ],
    },
    {
      titleEn: "Compliance & Scaling",
      titleAr: "الامتثال والتوسع",
      lessons: 6,
      duration: "2h 30m",
      topics: [
        { en: "WhatsApp Business Policy & Compliance", ar: "سياسات واتساب بزنس والامتثال" },
        { en: "Quality Rating Management", ar: "إدارة تصنيف الجودة" },
        { en: "Scaling to 100K+ Messages/Day", ar: "التوسع لأكثر من ١٠٠ ألف رسالة/يوم" },
        { en: "Team Management & Roles", ar: "إدارة الفريق والأدوار" },
      ],
    },
    {
      titleEn: "Live Projects & Case Studies",
      titleAr: "مشاريع حية ودراسات حالة",
      lessons: 8,
      duration: "5h 0m",
      topics: [
        { en: "Real Campaign Setup (Live)", ar: "إعداد حملة حقيقية (بث مباشر)" },
        { en: "E-Commerce WhatsApp Funnels", ar: "قمع مبيعات واتساب للتجارة الإلكترونية" },
        { en: "Lead Generation Campaigns", ar: "حملات توليد العملاء المحتملين" },
        { en: "Client Success Stories", ar: "قصص نجاح العملاء" },
      ],
    },
  ],
  highlights: [
    { icon: Phone, titleEn: "Total Content", titleAr: "المحتوى الكلي", valueEn: "25+ Hours", valueAr: "+٢٥ ساعة" },
    { icon: TrendingUp, titleEn: "Success Rate", titleAr: "نسبة النجاح", valueEn: "96%", valueAr: "٩٦٪" },
    { icon: Zap, titleEn: "Campaign ROI", titleAr: "عائد الحملات", valueEn: "8x+", valueAr: "+٨×" },
  ],
  testimonials: [
    {
      nameEn: "Ahmed K.",
      nameAr: "أحمد ك.",
      textEn: "After the course, I managed WhatsApp campaigns for 15+ clients across the Gulf with a 92% open rate.",
      textAr: "بعد الكورس، أدرت حملات واتساب لأكثر من ١٥ عميل في الخليج بنسبة فتح ٩٢٪.",
      resultEn: "15+ clients managed",
      resultAr: "إدارة +١٥ عميل",
    },
    {
      nameEn: "Sara M.",
      nameAr: "سارة م.",
      textEn: "I built a full WhatsApp automation system for my e-commerce store and tripled my sales.",
      textAr: "بنيت نظام أتمتة واتساب كامل لمتجري الإلكتروني وضاعفت مبيعاتي ٣ مرات.",
      resultEn: "3x sales increase",
      resultAr: "٣× زيادة في المبيعات",
    },
    {
      nameEn: "Omar H.",
      nameAr: "عمر ح.",
      textEn: "The API section alone was worth the entire course. Now I send 50K+ messages daily for clients.",
      textAr: "قسم الـ API وحده يستحق سعر الكورس كاملاً. الآن أرسل +٥٠ ألف رسالة يوميًا للعملاء.",
      resultEn: "50K+ msgs/day",
      resultAr: "+٥٠ ألف رسالة/يوم",
    },
  ],
  priceOriginalEn: "LE 8,000",
  priceOriginalAr: "٨,٠٠٠ ج.م",
  priceEn: "LE 4,000",
  priceAr: "٤,٠٠٠ ج.م",
  discountEn: "50% off — Limited time offer",
  discountAr: "خصم ٥٠٪ — عرض محدود",
  whatsappLink: "https://wa.me/201006334062?text=I%20want%20to%20enroll%20in%20the%20WhatsApp%20Marketing%20course",
  vimeoId: "YOUR_WHATSAPP_COURSE_VIMEO_ID",
};

// ─── Course 2: Digital Marketing, Data Scraping & WhatsApp ───
const digitalMarketingCourse: CourseData = {
  id: "digital-marketing",
  titleEn: "Digital Marketing, Data Scraping & WhatsApp",
  titleAr: "التسويق الرقمي واستخراج البيانات وواتساب",
  subtitleEn: "The Ultimate Growth Hacking Course: Marketing + Data + Automation",
  subtitleAr: "كورس النمو الشامل: تسويق + بيانات + أتمتة",
  descriptionEn: "A comprehensive course combining digital marketing strategies, professional data scraping techniques, and WhatsApp marketing integration. Learn to build complete marketing systems from data collection to conversion.",
  descriptionAr: "كورس شامل يجمع بين استراتيجيات التسويق الرقمي، تقنيات استخراج البيانات الاحترافية، وتكامل تسويق واتساب. تعلّم بناء أنظمة تسويق كاملة من جمع البيانات إلى التحويل.",
  icon: <Globe size={28} />,
  color: "from-blue-500/20 to-indigo-500/10",
  heroTagEn: "MASTER DIGITAL MARKETING & DATA SCRAPING",
  heroTagAr: "أتقن التسويق الرقمي واستخراج البيانات",
  stats: [
    { valueEn: "2500+", valueAr: "+٢٥٠٠", labelEn: "Students", labelAr: "طالب" },
    { valueEn: "40+", valueAr: "+٤٠", labelEn: "Hours of Content", labelAr: "ساعة محتوى" },
    { valueEn: "4.7/5", valueAr: "٤.٧/٥", labelEn: "Average Rating", labelAr: "متوسط التقييم" },
    { valueEn: "94%", valueAr: "٩٤٪", labelEn: "Success Rate", labelAr: "نسبة النجاح" },
  ],
  modules: [
    {
      titleEn: "Digital Marketing Foundations",
      titleAr: "أساسيات التسويق الرقمي",
      lessons: 15,
      duration: "5h 30m",
      topics: [
        { en: "Marketing Psychology & Consumer Behavior", ar: "علم نفس التسويق وسلوك المستهلك" },
        { en: "Branding & Positioning Strategy", ar: "استراتيجية العلامة التجارية والتموضع" },
        { en: "Sales Funnels & Customer Journey", ar: "قمع المبيعات ورحلة العميل" },
        { en: "Content Marketing Strategy", ar: "استراتيجية تسويق المحتوى" },
        { en: "SEO & Organic Growth", ar: "تحسين محركات البحث والنمو العضوي" },
        { en: "Email Marketing Campaigns", ar: "حملات التسويق بالبريد الإلكتروني" },
      ],
    },
    {
      titleEn: "Paid Advertising Mastery",
      titleAr: "احتراف الإعلانات المدفوعة",
      lessons: 20,
      duration: "8h 0m",
      topics: [
        { en: "Meta Ads (Facebook & Instagram)", ar: "إعلانات ميتا (فيسبوك وإنستجرام)" },
        { en: "Google Ads & YouTube Ads", ar: "إعلانات جوجل ويوتيوب" },
        { en: "TikTok Ads Setup & Scaling", ar: "إعداد وتوسيع إعلانات تيك توك" },
        { en: "Ad Creative & Copywriting", ar: "تصميم الإعلان وكتابة النصوص" },
        { en: "Pixel Setup & Conversion Tracking", ar: "إعداد البكسل وتتبع التحويلات" },
        { en: "Budget Optimization & ROAS", ar: "تحسين الميزانية والعائد على الإنفاق" },
        { en: "Retargeting Strategies", ar: "استراتيجيات إعادة الاستهداف" },
      ],
    },
    {
      titleEn: "Data Scraping & Collection",
      titleAr: "استخراج وجمع البيانات",
      lessons: 18,
      duration: "7h 0m",
      topics: [
        { en: "Web Scraping Fundamentals", ar: "أساسيات استخراج بيانات الويب" },
        { en: "Google Maps Data Extraction", ar: "استخراج بيانات خرائط جوجل" },
        { en: "LinkedIn & Social Media Scraping", ar: "استخراج بيانات لينكدإن ووسائل التواصل" },
        { en: "Phone Number & Email Collection", ar: "جمع أرقام الهواتف والبريد الإلكتروني" },
        { en: "Data Cleaning & Validation", ar: "تنظيف البيانات والتحقق منها" },
        { en: "Building Targeted Contact Lists", ar: "بناء قوائم اتصال مستهدفة" },
        { en: "Legal & Ethical Considerations", ar: "الاعتبارات القانونية والأخلاقية" },
      ],
    },
    {
      titleEn: "WhatsApp Marketing Integration",
      titleAr: "تكامل تسويق واتساب",
      lessons: 12,
      duration: "4h 30m",
      topics: [
        { en: "WhatsApp Business Setup", ar: "إعداد واتساب بزنس" },
        { en: "Bulk Messaging Campaigns", ar: "حملات الرسائل الجماعية" },
        { en: "WhatsApp + Scraped Data Strategy", ar: "استراتيجية واتساب + البيانات المستخرجة" },
        { en: "Automation & Chatbots", ar: "الأتمتة والشات بوت" },
        { en: "Converting Leads via WhatsApp", ar: "تحويل العملاء المحتملين عبر واتساب" },
      ],
    },
    {
      titleEn: "Growth Hacking & Scaling",
      titleAr: "النمو السريع والتوسع",
      lessons: 10,
      duration: "4h 0m",
      topics: [
        { en: "Building a Complete Marketing System", ar: "بناء نظام تسويق متكامل" },
        { en: "Client Acquisition Strategies", ar: "استراتيجيات اكتساب العملاء" },
        { en: "Freelancing & Agency Building", ar: "العمل الحر وبناء الوكالة" },
        { en: "Pricing & Proposal Creation", ar: "التسعير وإعداد العروض" },
        { en: "Scaling to 6 Figures", ar: "التوسع لستة أرقام" },
      ],
    },
    {
      titleEn: "Live Projects & Mentorship",
      titleAr: "مشاريع حية وإرشاد",
      lessons: 8,
      duration: "6h 0m",
      topics: [
        { en: "Real Campaign Execution (Live)", ar: "تنفيذ حملة حقيقية (بث مباشر)" },
        { en: "Data Scraping Live Workshop", ar: "ورشة استخراج بيانات مباشرة" },
        { en: "Student Success Stories", ar: "قصص نجاح الطلاب" },
        { en: "1:1 Mentorship Sessions", ar: "جلسات إرشاد فردية" },
      ],
    },
  ],
  highlights: [
    { icon: Target, titleEn: "Total Content", titleAr: "المحتوى الكلي", valueEn: "40+ Hours", valueAr: "+٤٠ ساعة" },
    { icon: TrendingUp, titleEn: "Success Rate", titleAr: "نسبة النجاح", valueEn: "94%", valueAr: "٩٤٪" },
    { icon: Zap, titleEn: "Average ROI", titleAr: "متوسط العائد", valueEn: "5x+", valueAr: "+٥×" },
  ],
  testimonials: [
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
      textEn: "The data scraping module combined with WhatsApp marketing tripled my lead generation.",
      textAr: "قسم استخراج البيانات مع تسويق واتساب ضاعف توليد العملاء المحتملين ٣ مرات.",
      resultEn: "3x lead generation",
      resultAr: "٣× توليد عملاء",
    },
  ],
  priceOriginalEn: "LE 10,000",
  priceOriginalAr: "١٠,٠٠٠ ج.م",
  priceEn: "LE 5,000",
  priceAr: "٥,٠٠٠ ج.م",
  discountEn: "50% off — Limited time offer",
  discountAr: "خصم ٥٠٪ — عرض محدود",
  whatsappLink: "https://wa.me/201006334062?text=I%20want%20to%20enroll%20in%20the%20Digital%20Marketing%20course",
  vimeoId: "YOUR_DIGITAL_MARKETING_COURSE_VIMEO_ID",
};

const allCourses = [whatsappCourse, digitalMarketingCourse];

// ─── Course Card for Selection ───
const CourseSelectionCard: React.FC<{
  course: CourseData;
  onSelect: () => void;
  isRtl: boolean;
  t: (en: string, ar: string) => string;
}> = ({ course, onSelect, isRtl, t }) => (
  <Card className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/60 cursor-pointer" onClick={onSelect}>
    <CardContent className="p-0">
      <div className={`p-8 bg-gradient-to-br ${course.color} border-b border-border`}>
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
          {course.icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {t(course.titleEn, course.titleAr)}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(course.subtitleEn, course.subtitleAr)}
        </p>
      </div>

      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {t(course.descriptionEn, course.descriptionAr)}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {course.stats.map((stat, i) => (
            <div key={i} className="text-center p-3 bg-muted/40 rounded-xl">
              <div className="text-lg font-bold text-primary">{t(stat.valueEn, stat.valueAr)}</div>
              <div className="text-[11px] text-muted-foreground">{t(stat.labelEn, stat.labelAr)}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm line-through text-muted-foreground">{t(course.priceOriginalEn, course.priceOriginalAr)}</span>
            <span className="text-2xl font-bold text-primary ml-2 mr-2">{t(course.priceEn, course.priceAr)}</span>
          </div>
          <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
            {t("View Details", "عرض التفاصيل")}
            {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

// ─── Course Detail View ───
const CourseDetailView: React.FC<{
  course: CourseData;
  onBack: () => void;
  isRtl: boolean;
  t: (en: string, ar: string) => string;
}> = ({ course, onBack, isRtl, t }) => {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/85 text-background py-20 md:py-28">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors mb-8"
          >
            {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {t("Back to All Courses", "العودة لجميع الكورسات")}
          </button>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2.5">
              <Zap size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                {t(course.heroTagEn, course.heroTagAr)}
              </span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t(course.titleEn, course.titleAr)}
            </h1>
            <p className="text-xl md:text-2xl opacity-80 mb-4">
              {t(course.subtitleEn, course.subtitleAr)}
            </p>

            <div className="flex items-center justify-center gap-6 mt-8 mb-10 flex-wrap">
              {course.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-sm opacity-75">
                  {[Users, Clock, Star, Award][i % 4] && React.createElement([Users, Clock, Star, Award][i % 4], { size: 16, className: "text-primary" })}
                  <span>{t(stat.valueEn, stat.valueAr)} {t(stat.labelEn, stat.labelAr)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6" asChild>
                <a href={course.whatsappLink} target="_blank" rel="noopener noreferrer">
                  {t("Enroll Now", "سجّل الآن")}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 text-lg px-10 py-6"
                onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play size={18} />
                {t("View Curriculum", "عرض المنهج")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {course.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{t(stat.valueEn, stat.valueAr)}</div>
                <div className="text-sm text-muted-foreground mt-1">{t(stat.labelEn, stat.labelAr)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Promo Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-3">
              <Play size={14} className="mr-1" />
              {t("Course Promo", "برومو الكورس")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Watch Before You Enroll", "شاهد قبل التسجيل")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Get a sneak peek of what you'll learn and how this course will transform your skills",
                "ألقِ نظرة سريعة على ما ستتعلمه وكيف سيغير هذا الكورس مهاراتك"
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-foreground/5">
              <div className="aspect-video">
                {course.vimeoId && !course.vimeoId.startsWith("YOUR_") ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${course.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    allowFullScreen
                    title={t(course.titleEn, course.titleAr)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-foreground/10 to-foreground/5 flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                      <Play size={36} className="text-primary ml-1" />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {t("Promo video coming soon", "فيديو البرومو قريبًا")}
                    </p>
                    <span className="text-xs text-muted-foreground/60">Vimeo</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Phases */}
      <section id="curriculum" className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-3">
              {t("Advanced Curriculum 2024", "منهج متقدم ٢٠٢٤")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Course Phases", "مراحل الكورس")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.modules.map((mod, i) => (
              <Card key={i} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border">
                <CardContent className="p-0">
                  <div className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs font-bold">
                        {t(`Phase ${String(i + 1).padStart(2, '0')}`, `المرحلة ${String(i + 1).padStart(2, '0')}`)}
                      </Badge>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><BookOpen size={12} />{mod.lessons}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{mod.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{t(mod.titleEn, mod.titleAr)}</h3>
                  </div>

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

      {/* Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("What You'll Learn", "ماذا ستتعلم")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {course.highlights.map((item, i) => (
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
            <Badge variant="secondary" className="mb-3">{t("Student Results", "نتائج الطلاب")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Our Students Don't Just Learn — They Win!", "طلابنا لا يتعلمون فقط — بل يفوزون!")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {course.testimonials.map((item, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t(item.nameEn, item.nameAr)}</div>
                      <Badge className="bg-primary/10 text-primary text-xs">{t(item.resultEn, item.resultAr)}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">"{t(item.textEn, item.textAr)}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-b from-foreground via-foreground/95 to-foreground/90 text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("Ready to Start?", "مستعد للبداية؟")}</h2>
          <p className="text-lg opacity-80 mb-3 max-w-xl mx-auto">
            {t(
              `Join ${course.stats[0].valueEn} students who are already making results.`,
              `انضم لأكثر من ${course.stats[0].valueAr} طالب يحققون نتائج بالفعل.`
            )}
          </p>

          <div className="inline-block bg-background/10 backdrop-blur rounded-2xl p-8 mt-6 border border-background/20">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-lg line-through opacity-50">{t(course.priceOriginalEn, course.priceOriginalAr)}</span>
            </div>
            <div className="text-5xl font-bold text-primary mb-2">{t(course.priceEn, course.priceAr)}</div>
            <p className="text-sm opacity-70 mb-6">{t(course.discountEn, course.discountAr)}</p>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6" asChild>
              <a href={course.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageSquare size={18} />
                {t("Enroll via WhatsApp", "سجّل عبر واتساب")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// ─── Main Courses Page ───
const Courses: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const activeCourse = allCourses.find(c => c.id === selectedCourse);

  return (
    <div className={`min-h-screen bg-background ${isRtl ? "rtl" : "ltr"}`} dir={isRtl ? "rtl" : "ltr"}>
      <Header />

      {activeCourse ? (
        <CourseDetailView
          course={activeCourse}
          onBack={() => setSelectedCourse(null)}
          isRtl={isRtl}
          t={t}
        />
      ) : (
        <>
          {/* Courses Landing Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/85 text-background py-20 md:py-28">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-6">
                {t("Professional Courses", "كورسات احترافية")}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t("Level Up Your ", "طوّر ")}
                <span className="text-primary italic">{t("Marketing Skills", "مهاراتك التسويقية")}</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
                {t(
                  "Choose from our expert-led courses designed to transform you into a top-tier digital marketer",
                  "اختر من كورساتنا المتخصصة المصممة لتحولك إلى مسوّق رقمي من الطراز الأول"
                )}
              </p>
            </div>
          </section>

          {/* Course Selection */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {t("Choose Your Path", "اختر مسارك")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Two specialized courses designed to give you real-world skills and results",
                    "كورسان متخصصان مصممان لمنحك مهارات ونتائج حقيقية"
                  )}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {allCourses.map((course) => (
                  <CourseSelectionCard
                    key={course.id}
                    course={course}
                    onSelect={() => setSelectedCourse(course.id)}
                    isRtl={isRtl}
                    t={t}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  {t("Why Our Courses?", "لماذا كورساتنا؟")}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Award, en: "Expert Instructors", ar: "مدربون خبراء", descEn: "Learn from professionals with real market experience", descAr: "تعلّم من محترفين لديهم خبرة سوق حقيقية" },
                  { icon: Target, en: "Practical Projects", ar: "مشاريع عملية", descEn: "Apply what you learn on real campaigns", descAr: "طبّق ما تتعلمه على حملات حقيقية" },
                  { icon: Users, en: "Active Community", ar: "مجتمع نشط", descEn: "Join 3700+ students and network", descAr: "انضم لأكثر من ٣٧٠٠ طالب وتواصل" },
                  { icon: MessageSquare, en: "Lifetime Support", ar: "دعم مدى الحياة", descEn: "Get help whenever you need it", descAr: "احصل على المساعدة وقتما تحتاج" },
                ].map((item, i) => (
                  <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                    <item.icon size={28} className="mx-auto text-primary mb-3" />
                    <h3 className="font-bold text-foreground mb-2">{t(item.en, item.ar)}</h3>
                    <p className="text-sm text-muted-foreground">{t(item.descEn, item.descAr)}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Courses;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Play, Users, Star, Clock, BookOpen, ChevronDown, ChevronUp,
  MessageSquare, Award, Target, Zap, TrendingUp, CheckCircle2,
  ArrowLeft, ArrowRight, GraduationCap, Rocket, ShieldCheck,
  Globe, Phone, Bot, BarChart3, Search, Mail, Layers,
  Send, Wifi, Radio, UserCheck, Heart, Sparkles,
  MousePointerClick, MonitorSmartphone, Megaphone, PieChart,
  Code2, Database, Filter, BrainCircuit, Handshake, DollarSign,
  LineChart, Workflow, Puzzle, Video, User, AtSign
} from "lucide-react";

// ─── Animation variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.12, type: "spring" as const, stiffness: 100 },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" as const, stiffness: 80 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" as const, stiffness: 80 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerSlow = {
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Course Data Types ───
interface CourseModule {
  titleEn: string;
  titleAr: string;
  lessons: number;
  duration: string;
  icon: React.ReactNode;
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
  gradientFrom: string;
  gradientTo: string;
  heroTagEn: string;
  heroTagAr: string;
  features: { icon: React.ElementType; en: string; ar: string }[];
  stats: { valueEn: string; valueAr: string; labelEn: string; labelAr: string; icon: React.ElementType }[];
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
  icon: <MessageSquare size={32} />,
  gradientFrom: "hsl(var(--primary))",
  gradientTo: "hsl(142 76% 36%)",
  heroTagEn: "BECOME A WHATSAPP MARKETING EXPERT",
  heroTagAr: "كن خبيرًا في تسويق واتساب",
  features: [
    { icon: Send, en: "Official API", ar: "API الرسمي" },
    { icon: Bot, en: "Chatbots", ar: "شات بوت" },
    { icon: Radio, en: "Bulk Campaigns", ar: "حملات جماعية" },
    { icon: Workflow, en: "Automation", ar: "أتمتة" },
  ],
  stats: [
    { valueEn: "1200+", valueAr: "+١٢٠٠", labelEn: "Students", labelAr: "طالب", icon: Users },
    { valueEn: "25+", valueAr: "+٢٥", labelEn: "Hours", labelAr: "ساعة", icon: Clock },
    { valueEn: "4.8/5", valueAr: "٤.٨/٥", labelEn: "Rating", labelAr: "تقييم", icon: Star },
    { valueEn: "96%", valueAr: "٩٦٪", labelEn: "Success", labelAr: "نجاح", icon: TrendingUp },
  ],
  modules: [
    {
      titleEn: "WhatsApp Business API Fundamentals",
      titleAr: "أساسيات واتساب بزنس API",
      icon: <Code2 size={20} className="text-primary" />,
      lessons: 12, duration: "4h 30m",
      topics: [
        { en: "Introduction to WhatsApp Business Platform", ar: "مقدمة في منصة واتساب بزنس" },
        { en: "API Setup & Configuration", ar: "إعداد وتهيئة الـ API" },
        { en: "Message Templates & Approval", ar: "قوالب الرسائل والموافقة عليها" },
        { en: "Webhook Integration", ar: "تكامل Webhook" },
        { en: "BSP Selection (360dialog, Twilio)", ar: "اختيار مزود الخدمة (360dialog, Twilio)" },
        { en: "Green Tick Verification", ar: "توثيق العلامة الخضراء" },
      ],
    },
    {
      titleEn: "Mass WhatsApp Campaigns",
      titleAr: "حملات واتساب الجماعية",
      icon: <Megaphone size={20} className="text-primary" />,
      lessons: 15, duration: "5h 15m",
      topics: [
        { en: "Campaign Software (WaSender, WATool)", ar: "برامج الحملات (WaSender, WATool)" },
        { en: "Number Filtering & Validation", ar: "فلترة الأرقام والتحقق منها" },
        { en: "Anti-Ban Strategies", ar: "استراتيجيات منع الحظر" },
        { en: "Bulk Message Scheduling", ar: "جدولة الرسائل الجماعية" },
        { en: "Multi-Device Setup", ar: "إعداد أجهزة متعددة" },
        { en: "Group Marketing Techniques", ar: "تقنيات التسويق عبر المجموعات" },
      ],
    },
    {
      titleEn: "Chatbot & Automation",
      titleAr: "الشات بوت والأتمتة",
      icon: <Bot size={20} className="text-primary" />,
      lessons: 10, duration: "3h 45m",
      topics: [
        { en: "Building WhatsApp Chatbots", ar: "بناء شات بوت واتساب" },
        { en: "Flow Builder & Interactive Messages", ar: "بناء التدفقات والرسائل التفاعلية" },
        { en: "Auto-Reply & Quick Replies", ar: "الردود التلقائية والسريعة" },
        { en: "CRM Integration", ar: "التكامل مع أنظمة إدارة العملاء" },
        { en: "N8N & Make.com Automations", ar: "أتمتة عبر N8N و Make.com" },
      ],
    },
    {
      titleEn: "Advanced Campaign Strategies",
      titleAr: "استراتيجيات الحملات المتقدمة",
      icon: <BarChart3 size={20} className="text-primary" />,
      lessons: 8, duration: "3h 0m",
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
      icon: <ShieldCheck size={20} className="text-primary" />,
      lessons: 6, duration: "2h 30m",
      topics: [
        { en: "WhatsApp Business Policy", ar: "سياسات واتساب بزنس" },
        { en: "Quality Rating Management", ar: "إدارة تصنيف الجودة" },
        { en: "Scaling to 100K+ Messages/Day", ar: "التوسع لأكثر من ١٠٠ ألف رسالة/يوم" },
        { en: "Team Management & Roles", ar: "إدارة الفريق والأدوار" },
      ],
    },
    {
      titleEn: "Live Projects & Case Studies",
      titleAr: "مشاريع حية ودراسات حالة",
      icon: <Rocket size={20} className="text-primary" />,
      lessons: 8, duration: "5h 0m",
      topics: [
        { en: "Real Campaign Setup (Live)", ar: "إعداد حملة حقيقية (بث مباشر)" },
        { en: "E-Commerce WhatsApp Funnels", ar: "قمع مبيعات واتساب" },
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
      nameEn: "Ahmed K.", nameAr: "أحمد ك.",
      textEn: "After the course, I managed WhatsApp campaigns for 15+ clients across the Gulf with a 92% open rate.",
      textAr: "بعد الكورس، أدرت حملات واتساب لأكثر من ١٥ عميل في الخليج بنسبة فتح ٩٢٪.",
      resultEn: "15+ clients managed", resultAr: "إدارة +١٥ عميل",
    },
    {
      nameEn: "Sara M.", nameAr: "سارة م.",
      textEn: "I built a full WhatsApp automation system for my e-commerce store and tripled my sales.",
      textAr: "بنيت نظام أتمتة واتساب كامل لمتجري الإلكتروني وضاعفت مبيعاتي ٣ مرات.",
      resultEn: "3x sales increase", resultAr: "٣× زيادة في المبيعات",
    },
    {
      nameEn: "Omar H.", nameAr: "عمر ح.",
      textEn: "The API section alone was worth the entire course. Now I send 50K+ messages daily for clients.",
      textAr: "قسم الـ API وحده يستحق سعر الكورس كاملاً. الآن أرسل +٥٠ ألف رسالة يوميًا للعملاء.",
      resultEn: "50K+ msgs/day", resultAr: "+٥٠ ألف رسالة/يوم",
    },
  ],
  priceOriginalEn: "LE 8,000", priceOriginalAr: "٨,٠٠٠ ج.م",
  priceEn: "LE 4,000", priceAr: "٤,٠٠٠ ج.م",
  discountEn: "50% off — Limited time offer", discountAr: "خصم ٥٠٪ — عرض محدود",
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
  descriptionEn: "A comprehensive course combining digital marketing strategies, professional data scraping techniques, and WhatsApp marketing integration. Build complete systems from data collection to conversion.",
  descriptionAr: "كورس شامل يجمع بين استراتيجيات التسويق الرقمي، تقنيات استخراج البيانات الاحترافية، وتكامل تسويق واتساب. بناء أنظمة كاملة من جمع البيانات إلى التحويل.",
  icon: <Globe size={32} />,
  gradientFrom: "hsl(var(--primary))",
  gradientTo: "hsl(var(--accent))",
  heroTagEn: "MASTER DIGITAL MARKETING & DATA SCRAPING",
  heroTagAr: "أتقن التسويق الرقمي واستخراج البيانات",
  features: [
    { icon: Megaphone, en: "Paid Ads", ar: "إعلانات مدفوعة" },
    { icon: Database, en: "Data Scraping", ar: "استخراج بيانات" },
    { icon: MessageSquare, en: "WhatsApp", ar: "واتساب" },
    { icon: BrainCircuit, en: "Growth Hacking", ar: "نمو سريع" },
  ],
  stats: [
    { valueEn: "2500+", valueAr: "+٢٥٠٠", labelEn: "Students", labelAr: "طالب", icon: Users },
    { valueEn: "40+", valueAr: "+٤٠", labelEn: "Hours", labelAr: "ساعة", icon: Clock },
    { valueEn: "4.7/5", valueAr: "٤.٧/٥", labelEn: "Rating", labelAr: "تقييم", icon: Star },
    { valueEn: "94%", valueAr: "٩٤٪", labelEn: "Success", labelAr: "نجاح", icon: TrendingUp },
  ],
  modules: [
    {
      titleEn: "Digital Marketing Foundations",
      titleAr: "أساسيات التسويق الرقمي",
      icon: <GraduationCap size={20} className="text-primary" />,
      lessons: 15, duration: "5h 30m",
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
      icon: <MousePointerClick size={20} className="text-primary" />,
      lessons: 20, duration: "8h 0m",
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
      icon: <Database size={20} className="text-primary" />,
      lessons: 18, duration: "7h 0m",
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
      icon: <MessageSquare size={20} className="text-primary" />,
      lessons: 12, duration: "4h 30m",
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
      icon: <Rocket size={20} className="text-primary" />,
      lessons: 10, duration: "4h 0m",
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
      icon: <Handshake size={20} className="text-primary" />,
      lessons: 8, duration: "6h 0m",
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
      nameEn: "Mohamed F.", nameAr: "محمد ف.",
      textEn: "After joining, I signed multiple clients and started getting them strong results immediately.",
      textAr: "بعد الانضمام، وقعت مع عدة عملاء وبدأت أحقق لهم نتائج قوية فورًا.",
      resultEn: "Multiple clients signed", resultAr: "توقيع عدة عملاء",
    },
    {
      nameEn: "Hazem", nameAr: "حازم",
      textEn: "Made 85,000 in sales for one of my clients after applying the course strategies.",
      textAr: "حققت ٨٥,٠٠٠ في المبيعات لأحد عملائي بعد تطبيق استراتيجيات الكورس.",
      resultEn: "85K in client sales", resultAr: "٨٥ ألف مبيعات",
    },
    {
      nameEn: "Hatem Y.", nameAr: "حاتم ي.",
      textEn: "The data scraping module combined with WhatsApp marketing tripled my lead generation.",
      textAr: "قسم استخراج البيانات مع تسويق واتساب ضاعف توليد العملاء المحتملين ٣ مرات.",
      resultEn: "3x lead generation", resultAr: "٣× توليد عملاء",
    },
  ],
  priceOriginalEn: "LE 10,000", priceOriginalAr: "١٠,٠٠٠ ج.م",
  priceEn: "LE 5,000", priceAr: "٥,٠٠٠ ج.م",
  discountEn: "50% off — Limited time offer", discountAr: "خصم ٥٠٪ — عرض محدود",
  whatsappLink: "https://wa.me/201006334062?text=I%20want%20to%20enroll%20in%20the%20Digital%20Marketing%20course",
  vimeoId: "YOUR_DIGITAL_MARKETING_COURSE_VIMEO_ID",
};

const allCourses = [whatsappCourse, digitalMarketingCourse];

// ─── Course Card for Selection ───
const CourseSelectionCard: React.FC<{
  course: CourseData;
  onSelect: () => void;
  index: number;
  isRtl: boolean;
  t: (en: string, ar: string) => string;
}> = ({ course, onSelect, index, isRtl, t }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
  >
    <Card
      className="group relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/60 cursor-pointer h-full"
      onClick={onSelect}
    >
      {/* Decorative gradient orb */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
      />

      <CardContent className="p-0 relative z-10">
        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-primary-foreground"
              style={{ background: `linear-gradient(135deg, ${course.gradientFrom}, ${course.gradientTo})` }}
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              {course.icon}
            </motion.div>
            <Badge variant="secondary" className="text-xs font-semibold">
              {t(`${course.modules.length} Modules`, `${course.modules.length} وحدة`)}
            </Badge>
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {t(course.titleEn, course.titleAr)}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            {t(course.subtitleEn, course.subtitleAr)}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {course.features.map((f, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium bg-muted/60 text-muted-foreground rounded-full px-3 py-1.5 border border-border/40">
                <f.icon size={13} className="text-primary" />
                {t(f.en, f.ar)}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-0 border-t border-border/60 bg-muted/20">
          {course.stats.map((stat, i) => (
            <div key={i} className={`text-center py-4 ${i > 0 ? (isRtl ? "border-r" : "border-l") + " border-border/40" : ""}`}>
              <stat.icon size={14} className="mx-auto text-primary mb-1.5" />
              <div className="text-sm font-bold text-foreground">{t(stat.valueEn, stat.valueAr)}</div>
              <div className="text-[10px] text-muted-foreground">{t(stat.labelEn, stat.labelAr)}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-5 border-t border-border/60">
          <div>
            <span className="text-xs line-through text-muted-foreground">{t(course.priceOriginalEn, course.priceOriginalAr)}</span>
            <span className="text-xl font-bold text-primary ml-2 mr-2">{t(course.priceEn, course.priceAr)}</span>
          </div>
          <Button size="sm" className="bg-primary text-primary-foreground shadow-lg shadow-primary/25 gap-1.5">
            {t("Explore", "استكشف")}
            {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/85 text-background py-20 md:py-32">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-[100px] opacity-20"
            style={{ background: course.gradientFrom }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-[100px] opacity-15"
            style={{ background: course.gradientTo }}
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors mb-8"
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {t("Back to All Courses", "العودة لجميع الكورسات")}
          </motion.button>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-3 bg-background/10 backdrop-blur-md border border-background/20 rounded-full px-6 py-2.5">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                {t(course.heroTagEn, course.heroTagAr)}
              </span>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t(course.titleEn, course.titleAr)}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-80 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {t(course.subtitleEn, course.subtitleAr)}
            </motion.p>

            {/* Feature pills in hero */}
            <motion.div
              className="flex items-center justify-center gap-3 mt-8 mb-10 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {course.features.map((f, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm bg-background/10 backdrop-blur-sm border border-background/15 rounded-full px-4 py-2">
                  <f.icon size={15} className="text-primary" />
                  {t(f.en, f.ar)}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 shadow-xl shadow-primary/30" asChild>
                <a href={course.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={18} />
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {course.stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="text-center">
                <stat.icon size={22} className="mx-auto text-primary mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-primary">{t(stat.valueEn, stat.valueAr)}</div>
                <div className="text-sm text-muted-foreground mt-1">{t(stat.labelEn, stat.labelAr)}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Promo Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-3 gap-1.5">
              <Video size={14} />
              {t("Course Promo", "برومو الكورس")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Watch Before You Enroll", "شاهد قبل التسجيل")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("Get a sneak peek of what you'll learn", "ألقِ نظرة سريعة على ما ستتعلمه")}
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
                  <div className="w-full h-full bg-gradient-to-br from-muted/80 to-muted/40 flex flex-col items-center justify-center gap-4">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20 shadow-lg shadow-primary/10"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Play size={36} className="text-primary ml-1" />
                    </motion.div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {t("Promo video coming soon", "فيديو البرومو قريبًا")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Phases - Enhanced Animations */}
      <section id="curriculum" className="py-16 bg-muted/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <Badge variant="secondary" className="mb-3 gap-1.5">
                <Layers size={14} />
                {t("Advanced Curriculum 2024", "منهج متقدم ٢٠٢٤")}
              </Badge>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Course Phases", "مراحل الكورس")}
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary rounded-full mx-auto mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {course.modules.map((mod, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 border-border h-full">
                  <CardContent className="p-0">
                    <div className="p-5 bg-gradient-to-r from-primary/10 to-transparent border-b border-border relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.15 }}
                      />
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <div className="flex items-center gap-2.5">
                          <motion.div
                            className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {mod.icon}
                          </motion.div>
                          <Badge variant="outline" className="text-xs font-bold">
                            {t(`Phase ${String(i + 1).padStart(2, '0')}`, `المرحلة ${String(i + 1).padStart(2, '0')}`)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><BookOpen size={12} />{mod.lessons}</span>
                          <span className="flex items-center gap-1"><Clock size={12} />{mod.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground relative z-10">{t(mod.titleEn, mod.titleAr)}</h3>
                    </div>

                    <div className="p-5">
                      <button
                        className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground mb-3 hover:text-foreground transition-colors"
                        onClick={() => setExpandedModule(expandedModule === i ? null : i)}
                      >
                        {t("Topics", "المواضيع")}
                        <motion.span
                          animate={{ rotate: expandedModule === i ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expandedModule === i && (
                          <motion.ul
                            className="space-y-2 overflow-hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                          >
                            {mod.topics.map((topic, j) => (
                              <motion.li
                                key={j}
                                className="flex items-center gap-2 text-sm text-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.05 }}
                              >
                                <CheckCircle2 size={14} className="text-primary shrink-0" />
                                {t(topic.en, topic.ar)}
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights - Enhanced */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("What You'll Achieve", "ماذا ستحقق")}
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary rounded-full mx-auto mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {course.highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                custom={i}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-8 border-primary/20 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={28} className="text-primary" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                  >
                    {t(item.valueEn, item.valueAr)}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1">{t(item.titleEn, item.titleAr)}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Badge variant="secondary" className="mb-3 gap-1.5">
                <Heart size={14} />
                {t("Student Results", "نتائج الطلاب")}
              </Badge>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {t("Our Students Don't Just Learn — They Win!", "طلابنا لا يتعلمون فقط — بل يفوزون!")}
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary rounded-full mx-auto mt-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {course.testimonials.map((item, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                custom={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <UserCheck size={20} className="text-primary" />
                      </motion.div>
                      <div>
                        <div className="font-bold text-foreground">{t(item.nameEn, item.nameAr)}</div>
                        <Badge className="bg-primary/10 text-primary text-xs border-0">{t(item.resultEn, item.resultAr)}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, s) => (
                        <motion.div
                          key={s}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + s * 0.08 }}
                        >
                          <Star size={14} className="fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">"{t(item.textEn, item.textAr)}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Badge variant="secondary" className="mb-3 gap-1.5">
                <GraduationCap size={14} />
                {t("Register Now", "سجّل الآن")}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("Start Your Journey Today", "ابدأ رحلتك اليوم")}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t(
                  "Fill in the form and our team will contact you within 24 hours to help you enroll and start learning.",
                  "املأ النموذج وسيتواصل معك فريقنا خلال ٢٤ ساعة لمساعدتك في التسجيل وبدء التعلم."
                )}
              </p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, en: "Lifetime access to all course content", ar: "وصول مدى الحياة لكل محتوى الكورس" },
                  { icon: CheckCircle2, en: "Certificate upon completion", ar: "شهادة عند الإتمام" },
                  { icon: CheckCircle2, en: "Private community & mentorship", ar: "مجتمع خاص وإرشاد" },
                  { icon: CheckCircle2, en: "Real project experience", ar: "خبرة مشاريع حقيقية" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <item.icon size={18} className="text-primary shrink-0" />
                    <span className="text-sm text-foreground">{t(item.en, item.ar)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", delay: 0.1 }}
            >
              <RegistrationForm course={course} isRtl={isRtl} t={t} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing CTA - Enhanced */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/90 text-background">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
            style={{ background: course.gradientFrom }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[120px] opacity-5"
            style={{ background: course.gradientTo }}
            animate={{ scale: [1.2, 1, 1.2], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
            >
              <Sparkles size={32} className="mx-auto text-primary mb-4" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("Ready to Start?", "مستعد للبداية؟")}</h2>
            <p className="text-lg opacity-80 mb-3 max-w-xl mx-auto">
              {t(
                `Join ${course.stats[0].valueEn} students already making results.`,
                `انضم لأكثر من ${course.stats[0].valueAr} طالب يحققون نتائج.`
              )}
            </p>
          </motion.div>

          <motion.div
            className="inline-block bg-background/10 backdrop-blur-lg rounded-3xl p-10 mt-8 border border-background/20 shadow-2xl"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <DollarSign size={28} className="mx-auto text-primary mb-3" />
            </motion.div>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-lg line-through opacity-50">{t(course.priceOriginalEn, course.priceOriginalAr)}</span>
            </div>
            <motion.div
              className="text-5xl font-bold text-primary mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
              {t(course.priceEn, course.priceAr)}
            </motion.div>
            <p className="text-sm opacity-70 mb-6">{t(course.discountEn, course.discountAr)}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 shadow-xl shadow-primary/30" asChild>
                  <a href={course.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={18} />
                    {t("Enroll via WhatsApp", "سجّل عبر واتساب")}
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 text-lg px-10 py-6"
                  onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail size={18} />
                  {t("Register Now", "سجّل الآن")}
                </Button>
              </motion.div>
            </div>

            {/* Trust badges */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-6 text-xs opacity-60"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="flex items-center gap-1"><ShieldCheck size={14} /> {t("Secure Payment", "دفع آمن")}</span>
              <span className="flex items-center gap-1"><Award size={14} /> {t("Certificate", "شهادة")}</span>
              <span className="flex items-center gap-1"><Heart size={14} /> {t("Lifetime Access", "وصول مدى الحياة")}</span>
            </motion.div>
          </motion.div>
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
          onBack={() => { setSelectedCourse(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          isRtl={isRtl}
          t={t}
        />
      ) : (
        <>
          {/* Courses Landing Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-foreground via-foreground/95 to-foreground/85 text-background py-24 md:py-32">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute -top-40 left-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15"
                style={{ background: "hsl(var(--primary))" }}
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-40 right-1/4 w-60 h-60 rounded-full blur-[100px] opacity-10"
                style={{ background: "hsl(var(--accent))" }}
                animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Badge className="bg-primary/20 text-primary border-primary/30 mb-6 gap-1.5">
                  <GraduationCap size={14} />
                  {t("Professional Courses", "كورسات احترافية")}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t("Level Up Your ", "طوّر ")}
                <span className="text-primary italic">{t("Marketing Skills", "مهاراتك التسويقية")}</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                {t(
                  "Choose from our expert-led courses designed to transform you into a top-tier digital marketer",
                  "اختر من كورساتنا المتخصصة المصممة لتحولك إلى مسوّق رقمي من الطراز الأول"
                )}
              </motion.p>

              {/* Quick trust strip */}
              <motion.div
                className="flex items-center justify-center gap-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {[
                  { icon: Users, text: t("3700+ Students", "+٣٧٠٠ طالب") },
                  { icon: Star, text: t("4.7+ Rating", "تقييم +٤.٧") },
                  { icon: Award, text: t("200+ Reviews", "+٢٠٠ تقييم") },
                  { icon: Puzzle, text: t("2 Specialized Tracks", "٢ مسارات متخصصة") },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm opacity-70">
                    <item.icon size={16} className="text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Course Selection */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="mb-3 gap-1.5">
                  <Layers size={14} />
                  {t("Choose Your Track", "اختر مسارك")}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {t("Choose Your Path", "اختر مسارك")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t(
                    "Two specialized courses designed to give you real-world skills and results",
                    "كورسان متخصصان مصممان لمنحك مهارات ونتائج حقيقية"
                  )}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {allCourses.map((course, i) => (
                  <CourseSelectionCard
                    key={course.id}
                    course={course}
                    onSelect={() => { setSelectedCourse(course.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    index={i}
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
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  {t("Why Our Courses?", "لماذا كورساتنا؟")}
                </h2>
              </motion.div>

              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: GraduationCap, en: "Expert Instructors", ar: "مدربون خبراء", descEn: "Learn from professionals with real market experience", descAr: "تعلّم من محترفين لديهم خبرة سوق حقيقية" },
                  { icon: Rocket, en: "Practical Projects", ar: "مشاريع عملية", descEn: "Apply what you learn on real campaigns", descAr: "طبّق ما تتعلمه على حملات حقيقية" },
                  { icon: Users, en: "Active Community", ar: "مجتمع نشط", descEn: "Join 3700+ students and network", descAr: "انضم لأكثر من ٣٧٠٠ طالب وتواصل" },
                  { icon: ShieldCheck, en: "Lifetime Access", ar: "وصول مدى الحياة", descEn: "Get help and updates forever", descAr: "احصل على الدعم والتحديثات للأبد" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} custom={i}>
                    <Card className="text-center p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full border-border/60">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon size={24} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{t(item.en, item.ar)}</h3>
                      <p className="text-sm text-muted-foreground">{t(item.descEn, item.descAr)}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-10 md:p-14 border border-primary/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles size={32} className="mx-auto text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {t("Not Sure Which Course?", "مش متأكد أي كورس؟")}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  {t(
                    "Contact us on WhatsApp and we'll help you choose the right path based on your goals",
                    "تواصل معنا على واتساب وهنساعدك تختار المسار المناسب لأهدافك"
                  )}
                </p>
                <Button size="lg" className="bg-primary text-primary-foreground shadow-xl shadow-primary/25" asChild>
                  <a href="https://wa.me/201006334062?text=I%20need%20help%20choosing%20a%20course" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={18} />
                    {t("Ask Us on WhatsApp", "اسألنا على واتساب")}
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Courses;

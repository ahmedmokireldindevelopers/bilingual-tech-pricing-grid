
import { useLanguage } from "@/contexts/LanguageContext";

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  country: string;
  avatar: string;
  rating: number;
  text: {
    en: string;
    ar: string;
  };
}

export const useTestimonialsData = () => {
  const { t } = useLanguage();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ahmed Mahmoud",
      position: t("Marketing Director", "مدير التسويق"),
      company: "TechSolutions",
      country: "Egypt",
      avatar: "/images/testimonials/avatar1.png",
      rating: 5,
      text: {
        en: "The WhatsApp Business API integration was seamless. Our customer engagement increased by 40% in just two months!",
        ar: "كان تكامل واجهة برمجة تطبيقات WhatsApp Business سلسًا. زاد التفاعل مع العملاء بنسبة 40٪ في شهرين فقط!"
      }
    },
    {
      id: 2,
      name: "Fatima Al-Saud",
      position: t("CEO", "الرئيس التنفيذي"),
      company: "RiyadhTech",
      country: "Saudi Arabia",
      avatar: "/images/testimonials/avatar2.png",
      rating: 5,
      text: {
        en: "Their Facebook verification service saved us weeks of frustration. Now we can run our ad campaigns without any limitations.",
        ar: "خدمة التحقق من Facebook الخاصة بهم وفرت علينا أسابيع من الإحباط. الآن يمكننا تشغيل حملاتنا الإعلانية دون أي قيود."
      }
    },
    {
      id: 3,
      name: "Omar Al-Falasi",
      position: t("Digital Marketing Lead", "مسؤول التسويق الرقمي"),
      company: "DubaiConnect",
      country: "UAE",
      avatar: "/images/testimonials/avatar3.png",
      rating: 5,
      text: {
        en: "The SendPulse grant program setup was quick and efficient. We got approved for the full $5000 credit!",
        ar: "كان إعداد برنامج منحة SendPulse سريعًا وفعالًا. تمت الموافقة لنا على الائتمان الكامل البالغ 5000 دولار!"
      }
    },
    {
      id: 4,
      name: "Layla Al-Busaidi",
      position: t("Operations Manager", "مدير العمليات"),
      company: "OmanGrow",
      country: "Oman",
      avatar: "/images/testimonials/avatar4.png",
      rating: 4,
      text: {
        en: "The N8N automation solution transformed our workflow. We've reduced manual tasks by 70%.",
        ar: "حول حل أتمتة N8N سير العمل لدينا. لقد قللنا المهام اليدوية بنسبة 70٪."
      }
    },
    {
      id: 5,
      name: "Nasser Al-Thani",
      position: t("IT Director", "مدير تكنولوجيا المعلومات"),
      company: "QatarInnovate",
      country: "Qatar",
      avatar: "/images/testimonials/avatar5.png",
      rating: 5,
      text: {
        en: "Their technical support is exceptional. Any issues we had were resolved within hours, not days.",
        ar: "دعمهم الفني استثنائي. تم حل أي مشكلات واجهناها في غضون ساعات وليس أيام."
      }
    },
    {
      id: 6,
      name: "Rania Al-Masri",
      position: t("E-commerce Manager", "مدير التجارة الإلكترونية"),
      company: "AmmanTech",
      country: "Jordan",
      avatar: "/images/testimonials/avatar6.png",
      rating: 4,
      text: {
        en: "WordPress integration was flawless. Our site now syncs perfectly with all our marketing tools.",
        ar: "كان تكامل WordPress مثاليًا. موقعنا الآن يتزامن بشكل مثالي مع جميع أدوات التسويق لدينا."
      }
    },
    {
      id: 7,
      name: "James Wilson",
      position: t("Marketing Strategist", "استراتيجي التسويق"),
      company: "LondonDigital",
      country: "England",
      avatar: "/images/testimonials/avatar7.png",
      rating: 5,
      text: {
        en: "The Make.com Team Plan has been worth every penny. Our automation capabilities have expanded tenfold.",
        ar: "كانت خطة فريق Make.com تستحق كل قرش. توسعت قدرات الأتمتة لدينا بمقدار عشرة أضعاف."
      }
    },
    {
      id: 8,
      name: "Sarah Johnson",
      position: t("Digital Transformation Lead", "مسؤول التحول الرقمي"),
      company: "NYCTech",
      country: "USA",
      avatar: "/images/testimonials/avatar8.png",
      rating: 5,
      text: {
        en: "Their comprehensive documentation made our transition to automated workflows seamless.",
        ar: "جعل توثيقهم الشامل انتقالنا إلى سير العمل الآلي سلسًا."
      }
    },
    {
      id: 9,
      name: "Budi Santoso",
      position: t("CTO", "المدير التقني"),
      company: "JakartaConnect",
      country: "Indonesia",
      avatar: "/images/testimonials/avatar9.png",
      rating: 4,
      text: {
        en: "The WhatsApp API setup was perfect for our Southeast Asian market needs. Engagement rates skyrocketed.",
        ar: "كان إعداد واجهة برمجة تطبيقات WhatsApp مثاليًا لاحتياجات سوقنا في جنوب شرق آسيا. ارتفعت معدلات المشاركة بشكل كبير."
      }
    },
    {
      id: 10,
      name: "Li Wei",
      position: t("Growth Manager", "مدير النمو"),
      company: "ShanghaiTech",
      country: "China",
      avatar: "/images/testimonials/avatar10.png",
      rating: 5,
      text: {
        en: "Their cross-platform integration expertise helped us unify our marketing efforts across global markets.",
        ar: "ساعدتنا خبرتهم في التكامل عبر المنصات على توحيد جهود التسويق عبر الأسواق العالمية."
      }
    }
  ];

  return testimonials;
};

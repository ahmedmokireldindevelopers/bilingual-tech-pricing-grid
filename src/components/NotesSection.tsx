
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Info, ExternalLink } from "lucide-react";

const NotesSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="notes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>
          {t("Important Notes", "ملاحظات هامة")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "Please review these important considerations before proceeding",
            "يرجى مراجعة هذه الاعتبارات المهمة قبل المتابعة"
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-full">
                <AlertTriangle className="text-orange-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t("Service Limitations", "قيود الخدمة")}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    {t(
                      "Facebook verification requires a business document and may take 2-5 business days.",
                      "يتطلب التحقق من Facebook وثيقة عمل وقد يستغرق من 2 إلى 5 أيام عمل."
                    )}
                  </li>
                  <li>
                    {t(
                      "WhatsApp Business API requires business verification and approved use case.",
                      "تتطلب واجهة برمجة تطبيقات WhatsApp Business التحقق من الأعمال وحالة استخدام معتمدة."
                    )}
                  </li>
                  <li>
                    {t(
                      "SendPulse grants are subject to approval and may have usage requirements.",
                      "تخضع منح SendPulse للموافقة وقد تكون لها متطلبات استخدام."
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Info className="text-blue-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t("Official Resources", "موارد رسمية")}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-tech-blue" />
                    <a 
                      href="https://www.facebook.com/business/help" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:underline"
                    >
                      {t("Facebook Business Help Center", "مركز مساعدة أعمال فيسبوك")}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-tech-blue" />
                    <a 
                      href="https://business.whatsapp.com/products/business-platform" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:underline"
                    >
                      {t("WhatsApp Business Platform", "منصة واتساب بزنس")}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-tech-blue" />
                    <a 
                      href="https://sendpulse.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:underline"
                    >
                      {t("SendPulse Official Website", "الموقع الرسمي لـ SendPulse")}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-tech-blue" />
                    <a 
                      href="https://www.make.com/en/pricing" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-blue hover:underline"
                    >
                      {t("Make.com Pricing", "أسعار Make.com")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm md:col-span-2">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Info className="text-green-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t("Payment & Process", "الدفع والعملية")}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    {t(
                      "50% payment required upfront, balance upon service completion.",
                      "مطلوب دفع 50% مقدمًا ، والرصيد عند الانتهاء من الخدمة."
                    )}
                  </li>
                  <li>
                    {t(
                      "Service activation typically starts within 24 hours of payment confirmation.",
                      "يبدأ تنشيط الخدمة عادةً في غضون 24 ساعة من تأكيد الدفع."
                    )}
                  </li>
                  <li>
                    {t(
                      "All prices are in USD and may be subject to change based on platform pricing updates.",
                      "جميع الأسعار بالدولار الأمريكي وقد تخضع للتغيير بناءً على تحديثات أسعار المنصة."
                    )}
                  </li>
                  <li>
                    {t(
                      "Custom workflow pricing depends on complexity and requirements.",
                      "يعتمد تسعير سير العمل المخصص على التعقيد والمتطلبات."
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotesSection;

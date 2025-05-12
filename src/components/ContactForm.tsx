
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("Message sent successfully!", "تم إرسال الرسالة بنجاح!"),
        description: t(
          "We'll get back to you as soon as possible.",
          "سنرد عليك في أقرب وقت ممكن."
        ),
        duration: 5000
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>
          {t("Contact Us", "اتصل بنا")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "Have questions about our services? Send us a message!",
            "هل لديك أسئلة حول خدماتنا؟ أرسل لنا رسالة!"
          )}
        </p>
        
        <div className="max-w-lg mx-auto mt-8 bg-white rounded-xl shadow-sm p-6 border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("Name", "الاسم")}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("Your name", "اسمك")}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("Email", "البريد الإلكتروني")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("Your email address", "عنوان بريدك الإلكتروني")}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {t("Subject", "الموضوع")}
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t("Message subject", "موضوع الرسالة")}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t("Message", "الرسالة")}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("Your message", "رسالتك")}
                rows={5}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full cta-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 
                t("Sending...", "جارِ الإرسال...") : 
                t("Send Message", "إرسال الرسالة")
              }
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              {t("Or contact us directly:", "أو اتصل بنا مباشرة:")}
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>{t("Email:", "البريد الإلكتروني:")}</strong>{" "}
                <a href="mailto:ahmedmokireldin@gmail.com" className="text-tech-blue hover:underline">
                  ahmedmokireldin@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <strong>{t("Phone:", "الهاتف:")}</strong>{" "}
                <a href="tel:+201004101309" className="text-tech-blue hover:underline">
                  +201004101309
                </a>
              </p>
              <p className="text-sm">
                <strong>{t("WhatsApp:", "واتساب:")}</strong>{" "}
                <a href="https://wa.me/201006334062" target="_blank" rel="noopener noreferrer" className="text-tech-blue hover:underline">
                  +201006334062
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

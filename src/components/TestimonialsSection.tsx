
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import TestimonialsCarousel from "./testimonials/TestimonialsCarousel";
import { useTestimonialsData } from "./testimonials/testimonialsData";

const TestimonialsSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const testimonials = useTestimonialsData();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>
          {t("Customer Testimonials", "آراء العملاء")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "See what our clients from around the world have to say about our services",
            "اطلع على ما يقوله عملاؤنا من جميع أنحاء العالم عن خدماتنا"
          )}
        </p>

        <div className="mt-12">
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

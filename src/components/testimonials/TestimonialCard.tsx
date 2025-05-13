
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TestimonialCardProps {
  testimonial: {
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
  };
  isActive: boolean;
}

export const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  const { isRtl } = useLanguage();
  
  return (
    <Card className={`border-2 h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
      isActive ? "border-tech-blue shadow-lg" : "border-gray-200"
    }`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-tech-blue">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>
          <div>
            <h3 className="font-medium">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">
              {testimonial.position}, {testimonial.company}
            </p>
            <p className="text-xs text-gray-400">{testimonial.country}</p>
          </div>
        </div>
        
        <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
        
        <div className="relative">
          <Quote size={24} className="absolute -top-2 -left-1 text-gray-200 rotate-180" />
          <p className="text-gray-600 pt-2 pb-1 px-3 italic">
            {isRtl ? testimonial.text.ar : testimonial.text.en}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

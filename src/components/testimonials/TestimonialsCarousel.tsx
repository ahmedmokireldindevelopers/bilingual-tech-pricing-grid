
import React, { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "./testimonialsData";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [autoPlay, setAutoPlay] = useState(true);
  
  // Update the active index when the carousel slides
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };
    
    api.on("select", handleSelect);
    // Cleanup listener on unmount
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [api, autoPlay]);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
      setApi={setApi}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem 
            key={index} 
            className="md:basis-1/2 lg:basis-1/3 pl-4 transition-all duration-500"
          >
            <TestimonialCard
              testimonial={testimonial}
              isActive={activeIndex === index}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6 gap-2">
        <CarouselPrevious className="static transform-none mx-2" />
        <CarouselNext className="static transform-none mx-2" />
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;


import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const IntegratedPlatforms: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [autoPlay, setAutoPlay] = useState(true);

  const platforms = [
    {
      name: "Facebook",
      icon: "/images/integrations/facebook.png",
      color: "#1877F2",
    },
    {
      name: "WhatsApp",
      icon: "/images/integrations/whatsapp.png",
      color: "#25D366",
    },
    {
      name: "Instagram",
      icon: "/images/integrations/instagram.png",
      color: "#E4405F",
    },
    {
      name: "SendPulse",
      icon: "/images/integrations/sendpulse.png",
      color: "#0084FF",
    },
    {
      name: "WordPress",
      icon: "/images/integrations/wordpress.png",
      color: "#21759B",
    },
    {
      name: "Make.com",
      icon: "/images/integrations/make.png",
      color: "#000000",
    },
    {
      name: "N8N",
      icon: "/images/integrations/n8n.png",
      color: "#6933FF",
    },
    {
      name: "Zapier",
      icon: "/images/integrations/zapier.png",
      color: "#FF4A00",
    },
    {
      name: "Shopify",
      icon: "/images/integrations/shopify.png",
      color: "#7AB55C",
    },
    {
      name: "WooCommerce",
      icon: "/images/integrations/woocommerce.png",
      color: "#96588A",
    },
  ];

  useEffect(() => {
    const timer = autoPlay
      ? setInterval(() => {
          document.querySelector(".carousel-next")?.dispatchEvent(
            new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
            })
          );
        }, 3000)
      : null;

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlay]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>
          {t("Integrated Platforms", "المنصات المتكاملة")}
        </h2>
        <p className="section-subtitle text-center">
          {t(
            "Connect and automate your workflow with these powerful platforms",
            "قم بالربط وأتمتة سير العمل الخاص بك مع هذه المنصات القوية"
          )}
        </p>

        <div className="mt-12 relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CarouselContent>
              {platforms.map((platform, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="platform-card animate-fade-in h-40 flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div 
                      className="w-20 h-20 mb-3 rounded-full flex items-center justify-center p-3 relative overflow-hidden shadow-md"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 animate-pulse" />
                      <img
                        src={platform.icon}
                        alt={platform.name}
                        className="w-14 h-14 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <h3 className="text-center font-medium">{platform.name}</h3>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-prev -left-4 md:-left-6 lg:-left-8" />
            <CarouselNext className="carousel-next -right-4 md:-right-6 lg:-right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntegratedPlatforms;

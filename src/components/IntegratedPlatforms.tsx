
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const IntegratedPlatforms: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [autoPlay, setAutoPlay] = useState(true);

  const platforms = [
    {
      name: "Facebook",
      icon: "/images/platforms/facebook.svg",
      color: "#1877F2",
    },
    {
      name: "WhatsApp",
      icon: "/images/platforms/whatsapp.svg",
      color: "#25D366",
    },
    {
      name: "Instagram",
      icon: "/images/platforms/instagram.svg",
      color: "#E4405F",
    },
    {
      name: "SendPulse",
      icon: "/images/platforms/sendpulse.svg",
      color: "#0084FF",
    },
    {
      name: "WordPress",
      icon: "/images/platforms/wordpress.svg",
      color: "#21759B",
    },
    {
      name: "Make.com",
      icon: "/images/platforms/make.svg",
      color: "#000000",
    },
    {
      name: "N8N",
      icon: "/images/platforms/n8n.svg",
      color: "#6933FF",
    },
    {
      name: "Zapier",
      icon: "/images/platforms/zapier.svg",
      color: "#FF4A00",
    },
    {
      name: "Shopify",
      icon: "/images/platforms/shopify.svg",
      color: "#7AB55C",
    },
    {
      name: "WooCommerce",
      icon: "/images/platforms/woocommerce.svg",
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
                      <AspectRatio ratio={1/1} className="w-14 h-14">
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to PNG if SVG fails to load
                            const src = e.currentTarget.src;
                            if (src.endsWith('.svg')) {
                              e.currentTarget.src = src.replace('.svg', '.png');
                            } else if (src.endsWith('.png')) {
                              // If PNG also fails, try the original integrations folder
                              e.currentTarget.src = src.replace('/platforms/', '/integrations/');
                            } else {
                              e.currentTarget.src = "/placeholder.svg";
                            }
                          }}
                        />
                      </AspectRatio>
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

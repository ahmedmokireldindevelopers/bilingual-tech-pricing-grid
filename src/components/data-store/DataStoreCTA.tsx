import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { MessageSquare, ShoppingCart } from "lucide-react";

const DataStoreCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground hidden sm:block">
          {t(
            "Ready to supercharge your sales pipeline?",
            "هل أنت مستعد لتعزيز مبيعاتك؟"
          )}
        </p>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button className="flex-1 sm:flex-none" asChild>
            <a href="https://wa.me/201006334062" target="_blank" rel="noopener noreferrer">
              <MessageSquare size={16} />
              {t("WhatsApp", "واتساب")}
            </a>
          </Button>
          <Button variant="secondary" className="flex-1 sm:flex-none" asChild>
            <a href="https://wa.me/201006334062?text=I%20want%20to%20purchase%20a%20data%20package" target="_blank" rel="noopener noreferrer">
              <ShoppingCart size={16} />
              {t("Order Now", "اطلب الآن")}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataStoreCTA;

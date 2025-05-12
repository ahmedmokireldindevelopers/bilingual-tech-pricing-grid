
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator } from "lucide-react";

const MessageCalculator: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [messageCount, setMessageCount] = useState<number>(1000);
  const [country, setCountry] = useState<string>("egypt");
  const [platform, setPlatform] = useState<string>("facebook");

  // Rates per 1000 messages (in USD)
  const rates = {
    facebook: {
      egypt: 0.0326,
      uae: 0.0412,
      ksa: 0.0398,
      usa: 0.0217,
      uk: 0.0267,
      other: 0.0350
    },
    sendpulse: {
      egypt: 0.0273,
      uae: 0.0385,
      ksa: 0.0362,
      usa: 0.0198,
      uk: 0.0237,
      other: 0.0320
    },
    twilio: {
      egypt: 0.0467,
      uae: 0.0565,
      ksa: 0.0539,
      usa: 0.0340,
      uk: 0.0398,
      other: 0.0490
    }
  };

  const calculateCost = () => {
    const ratePerThousand = rates[platform as keyof typeof rates][country as keyof typeof rates.facebook];
    const cost = (messageCount / 1000) * ratePerThousand;
    return cost.toFixed(2);
  };

  // Local currency conversion (approximate rates)
  const currencyConversion = {
    egypt: { symbol: "EGP", rate: 38 },
    uae: { symbol: "AED", rate: 3.67 },
    ksa: { symbol: "SAR", rate: 3.75 },
    usa: { symbol: "USD", rate: 1 },
    uk: { symbol: "GBP", rate: 0.78 },
    other: { symbol: "USD", rate: 1 }
  };

  const getLocalCost = () => {
    const usdCost = parseFloat(calculateCost());
    const conversion = currencyConversion[country as keyof typeof currencyConversion];
    const localCost = usdCost * conversion.rate;
    return `${localCost.toFixed(2)} ${conversion.symbol}`;
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calculator className="h-8 w-8 text-tech-blue" />
          <div>
            <CardTitle>{t("Message Cost Calculator", "حاسبة تكلفة الرسائل")}</CardTitle>
            <CardDescription>
              {t(
                "Estimate your messaging costs across different platforms",
                "تقدير تكاليف الرسائل عبر المنصات المختلفة"
              )}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="platform">
              {t("Platform", "المنصة")}
            </Label>
            <Select
              value={platform}
              onValueChange={setPlatform}
            >
              <SelectTrigger id="platform">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="facebook">
                  {t("Facebook Business", "فيسبوك بزنس")}
                </SelectItem>
                <SelectItem value="sendpulse">SendPulse</SelectItem>
                <SelectItem value="twilio">Twilio</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="country">
              {t("Country", "الدولة")}
            </Label>
            <Select
              value={country}
              onValueChange={setCountry}
            >
              <SelectTrigger id="country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="egypt">
                  {t("Egypt", "مصر")}
                </SelectItem>
                <SelectItem value="uae">
                  {t("UAE", "الإمارات")}
                </SelectItem>
                <SelectItem value="ksa">
                  {t("Saudi Arabia", "السعودية")}
                </SelectItem>
                <SelectItem value="usa">
                  {t("United States", "الولايات المتحدة")}
                </SelectItem>
                <SelectItem value="uk">
                  {t("United Kingdom", "المملكة المتحدة")}
                </SelectItem>
                <SelectItem value="other">
                  {t("Other Countries", "دول أخرى")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="message-count">
                {t("Number of Messages", "عدد الرسائل")}
              </Label>
              <span className="text-sm font-medium">{messageCount.toLocaleString()}</span>
            </div>
            <Slider
              id="message-count"
              min={100}
              max={100000}
              step={100}
              value={[messageCount]}
              onValueChange={(values) => setMessageCount(values[0])}
              className="py-4"
            />
            <div className="pt-2 flex justify-between text-sm text-muted-foreground">
              <span>100</span>
              <span>50,000</span>
              <span>100,000</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-center border-t pt-4">
              <span className="font-medium">
                {t("Estimated Cost (USD)", "التكلفة التقديرية (دولار)")}:
              </span>
              <span className="text-xl font-bold text-tech-blue">
                ${calculateCost()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">
                {t("Local Currency", "بالعملة المحلية")}:
              </span>
              <span className="text-lg font-semibold">
                {getLocalCost()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageCalculator;

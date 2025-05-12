
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MessageSquare, Facebook, Globe } from "lucide-react";
import { toast } from "sonner";

const MessageCalculator: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [messageCount, setMessageCount] = useState<number>(1000);
  const [country, setCountry] = useState<string>("egypt");
  const [messageType, setMessageType] = useState<string>("marketing");

  // Updated rates per message (in USD) based on message type, platform, and country
  // These rates are more realistic and aligned with actual WhatsApp Business API pricing
  const rates = {
    marketing: {
      facebook: {
        egypt: 0.0485,
        uae: 0.0612,
        ksa: 0.0598,
        jordan: 0.0520,
        kuwait: 0.0580,
        bahrain: 0.0590,
        qatar: 0.0610,
        oman: 0.0550,
        morocco: 0.0470,
        tunisia: 0.0450,
        algeria: 0.0460,
        libya: 0.0490,
        lebanon: 0.0480,
        iraq: 0.0510,
        usa: 0.0317,
        uk: 0.0367,
        other: 0.0450
      },
      sendpulse: {
        egypt: 0.0473,
        uae: 0.0595,
        ksa: 0.0582,
        jordan: 0.0510,
        kuwait: 0.0570,
        bahrain: 0.0580,
        qatar: 0.0600,
        oman: 0.0540,
        morocco: 0.0460,
        tunisia: 0.0440,
        algeria: 0.0450,
        libya: 0.0480,
        lebanon: 0.0470,
        iraq: 0.0500,
        usa: 0.0308,
        uk: 0.0357,
        other: 0.0440
      },
      twilio: {
        egypt: 0.0497,
        uae: 0.0625,
        ksa: 0.0609,
        jordan: 0.0530,
        kuwait: 0.0590,
        bahrain: 0.0600,
        qatar: 0.0620,
        oman: 0.0560,
        morocco: 0.0480,
        tunisia: 0.0460,
        algeria: 0.0470,
        libya: 0.0500,
        lebanon: 0.0490,
        iraq: 0.0520,
        usa: 0.0325,
        uk: 0.0375,
        other: 0.0490
      }
    },
    service: {
      facebook: {
        egypt: 0.0123,
        uae: 0.0156,
        ksa: 0.0148,
        jordan: 0.0130,
        kuwait: 0.0145,
        bahrain: 0.0147,
        qatar: 0.0152,
        oman: 0.0138,
        morocco: 0.0118,
        tunisia: 0.0113,
        algeria: 0.0115,
        libya: 0.0123,
        lebanon: 0.0120,
        iraq: 0.0128,
        usa: 0.0079,
        uk: 0.0092,
        other: 0.0120
      },
      sendpulse: {
        egypt: 0.0118,
        uae: 0.0149,
        ksa: 0.0142,
        jordan: 0.0125,
        kuwait: 0.0140,
        bahrain: 0.0142,
        qatar: 0.0147,
        oman: 0.0133,
        morocco: 0.0113,
        tunisia: 0.0108,
        algeria: 0.0110,
        libya: 0.0118,
        lebanon: 0.0115,
        iraq: 0.0123,
        usa: 0.0076,
        uk: 0.0088,
        other: 0.0115
      },
      twilio: {
        egypt: 0.0127,
        uae: 0.0161,
        ksa: 0.0153,
        jordan: 0.0135,
        kuwait: 0.0150,
        bahrain: 0.0152,
        qatar: 0.0157,
        oman: 0.0143,
        morocco: 0.0122,
        tunisia: 0.0117,
        algeria: 0.0119,
        libya: 0.0127,
        lebanon: 0.0124,
        iraq: 0.0132,
        usa: 0.0082,
        uk: 0.0095,
        other: 0.0125
      }
    },
    media: {
      facebook: {
        egypt: 0.0597,
        uae: 0.0755,
        ksa: 0.0738,
        jordan: 0.0640,
        kuwait: 0.0715,
        bahrain: 0.0730,
        qatar: 0.0750,
        oman: 0.0680,
        morocco: 0.0580,
        tunisia: 0.0555,
        algeria: 0.0565,
        libya: 0.0605,
        lebanon: 0.0590,
        iraq: 0.0630,
        usa: 0.0392,
        uk: 0.0452,
        other: 0.0590
      },
      sendpulse: {
        egypt: 0.0584,
        uae: 0.0735,
        ksa: 0.0718,
        jordan: 0.0625,
        kuwait: 0.0700,
        bahrain: 0.0715,
        qatar: 0.0735,
        oman: 0.0665,
        morocco: 0.0565,
        tunisia: 0.0540,
        algeria: 0.0550,
        libya: 0.0590,
        lebanon: 0.0575,
        iraq: 0.0615,
        usa: 0.0382,
        uk: 0.0441,
        other: 0.0575
      },
      twilio: {
        egypt: 0.0613,
        uae: 0.0772,
        ksa: 0.0754,
        jordan: 0.0655,
        kuwait: 0.0730,
        bahrain: 0.0745,
        qatar: 0.0765,
        oman: 0.0695,
        morocco: 0.0595,
        tunisia: 0.0570,
        algeria: 0.0580,
        libya: 0.0620,
        lebanon: 0.0605,
        iraq: 0.0645,
        usa: 0.0402,
        uk: 0.0463,
        other: 0.0605
      }
    }
  };

  // Local currency conversion rates (more accurate)
  const currencyConversion = {
    egypt: { symbol: "EGP", rate: 48.2 },
    uae: { symbol: "AED", rate: 3.67 },
    ksa: { symbol: "SAR", rate: 3.75 },
    jordan: { symbol: "JOD", rate: 0.71 },
    kuwait: { symbol: "KWD", rate: 0.31 },
    bahrain: { symbol: "BHD", rate: 0.38 },
    qatar: { symbol: "QAR", rate: 3.64 },
    oman: { symbol: "OMR", rate: 0.38 },
    morocco: { symbol: "MAD", rate: 9.95 },
    tunisia: { symbol: "TND", rate: 3.12 },
    algeria: { symbol: "DZD", rate: 134.5 },
    libya: { symbol: "LYD", rate: 4.81 },
    lebanon: { symbol: "LBP", rate: 89900 },
    iraq: { symbol: "IQD", rate: 1310 },
    usa: { symbol: "USD", rate: 1 },
    uk: { symbol: "GBP", rate: 0.78 },
    other: { symbol: "USD", rate: 1 }
  };

  // Calculate cost for a specific platform
  const calculateCost = (platform: string) => {
    const ratePerMessage = rates[messageType as keyof typeof rates][platform as keyof typeof rates.marketing][country as keyof typeof rates.marketing.facebook];
    return (messageCount * ratePerMessage).toFixed(2);
  };

  // Get local cost for a specific platform
  const getLocalCost = (platform: string) => {
    const usdCost = parseFloat(calculateCost(platform));
    const conversion = currencyConversion[country as keyof typeof currencyConversion];
    const localCost = usdCost * conversion.rate;
    return `${localCost.toFixed(2)} ${conversion.symbol}`;
  };

  // Message type descriptions
  const messageTypes = {
    marketing: {
      en: "Marketing Messages",
      ar: "رسائل تسويقية"
    },
    service: {
      en: "Service Messages",
      ar: "رسائل خدمية"
    },
    media: {
      en: "Media Messages",
      ar: "رسائل وسائط"
    }
  };

  const copyPricingToClipboard = () => {
    const pricingInfo = `
WhatsApp Pricing Summary for ${messageCount} ${t(messageTypes[messageType as keyof typeof messageTypes].en, messageTypes[messageType as keyof typeof messageTypes].ar)}

Facebook Business: $${calculateCost('facebook')} (${getLocalCost('facebook')})
SendPulse: $${calculateCost('sendpulse')} (${getLocalCost('sendpulse')})
Twilio: $${calculateCost('twilio')} (${getLocalCost('twilio')})

Country: ${country.toUpperCase()}
Message Type: ${messageType}
    `;
    
    navigator.clipboard.writeText(pricingInfo)
      .then(() => {
        toast.success(t("Pricing copied to clipboard!", "تم نسخ التسعير إلى الحافظة!"));
      })
      .catch(() => {
        toast.error(t("Failed to copy pricing", "فشل نسخ التسعير"));
      });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-tech-blue" />
          <div>
            <CardTitle>{t("WhatsApp Business Pricing Calculator", "حاسبة أسعار واتساب للأعمال")}</CardTitle>
            <CardDescription>
              {t(
                "Compare messaging costs across different providers and countries",
                "قارن تكاليف الرسائل عبر مقدمي الخدمات والبلدان المختلفة"
              )}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="message-type">
              {t("Message Type", "نوع الرسالة")}
            </Label>
            <Select
              value={messageType}
              onValueChange={setMessageType}
            >
              <SelectTrigger id="message-type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">
                  {t("Marketing Messages", "رسائل تسويقية")} 
                  <span className="text-xs text-muted-foreground ml-1">
                    {t("(User Initiated)", "(بمبادرة المستخدم)")}
                  </span>
                </SelectItem>
                <SelectItem value="service">
                  {t("Service Messages", "رسائل خدمية")}
                  <span className="text-xs text-muted-foreground ml-1">
                    {t("(Transactional)", "(المعاملات)")}
                  </span>
                </SelectItem>
                <SelectItem value="media">
                  {t("Media Messages", "رسائل وسائط")}
                  <span className="text-xs text-muted-foreground ml-1">
                    {t("(Images, Audio, Video)", "(صور، صوت، فيديو)")}
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              {messageType === "marketing" && t(
                "Messages initiated by users within a 24-hour window",
                "الرسائل التي يبدأها المستخدمون في غضون 24 ساعة"
              )}
              {messageType === "service" && t(
                "Transactional updates such as shipping notifications or appointment reminders",
                "تحديثات المعاملات مثل إشعارات الشحن أو تذكير بالمواعيد"
              )}
              {messageType === "media" && t(
                "Messages containing images, audio, or video attachments",
                "رسائل تحتوي على مرفقات صور أو صوت أو فيديو"
              )}
            </p>
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
                  {t("Egypt", "مصر")} 🇪🇬
                </SelectItem>
                <SelectItem value="uae">
                  {t("UAE", "الإمارات")} 🇦🇪
                </SelectItem>
                <SelectItem value="ksa">
                  {t("Saudi Arabia", "السعودية")} 🇸🇦
                </SelectItem>
                <SelectItem value="jordan">
                  {t("Jordan", "الأردن")} 🇯🇴
                </SelectItem>
                <SelectItem value="kuwait">
                  {t("Kuwait", "الكويت")} 🇰🇼
                </SelectItem>
                <SelectItem value="bahrain">
                  {t("Bahrain", "البحرين")} 🇧🇭
                </SelectItem>
                <SelectItem value="qatar">
                  {t("Qatar", "قطر")} 🇶🇦
                </SelectItem>
                <SelectItem value="oman">
                  {t("Oman", "عمان")} 🇴🇲
                </SelectItem>
                <SelectItem value="morocco">
                  {t("Morocco", "المغرب")} 🇲🇦
                </SelectItem>
                <SelectItem value="tunisia">
                  {t("Tunisia", "تونس")} 🇹🇳
                </SelectItem>
                <SelectItem value="algeria">
                  {t("Algeria", "الجزائر")} 🇩🇿
                </SelectItem>
                <SelectItem value="libya">
                  {t("Libya", "ليبيا")} 🇱🇾
                </SelectItem>
                <SelectItem value="lebanon">
                  {t("Lebanon", "لبنان")} 🇱🇧
                </SelectItem>
                <SelectItem value="iraq">
                  {t("Iraq", "العراق")} 🇮🇶
                </SelectItem>
                <SelectItem value="usa">
                  {t("United States", "الولايات المتحدة")} 🇺🇸
                </SelectItem>
                <SelectItem value="uk">
                  {t("United Kingdom", "المملكة المتحدة")} 🇬🇧
                </SelectItem>
                <SelectItem value="other">
                  {t("Other Countries", "دول أخرى")} 🌍
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
            <div className="pt-2 flex justify-between text-xs text-muted-foreground">
              <span>100</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>75,000</span>
              <span>100,000</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("Provider", "مزود الخدمة")}</TableHead>
                  <TableHead className="text-right">{t("USD Cost", "التكلفة بالدولار")}</TableHead>
                  <TableHead className="text-right">{t("Local Currency", "العملة المحلية")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <Facebook size={18} className="text-blue-600" /> 
                    <span>{t("Facebook Business", "فيسبوك بزنس")}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">${calculateCost('facebook')}</TableCell>
                  <TableCell className="text-right">{getLocalCost('facebook')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <MessageSquare size={18} className="text-purple-600" /> 
                    <span>SendPulse</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">${calculateCost('sendpulse')}</TableCell>
                  <TableCell className="text-right">{getLocalCost('sendpulse')}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="flex items-center gap-2">
                    <Globe size={18} className="text-red-500" /> 
                    <span>Twilio</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">${calculateCost('twilio')}</TableCell>
                  <TableCell className="text-right">{getLocalCost('twilio')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="bg-muted/30 rounded-lg p-4 text-sm">
              <h4 className="font-medium mb-2">
                {t("Total Cost Analysis", "تحليل التكلفة الإجمالية")}
              </h4>
              <p className="text-muted-foreground mb-2">
                {t(
                  `For ${messageCount.toLocaleString()} ${messageType} messages in ${country}, you could save up to:`,
                  `لعدد ${messageCount.toLocaleString()} رسالة ${messageType === 'marketing' ? 'تسويقية' : messageType === 'service' ? 'خدمية' : 'وسائط'} في ${country === 'egypt' ? 'مصر' : country === 'uae' ? 'الإمارات' : country === 'ksa' ? 'السعودية' : country}, يمكنك توفير حتى:`
                )}
              </p>
              
              <div className="text-sm">
                <div className="flex justify-between">
                  <span>{t("Cheapest Provider", "أرخص مزود")}:</span>
                  <span className="font-medium">
                    {calculateCost('facebook') < calculateCost('sendpulse') && calculateCost('facebook') < calculateCost('twilio') 
                      ? 'Facebook Business' 
                      : calculateCost('sendpulse') < calculateCost('twilio') 
                        ? 'SendPulse' 
                        : 'Twilio'}
                  </span>
                </div>
                <div className="flex justify-between mt-1">
                  <span>{t("Most Expensive", "الأكثر تكلفة")}:</span>
                  <span className="font-medium">
                    {calculateCost('facebook') > calculateCost('sendpulse') && calculateCost('facebook') > calculateCost('twilio') 
                      ? 'Facebook Business' 
                      : calculateCost('sendpulse') > calculateCost('twilio') 
                        ? 'SendPulse' 
                        : 'Twilio'}
                  </span>
                </div>
              </div>
              
              <div className="mt-3">
                <button 
                  onClick={copyPricingToClipboard}
                  className="w-full py-1.5 px-2 bg-tech-blue text-white text-sm rounded-md hover:bg-tech-blue/80 transition-colors flex items-center justify-center gap-2"
                >
                  {t("Copy Pricing Summary", "نسخ ملخص التسعير")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageCalculator;

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Mail, Phone, Eye, Download, FileSpreadsheet } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

export interface DatasetEntry {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  records: number;
  emails: number;
  phones: number;
  categoryEn: string;
  categoryAr: string;
  countryEn?: string;
  countryAr?: string;
  previewUrl?: string;
  sampleUrl?: string;
  featured?: boolean;
}

interface DatasetCardProps {
  dataset: DatasetEntry;
}

const formatAnimatedNumber = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return n.toLocaleString();
};

const AnimatedStat: React.FC<{ value: number; icon: React.ReactNode; label: string; className?: string }> = ({
  value,
  icon,
  label,
  className = "",
}) => {
  const { count, ref } = useCountUp(value, 1800);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-1 text-primary mb-1">
        {icon}
      </div>
      <div className="text-lg font-bold text-foreground tabular-nums">
        {formatAnimatedNumber(count)}
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
};

const DatasetCard: React.FC<DatasetCardProps> = ({ dataset }) => {
  const { t, isRtl } = useLanguage();

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in ${dataset.featured ? "border-primary/50 ring-1 ring-primary/20" : ""}`}>
      {dataset.featured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-primary text-primary-foreground">
            {t("Popular", "مميز")}
          </Badge>
        </div>
      )}

      <CardHeader className={`pb-3 ${isRtl ? "text-right" : "text-left"}`}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileSpreadsheet size={20} className="text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {t(dataset.categoryEn, dataset.categoryAr)}
          </Badge>
          {dataset.countryEn && (
            <Badge variant="outline" className="text-xs">
              {t(dataset.countryEn, dataset.countryAr || dataset.countryEn)}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">
          {t(dataset.titleEn, dataset.titleAr)}
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {t(dataset.descriptionEn, dataset.descriptionAr)}
        </p>
      </CardHeader>

      <CardContent className="pb-3">
        {/* Animated Stats */}
        <div className="grid grid-cols-3 gap-3 p-3 bg-muted/50 rounded-lg">
          <AnimatedStat
            value={dataset.records}
            icon={<Database size={14} />}
            label={t("Records", "سجل")}
          />
          <AnimatedStat
            value={dataset.emails}
            icon={<Mail size={14} />}
            label={t("Emails", "بريد")}
            className="border-x border-border"
          />
          <AnimatedStat
            value={dataset.phones}
            icon={<Phone size={14} />}
            label={t("Phones", "هاتف")}
          />
        </div>

        {/* Preview placeholder */}
        <div className="mt-3 h-28 bg-muted/30 rounded-lg border border-dashed border-border flex items-center justify-center">
          <span className="text-xs text-muted-foreground">{t("Preview coming soon", "المعاينة قريبًا")}</span>
        </div>
      </CardContent>

      <CardFooter className="gap-2 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          asChild={!!dataset.previewUrl}
          disabled={!dataset.previewUrl}
        >
          {dataset.previewUrl ? (
            <a href={dataset.previewUrl} target="_blank" rel="noopener noreferrer">
              <Eye size={14} />
              {t("Preview", "معاينة")}
            </a>
          ) : (
            <span>
              <Eye size={14} />
              {t("Preview", "معاينة")}
            </span>
          )}
        </Button>
        <Button
          size="sm"
          className="flex-1"
          asChild={!!dataset.sampleUrl}
          disabled={!dataset.sampleUrl}
        >
          {dataset.sampleUrl ? (
            <a href={dataset.sampleUrl} target="_blank" rel="noopener noreferrer">
              <Download size={14} />
              {t("Sample", "عينة")}
            </a>
          ) : (
            <span>
              <Download size={14} />
              {t("Sample", "عينة")}
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DatasetCard;

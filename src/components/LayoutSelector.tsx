
import React from 'react';
import { Button } from "@/components/ui/button";
import { Layout as LayoutIcon } from "lucide-react";
import { layouts } from '@/data/layouts';
import { Language, LayoutType } from '@/types/cv';

interface LayoutSelectorProps {
  language: Language;
  layout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ language, layout, onLayoutChange }) => {
  return (
    <div className="print:hidden flex justify-center gap-2 flex-wrap p-4 bg-white border-t">
      <div className="flex items-center gap-2 text-sm font-medium">
        <LayoutIcon className="w-4 h-4" />
        {language === 'ar' ? 'اختر التخطيط:' : 'Choose Layout:'}
      </div>
      {Object.entries(layouts).map(([key, layoutData]) => (
        <Button
          key={key}
          variant={layout === key ? "default" : "outline"}
          size="sm"
          onClick={() => onLayoutChange(key as LayoutType)}
          className="text-xs"
          title={layoutData.description[language]}
        >
          {layoutData.name[language]}
        </Button>
      ))}
    </div>
  );
};

export default LayoutSelector;

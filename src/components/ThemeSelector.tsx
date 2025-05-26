
import React from 'react';
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { themes } from '@/data/cvData';
import { Language, ThemeType } from '@/types/cv';

interface ThemeSelectorProps {
  language: Language;
  theme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ language, theme, onThemeChange }) => {
  return (
    <div className="print:hidden flex justify-center gap-2 flex-wrap p-4 bg-white">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Palette className="w-4 h-4" />
        {language === 'ar' ? 'اختر القالب:' : 'Choose Theme:'}
      </div>
      {Object.entries(themes).map(([key, themeData]) => (
        <Button
          key={key}
          variant={theme === key ? "default" : "outline"}
          size="sm"
          onClick={() => onThemeChange(key as ThemeType)}
          className="text-xs"
        >
          {themeData.name[language]}
        </Button>
      ))}
    </div>
  );
};

export default ThemeSelector;

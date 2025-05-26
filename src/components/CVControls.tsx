
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Globe } from "lucide-react";
import { Language } from '@/types/cv';

interface CVControlsProps {
  language: Language;
  onLanguageChange: () => void;
  onPrint: () => void;
}

const CVControls: React.FC<CVControlsProps> = ({ language, onLanguageChange, onPrint }) => {
  return (
    <div className="print:hidden flex justify-center gap-4 p-4 bg-white shadow-sm">
      <Button
        variant="outline"
        onClick={onLanguageChange}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        {language === 'ar' ? 'English' : 'العربية'}
      </Button>
      <Button onClick={onPrint} className="flex items-center gap-2">
        <Download className="w-4 h-4" />
        {language === 'ar' ? 'طباعة PDF' : 'Print PDF'}
      </Button>
    </div>
  );
};

export default CVControls;


import React from 'react';
import { User } from "lucide-react";
import { Theme } from '@/types/cv';

interface SummarySectionProps {
  summary: string;
  title: string;
  theme: Theme;
  variant?: 'default' | 'sidebar';
}

const SummarySection: React.FC<SummarySectionProps> = ({ summary, title, theme, variant = 'default' }) => {
  const isLight = variant === 'sidebar';
  
  return (
    <section className="avoid-break">
      <div className="flex items-center gap-2 mb-3 print:mb-2">
        <div className={`w-8 h-8 print:w-6 print:h-6 ${isLight ? 'bg-white/20' : theme.primary} rounded-full flex items-center justify-center`}>
          <User className={`w-4 h-4 print:w-3 print:h-3 ${isLight ? 'text-white' : 'text-white'}`} />
        </div>
        <h2 className={`text-xl font-bold print:text-lg ${isLight ? 'text-white' : theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className={`${isLight ? '' : theme.secondary} ${isLight ? '' : 'p-4 rounded-lg'}`}>
        <p className={`text-sm print:text-xs leading-relaxed ${isLight ? 'text-white/90' : 'text-gray-700'}`}>
          {summary}
        </p>
      </div>
    </section>
  );
};

export default SummarySection;

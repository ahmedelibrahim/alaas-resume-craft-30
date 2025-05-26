
import React from 'react';
import { Languages } from "lucide-react";
import { CVLanguage, Theme } from '@/types/cv';

interface LanguagesSectionProps {
  languages: CVLanguage[];
  title: string;
  theme: Theme;
  variant?: 'default' | 'sidebar';
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages, title, theme, variant = 'default' }) => {
  const isLight = variant === 'sidebar';
  
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 ${isLight ? 'bg-white/20' : theme.primary} rounded-full flex items-center justify-center`}>
          <Languages className={`w-4 h-4 ${isLight ? 'text-white' : 'text-white'}`} />
        </div>
        <h2 className={`text-lg font-bold ${isLight ? 'text-white' : theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-3">
        {languages.map((lang, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${isLight ? 'text-white' : 'text-gray-700'}`}>{lang.name}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i < (lang.level / 20) 
                        ? (isLight ? 'bg-white' : theme.skillColor)
                        : (isLight ? 'bg-white/30' : 'bg-gray-300')
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;

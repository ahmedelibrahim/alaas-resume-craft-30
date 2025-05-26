
import React from 'react';
import { Award } from "lucide-react";
import { CVPersonalInfo, Theme, Language } from '@/types/cv';

interface PersonalInfoSectionProps {
  personalInfo: CVPersonalInfo;
  title: string;
  theme: Theme;
  language: Language;
}

const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({ personalInfo, title, theme, language }) => {
  return (
    <section className={`${theme.secondary} p-4 rounded-lg`}>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
          <Award className="w-4 h-4 text-white" />
        </div>
        <h2 className={`text-lg font-bold ${theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p><strong>{language === 'ar' ? 'مكان الولادة:' : 'Birth Place:'}</strong> {personalInfo.birthPlace}</p>
        <p><strong>{language === 'ar' ? 'الجنسية:' : 'Nationality:'}</strong> {personalInfo.nationality}</p>
        <p><strong>{language === 'ar' ? 'الحالة الاجتماعية:' : 'Marital Status:'}</strong> {personalInfo.maritalStatus}</p>
      </div>
    </section>
  );
};

export default PersonalInfoSection;

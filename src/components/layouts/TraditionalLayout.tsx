
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CVData, Theme, Language } from '@/types/cv';
import CVHeader from '@/components/CVHeader';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import PersonalInfoSection from '@/components/PersonalInfoSection';

interface TraditionalLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const TraditionalLayout: React.FC<TraditionalLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
      <CVHeader data={data} theme={theme} />
      <CardContent className="p-8 print:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ExperienceSection 
              experience={data.experience}
              title={data.sections.experience}
              theme={theme}
            />
            <EducationSection 
              education={data.education}
              title={data.sections.education}
              theme={theme}
            />
          </div>
          <div className="space-y-6">
            <PersonalInfoSection 
              personalInfo={data.personalInfo}
              title={data.sections.personalInfo}
              theme={theme}
              language={language}
            />
            <SkillsSection 
              skills={data.skills}
              title={data.sections.skills}
              theme={theme}
            />
            <LanguagesSection 
              languages={data.languages}
              title={data.sections.languages}
              theme={theme}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TraditionalLayout;

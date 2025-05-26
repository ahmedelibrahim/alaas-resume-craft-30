
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
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden avoid-break">
      <CVHeader data={data} theme={theme} />
      <CardContent className="p-6 print:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-4">
          <div className="lg:col-span-2 space-y-5 print:space-y-3">
            <div className="avoid-break section-break">
              <ExperienceSection 
                experience={data.experience}
                title={data.sections.experience}
                theme={theme}
              />
            </div>
            <div className="avoid-break">
              <EducationSection 
                education={data.education}
                title={data.sections.education}
                theme={theme}
              />
            </div>
          </div>
          <div className="space-y-5 print:space-y-3">
            <div className="avoid-break">
              <PersonalInfoSection 
                personalInfo={data.personalInfo}
                title={data.sections.personalInfo}
                theme={theme}
                language={language}
              />
            </div>
            <div className="avoid-break">
              <SkillsSection 
                skills={data.skills}
                title={data.sections.skills}
                theme={theme}
              />
            </div>
            <div className="avoid-break">
              <LanguagesSection 
                languages={data.languages}
                title={data.sections.languages}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TraditionalLayout;

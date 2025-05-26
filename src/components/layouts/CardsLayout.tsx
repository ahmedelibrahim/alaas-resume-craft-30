
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CVData, Theme, Language } from '@/types/cv';
import CVHeader from '@/components/CVHeader';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import PersonalInfoSection from '@/components/PersonalInfoSection';

interface CardsLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const CardsLayout: React.FC<CardsLayoutProps> = ({ data, theme, language }) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
        <CVHeader data={data} theme={theme} />
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-md print:shadow-none">
            <CardContent className="p-6">
              <ExperienceSection 
                experience={data.experience}
                title={data.sections.experience}
                theme={theme}
              />
            </CardContent>
          </Card>

          <Card className="shadow-md print:shadow-none">
            <CardContent className="p-6">
              <EducationSection 
                education={data.education}
                title={data.sections.education}
                theme={theme}
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-md print:shadow-none">
            <CardContent className="p-6">
              <PersonalInfoSection 
                personalInfo={data.personalInfo}
                title={data.sections.personalInfo}
                theme={theme}
                language={language}
              />
            </CardContent>
          </Card>

          <Card className="shadow-md print:shadow-none">
            <CardContent className="p-6">
              <SkillsSection 
                skills={data.skills}
                title={data.sections.skills}
                theme={theme}
              />
            </CardContent>
          </Card>

          <Card className="shadow-md print:shadow-none">
            <CardContent className="p-6">
              <LanguagesSection 
                languages={data.languages}
                title={data.sections.languages}
                theme={theme}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsLayout;

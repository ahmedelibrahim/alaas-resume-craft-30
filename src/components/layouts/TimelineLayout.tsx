
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Circle } from "lucide-react";
import { CVData, Theme, Language } from '@/types/cv';
import CVHeader from '@/components/CVHeader';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import PersonalInfoSection from '@/components/PersonalInfoSection';

interface TimelineLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const TimelineLayout: React.FC<TimelineLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
      <CVHeader data={data} theme={theme} />
      <CardContent className="p-8 print:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Timeline */}
            <div className="relative">
              {/* Experience Timeline */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h2 className={`text-xl font-bold ${theme.accent}`}>
                    {data.sections.experience}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {data.experience.map((exp, index) => (
                    <div key={index} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 ${theme.skillColor} rounded-full`}></div>
                        {index < data.experience.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className="text-sm text-gray-700 leading-relaxed">{exp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Timeline */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h2 className={`text-xl font-bold ${theme.accent}`}>
                    {data.sections.education}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {data.education.map((edu, index) => (
                    <div key={index} className="flex gap-4 relative">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        {index < data.education.length - 1 && (
                          <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className="text-sm text-gray-700 leading-relaxed">{edu}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export default TimelineLayout;

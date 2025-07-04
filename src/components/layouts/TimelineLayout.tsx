
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { CVData, Theme, Language } from '@/types/cv';
import CVHeader from '@/components/CVHeader';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import PersonalInfoSection from '@/components/PersonalInfoSection';
import SummarySection from '@/components/SummarySection';

interface TimelineLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const TimelineLayout: React.FC<TimelineLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
      <CVHeader data={data} theme={theme} />
      <CardContent className="p-6 print:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {/* Summary */}
            <div className="mb-6">
              <SummarySection 
                summary={data.summary}
                title={data.sections.summary}
                theme={theme}
              />
            </div>

            {/* Experience Timeline */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <h2 className={`text-xl font-bold ${theme.accent}`}>
                  {data.sections.experience}
                </h2>
              </div>
              
              <div className="space-y-3">
                {data.experience.map((exp, index) => (
                  <div key={index} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 ${theme.skillColor} rounded-full`}></div>
                      {index < data.experience.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-800 text-sm">{exp.title}</h3>
                        <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{exp.period}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {exp.organization}
                        {exp.location && ` - ${exp.location}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <h2 className={`text-xl font-bold ${theme.accent}`}>
                  {data.sections.education}
                </h2>
              </div>
              
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index} className="flex gap-4 relative">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      {index < data.education.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-300 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-gray-800 text-sm">{edu.title}</h3>
                        <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{edu.year}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {edu.institution}
                        {edu.location && ` - ${edu.location}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
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

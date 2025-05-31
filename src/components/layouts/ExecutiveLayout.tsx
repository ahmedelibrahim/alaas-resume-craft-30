
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CVData, Theme, Language } from '@/types/cv';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import SummarySection from '@/components/SummarySection';

interface ExecutiveLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const ExecutiveLayout: React.FC<ExecutiveLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden avoid-break">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="bg-white p-8 print:p-6 border-b-4 border-gray-200 avoid-break">
          <div className="flex flex-col md:flex-row items-center gap-8 print:gap-6">
            <Avatar className="w-32 h-32 print:w-24 print:h-24 border-4 border-gray-200 shadow-lg">
              <AvatarImage 
                src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
                alt={data.name}
                className="object-contain"
              />
              <AvatarFallback className="text-2xl print:text-lg font-bold bg-gray-100 text-gray-600">
                {data.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl print:text-2xl font-light text-gray-800 mb-2 print:mb-1">
                {data.name}
              </h1>
              <p className="text-xl print:text-base text-gray-600 mb-6 print:mb-3">
                {data.title}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:gap-2 text-sm print:text-xs text-gray-600">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4 print:w-3 print:h-3" />
                  <span>{data.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 print:w-3 print:h-3" />
                  <span>{data.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-4 h-4 print:w-3 print:h-3" />
                  <span>{data.personalInfo.residence}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Calendar className="w-4 h-4 print:w-3 print:h-3" />
                  <span>{data.personalInfo.birthDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 print:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:gap-4">
            <div className="lg:col-span-2 space-y-8 print:space-y-3">
              <div className="avoid-break">
                <SummarySection 
                  summary={data.summary}
                  title={data.sections.summary}
                  theme={theme}
                />
              </div>
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

            <div className="space-y-6 print:space-y-3">
              <div className="bg-gray-50 p-6 print:p-3 rounded-lg avoid-break">
                <h3 className="text-lg print:text-sm font-semibold text-gray-800 mb-4 print:mb-2">
                  {data.sections.personalInfo}
                </h3>
                <div className="space-y-2 print:space-y-1 text-sm print:text-xs text-gray-600">
                  <p><strong>{language === 'ar' ? 'مكان الولادة:' : 'Birth Place:'}</strong> {data.personalInfo.birthPlace}</p>
                  <p><strong>{language === 'ar' ? 'الجنسية:' : 'Nationality:'}</strong> {data.personalInfo.nationality}</p>
                  <p><strong>{language === 'ar' ? 'الحالة الاجتماعية:' : 'Marital Status:'}</strong> {data.personalInfo.maritalStatus}</p>
                </div>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveLayout;

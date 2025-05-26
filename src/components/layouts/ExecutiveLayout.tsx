
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CVData, Theme, Language } from '@/types/cv';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';

interface ExecutiveLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const ExecutiveLayout: React.FC<ExecutiveLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="bg-white p-8 border-b-4 border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-gray-200 shadow-lg">
              <AvatarImage 
                src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
                alt={data.name}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gray-100 text-gray-600">
                {data.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl font-light text-gray-800 mb-2">
                {data.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {data.title}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4" />
                  <span>{data.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" />
                  <span>{data.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-4 h-4" />
                  <span>{data.personalInfo.residence}</span>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  <span>{data.personalInfo.birthDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 print:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
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
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {data.sections.personalInfo}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>{language === 'ar' ? 'مكان الولادة:' : 'Birth Place:'}</strong> {data.personalInfo.birthPlace}</p>
                  <p><strong>{language === 'ar' ? 'الجنسية:' : 'Nationality:'}</strong> {data.personalInfo.nationality}</p>
                  <p><strong>{language === 'ar' ? 'الحالة الاجتماعية:' : 'Marital Status:'}</strong> {data.personalInfo.maritalStatus}</p>
                </div>
              </div>

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
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveLayout;

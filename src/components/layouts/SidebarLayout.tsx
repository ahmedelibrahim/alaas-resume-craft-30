
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

interface SidebarLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden avoid-break">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 sidebar-layout">
          {/* Sidebar */}
          <div className={`${theme.headerBg} text-white p-6 print:p-3 space-y-6 print:space-y-3 avoid-break`}>
            <div className="text-center avoid-break">
              <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg mb-4 print:w-20 print:h-20 print:mb-2">
                <AvatarImage 
                  src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
                  alt={data.name}
                  className="object-contain"
                />
                <AvatarFallback className="text-2xl font-bold bg-white text-gray-600 print:text-lg">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold mb-2 print:text-lg print:mb-1">{data.name}</h1>
              <p className="text-lg opacity-90 print:text-sm">{data.title}</p>
            </div>

            <div className="space-y-3 text-sm print:text-xs print:space-y-1 avoid-break">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 print:w-3 print:h-3" />
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 print:w-3 print:h-3" />
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 print:w-3 print:h-3" />
                <span>{data.personalInfo.residence}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 print:w-3 print:h-3" />
                <span>{data.personalInfo.birthDate}</span>
              </div>
            </div>

            <div className="space-y-4 print:space-y-2">
              <div className="avoid-break">
                <SkillsSection 
                  skills={data.skills}
                  title={data.sections.skills}
                  theme={theme}
                  variant="sidebar"
                />
              </div>
              <div className="avoid-break">
                <LanguagesSection 
                  languages={data.languages}
                  title={data.sections.languages}
                  theme={theme}
                  variant="sidebar"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 p-8 print:p-3 space-y-6 print:space-y-3">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default SidebarLayout;

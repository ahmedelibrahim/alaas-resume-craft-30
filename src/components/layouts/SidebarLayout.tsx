
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CVData, Theme, Language } from '@/types/cv';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import PersonalInfoSection from '@/components/PersonalInfoSection';

interface SidebarLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ data, theme, language }) => {
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Sidebar */}
          <div className={`${theme.headerBg} text-white p-6 space-y-6`}>
            <div className="text-center">
              <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg mb-4">
                <AvatarImage 
                  src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
                  alt={data.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-white text-gray-600">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
              <p className="text-lg opacity-90">{data.title}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="break-all">{data.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.residence}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{data.personalInfo.birthDate}</span>
              </div>
            </div>

            <div className="space-y-4">
              <SkillsSection 
                skills={data.skills}
                title={data.sections.skills}
                theme={theme}
                variant="sidebar"
              />
              <LanguagesSection 
                languages={data.languages}
                title={data.sections.languages}
                theme={theme}
                variant="sidebar"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 p-8 print:p-6 space-y-6">
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
        </div>
      </CardContent>
    </Card>
  );
};

export default SidebarLayout;

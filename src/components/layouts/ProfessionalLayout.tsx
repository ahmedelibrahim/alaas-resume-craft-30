
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar, User, Briefcase, GraduationCap } from "lucide-react";
import { CVData, Theme, Language } from '@/types/cv';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import SummarySection from '@/components/SummarySection';

interface ProfessionalLayoutProps {
  data: CVData;
  theme: Theme;
  language: Language;
}

const ProfessionalLayout: React.FC<ProfessionalLayoutProps> = ({ data, theme, language }) => {
  const isRTL = language === 'ar';
  
  return (
    <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden max-w-4xl mx-auto avoid-break">
      <CardContent className="p-0">
        <div className="flex min-h-[297mm] print:min-h-[297mm]">
          {/* الشريط الجانبي الأيمن - 30% */}
          <div className={`${theme.headerBg} text-white p-6 print:p-4 space-y-6 print:space-y-4 avoid-break`} 
               style={{ width: '30%', minWidth: '30%' }}>
            {/* الصورة الشخصية */}
            <div className="text-center avoid-break">
              <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg mb-4 print:w-24 print:h-24 print:mb-3">
                <AvatarImage 
                  src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
                  alt={data.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-white text-gray-600 print:text-lg">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              {/* الاسم والمسمى الوظيفي تحت الصورة */}
              <div className="text-center mb-6 print:mb-4">
                <h1 className="text-2xl font-bold mb-2 print:text-xl print:mb-1">
                  {data.name}
                </h1>
                <p className="text-lg font-medium opacity-90 print:text-base">
                  {data.title}
                </p>
              </div>
            </div>

            {/* معلومات التواصل */}
            <div className="space-y-3 print:space-y-2 avoid-break">
              <h3 className="text-lg font-bold mb-3 print:text-base print:mb-2 flex items-center gap-2">
                <User className="w-5 h-5 print:w-4 print:h-4" />
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
              </h3>
              <div className="space-y-2 text-sm print:text-xs print:space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 print:w-3 print:h-3" />
                  <span className="break-all">{data.personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 print:w-3 print:h-3" />
                  <span className="break-all">{data.personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 print:w-3 print:h-3" />
                  <span>{data.personalInfo.residence}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0 print:w-3 print:h-3" />
                  <span>{data.personalInfo.birthDate}</span>
                </div>
              </div>
            </div>

            {/* المهارات */}
            <div className="space-y-4 print:space-y-3 avoid-break">
              <SkillsSection 
                skills={data.skills}
                title={data.sections.skills}
                theme={theme}
                variant="sidebar"
              />
            </div>

            {/* اللغات */}
            <div className="space-y-4 print:space-y-3 avoid-break">
              <LanguagesSection 
                languages={data.languages}
                title={data.sections.languages}
                theme={theme}
                variant="sidebar"
              />
            </div>

            {/* المعلومات الشخصية */}
            <div className="space-y-3 print:space-y-2 avoid-break">
              <h3 className="text-lg font-bold mb-3 print:text-base print:mb-2">
                {data.sections.personalInfo}
              </h3>
              <div className="space-y-2 text-sm print:text-xs print:space-y-1">
                <p><strong>{language === 'ar' ? 'مكان الولادة:' : 'Birth Place:'}</strong> {data.personalInfo.birthPlace}</p>
                <p><strong>{language === 'ar' ? 'الجنسية:' : 'Nationality:'}</strong> {data.personalInfo.nationality}</p>
                <p><strong>{language === 'ar' ? 'الحالة الاجتماعية:' : 'Marital Status:'}</strong> {data.personalInfo.maritalStatus}</p>
              </div>
            </div>
          </div>

          {/* المحتوى الرئيسي الأيسر - 70% */}
          <div className="bg-white p-6 print:p-4 space-y-6 print:space-y-4" 
               style={{ width: '70%', minWidth: '70%' }}>
            {/* النبذة الشخصية */}
            <div className="space-y-4 print:space-y-3 avoid-break">
              <SummarySection 
                summary={data.summary}
                title={data.sections.summary}
                theme={theme}
              />
            </div>

            {/* الخبرات العملية */}
            <div className="space-y-4 print:space-y-3 avoid-break section-break">
              <div className="flex items-center gap-2 mb-4 print:mb-3">
                <div className={`w-8 h-8 print:w-6 print:h-6 ${theme.primary} rounded-full flex items-center justify-center`}>
                  <Briefcase className="w-4 h-4 text-white print:w-3 print:h-3" />
                </div>
                <h2 className={`text-xl font-bold print:text-lg ${theme.accent}`}>
                  {data.sections.experience}
                </h2>
              </div>
              <div className="space-y-4 print:space-y-3">
                {data.experience.map((exp, index) => (
                  <div key={index} className="border-l-3 border-gray-200 pl-4 pb-3 print:pl-3 print:pb-2 experience-item">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-800 print:text-sm">{exp.title}</h3>
                      <span className="text-sm text-gray-500 ml-4 flex-shrink-0 font-medium print:text-xs no-break">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm print:text-xs">
                      {exp.organization}
                      {exp.location && ` - ${exp.location}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* المؤهلات الدراسية */}
            <div className="space-y-4 print:space-y-3 avoid-break">
              <div className="flex items-center gap-2 mb-4 print:mb-3">
                <div className={`w-8 h-8 print:w-6 print:h-6 ${theme.primary} rounded-full flex items-center justify-center`}>
                  <GraduationCap className="w-4 h-4 text-white print:w-3 print:h-3" />
                </div>
                <h2 className={`text-xl font-bold print:text-lg ${theme.accent}`}>
                  {data.sections.education}
                </h2>
              </div>
              <div className="space-y-4 print:space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index} className="border-l-3 border-gray-200 pl-4 pb-3 print:pl-3 print:pb-2 education-item">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-gray-800 print:text-sm">{edu.title}</h3>
                      <span className="text-sm text-gray-500 ml-4 flex-shrink-0 font-medium print:text-xs no-break">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm print:text-xs">
                      {edu.institution}
                      {edu.location && ` - ${edu.location}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalLayout;

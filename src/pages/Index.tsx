
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { themes, cvData } from '@/data/cvData';
import { Language, ThemeType } from '@/types/cv';
import CVControls from '@/components/CVControls';
import ThemeSelector from '@/components/ThemeSelector';
import CVHeader from '@/components/CVHeader';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import LanguagesSection from '@/components/LanguagesSection';
import PersonalInfoSection from '@/components/PersonalInfoSection';

const Index = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<ThemeType>('modern');

  const handlePrint = () => {
    window.print();
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const currentTheme = themes[theme];
  const currentData = cvData[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Controls */}
      <CVControls 
        language={language}
        onLanguageChange={handleLanguageChange}
        onPrint={handlePrint}
      />
      
      {/* Theme selector */}
      <ThemeSelector 
        language={language}
        theme={theme}
        onThemeChange={setTheme}
      />

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-6 print:p-0 print:max-w-none">
        <Card className="shadow-lg print:shadow-none print:border-none overflow-hidden">
          {/* Header */}
          <CVHeader data={currentData} theme={currentTheme} />

          <CardContent className="p-8 print:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <ExperienceSection 
                  experience={currentData.experience}
                  title={currentData.sections.experience}
                  theme={currentTheme}
                />

                <EducationSection 
                  education={currentData.education}
                  title={currentData.sections.education}
                  theme={currentTheme}
                />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <PersonalInfoSection 
                  personalInfo={currentData.personalInfo}
                  title={currentData.sections.personalInfo}
                  theme={currentTheme}
                  language={language}
                />

                <SkillsSection 
                  skills={currentData.skills}
                  title={currentData.sections.skills}
                  theme={currentTheme}
                />

                <LanguagesSection 
                  languages={currentData.languages}
                  title={currentData.sections.languages}
                  theme={currentTheme}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:p-0 {
            padding: 0 !important;
          }
          
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          
          .print\\:max-w-none {
            max-width: none !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          .print\\:border-none {
            border: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import { themes, cvData } from '@/data/cvData';
import { Language, ThemeType, LayoutType } from '@/types/cv';
import CVControls from '@/components/CVControls';
import ThemeSelector from '@/components/ThemeSelector';
import LayoutSelector from '@/components/LayoutSelector';
import TraditionalLayout from '@/components/layouts/TraditionalLayout';
import SidebarLayout from '@/components/layouts/SidebarLayout';
import TimelineLayout from '@/components/layouts/TimelineLayout';
import CardsLayout from '@/components/layouts/CardsLayout';
import ExecutiveLayout from '@/components/layouts/ExecutiveLayout';
import ProfessionalLayout from '@/components/layouts/ProfessionalLayout';

const Index = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<ThemeType>('modern');
  const [layout, setLayout] = useState<LayoutType>('traditional');

  const handlePrint = () => {
    window.print();
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const currentTheme = themes[theme];
  const currentData = cvData[language];
  const isRTL = language === 'ar';

  const renderLayout = () => {
    const layoutProps = {
      data: currentData,
      theme: currentTheme,
      language
    };

    switch (layout) {
      case 'sidebar':
        return <SidebarLayout {...layoutProps} />;
      case 'timeline':
        return <TimelineLayout {...layoutProps} />;
      case 'cards':
        return <CardsLayout {...layoutProps} />;
      case 'executive':
        return <ExecutiveLayout {...layoutProps} />;
      case 'professional':
        return <ProfessionalLayout {...layoutProps} />;
      default:
        return <TraditionalLayout {...layoutProps} />;
    }
  };

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

      {/* Layout selector */}
      <LayoutSelector 
        language={language}
        layout={layout}
        onLayoutChange={setLayout}
      />

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-6 print:p-0 print:max-w-none">
        {renderLayout()}
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

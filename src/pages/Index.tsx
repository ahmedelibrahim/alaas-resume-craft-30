
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { themes, cvData } from '@/data/cvData';
import { Language, ThemeType, LayoutType, CVData, User } from '@/types/cv';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Save, User as UserIcon } from 'lucide-react';
import CVControls from '@/components/CVControls';
import ThemeSelector from '@/components/ThemeSelector';
import LayoutSelector from '@/components/LayoutSelector';
import EditForm from '@/components/EditForm';
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
  const [customData, setCustomData] = useState<Record<Language, CVData>>({
    ar: { ...cvData.ar },
    en: { ...cvData.en }
  });
  const [user, setUser] = useState<User | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // التحقق من حالة تسجيل الدخول
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handlePrint = () => {
    // إعداد خاص للطباعة
    const originalTitle = document.title;
    document.title = `CV_${customData[language].name}_${layout}`;
    
    const printStyles = document.createElement('style');
    printStyles.textContent = `
      @media print {
        @page {
          margin: 0.5in;
          size: A4;
        }
        
        * {
          -webkit-print-color-adjust: exact !important;
          color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        body {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .print\\:p-0 {
          padding: 0 !important;
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
        
        .print\\:hidden {
          display: none !important;
        }
        
        .bg-blue-600, .bg-blue-500 {
          background-color: #2563eb !important;
          color: white !important;
        }
        
        .bg-green-600, .bg-green-500 {
          background-color: #16a34a !important;
          color: white !important;
        }
        
        .bg-purple-600, .bg-purple-500 {
          background-color: #9333ea !important;
          color: white !important;
        }
        
        .bg-orange-600, .bg-orange-500 {
          background-color: #ea580c !important;
          color: white !important;
        }
        
        .bg-red-600, .bg-red-500 {
          background-color: #dc2626 !important;
          color: white !important;
        }
        
        .grid {
          display: grid !important;
        }
        
        .lg\\:grid-cols-3 {
          grid-template-columns: 1fr 2fr !important;
        }
        
        .lg\\:grid-cols-4 {
          grid-template-columns: 1fr 3fr !important;
        }
        
        .lg\\:col-span-2 {
          grid-column: span 2 !important;
        }
        
        .lg\\:col-span-3 {
          grid-column: span 3 !important;
        }
      }
    `;
    
    document.head.appendChild(printStyles);
    window.print();
    
    setTimeout(() => {
      document.head.removeChild(printStyles);
      document.title = originalTitle;
    }, 1000);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const handleDataUpdate = (updatedData: CVData) => {
    setCustomData(prev => ({
      ...prev,
      [language]: updatedData
    }));
  };

  const handleSaveCV = () => {
    if (!user) {
      // توجيه المستخدم لتسجيل الدخول
      toast({
        title: "يجب تسجيل الدخول",
        description: "يجب تسجيل الدخول لحفظ سيرتك الذاتية",
        variant: "destructive"
      });
      navigate('/auth');
      return;
    }

    // محاكاة حفظ السيرة الذاتية
    toast({
      title: "تم الحفظ بنجاح",
      description: "تم حفظ سيرتك الذاتية بنجاح"
    });
    
    // توجيه المستخدم إلى لوحة التحكم
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleAuthAction = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const currentTheme = themes[theme];
  const currentData = customData[language];
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
      <div className="flex justify-between items-center p-4 print:hidden">
        <CVControls 
          language={language}
          onLanguageChange={handleLanguageChange}
          onPrint={handlePrint}
        />
        
        <div className="flex gap-2">
          <Button onClick={handleSaveCV} className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            حفظ السيرة الذاتية
          </Button>
          
          <Button onClick={handleAuthAction} variant="outline" className="flex items-center gap-2">
            <UserIcon className="w-4 h-4" />
            {user ? 'لوحة التحكم' : 'تسجيل الدخول'}
          </Button>
        </div>
      </div>
      
      {/* Edit Form */}
      <div className="max-w-4xl mx-auto p-4 print:hidden">
        <div className="flex justify-center mb-4">
          <EditForm 
            data={currentData}
            language={language}
            onSave={handleDataUpdate}
          />
        </div>
      </div>
      
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
        <div className="avoid-break">
          {renderLayout()}
        </div>
      </div>
    </div>
  );
};

export default Index;

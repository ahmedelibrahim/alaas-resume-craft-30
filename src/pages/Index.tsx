
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Languages,
  Download,
  Globe
} from "lucide-react";

const Index = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

  const handlePrint = () => {
    window.print();
  };

  const cvData = {
    ar: {
      name: "علاء مساس",
      title: "مختص في التعليم والتدريب",
      personalInfo: {
        birthDate: "25 أغسطس 1983",
        birthPlace: "حلب / سوريا",
        nationality: "السورية / التركية",
        maritalStatus: "متزوج",
        residence: "تركيا، هاتاي، إسكندرون",
        phone: "+97452069005",
        email: "alaamassass83@gmail.com"
      },
      education: [
        "نحو استجابة أفضل – Harvard University",
        "دورة قيادة الحاسوب (ICDL) – جمعية جسور التعليمية، تركيا / هاتاي",
        "دورة تدريب وإعداد المدربين (TOT) – البورد الألماني، تركيا / هاتاي",
        "دبلوم في التأهيل التربوي – وزارة التعليم الوطني، تركيا / هاتاي",
        "دورة إعداد وتأهيل معلمي اللغة العربية للناطقين بغيرها",
        "دورة التعليم في زمن الحروب والكوارث – وزارة التعليم الوطني / اليونيسف، تركيا / هاتاي",
        "إجازة جامعية في اللغة العربية وآدابها – جامعة حلب، سوريا"
      ],
      experience: [
        "مسؤول تعليم – منظمة مسلم كير، تركيا / هاتاي",
        "ميسر أنشطة الدعم النفسي والاجتماعي – منظمة بنيان، سوريا / إدلب",
        "مشرف تعليم – منظمة بنيان، سوريا / إدلب",
        "مسؤول تعليم – جمعية جسور التعليمية، تركيا / هاتاي",
        "مدرب تنمية بشرية معتمد – البورد الألماني، تركيا / هاتاي",
        "قائد فريق – فريق آفاق للخدمات والاستشارات الجامعية، تركيا / هاتاي",
        "مسؤول مراقبة وتقييم – فريق دعم التربية والتعليم، تركيا",
        "مدرس لغة عربية للناطقين بغيرها",
        "مدرس لغة عربية – وزارة التعليم الوطني / اليونيسف، تركيا / هاتاي",
        "مدرس لغة عربية – وزارة التربية، سوريا / حلب",
        "مدرس لغة عربية – Smart Way Academy، سوريا / حلب"
      ],
      skills: [
        { name: "الإدارة والتخطيط", level: 95 },
        { name: "الإلقاء والقدرة على الإقناع", level: 95 },
        { name: "العمل في بيئات متعددة", level: 85 },
        { name: "قيادة الحاسوب", level: 80 },
        { name: "التواصل الفعال", level: 90 },
        { name: "إدارة الوقت", level: 88 }
      ],
      languages: [
        { name: "العربية", level: 100 },
        { name: "الإنجليزية", level: 60 },
        { name: "التركية", level: 30 }
      ],
      sections: {
        personalInfo: "المعلومات الشخصية",
        education: "المؤهلات الدراسية",
        experience: "الخبرة العملية",
        skills: "المهارات",
        languages: "اللغات"
      }
    },
    en: {
      name: "Alaa Massas",
      title: "Education & Training Specialist",
      personalInfo: {
        birthDate: "August 25, 1983",
        birthPlace: "Aleppo, Syria",
        nationality: "Syrian / Turkish",
        maritalStatus: "Married",
        residence: "İskenderun, Hatay, Turkey",
        phone: "+97452069005",
        email: "alaamassass83@gmail.com"
      },
      education: [
        "Better Response – Harvard University",
        "ICDL Computer Course – Jusoor Educational Association, Hatay, Turkey",
        "TOT (Training of Trainers) – German Board, Hatay, Turkey",
        "Educational Qualification Diploma – Ministry of National Education, Hatay, Turkey",
        "Arabic Language Teaching Preparation Course (for non-native speakers)",
        "Education in Conflict and Crisis – MoNE / UNICEF, Hatay, Turkey",
        "Bachelor's Degree in Arabic Language and Literature – Aleppo University, Syria"
      ],
      experience: [
        "Education Officer – Muslim Care Organization, Hatay, Turkey",
        "Psychosocial Support Facilitator – Bonyan Organization, Idlib, Syria",
        "Education Supervisor – Bonyan Organization, Idlib, Syria",
        "Education Officer – Jusoor Educational Association, Hatay, Turkey",
        "Certified Soft Skills Trainer – German Board, Hatay, Turkey",
        "Team Leader – Afaq Educational Consulting, Hatay, Turkey",
        "M&E Officer – Education Support Team, Turkey",
        "Arabic Language Teacher for Non-Native Speakers",
        "Arabic Language Teacher – MoNE / UNICEF, Hatay, Turkey",
        "Arabic Language Teacher – Ministry of Education, Aleppo, Syria",
        "Arabic Language Teacher – Smart Way Academy, Aleppo, Syria"
      ],
      skills: [
        { name: "Management and Planning", level: 95 },
        { name: "Public Speaking and Persuasion", level: 95 },
        { name: "Working in Multicultural Environments", level: 85 },
        { name: "Computer Skills", level: 80 },
        { name: "Effective Communication", level: 90 },
        { name: "Time Management", level: 88 }
      ],
      languages: [
        { name: "Arabic", level: 100 },
        { name: "English", level: 60 },
        { name: "Turkish", level: 30 }
      ],
      sections: {
        personalInfo: "Personal Information",
        education: "Education",
        experience: "Work Experience",
        skills: "Skills",
        languages: "Languages"
      }
    }
  };

  const currentData = cvData[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Print controls */}
      <div className="print:hidden flex justify-center gap-4 p-4 bg-white shadow-sm">
        <Button
          variant="outline"
          onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
          className="flex items-center gap-2"
        >
          <Globe className="w-4 h-4" />
          {language === 'ar' ? 'English' : 'العربية'}
        </Button>
        <Button onClick={handlePrint} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          {language === 'ar' ? 'طباعة PDF' : 'Print PDF'}
        </Button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-6 print:p-0 print:max-w-none">
        <Card className="shadow-lg print:shadow-none print:border-none">
          <CardContent className="p-8 print:p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <Avatar className="w-32 h-32 md:w-40 md:h-40">
                <AvatarImage 
                  src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
                  alt={currentData.name}
                />
                <AvatarFallback className="text-2xl font-bold bg-blue-100 text-blue-600">
                  {currentData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="text-center md:text-start flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  {currentData.name}
                </h1>
                <p className="text-lg text-blue-600 font-medium mb-4">
                  {currentData.title}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{currentData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>{currentData.personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{currentData.personalInfo.residence}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{currentData.personalInfo.birthDate}</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Experience */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-800">
                      {currentData.sections.experience}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {currentData.experience.map((exp, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 leading-relaxed">{exp}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h2 className="text-xl font-bold text-gray-800">
                      {currentData.sections.education}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {currentData.education.map((edu, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700 leading-relaxed">{edu}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Personal Info */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-bold text-gray-800">
                      {currentData.sections.personalInfo}
                    </h2>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>{language === 'ar' ? 'مكان الولادة:' : 'Birth Place:'}</strong> {currentData.personalInfo.birthPlace}</p>
                    <p><strong>{language === 'ar' ? 'الجنسية:' : 'Nationality:'}</strong> {currentData.personalInfo.nationality}</p>
                    <p><strong>{language === 'ar' ? 'الحالة الاجتماعية:' : 'Marital Status:'}</strong> {currentData.personalInfo.maritalStatus}</p>
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-bold text-gray-800">
                      {currentData.sections.skills}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {currentData.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Languages */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Languages className="w-5 h-5 text-blue-600" />
                    <h2 className="text-lg font-bold text-gray-800">
                      {currentData.sections.languages}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {currentData.languages.map((lang, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < (lang.level / 20) ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Print Styles */}
      <style jsx>{`
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

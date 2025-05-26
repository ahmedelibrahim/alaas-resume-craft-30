
import { CVData, Theme, ThemeType } from '@/types/cv';

export const themes: Record<ThemeType, Theme> = {
  modern: {
    name: { ar: 'عصري', en: 'Modern' },
    primary: 'bg-blue-600',
    secondary: 'bg-blue-100',
    accent: 'text-blue-600',
    headerBg: 'bg-gradient-to-r from-blue-600 to-blue-800',
    skillColor: 'bg-blue-500'
  },
  classic: {
    name: { ar: 'كلاسيكي', en: 'Classic' },
    primary: 'bg-gray-800',
    secondary: 'bg-gray-100',
    accent: 'text-gray-800',
    headerBg: 'bg-gradient-to-r from-gray-700 to-gray-900',
    skillColor: 'bg-gray-600'
  },
  creative: {
    name: { ar: 'إبداعي', en: 'Creative' },
    primary: 'bg-purple-600',
    secondary: 'bg-purple-100',
    accent: 'text-purple-600',
    headerBg: 'bg-gradient-to-r from-purple-600 to-pink-600',
    skillColor: 'bg-purple-500'
  },
  minimal: {
    name: { ar: 'بسيط', en: 'Minimal' },
    primary: 'bg-green-600',
    secondary: 'bg-green-50',
    accent: 'text-green-600',
    headerBg: 'bg-gradient-to-r from-green-500 to-green-700',
    skillColor: 'bg-green-500'
  },
  corporate: {
    name: { ar: 'شركات', en: 'Corporate' },
    primary: 'bg-indigo-600',
    secondary: 'bg-indigo-50',
    accent: 'text-indigo-600',
    headerBg: 'bg-gradient-to-r from-indigo-600 to-indigo-800',
    skillColor: 'bg-indigo-500'
  }
};

export const cvData: Record<'ar' | 'en', CVData> = {
  ar: {
    name: "علاء مصاص",
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

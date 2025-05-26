
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
      nationality: "سورية / تركية",
      maritalStatus: "متزوج",
      residence: "تركيا، هاتاي، إسكندرون",
      phone: "+97452069005",
      email: "alaamassass83@gmail.com"
    },
    education: [
      "\"نحو استجابة أفضل\" – Harvard University (2023)",
      "دورة قيادة الحاسوب (ICDL) – جمعية جسور التعليمية، تركيا / هاتاي (2020)",
      "دورة تدريب وإعداد المدربين (TOT) – البورد الألماني، تركيا / هاتاي (2019)",
      "دبلوم التأهيل التربوي – وزارة التعليم الوطني، تركيا / هاتاي (2018)",
      "دورة إعداد معلمي العربية لغير الناطقين بها (2017)",
      "دورة التعليم في أوقات الحروب والكوارث – MoNE / UNICEF، تركيا / هاتاي (2016)",
      "إجازة جامعية في اللغة العربية وآدابها – جامعة حلب، سوريا (2006)"
    ],
    experience: [
      "مسؤول تعليم – منظمة مسلم كير، تركيا / هاتاي (03/2023 – 12/2023)",
      "ميسر أنشطة الدعم النفسي والاجتماعي – منظمة بنيان، سوريا / إدلب (03/2022 – 11/2022)",
      "مشرف تعليم – منظمة بنيان، سوريا / إدلب (09/2021 – 02/2022)",
      "مسؤول تعليم – جمعية جسور التعليمية، تركيا / هاتاي (02/2019 – 06/2021)",
      "مدرب تنمية بشرية معتمد – البورد الألماني، تركيا / هاتاي (2018 – 2021)",
      "قائد فريق – فريق آفاق للخدمات والاستشارات الجامعية، تركيا / هاتاي (2018 – 2020)",
      "مسؤول مراقبة وتقييم – فريق دعم التربية والتعليم، تركيا (2017 – 2018)",
      "مدرس لغة عربية للناطقين بغيرها – عمل حر (2016 – 2021)",
      "مدرس لغة عربية – وزارة التعليم الوطني / اليونيسف، تركيا / هاتاي (2016 – 2019)",
      "مدرس لغة عربية – وزارة التربية، سوريا / حلب (2006 – 2013)",
      "مدرس لغة عربية – Smart Way Academy، سوريا / حلب (2010 – 2012)"
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
      residence: "Iskenderun, Hatay, Turkey",
      phone: "+97452069005",
      email: "alaamassass83@gmail.com"
    },
    education: [
      "\"Towards Better Response\" – Harvard University (2023)",
      "ICDL Computer Course – Jusoor Educational Association, Hatay (2020)",
      "TOT (Training of Trainers) – German Board, Hatay (2019)",
      "Educational Qualification Diploma – MoNE, Hatay (2018)",
      "Arabic Teaching Prep Course (for Non-native speakers) (2017)",
      "Education in Emergencies – MoNE / UNICEF, Hatay (2016)",
      "BA in Arabic Language and Literature – University of Aleppo (2006)"
    ],
    experience: [
      "Education Officer – Muslim Care Organization, Hatay, Turkey (Mar 2023 – Dec 2023)",
      "PSS Facilitator – Bonyan Organization, Idlib, Syria (Mar 2022 – Nov 2022)",
      "Education Supervisor – Bonyan Organization, Idlib, Syria (Sep 2021 – Feb 2022)",
      "Education Officer – Jusoor Educational Association, Hatay, Turkey (Feb 2019 – Jun 2021)",
      "Certified Trainer (Soft Skills) – German Board, Hatay, Turkey (2018 – 2021)",
      "Team Leader – Afaq University Services & Consulting, Hatay, Turkey (2018 – 2020)",
      "M&E Officer – Education Support Team, Turkey (2017 – 2018)",
      "Arabic Language Tutor (Freelance) – For Non-native Speakers (2016 – 2021)",
      "Arabic Language Teacher – MoNE / UNICEF, Hatay, Turkey (2016 – 2019)",
      "Arabic Teacher – Ministry of Education, Aleppo, Syria (2006 – 2013)",
      "Arabic Teacher – Smart Way Academy, Aleppo, Syria (2010 – 2012)"
    ],
    skills: [
      { name: "Management & Planning", level: 95 },
      { name: "Public Speaking & Persuasion", level: 95 },
      { name: "Working in Diverse Environments", level: 85 },
      { name: "Computer Literacy", level: 80 },
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
      education: "Education & Training",
      experience: "Work Experience",
      skills: "Skills",
      languages: "Languages"
    }
  }
};


import { CVData, Theme, ThemeType } from '@/types/cv';

export const themes: Record<ThemeType, Theme> = {
  modern: {
    name: { ar: 'عصري', en: 'Modern' },
    primary: 'bg-blue-600',
    secondary: 'bg-blue-50',
    accent: 'text-blue-800',
    headerBg: 'bg-gradient-to-r from-blue-600 to-blue-800',
    skillColor: 'bg-blue-500'
  },
  classic: {
    name: { ar: 'كلاسيكي', en: 'Classic' },
    primary: 'bg-gray-700',
    secondary: 'bg-gray-50',
    accent: 'text-gray-800',
    headerBg: 'bg-gradient-to-r from-gray-700 to-gray-900',
    skillColor: 'bg-gray-600'
  },
  creative: {
    name: { ar: 'إبداعي', en: 'Creative' },
    primary: 'bg-purple-600',
    secondary: 'bg-purple-50',
    accent: 'text-purple-800',
    headerBg: 'bg-gradient-to-r from-purple-600 to-purple-800',
    skillColor: 'bg-purple-500'
  },
  minimal: {
    name: { ar: 'بسيط', en: 'Minimal' },
    primary: 'bg-green-600',
    secondary: 'bg-green-50',
    accent: 'text-green-800',
    headerBg: 'bg-gradient-to-r from-green-600 to-green-800',
    skillColor: 'bg-green-500'
  },
  corporate: {
    name: { ar: 'مؤسسي', en: 'Corporate' },
    primary: 'bg-red-600',
    secondary: 'bg-red-50',
    accent: 'text-red-800',
    headerBg: 'bg-gradient-to-r from-red-600 to-red-800',
    skillColor: 'bg-red-500'
  }
};

interface JobExperience {
  title: string;
  organization: string;
  location: string;
  period: string;
}

interface Education {
  title: string;
  institution: string;
  location: string;
  year: string;
}

export const cvData: Record<'ar' | 'en', CVData> = {
  ar: {
    name: 'علاء مصاص',
    title: 'مسؤول تعليم ومدرب تنمية بشرية معتمد',
    personalInfo: {
      birthDate: '25 أغسطس 1983',
      birthPlace: 'حلب / سوريا',
      nationality: 'سورية / تركية',
      maritalStatus: 'متزوج',
      residence: 'تركيا، هاتاي، إسكندرون',
      phone: '+97452069005',
      email: 'alaamassass83@gmail.com'
    },
    experience: [
      {
        title: 'مسؤول تعليم',
        organization: 'منظمة مسلم كير',
        location: 'تركيا / هاتاي',
        period: '(03/2023 – 12/2023)'
      },
      {
        title: 'ميسر أنشطة الدعم النفسي والاجتماعي',
        organization: 'منظمة بنيان',
        location: 'سوريا / إدلب',
        period: '(03/2022 – 11/2022)'
      },
      {
        title: 'مشرف تعليم',
        organization: 'منظمة بنيان',
        location: 'سوريا / إدلب',
        period: '(09/2021 – 02/2022)'
      },
      {
        title: 'مسؤول تعليم',
        organization: 'جمعية جسور التعليمية',
        location: 'تركيا / هاتاي',
        period: '(02/2019 – 06/2021)'
      },
      {
        title: 'مدرب تنمية بشرية معتمد',
        organization: 'البورد الألماني',
        location: 'تركيا / هاتاي',
        period: '(2018 – 2021)'
      },
      {
        title: 'قائد فريق',
        organization: 'فريق آفاق للخدمات والاستشارات الجامعية',
        location: 'تركيا / هاتاي',
        period: '(2018 – 2020)'
      },
      {
        title: 'مسؤول مراقبة وتقييم',
        organization: 'فريق دعم التربية والتعليم',
        location: 'تركيا',
        period: '(2017 – 2018)'
      },
      {
        title: 'مدرس لغة عربية للناطقين بغيرها',
        organization: 'عمل حر',
        location: '',
        period: '(2016 – 2021)'
      },
      {
        title: 'مدرس لغة عربية',
        organization: 'وزارة التعليم الوطني / اليونيسف',
        location: 'تركيا / هاتاي',
        period: '(2016 – 2019)'
      },
      {
        title: 'مدرس لغة عربية',
        organization: 'وزارة التربية',
        location: 'سوريا / حلب',
        period: '(2006 – 2013)'
      },
      {
        title: 'مدرس لغة عربية',
        organization: 'Smart Way Academy',
        location: 'سوريا / حلب',
        period: '(2010 – 2012)'
      }
    ],
    education: [
      {
        title: '"نحو استجابة أفضل"',
        institution: 'Harvard University',
        location: '',
        year: '(2023)'
      },
      {
        title: 'دورة قيادة الحاسوب (ICDL)',
        institution: 'جمعية جسور التعليمية',
        location: 'تركيا / هاتاي',
        year: '(2020)'
      },
      {
        title: 'دورة تدريب وإعداد المدربين (TOT)',
        institution: 'البورد الألماني',
        location: 'تركيا / هاتاي',
        year: '(2019)'
      },
      {
        title: 'دبلوم التأهيل التربوي',
        institution: 'وزارة التعليم الوطني',
        location: 'تركيا / هاتاي',
        year: '(2018)'
      },
      {
        title: 'دورة إعداد معلمي العربية لغير الناطقين بها',
        institution: '',
        location: '',
        year: '(2017)'
      },
      {
        title: 'دورة التعليم في أوقات الحروب والكوارث',
        institution: 'MoNE / UNICEF',
        location: 'تركيا / هاتاي',
        year: '(2016)'
      },
      {
        title: 'إجازة جامعية في اللغة العربية وآدابها',
        institution: 'جامعة حلب',
        location: 'سوريا',
        year: '(2006)'
      }
    ],
    skills: [
      { name: 'الإدارة والتخطيط', level: 95 },
      { name: 'الإلقاء والقدرة على الإقناع', level: 95 },
      { name: 'التواصل الفعال', level: 90 },
      { name: 'إدارة الوقت', level: 88 },
      { name: 'العمل في بيئات متعددة', level: 85 },
      { name: 'قيادة الحاسوب', level: 80 }
    ],
    languages: [
      { name: 'العربية', level: 100 },
      { name: 'الإنجليزية', level: 60 },
      { name: 'التركية', level: 30 }
    ],
    sections: {
      personalInfo: 'المعلومات الشخصية',
      education: 'المؤهلات الدراسية',
      experience: 'الخبرات العملية',
      skills: 'المهارات',
      languages: 'اللغات'
    }
  },
  en: {
    name: 'Alaa Massas',
    title: 'Education Officer & Certified Human Development Trainer',
    personalInfo: {
      birthDate: 'August 25, 1983',
      birthPlace: 'Aleppo, Syria',
      nationality: 'Syrian / Turkish',
      maritalStatus: 'Married',
      residence: 'Iskenderun, Hatay, Turkey',
      phone: '+97452069005',
      email: 'alaamassass83@gmail.com'
    },
    experience: [
      {
        title: 'Education Officer',
        organization: 'Muslim Care Organization',
        location: 'Hatay, Turkey',
        period: '(Mar 2023 – Dec 2023)'
      },
      {
        title: 'PSS Facilitator',
        organization: 'Bonyan Organization',
        location: 'Idlib, Syria',
        period: '(Mar 2022 – Nov 2022)'
      },
      {
        title: 'Education Supervisor',
        organization: 'Bonyan Organization',
        location: 'Idlib, Syria',
        period: '(Sep 2021 – Feb 2022)'
      },
      {
        title: 'Education Officer',
        organization: 'Jusoor Educational Association',
        location: 'Hatay, Turkey',
        period: '(Feb 2019 – Jun 2021)'
      },
      {
        title: 'Certified Trainer (Soft Skills)',
        organization: 'German Board',
        location: 'Hatay, Turkey',
        period: '(2018 – 2021)'
      },
      {
        title: 'Team Leader',
        organization: 'Afaq University Services & Consulting',
        location: 'Hatay, Turkey',
        period: '(2018 – 2020)'
      },
      {
        title: 'M&E Officer',
        organization: 'Education Support Team',
        location: 'Turkey',
        period: '(2017 – 2018)'
      },
      {
        title: 'Arabic Language Tutor (Freelance)',
        organization: 'For Non-native Speakers',
        location: '',
        period: '(2016 – 2021)'
      },
      {
        title: 'Arabic Language Teacher',
        organization: 'MoNE / UNICEF',
        location: 'Hatay, Turkey',
        period: '(2016 – 2019)'
      },
      {
        title: 'Arabic Teacher',
        organization: 'Ministry of Education',
        location: 'Aleppo, Syria',
        period: '(2006 – 2013)'
      },
      {
        title: 'Arabic Teacher',
        organization: 'Smart Way Academy',
        location: 'Aleppo, Syria',
        period: '(2010 – 2012)'
      }
    ],
    education: [
      {
        title: '"Towards Better Response"',
        institution: 'Harvard University',
        location: '',
        year: '(2023)'
      },
      {
        title: 'ICDL Computer Course',
        institution: 'Jusoor Educational Association',
        location: 'Hatay',
        year: '(2020)'
      },
      {
        title: 'TOT (Training of Trainers)',
        institution: 'German Board',
        location: 'Hatay',
        year: '(2019)'
      },
      {
        title: 'Educational Qualification Diploma',
        institution: 'MoNE',
        location: 'Hatay',
        year: '(2018)'
      },
      {
        title: 'Arabic Teaching Prep Course (for Non-native speakers)',
        institution: '',
        location: '',
        year: '(2017)'
      },
      {
        title: 'Education in Emergencies',
        institution: 'MoNE / UNICEF',
        location: 'Hatay',
        year: '(2016)'
      },
      {
        title: 'BA in Arabic Language and Literature',
        institution: 'University of Aleppo',
        location: '',
        year: '(2006)'
      }
    ],
    skills: [
      { name: 'Management & Planning', level: 95 },
      { name: 'Public Speaking & Persuasion', level: 95 },
      { name: 'Effective Communication', level: 90 },
      { name: 'Time Management', level: 88 },
      { name: 'Working in Diverse Environments', level: 85 },
      { name: 'Computer Literacy', level: 80 }
    ],
    languages: [
      { name: 'Arabic', level: 100 },
      { name: 'English', level: 60 },
      { name: 'Turkish', level: 30 }
    ],
    sections: {
      personalInfo: 'Personal Information',
      education: 'Education & Training',
      experience: 'Work Experience',
      skills: 'Skills',
      languages: 'Languages'
    }
  }
};


export interface CVPersonalInfo {
  birthDate: string;
  birthPlace: string;
  nationality: string;
  maritalStatus: string;
  residence: string;
  phone: string;
  email: string;
}

export interface CVSkill {
  name: string;
  level: number;
}

export interface CVLanguage {
  name: string;
  level: number;
}

export interface CVSections {
  personalInfo: string;
  education: string;
  experience: string;
  skills: string;
  languages: string;
}

export interface CVData {
  name: string;
  title: string;
  personalInfo: CVPersonalInfo;
  education: string[];
  experience: string[];
  skills: CVSkill[];
  languages: CVLanguage[];
  sections: CVSections;
}

export interface Theme {
  name: { ar: string; en: string };
  primary: string;
  secondary: string;
  accent: string;
  headerBg: string;
  skillColor: string;
}

export interface Layout {
  name: { ar: string; en: string };
  id: string;
  description: { ar: string; en: string };
}

export type Language = 'ar' | 'en';
export type ThemeType = 'modern' | 'classic' | 'creative' | 'minimal' | 'corporate';
export type LayoutType = 'traditional' | 'sidebar' | 'timeline' | 'cards' | 'executive';

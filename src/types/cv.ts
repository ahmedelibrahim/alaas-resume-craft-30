
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

export interface JobExperience {
  title: string;
  organization: string;
  location: string;
  period: string;
}

export interface Education {
  title: string;
  institution: string;
  location: string;
  year: string;
}

export interface CVSections {
  personalInfo: string;
  education: string;
  experience: string;
  skills: string;
  languages: string;
  summary: string;
}

export interface CVData {
  name: string;
  title: string;
  summary: string;
  personalInfo: CVPersonalInfo;
  education: Education[];
  experience: JobExperience[];
  skills: CVSkill[];
  languages: CVLanguage[];
  sections: CVSections;
  profileImage?: string;
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

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface SavedCV {
  id: string;
  title: string;
  data: CVData;
  createdAt: string;
  updatedAt: string;
}

export type Language = 'ar' | 'en';
export type ThemeType = 'modern' | 'classic' | 'creative' | 'minimal' | 'corporate';
export type LayoutType = 'traditional' | 'sidebar' | 'timeline' | 'cards' | 'executive' | 'professional';

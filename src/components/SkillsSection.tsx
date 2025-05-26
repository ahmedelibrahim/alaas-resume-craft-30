
import React from 'react';
import { Award } from "lucide-react";
import { CVSkill, Theme } from '@/types/cv';

interface SkillsSectionProps {
  skills: CVSkill[];
  title: string;
  theme: Theme;
  variant?: 'default' | 'sidebar';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, title, theme, variant = 'default' }) => {
  const isLight = variant === 'sidebar';
  
  return (
    <section className="avoid-break">
      <div className="flex items-center gap-2 mb-4 print:mb-3">
        <div className={`w-8 h-8 print:w-6 print:h-6 ${isLight ? 'bg-white/20' : theme.primary} rounded-full flex items-center justify-center`}>
          <Award className={`w-4 h-4 print:w-3 print:h-3 ${isLight ? 'text-white' : 'text-white'}`} />
        </div>
        <h2 className={`text-lg font-bold print:text-base ${isLight ? 'text-white' : theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-4 print:space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="flex justify-between items-center mb-2 print:mb-1">
              <span className={`text-sm font-medium print:text-xs ${isLight ? 'text-white' : 'text-gray-700'}`}>{skill.name}</span>
              <span className={`text-xs print:text-[10px] ${isLight ? 'text-white/80' : 'text-gray-500'}`}>{skill.level}%</span>
            </div>
            <div className={`w-full ${isLight ? 'bg-white/20' : 'bg-gray-200'} rounded-full h-2 print:h-1.5 progress-bar`}>
              <div 
                className={`h-2 print:h-1.5 rounded-full ${isLight ? 'bg-white' : theme.skillColor} transition-all duration-700 progress-fill`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

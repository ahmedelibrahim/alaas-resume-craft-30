
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
    <section>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 ${isLight ? 'bg-white/20' : theme.primary} rounded-full flex items-center justify-center`}>
          <Award className={`w-4 h-4 ${isLight ? 'text-white' : 'text-white'}`} />
        </div>
        <h2 className={`text-lg font-bold ${isLight ? 'text-white' : theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-sm font-medium ${isLight ? 'text-white' : 'text-gray-700'}`}>{skill.name}</span>
              <span className={`text-xs ${isLight ? 'text-white/80' : 'text-gray-500'}`}>{skill.level}%</span>
            </div>
            <div className={`w-full ${isLight ? 'bg-white/20' : 'bg-gray-200'} rounded-full h-2`}>
              <div 
                className={`h-2 rounded-full ${isLight ? 'bg-white' : theme.skillColor} transition-all duration-700`}
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

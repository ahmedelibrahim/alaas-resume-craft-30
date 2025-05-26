
import React from 'react';
import { Award } from "lucide-react";
import { CVSkill, Theme } from '@/types/cv';

interface SkillsSectionProps {
  skills: CVSkill[];
  title: string;
  theme: Theme;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, title, theme }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
          <Award className="w-4 h-4 text-white" />
        </div>
        <h2 className={`text-lg font-bold ${theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${theme.skillColor} transition-all duration-700`}
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

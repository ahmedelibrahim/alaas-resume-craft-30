
import React from 'react';
import { GraduationCap } from "lucide-react";
import { Theme } from '@/types/cv';

interface EducationSectionProps {
  education: string[];
  title: string;
  theme: Theme;
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, title, theme }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
        <h2 className={`text-xl font-bold ${theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <div className={`w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-110 transition-transform`}></div>
            <p className="text-sm text-gray-700 leading-relaxed">{edu}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

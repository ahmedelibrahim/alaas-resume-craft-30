
import React from 'react';
import { GraduationCap } from "lucide-react";
import { Theme, Education } from '@/types/cv';

interface EducationSectionProps {
  education: Education[];
  title: string;
  theme: Theme;
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, title, theme }) => {
  return (
    <section>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-8 h-8 ${theme.primary} rounded-full flex items-center justify-center`}>
          <GraduationCap className="w-4 h-4 text-white" />
        </div>
        <h2 className={`text-xl font-bold ${theme.accent}`}>
          {title}
        </h2>
      </div>
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 pb-3">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800 text-sm">{edu.title}</h3>
              <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{edu.year}</span>
            </div>
            <p className="text-sm text-gray-600">
              {edu.institution}
              {edu.location && ` - ${edu.location}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

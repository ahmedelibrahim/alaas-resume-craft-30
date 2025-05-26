
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { CVData, Theme } from '@/types/cv';

interface CVHeaderProps {
  data: CVData;
  theme: Theme;
}

const CVHeader: React.FC<CVHeaderProps> = ({ data, theme }) => {
  return (
    <div className={`${theme.headerBg} text-white p-8 print:p-6`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative flex-shrink-0">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white shadow-lg">
            <AvatarImage 
              src="/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png" 
              alt={data.name}
              className="object-cover object-center"
              style={{ aspectRatio: '1 / 1' }}
            />
            <AvatarFallback className="text-2xl font-bold bg-white text-gray-600">
              {data.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
        
        <div className="text-center md:text-start flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {data.name}
          </h1>
          <p className="text-lg font-medium mb-4 opacity-90">
            {data.title}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{data.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="break-all">{data.personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{data.personalInfo.residence}</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <span>{data.personalInfo.birthDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Minus, Edit, Upload } from "lucide-react";
import { CVData, Language } from '@/types/cv';

interface EditFormProps {
  data: CVData;
  language: Language;
  onSave: (updatedData: CVData) => void;
}

const EditForm: React.FC<EditFormProps> = ({ data, language, onSave }) => {
  const [editedData, setEditedData] = useState<CVData>({ ...data });
  const [profileImage, setProfileImage] = useState<string>("/lovable-uploads/b896dd71-c2de-440e-b52a-f46e5760ab27.png");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfileImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updatePersonalInfo = (field: keyof typeof editedData.personalInfo, value: string) => {
    setEditedData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const addExperience = () => {
    setEditedData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        title: '',
        organization: '',
        location: '',
        period: ''
      }]
    }));
  };

  const updateExperience = (index: number, field: string, value: string) => {
    setEditedData(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const removeExperience = (index: number) => {
    setEditedData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setEditedData(prev => ({
      ...prev,
      education: [...prev.education, {
        title: '',
        institution: '',
        location: '',
        year: ''
      }]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setEditedData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (index: number) => {
    setEditedData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    setEditedData(prev => ({
      ...prev,
      skills: [...prev.skills, { name: '', level: 50 }]
    }));
  };

  const updateSkill = (index: number, field: 'name' | 'level', value: string | number) => {
    setEditedData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => 
        i === index ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const removeSkill = (index: number) => {
    setEditedData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addLanguage = () => {
    setEditedData(prev => ({
      ...prev,
      languages: [...prev.languages, { name: '', level: 50 }]
    }));
  };

  const updateLanguage = (index: number, field: 'name' | 'level', value: string | number) => {
    setEditedData(prev => ({
      ...prev,
      languages: prev.languages.map((lang, i) => 
        i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };

  const removeLanguage = (index: number) => {
    setEditedData(prev => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    onSave(editedData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="print:hidden">
          <Edit className="w-4 h-4 mr-2" />
          {language === 'ar' ? 'تعديل البيانات' : 'Edit Data'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {language === 'ar' ? 'تعديل بيانات السيرة الذاتية' : 'Edit CV Data'}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="basic">{language === 'ar' ? 'أساسي' : 'Basic'}</TabsTrigger>
            <TabsTrigger value="experience">{language === 'ar' ? 'خبرات' : 'Experience'}</TabsTrigger>
            <TabsTrigger value="education">{language === 'ar' ? 'تعليم' : 'Education'}</TabsTrigger>
            <TabsTrigger value="skills">{language === 'ar' ? 'مهارات' : 'Skills'}</TabsTrigger>
            <TabsTrigger value="languages">{language === 'ar' ? 'لغات' : 'Languages'}</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>{language === 'ar' ? 'المعلومات الأساسية' : 'Basic Information'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Profile Image */}
                <div className="flex flex-col items-center space-y-4">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                  />
                  <div>
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <Button variant="outline" size="sm" asChild>
                        <span>
                          <Upload className="w-4 h-4 mr-2" />
                          {language === 'ar' ? 'تغيير الصورة' : 'Change Image'}
                        </span>
                      </Button>
                    </Label>
                    <Input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>{language === 'ar' ? 'الاسم' : 'Name'}</Label>
                    <Input
                      value={editedData.name}
                      onChange={(e) => setEditedData(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label>{language === 'ar' ? 'المسمى الوظيفي' : 'Job Title'}</Label>
                    <Input
                      value={editedData.title}
                      onChange={(e) => setEditedData(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label>{language === 'ar' ? 'النبذة الشخصية' : 'Summary'}</Label>
                  <Textarea
                    value={editedData.summary}
                    onChange={(e) => setEditedData(prev => ({ ...prev, summary: e.target.value }))}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>{language === 'ar' ? 'تاريخ الميلاد' : 'Birth Date'}</Label>
                    <Input
                      value={editedData.personalInfo.birthDate}
                      onChange={(e) => updatePersonalInfo('birthDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>{language === 'ar' ? 'مكان الميلاد' : 'Birth Place'}</Label>
                    <Input
                      value={editedData.personalInfo.birthPlace}
                      onChange={(e) => updatePersonalInfo('birthPlace', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>{language === 'ar' ? 'الجنسية' : 'Nationality'}</Label>
                    <Input
                      value={editedData.personalInfo.nationality}
                      onChange={(e) => updatePersonalInfo('nationality', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>{language === 'ar' ? 'الحالة الاجتماعية' : 'Marital Status'}</Label>
                    <Input
                      value={editedData.personalInfo.maritalStatus}
                      onChange={(e) => updatePersonalInfo('maritalStatus', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>{language === 'ar' ? 'مكان الإقامة' : 'Residence'}</Label>
                    <Input
                      value={editedData.personalInfo.residence}
                      onChange={(e) => updatePersonalInfo('residence', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</Label>
                    <Input
                      value={editedData.personalInfo.phone}
                      onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label>{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</Label>
                    <Input
                      value={editedData.personalInfo.email}
                      onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{language === 'ar' ? 'الخبرات العملية' : 'Work Experience'}</CardTitle>
                  <Button onClick={addExperience} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'إضافة' : 'Add'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {editedData.experience.map((exp, index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4>{language === 'ar' ? `خبرة رقم ${index + 1}` : `Experience ${index + 1}`}</h4>
                      <Button 
                        onClick={() => removeExperience(index)} 
                        variant="destructive" 
                        size="sm"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>{language === 'ar' ? 'المسمى الوظيفي' : 'Job Title'}</Label>
                        <Input
                          value={exp.title}
                          onChange={(e) => updateExperience(index, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'الشركة/المؤسسة' : 'Organization'}</Label>
                        <Input
                          value={exp.organization}
                          onChange={(e) => updateExperience(index, 'organization', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'المكان' : 'Location'}</Label>
                        <Input
                          value={exp.location}
                          onChange={(e) => updateExperience(index, 'location', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'الفترة' : 'Period'}</Label>
                        <Input
                          value={exp.period}
                          onChange={(e) => updateExperience(index, 'period', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{language === 'ar' ? 'المؤهلات الدراسية' : 'Education'}</CardTitle>
                  <Button onClick={addEducation} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'إضافة' : 'Add'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {editedData.education.map((edu, index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4>{language === 'ar' ? `مؤهل رقم ${index + 1}` : `Education ${index + 1}`}</h4>
                      <Button 
                        onClick={() => removeEducation(index)} 
                        variant="destructive" 
                        size="sm"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>{language === 'ar' ? 'العنوان' : 'Title'}</Label>
                        <Input
                          value={edu.title}
                          onChange={(e) => updateEducation(index, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'المؤسسة' : 'Institution'}</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'المكان' : 'Location'}</Label>
                        <Input
                          value={edu.location}
                          onChange={(e) => updateEducation(index, 'location', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'السنة' : 'Year'}</Label>
                        <Input
                          value={edu.year}
                          onChange={(e) => updateEducation(index, 'year', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{language === 'ar' ? 'المهارات' : 'Skills'}</CardTitle>
                  <Button onClick={addSkill} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'إضافة' : 'Add'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {editedData.skills.map((skill, index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4>{language === 'ar' ? `مهارة رقم ${index + 1}` : `Skill ${index + 1}`}</h4>
                      <Button 
                        onClick={() => removeSkill(index)} 
                        variant="destructive" 
                        size="sm"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>{language === 'ar' ? 'اسم المهارة' : 'Skill Name'}</Label>
                        <Input
                          value={skill.name}
                          onChange={(e) => updateSkill(index, 'name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'المستوى (%)' : 'Level (%)'}</Label>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={skill.level}
                          onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="languages">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{language === 'ar' ? 'اللغات' : 'Languages'}</CardTitle>
                  <Button onClick={addLanguage} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    {language === 'ar' ? 'إضافة' : 'Add'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {editedData.languages.map((lang, index) => (
                  <div key={index} className="border p-4 rounded-lg mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4>{language === 'ar' ? `لغة رقم ${index + 1}` : `Language ${index + 1}`}</h4>
                      <Button 
                        onClick={() => removeLanguage(index)} 
                        variant="destructive" 
                        size="sm"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>{language === 'ar' ? 'اسم اللغة' : 'Language Name'}</Label>
                        <Input
                          value={lang.name}
                          onChange={(e) => updateLanguage(index, 'name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>{language === 'ar' ? 'المستوى (%)' : 'Level (%)'}</Label>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={lang.level}
                          onChange={(e) => updateLanguage(index, 'level', parseInt(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={handleSave}>
            {language === 'ar' ? 'حفظ التغييرات' : 'Save Changes'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditForm;

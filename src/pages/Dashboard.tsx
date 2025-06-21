
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, SavedCV } from '@/types/cv';
import { toast } from "@/hooks/use-toast";
import { Eye, Edit, Trash2, Plus, LogOut } from 'lucide-react';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [savedCVs, setSavedCVs] = useState<SavedCV[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // التحقق من تسجيل الدخول
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/auth');
      return;
    }

    setUser(JSON.parse(userData));

    // تحميل السير الذاتية المحفوظة (بيانات وهمية)
    const mockCVs: SavedCV[] = [
      {
        id: '1',
        title: 'سيرتي الذاتية للوظائف التقنية',
        data: {
          name: 'أحمد محمد',
          title: 'مطور برمجيات',
          summary: 'مطور برمجيات متخصص في تطوير تطبيقات الويب',
          personalInfo: {
            birthDate: '1990-01-01',
            birthPlace: 'الرياض',
            nationality: 'سعودي',
            maritalStatus: 'أعزب',
            residence: 'الرياض',
            phone: '+966501234567',
            email: 'ahmed@example.com'
          },
          education: [],
          experience: [],
          skills: [],
          languages: [],
          sections: {
            personalInfo: 'المعلومات الشخصية',
            education: 'التعليم',
            experience: 'الخبرة',
            skills: 'المهارات',
            languages: 'اللغات',
            summary: 'النبذة'
          }
        },
        createdAt: '2024-01-15',
        updatedAt: '2024-01-20'
      },
      {
        id: '2',
        title: 'سيرتي الذاتية للوظائف الإدارية',
        data: {
          name: 'أحمد محمد',
          title: 'مدير مشاريع',
          summary: 'مدير مشاريع متخصص في إدارة المشاريع التقنية',
          personalInfo: {
            birthDate: '1990-01-01',
            birthPlace: 'الرياض',
            nationality: 'سعودي',
            maritalStatus: 'أعزب',
            residence: 'الرياض',
            phone: '+966501234567',
            email: 'ahmed@example.com'
          },
          education: [],
          experience: [],
          skills: [],
          languages: [],
          sections: {
            personalInfo: 'المعلومات الشخصية',
            education: 'التعليم',
            experience: 'الخبرة',
            skills: 'المهارات',
            languages: 'اللغات',
            summary: 'النبذة'
          }
        },
        createdAt: '2024-01-10',
        updatedAt: '2024-01-18'
      }
    ];

    setSavedCVs(mockCVs);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "تم تسجيل الخروج",
      description: "نراك قريباً!"
    });
    navigate('/auth');
  };

  const handleDeleteCV = (cvId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه السيرة الذاتية؟')) {
      setSavedCVs(prev => prev.filter(cv => cv.id !== cvId));
      toast({
        title: "تم الحذف",
        description: "تم حذف السيرة الذاتية بنجاح"
      });
    }
  };

  const handleCreateNew = () => {
    navigate('/');
  };

  const handleEditCV = (cvId: string) => {
    // هنا يمكن تمرير بيانات السيرة الذاتية للتعديل
    navigate(`/?edit=${cvId}`);
  };

  const handleViewCV = (cvId: string) => {
    // هنا يمكن فتح السيرة الذاتية في وضع العرض
    navigate(`/?view=${cvId}`);
  };

  if (!user) {
    return <div>جاري التحميل...</div>;
  }

  const canCreateNew = savedCVs.length < 3;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* الرأس */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">لوحة التحكم الخاصة بي</h1>
            <p className="text-gray-600">مرحباً {user.name || user.email}!</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            تسجيل الخروج
          </Button>
        </div>

        {/* إحصائيات السير الذاتية */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>السير الذاتية الخاصة بك</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                لديك {savedCVs.length} سيرة ذاتية من أصل 3
              </p>
              <Badge variant={savedCVs.length >= 3 ? "destructive" : "default"}>
                {savedCVs.length}/3
              </Badge>
            </div>
            
            {canCreateNew ? (
              <Button onClick={handleCreateNew} className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                إنشاء سيرة ذاتية جديدة
              </Button>
            ) : (
              <p className="text-red-600 font-medium">
                لقد وصلت للحد الأقصى من السير الذاتية (3)
              </p>
            )}
          </CardContent>
        </Card>

        {/* قائمة السير الذاتية */}
        {savedCVs.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {savedCVs.map((cv) => (
              <Card key={cv.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{cv.title}</CardTitle>
                  <p className="text-sm text-gray-500">
                    آخر تحديث: {new Date(cv.updatedAt).toLocaleDateString('ar')}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <Button 
                      onClick={() => handleViewCV(cv.id)} 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      عرض
                    </Button>
                    <Button 
                      onClick={() => handleEditCV(cv.id)} 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      تعديل
                    </Button>
                    <Button 
                      onClick={() => handleDeleteCV(cv.id)} 
                      variant="destructive" 
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      حذف
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 mb-4">لا توجد سير ذاتية محفوظة بعد</p>
              <Button onClick={handleCreateNew} className="flex items-center gap-2 mx-auto">
                <Plus className="w-4 h-4" />
                إنشاء أول سيرة ذاتية
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

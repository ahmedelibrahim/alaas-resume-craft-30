
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(loginEmail)) {
      toast({
        title: "خطأ",
        description: "البريد الإلكتروني غير صالح",
        variant: "destructive"
      });
      return;
    }

    if (loginPassword.length < 6) {
      toast({
        title: "خطأ",
        description: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // محاكاة تسجيل الدخول
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        email: loginEmail,
        name: loginEmail.split('@')[0]
      }));
      toast({
        title: "نجح تسجيل الدخول",
        description: "مرحباً بك مرة أخرى!"
      });
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(signupEmail)) {
      toast({
        title: "خطأ",
        description: "البريد الإلكتروني غير صالح",
        variant: "destructive"
      });
      return;
    }

    if (signupPassword.length < 6) {
      toast({
        title: "خطأ",
        description: "كلمة المرور يجب أن تكون 6 أحرف على الأقل",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // محاكاة إنشاء الحساب
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        email: signupEmail,
        name: signupEmail.split('@')[0]
      }));
      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "مرحباً بك في منصة السير الذاتية!"
      });
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            سجّل الدخول أو أنشئ حسابًا
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* نموذج تسجيل الدخول */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تسجيل الدخول</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="كلمة المرور"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
              <div className="text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  هل نسيت كلمة المرور؟
                </a>
              </div>
            </form>
          </div>

          <Separator />

          {/* نموذج إنشاء الحساب */}
          <div>
            <h3 className="text-lg font-semibold mb-4">إنشاء حساب جديد</h3>
            <form onSubmit={handleSignup} className="space-y-4">
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="كلمة المرور"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="outline" className="w-full" disabled={isLoading}>
                {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب جديد"}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;

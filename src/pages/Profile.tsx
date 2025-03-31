
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { uploadFile, getFileUrl } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';
import { isUsingDefaultCredentials } from '@/lib/supabase';

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();
    const filePath = `avatars/${user?.id}.${fileExt}`;
    
    try {
      setUploading(true);
      await uploadFile('profiles', filePath, file);
      const url = getFileUrl('profiles', filePath);
      setAvatarUrl(url);
      
      toast({
        title: "Avatar uploaded successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error uploading avatar",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };
  
  if (!user) return null;

  return (
    <PageLayout>
      <div className="container py-8 px-4 md:px-6">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={avatarUrl || undefined} alt={user.email || "User"} />
                  <AvatarFallback>{user.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center">
                  <label 
                    htmlFor="avatar-upload" 
                    className="cursor-pointer text-sm text-primary hover:underline"
                  >
                    {uploading ? 'Uploading...' : 'Change avatar'}
                  </label>
                  <Input 
                    id="avatar-upload" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleAvatarUpload}
                    disabled={uploading}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">Email</p>
                <p>{user.email}</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium">User ID</p>
                <p className="text-sm text-muted-foreground break-all">{user.id}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => navigate('/')}>Back to Home</Button>
              <Button variant="destructive" onClick={handleLogout}>Log Out</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;

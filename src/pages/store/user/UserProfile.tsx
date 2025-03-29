
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserProfile } from '@/services/api/storeApi';
import { useToast } from '@/hooks/use-toast';
import { User, Mail, Lock, Shield, Bell, Key } from 'lucide-react';

const UserProfile = () => {
  const { toast } = useToast();
  const { data: userData, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile
  });
  
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: ''
  });
  
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  React.useEffect(() => {
    if (userData) {
      setProfile({
        fullName: userData.name,
        email: userData.email,
        phone: '',
        country: ''
      });
    }
  }, [userData]);
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile Updated",
        description: "Your profile information has been updated successfully.",
      });
    }, 500);
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "New password and confirmation don't match.",
      });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Password Updated",
        description: "Your password has been changed successfully.",
      });
      
      setPasswords({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }, 500);
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-6 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">My Profile</h1>
          <p className="text-muted-foreground">Manage your account information and security settings</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all sticky top-20">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-20 w-20 mb-3">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary/20 text-primary text-xl">
                    {profile.fullName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg">{profile.fullName}</h3>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
              
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="/store/user/dashboard">
                    <User className="h-4 w-4" />
                    Dashboard
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 bg-white/5" asChild>
                  <a href="/store/user/profile">
                    <User className="h-4 w-4" />
                    My Profile
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="/store/user/orders">
                    <User className="h-4 w-4" />
                    My Orders
                  </a>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3" asChild>
                  <a href="/store/user/credits">
                    <User className="h-4 w-4" />
                    My Credits
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Tabs defaultValue="account">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="account" className="gap-2">
                <User className="h-4 w-4" />
                Account
              </TabsTrigger>
              <TabsTrigger value="security" className="gap-2">
                <Shield className="h-4 w-4" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <Card className="glass-dark border-white/10">
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Update your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="fullName"
                            name="fullName"
                            className="pl-10 bg-secondary/20 border-white/10"
                            value={profile.fullName}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            className="pl-10 bg-secondary/20 border-white/10"
                            value={profile.email}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          className="bg-secondary/20 border-white/10"
                          value={profile.phone}
                          onChange={handleProfileChange}
                          placeholder="Optional"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          name="country"
                          className="bg-secondary/20 border-white/10"
                          value={profile.country}
                          onChange={handleProfileChange}
                          placeholder="Optional"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card className="glass-dark border-white/10">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Update your password and security information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="currentPassword"
                            name="currentPassword"
                            type="password"
                            className="pl-10 bg-secondary/20 border-white/10"
                            value={passwords.currentPassword}
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            className="pl-10 bg-secondary/20 border-white/10"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className="pl-10 bg-secondary/20 border-white/10"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Update Password
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card className="glass-dark border-white/10">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Notification preferences coming soon. You will be able to customize which notifications you receive via email and within the application.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

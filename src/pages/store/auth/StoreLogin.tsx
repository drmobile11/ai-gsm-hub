
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const StoreLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-4">
      <div className="w-full max-w-md">
        <Card className="glass-dark border-white/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Welcome Back</CardTitle>
            <CardDescription>Login to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="reseller">Reseller</TabsTrigger>
              </TabsList>
              
              <TabsContent value="user">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full pl-10 p-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm">Password</label>
                      <Link to="/store/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 p-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="reseller">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="username" className="text-sm">Username</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        id="username"
                        type="text"
                        placeholder="your_username"
                        className="w-full pl-10 p-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="reseller-password" className="text-sm">Password</label>
                      <Link to="/store/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        id="reseller-password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 p-3 bg-secondary/20 border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login as Reseller
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/store/register" className="text-primary hover:underline">
                Register
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StoreLogin;

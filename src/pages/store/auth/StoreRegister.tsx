
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const StoreRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // User registration form state
  const [userForm, setUserForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  // Reseller registration form state
  const [resellerForm, setResellerForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    country: '',
    acceptTerms: false
  });
  
  const handleUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserForm({
      ...userForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleResellerFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setResellerForm({
      ...resellerForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleUserRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (!userForm.fullName || !userForm.email || !userForm.password) {
      toast({
        variant: "destructive",
        title: "Required fields missing",
        description: "Please fill in all required fields.",
      });
      setIsLoading(false);
      return;
    }
    
    if (userForm.password !== userForm.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
      });
      setIsLoading(false);
      return;
    }
    
    if (!userForm.acceptTerms) {
      toast({
        variant: "destructive",
        title: "Terms not accepted",
        description: "You must accept the terms and conditions to register.",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API registration call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful",
        description: "Your account has been created. You can now log in.",
      });
      navigate('/store/login');
    }, 1500);
  };
  
  const handleResellerRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (!resellerForm.businessName || !resellerForm.email || !resellerForm.password || !resellerForm.username) {
      toast({
        variant: "destructive",
        title: "Required fields missing",
        description: "Please fill in all required fields.",
      });
      setIsLoading(false);
      return;
    }
    
    if (resellerForm.password !== resellerForm.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
      });
      setIsLoading(false);
      return;
    }
    
    if (!resellerForm.acceptTerms) {
      toast({
        variant: "destructive",
        title: "Terms not accepted",
        description: "You must accept the terms and conditions to register.",
      });
      setIsLoading(false);
      return;
    }
    
    // Simulate API registration call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Reseller registration submitted",
        description: "Your application is being reviewed. We'll contact you soon.",
      });
      navigate('/store/login');
    }, 1500);
  };
  
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] p-4">
      <div className="w-full max-w-md">
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Create Account</CardTitle>
            <CardDescription>Join GSM Hub to access our unlock services</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="user" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  User
                </TabsTrigger>
                <TabsTrigger value="reseller" className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Reseller
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="user">
                <form onSubmit={handleUserRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={userForm.fullName}
                        onChange={handleUserFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={userForm.email}
                        onChange={handleUserFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={userForm.password}
                        onChange={handleUserFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={userForm.confirmPassword}
                        onChange={handleUserFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="acceptTerms" 
                      name="acceptTerms"
                      checked={userForm.acceptTerms}
                      onCheckedChange={(checked) => 
                        setUserForm({...userForm, acceptTerms: checked as boolean})
                      }
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the <Link to="/store/terms" className="text-primary hover:underline">terms and conditions</Link>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Register Account
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="reseller">
                <form onSubmit={handleResellerRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="businessName"
                        name="businessName"
                        type="text"
                        placeholder="Your Company LLC"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={resellerForm.businessName}
                        onChange={handleResellerFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contactName"
                        name="contactName"
                        type="text"
                        placeholder="John Doe"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={resellerForm.contactName}
                        onChange={handleResellerFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resellerEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="resellerEmail"
                        name="email"
                        type="email"
                        placeholder="business@example.com"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={resellerForm.email}
                        onChange={handleResellerFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="your_company"
                        className="pl-10 bg-secondary/20 border-white/10"
                        value={resellerForm.username}
                        onChange={handleResellerFormChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select onValueChange={(value) => setResellerForm({...resellerForm, country: value})}>
                      <SelectTrigger className="bg-secondary/20 border-white/10">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="resellerPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="resellerPassword"
                          name="password"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 bg-secondary/20 border-white/10"
                          value={resellerForm.password}
                          onChange={handleResellerFormChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="resellerConfirmPassword">Confirm</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="resellerConfirmPassword"
                          name="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          className="pl-10 bg-secondary/20 border-white/10"
                          value={resellerForm.confirmPassword}
                          onChange={handleResellerFormChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="resellerAcceptTerms" 
                      name="acceptTerms"
                      checked={resellerForm.acceptTerms}
                      onCheckedChange={(checked) => 
                        setResellerForm({...resellerForm, acceptTerms: checked as boolean})
                      }
                    />
                    <label
                      htmlFor="resellerAcceptTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the <Link to="/store/terms" className="text-primary hover:underline">terms and conditions</Link>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <Building2 className="mr-2 h-4 w-4" />
                        Apply as Reseller
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/store/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StoreRegister;

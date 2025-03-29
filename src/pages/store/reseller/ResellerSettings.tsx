
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Settings, Shield, Bell, Percent, CreditCard, Save } from 'lucide-react';

const ResellerSettings = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mock profile data
  const [profile, setProfile] = useState({
    companyName: 'GSM Reseller Shop',
    contactName: 'John Smith',
    email: 'john@gsmreseller.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Suite 456',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'United States',
    website: 'www.gsmreseller.com',
    taxId: 'TX123456789',
  });
  
  // Mock billing settings
  const [billingSettings, setBillingSettings] = useState({
    autoRecharge: true,
    rechargeAmount: 100,
    rechargeThreshold: 20,
    cardLast4: '4242',
    cardExpiry: '12/25',
  });
  
  // Mock notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    orderUpdates: true,
    marketingEmails: false,
    lowCreditAlert: true,
    apiNotifications: true,
    serviceUpdates: true,
  });
  
  // Mock pricing settings
  const [pricingSettings, setPricingSettings] = useState({
    applyMarkup: true,
    markupPercentage: 20,
    roundPrices: true,
    displayDiscount: true,
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Settings Updated",
        description: "Your settings have been successfully saved."
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Reseller Settings</h1>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-4 glass-dark mb-6">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Billing</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="pricing" className="flex items-center gap-2">
            <Percent className="h-4 w-4" />
            <span className="hidden sm:inline">Pricing</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>Update your business information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input 
                      id="companyName" 
                      value={profile.companyName} 
                      onChange={(e) => setProfile({...profile, companyName: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name</Label>
                    <Input 
                      id="contactName" 
                      value={profile.contactName} 
                      onChange={(e) => setProfile({...profile, contactName: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={profile.email} 
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      value={profile.phone} 
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    value={profile.address} 
                    onChange={(e) => setProfile({...profile, address: e.target.value})}
                    className="bg-secondary/20 border-white/10"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      value={profile.city} 
                      onChange={(e) => setProfile({...profile, city: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input 
                      id="state" 
                      value={profile.state} 
                      onChange={(e) => setProfile({...profile, state: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input 
                      id="zip" 
                      value={profile.zip} 
                      onChange={(e) => setProfile({...profile, zip: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input 
                      id="country" 
                      value={profile.country} 
                      onChange={(e) => setProfile({...profile, country: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input 
                      id="website" 
                      value={profile.website} 
                      onChange={(e) => setProfile({...profile, website: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID / VAT Number</Label>
                    <Input 
                      id="taxId" 
                      value={profile.taxId} 
                      onChange={(e) => setProfile({...profile, taxId: e.target.value})}
                      className="bg-secondary/20 border-white/10"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-primary to-accent ml-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="billing">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Manage your payment methods and auto-recharge settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-medium">Payment Methods</h3>
                    <p className="text-sm text-muted-foreground">Manage your saved payment methods</p>
                  </div>
                  <Button>Add New Card</Button>
                </div>
                
                <div className="bg-secondary/20 p-4 rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-md mr-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Visa ending in {billingSettings.cardLast4}</div>
                      <div className="text-sm text-muted-foreground">Expires {billingSettings.cardExpiry}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Badge className="text-xs bg-green-500/20 text-green-500 hover:bg-green-500/30 mr-2">Default</Badge>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-medium">Auto Recharge</h3>
                    <p className="text-sm text-muted-foreground">Automatically add credits when your balance is low</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={billingSettings.autoRecharge} 
                      onCheckedChange={(checked) => setBillingSettings({...billingSettings, autoRecharge: checked})}
                    />
                    <Label>Enabled</Label>
                  </div>
                </div>
                
                {billingSettings.autoRecharge && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-2 border-primary">
                    <div className="space-y-2">
                      <Label htmlFor="rechargeAmount">Recharge Amount ($)</Label>
                      <Input 
                        id="rechargeAmount" 
                        type="number" 
                        value={billingSettings.rechargeAmount} 
                        onChange={(e) => setBillingSettings({...billingSettings, rechargeAmount: Number(e.target.value)})}
                        className="bg-secondary/20 border-white/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rechargeThreshold">Recharge Threshold ($)</Label>
                      <Input 
                        id="rechargeThreshold" 
                        type="number" 
                        value={billingSettings.rechargeThreshold} 
                        onChange={(e) => setBillingSettings({...billingSettings, rechargeThreshold: Number(e.target.value)})}
                        className="bg-secondary/20 border-white/10"
                      />
                      <p className="text-xs text-muted-foreground">
                        When your balance falls below this amount, your account will be automatically recharged
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-gradient-to-r from-primary to-accent ml-auto"
                onClick={() => {
                  toast({
                    title: "Billing Settings Updated",
                    description: "Your billing settings have been saved."
                  });
                }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Order Updates</h3>
                    <p className="text-sm text-muted-foreground">Receive notifications about order status changes</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.orderUpdates} 
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, orderUpdates: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Emails</h3>
                    <p className="text-sm text-muted-foreground">Receive special offers and promotions</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.marketingEmails} 
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, marketingEmails: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Low Credit Alert</h3>
                    <p className="text-sm text-muted-foreground">Notifications when your credit balance is running low</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.lowCreditAlert} 
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, lowCreditAlert: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">API Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive updates about API usage and quotas</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.apiNotifications} 
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, apiNotifications: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Service Updates</h3>
                    <p className="text-sm text-muted-foreground">Get notified about new services and feature releases</p>
                  </div>
                  <Switch 
                    checked={notificationSettings.serviceUpdates} 
                    onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, serviceUpdates: checked})}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-gradient-to-r from-primary to-accent ml-auto"
                onClick={() => {
                  toast({
                    title: "Notification Preferences Updated",
                    description: "Your notification settings have been saved."
                  });
                }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="pricing">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Pricing Rules</CardTitle>
              <CardDescription>Configure how prices are displayed to your customers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Apply Markup</h3>
                    <p className="text-sm text-muted-foreground">Automatically apply markup to wholesale prices</p>
                  </div>
                  <Switch 
                    checked={pricingSettings.applyMarkup} 
                    onCheckedChange={(checked) => setPricingSettings({...pricingSettings, applyMarkup: checked})}
                  />
                </div>
                
                {pricingSettings.applyMarkup && (
                  <div className="pl-4 border-l-2 border-primary space-y-2">
                    <Label htmlFor="markupPercentage">Markup Percentage (%)</Label>
                    <Input 
                      id="markupPercentage" 
                      type="number" 
                      value={pricingSettings.markupPercentage} 
                      onChange={(e) => setPricingSettings({...pricingSettings, markupPercentage: Number(e.target.value)})}
                      className="bg-secondary/20 border-white/10 max-w-xs"
                    />
                    <p className="text-xs text-muted-foreground">
                      This percentage will be added to the base price of all services
                    </p>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Round Prices</h3>
                    <p className="text-sm text-muted-foreground">Round prices to the nearest whole dollar</p>
                  </div>
                  <Switch 
                    checked={pricingSettings.roundPrices} 
                    onCheckedChange={(checked) => setPricingSettings({...pricingSettings, roundPrices: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Display Discount Labels</h3>
                    <p className="text-sm text-muted-foreground">Show customers when a service is discounted</p>
                  </div>
                  <Switch 
                    checked={pricingSettings.displayDiscount} 
                    onCheckedChange={(checked) => setPricingSettings({...pricingSettings, displayDiscount: checked})}
                  />
                </div>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Price Example</h3>
                </div>
                <p className="text-sm mb-4">Here's how your pricing would look with current settings:</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Wholesale Price:</p>
                    <p className="text-lg">$10.00</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Your Customer Sees:</p>
                    <p className="text-lg text-primary font-bold">
                      {pricingSettings.applyMarkup 
                        ? `$${pricingSettings.roundPrices 
                            ? Math.round(10 * (1 + pricingSettings.markupPercentage / 100)) 
                            : (10 * (1 + pricingSettings.markupPercentage / 100)).toFixed(2)}`
                        : '$10.00'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="bg-gradient-to-r from-primary to-accent ml-auto"
                onClick={() => {
                  toast({
                    title: "Pricing Rules Updated",
                    description: "Your pricing settings have been saved."
                  });
                }}
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResellerSettings;

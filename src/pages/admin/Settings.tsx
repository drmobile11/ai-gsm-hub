
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Save, KeyRound, CreditCard, Globe, Lock, Webhook, Shield, Palette, Upload } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Settings</h2>
      </div>
      
      <Tabs defaultValue="api" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="api">API Settings</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>API Credentials</CardTitle>
              <CardDescription>
                Configure your Dhru Fusion API credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="api_url">API URL</Label>
                  <Input id="api_url" placeholder="https://your-domain.com/" defaultValue="https://api.example.com/" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Your API username" defaultValue="example_user" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="api_key">API Access Key</Label>
                  <div className="flex gap-2">
                    <Input id="api_key" type="password" placeholder="Your API key" defaultValue="••••••••••••••••" />
                    <Button variant="outline">
                      <KeyRound className="h-4 w-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="api_enabled">Enable API Integration</Label>
                    <Switch id="api_enabled" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When disabled, the system will use mock data instead of making real API calls.
                  </p>
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save API Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Reseller API Connections</CardTitle>
              <CardDescription>
                Configure additional GSM reseller platform connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 border-b pb-4">
                  <h3 className="text-base font-medium">UnlockBase</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="unlockbase_key">API Key</Label>
                    <Input id="unlockbase_key" placeholder="UnlockBase API Key" defaultValue="ub_123456789" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="unlockbase_enabled">Enable UnlockBase</Label>
                    <Switch id="unlockbase_enabled" defaultChecked />
                  </div>
                </div>
                
                <div className="grid gap-4 border-b pb-4">
                  <h3 className="text-base font-medium">GSMSync</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="gsmsync_key">API Key</Label>
                    <Input id="gsmsync_key" placeholder="GSMSync API Key" defaultValue="gsm_123456789" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="gsmsync_enabled">Enable GSMSync</Label>
                    <Switch id="gsmsync_enabled" defaultChecked />
                  </div>
                </div>
                
                <div className="grid gap-4 border-b pb-4">
                  <h3 className="text-base font-medium">IMEI Server</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="imeiserver_key">API Key</Label>
                    <Input id="imeiserver_key" placeholder="IMEI Server API Key" defaultValue="" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="imeiserver_enabled">Enable IMEI Server</Label>
                    <Switch id="imeiserver_enabled" />
                  </div>
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save API Connections
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>
                Configure webhooks for real-time event notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="text-base font-medium">Order Completed</h3>
                    <p className="text-sm text-muted-foreground">
                      Triggered when an order is successfully completed
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="order_completed_webhook" defaultChecked />
                    <Button variant="outline" size="sm">
                      <Webhook className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="text-base font-medium">Order Failed</h3>
                    <p className="text-sm text-muted-foreground">
                      Triggered when an order processing fails
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="order_failed_webhook" defaultChecked />
                    <Button variant="outline" size="sm">
                      <Webhook className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="text-base font-medium">Payment Received</h3>
                    <p className="text-sm text-muted-foreground">
                      Triggered when a payment is successfully processed
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="payment_received_webhook" defaultChecked />
                    <Button variant="outline" size="sm">
                      <Webhook className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Webhook Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Gateways</CardTitle>
              <CardDescription>
                Configure payment gateway integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 border-b pb-4">
                  <h3 className="text-base font-medium">Stripe</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="stripe_public_key">Public Key</Label>
                    <Input id="stripe_public_key" placeholder="Stripe Public Key" defaultValue="pk_test_123456789" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="stripe_secret_key">Secret Key</Label>
                    <Input id="stripe_secret_key" type="password" placeholder="Stripe Secret Key" defaultValue="••••••••••••••••" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="stripe_enabled">Enable Stripe</Label>
                    <Switch id="stripe_enabled" defaultChecked />
                  </div>
                </div>
                
                <div className="grid gap-4 border-b pb-4">
                  <h3 className="text-base font-medium">PayPal</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="paypal_client_id">Client ID</Label>
                    <Input id="paypal_client_id" placeholder="PayPal Client ID" defaultValue="client_123456789" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="paypal_secret">Secret</Label>
                    <Input id="paypal_secret" type="password" placeholder="PayPal Secret" defaultValue="••••••••••••••••" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="paypal_enabled">Enable PayPal</Label>
                    <Switch id="paypal_enabled" defaultChecked />
                  </div>
                </div>
                
                <div className="grid gap-4 border-b pb-4">
                  <h3 className="text-base font-medium">Cryptocurrency</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="crypto_api_key">API Key</Label>
                    <Input id="crypto_api_key" placeholder="Crypto Payment API Key" defaultValue="" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="crypto_enabled">Enable Cryptocurrency</Label>
                    <Switch id="crypto_enabled" />
                  </div>
                </div>
                
                <Button>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Save Payment Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Credit System</CardTitle>
              <CardDescription>
                Configure the platform credit system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable_credits">Enable Credit System</Label>
                  <Switch id="enable_credits" defaultChecked />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="credit_exchange_rate">Credit Exchange Rate ($ to 1 Credit)</Label>
                  <Input id="credit_exchange_rate" type="number" defaultValue="1.00" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="min_credit_purchase">Minimum Credit Purchase</Label>
                  <Input id="min_credit_purchase" type="number" defaultValue="10" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="auto_topup_enabled">Enable Auto Top-up</Label>
                    <Switch id="auto_topup_enabled" defaultChecked />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="auto_topup_threshold">Auto Top-up Threshold</Label>
                    <Input id="auto_topup_threshold" type="number" defaultValue="5" />
                  </div>
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Credit Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="website" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Settings</CardTitle>
              <CardDescription>
                Configure your website general settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="site_name">Site Name</Label>
                  <Input id="site_name" defaultValue="GSM Hub" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="site_description">Site Description</Label>
                  <Input id="site_description" defaultValue="Complete GSM Unlocking Platform" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="contact_email">Contact Email</Label>
                  <Input id="contact_email" type="email" defaultValue="contact@example.com" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="support_phone">Support Phone</Label>
                  <Input id="support_phone" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="logo_upload">Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Logo
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="favicon_upload">Favicon</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <Button variant="outline">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Favicon
                    </Button>
                  </div>
                </div>
                
                <Button>
                  <Globe className="h-4 w-4 mr-2" />
                  Save Website Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>
                Configure your website SEO settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <Input id="meta_title" defaultValue="GSM Hub - Professional Unlocking Services" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <Input id="meta_description" defaultValue="GSM Hub offers professional unlocking services for all mobile devices. IMEI unlocking, server unlocks, and remote unlocking tools." />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="meta_keywords">Meta Keywords</Label>
                  <Input id="meta_keywords" defaultValue="gsm unlocking, imei unlock, server unlock, remote unlock" />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable_sitemap">Generate Sitemap</Label>
                  <Switch id="enable_sitemap" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable_robots">Generate robots.txt</Label>
                  <Switch id="enable_robots" defaultChecked />
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save SEO Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure your platform security settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable_2fa">Enable Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Require 2FA for all admin accounts
                    </p>
                  </div>
                  <Switch id="enable_2fa" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enforce_password_policy">Enforce Strong Password Policy</Label>
                    <p className="text-sm text-muted-foreground">
                      Require complex passwords (min. 8 chars, uppercase, lowercase, numbers)
                    </p>
                  </div>
                  <Switch id="enforce_password_policy" defaultChecked />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="session_timeout">Session Timeout (minutes)</Label>
                  <Input id="session_timeout" type="number" defaultValue="60" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="max_login_attempts">Max Login Attempts</Label>
                  <Input id="max_login_attempts" type="number" defaultValue="5" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable_ip_restriction">Enable IP Restriction</Label>
                    <p className="text-sm text-muted-foreground">
                      Restrict admin access to specific IP addresses
                    </p>
                  </div>
                  <Switch id="enable_ip_restriction" />
                </div>
                
                <Button>
                  <Lock className="h-4 w-4 mr-2" />
                  Save Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Security</CardTitle>
              <CardDescription>
                Configure API security settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="api_rate_limit">API Rate Limit (requests per minute)</Label>
                  <Input id="api_rate_limit" type="number" defaultValue="60" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable_api_key_rotation">Enable API Key Rotation</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically rotate API keys every 90 days
                    </p>
                  </div>
                  <Switch id="enable_api_key_rotation" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enable_api_logging">Enable API Logging</Label>
                    <p className="text-sm text-muted-foreground">
                      Log all API requests for security monitoring
                    </p>
                  </div>
                  <Switch id="enable_api_logging" defaultChecked />
                </div>
                
                <Button>
                  <Shield className="h-4 w-4 mr-2" />
                  Save API Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="theme" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>
                Customize your platform appearance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="theme_mode">Theme Mode</Label>
                  <Select defaultValue="dark">
                    <SelectTrigger id="theme_mode">
                      <SelectValue placeholder="Select theme mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label>Primary Color</Label>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-yellow-500 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-pink-500 cursor-pointer" />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label>Accent Color</Label>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-300 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-blue-300 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-green-300 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-red-300 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-yellow-300 cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-pink-300 cursor-pointer" />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="font_family">Font Family</Label>
                  <Select defaultValue="inter">
                    <SelectTrigger id="font_family">
                      <SelectValue placeholder="Select font family" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="opensans">Open Sans</SelectItem>
                      <SelectItem value="montserrat">Montserrat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable_animations">Enable Animations</Label>
                  <Switch id="enable_animations" defaultChecked />
                </div>
                
                <Button>
                  <Palette className="h-4 w-4 mr-2" />
                  Save Theme Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Custom CSS</CardTitle>
              <CardDescription>
                Add custom CSS to your platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="custom_css">Custom CSS</Label>
                  <textarea
                    id="custom_css"
                    className="min-h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="/* Add your custom CSS here */
.my-custom-class {
  background: linear-gradient(to right, var(--primary), var(--accent));
  border-radius: 0.5rem;
  padding: 1rem;
}"
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="enable_custom_css">Enable Custom CSS</Label>
                  <Switch id="enable_custom_css" defaultChecked />
                </div>
                
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Custom CSS
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;


import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Palette, Sparkles, Code } from "lucide-react";
import { useTheme, ThemeTemplate } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';

const ThemeSettings = () => {
  const { toast } = useToast();
  const { currentTheme, changeTheme, applyCustomTheme, availableTemplates } = useTheme();
  const [customTheme, setCustomTheme] = useState<Partial<ThemeTemplate>>({});

  const handleCustomThemeChange = (key: keyof ThemeTemplate, value: string) => {
    setCustomTheme(prev => ({ ...prev, [key]: value }));
  };

  const applyThemeChanges = () => {
    applyCustomTheme(customTheme);
    toast({
      title: "Theme updated",
      description: "Custom theme has been applied to the store",
    });
  };

  const handlePresetChange = (themeId: string) => {
    changeTheme(themeId);
    toast({
      title: "Theme updated",
      description: `Theme changed to ${availableTemplates.find(t => t.id === themeId)?.name}`,
    });
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Theme Settings</h1>
        <p className="text-muted-foreground">Customize the appearance of your GSM Hub store</p>
      </div>

      <Tabs defaultValue="presets" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="presets" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Theme Presets
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            Custom Theme
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="presets">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableTemplates.map(template => (
              <Card 
                key={template.id} 
                className={`hover-lift transition-all cursor-pointer ${currentTheme.id === template.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handlePresetChange(template.id)}
              >
                <CardHeader className="pb-4">
                  <CardTitle>{template.name}</CardTitle>
                  <CardDescription>Theme template</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <div className="h-10 w-10 rounded-full" style={{ backgroundColor: template.primary }}></div>
                    <div className="h-10 w-10 rounded-full" style={{ backgroundColor: template.accent }}></div>
                    <div className="h-10 w-10 rounded-full" style={{ backgroundColor: template.background }}></div>
                  </div>
                  <Button 
                    variant={currentTheme.id === template.id ? "secondary" : "default"}
                    className="w-full"
                  >
                    {currentTheme.id === template.id ? "Current Theme" : "Apply Theme"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="custom">
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle>Custom Theme Creator</CardTitle>
              <CardDescription>Adjust the colors to create your custom theme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="primaryColor">Primary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="primaryColor" 
                        type="text" 
                        placeholder="hsl(217, 91%, 60%)" 
                        value={customTheme.primary || currentTheme.primary}
                        onChange={(e) => handleCustomThemeChange('primary', e.target.value)}
                      />
                      <div 
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: customTheme.primary || currentTheme.primary }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accentColor">Accent Color</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="accentColor" 
                        type="text"
                        placeholder="hsl(262, 83%, 58%)"
                        value={customTheme.accent || currentTheme.accent}
                        onChange={(e) => handleCustomThemeChange('accent', e.target.value)}
                      />
                      <div 
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: customTheme.accent || currentTheme.accent }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="backgroundColor">Background Color</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="backgroundColor" 
                        type="text"
                        placeholder="hsl(224, 71%, 4%)"
                        value={customTheme.background || currentTheme.background}
                        onChange={(e) => handleCustomThemeChange('background', e.target.value)}
                      />
                      <div 
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: customTheme.background || currentTheme.background }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="textPrimary">Text Primary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="textPrimary" 
                        type="text"
                        placeholder="hsl(210, 40%, 98%)"
                        value={customTheme.textPrimary || currentTheme.textPrimary}
                        onChange={(e) => handleCustomThemeChange('textPrimary', e.target.value)}
                      />
                      <div 
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: customTheme.textPrimary || currentTheme.textPrimary }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="textSecondary">Text Secondary Color</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="textSecondary" 
                        type="text"
                        placeholder="hsl(215, 20%, 65%)"
                        value={customTheme.textSecondary || currentTheme.textSecondary}
                        onChange={(e) => handleCustomThemeChange('textSecondary', e.target.value)}
                      />
                      <div 
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: customTheme.textSecondary || currentTheme.textSecondary }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardBackground">Card Background</Label>
                    <div className="flex items-center gap-2">
                      <Input 
                        id="cardBackground" 
                        type="text"
                        placeholder="rgba(15, 15, 30, 0.2)"
                        value={customTheme.cardBackground || currentTheme.cardBackground}
                        onChange={(e) => handleCustomThemeChange('cardBackground', e.target.value)}
                      />
                      <div 
                        className="h-10 w-10 rounded-md border"
                        style={{ backgroundColor: customTheme.cardBackground || currentTheme.cardBackground }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button className="mt-6 w-full" onClick={applyThemeChanges}>
                Apply Custom Theme
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced">
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle>Advanced Theme Configuration</CardTitle>
              <CardDescription>Direct CSS variable controls for developers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-black/20 rounded-md">
                <pre className="text-sm overflow-auto">
                  {`// Current theme configuration
{
  "id": "${currentTheme.id}",
  "name": "${currentTheme.name}",
  "primary": "${currentTheme.primary}",
  "accent": "${currentTheme.accent}",
  "background": "${currentTheme.background}",
  "cardBackground": "${currentTheme.cardBackground}",
  "textPrimary": "${currentTheme.textPrimary}",
  "textSecondary": "${currentTheme.textSecondary}",
  "borderColor": "${currentTheme.borderColor}"
}`}
                </pre>
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-muted-foreground">You can export this configuration for backup or import an existing configuration.</p>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">Export Theme</Button>
                  <Button variant="outline" className="flex-1">Import Theme</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ThemeSettings;


import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { currentTheme, toggleMode, changeTheme, availableTemplates } = useTheme();
  
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="hover-lift">
            {currentTheme.mode === 'dark' ? (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="p-2">
            <h4 className="font-medium mb-1 text-sm">Theme Mode</h4>
            <div className="flex gap-2 mb-3">
              <Button 
                variant={currentTheme.mode === 'light' ? "default" : "outline"} 
                size="sm" 
                className="w-1/2"
                onClick={() => {
                  if (currentTheme.mode !== 'light') toggleMode();
                }}
              >
                <Sun className="mr-1 h-4 w-4" />
                Light
              </Button>
              <Button 
                variant={currentTheme.mode === 'dark' ? "default" : "outline"} 
                size="sm" 
                className="w-1/2"
                onClick={() => {
                  if (currentTheme.mode !== 'dark') toggleMode();
                }}
              >
                <Moon className="mr-1 h-4 w-4" />
                Dark
              </Button>
            </div>
            
            <h4 className="font-medium mb-1 text-sm">Color Themes</h4>
            <div className="grid grid-cols-2 gap-2">
              {availableTemplates
                .filter(template => template.mode === currentTheme.mode)
                .map(template => (
                  <DropdownMenuItem
                    key={template.id}
                    className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer ${
                      currentTheme.id === template.id ? 'bg-secondary' : ''
                    }`}
                    onClick={() => changeTheme(template.id)}
                  >
                    <div className="flex gap-1">
                      <div
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: template.primary }}
                      />
                      <div
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: template.accent }}
                      />
                    </div>
                    <span className="text-xs">{template.name}</span>
                    {currentTheme.id === template.id && (
                      <Badge variant="accent" className="ml-auto text-[0.6rem] px-1 py-0">Active</Badge>
                    )}
                  </DropdownMenuItem>
                ))}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeSwitcher;

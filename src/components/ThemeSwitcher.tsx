
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
  const { currentTheme, toggleMode } = useTheme();
  
  return (
    <div className={className}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="hover-lift" 
        onClick={toggleMode}
      >
        {currentTheme.mode === 'dark' ? (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ThemeSwitcher;

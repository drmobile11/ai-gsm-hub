
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { currentTheme, toggleMode } = useTheme();
  
  return (
    <div className={className}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="hover-lift" 
        onClick={toggleMode}
        aria-label={currentTheme.mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
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

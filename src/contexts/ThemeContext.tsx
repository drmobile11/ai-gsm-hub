
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeTemplate = {
  id: string;
  name: string;
  primary: string;
  accent: string;
  background: string;
  cardBackground: string;
  textPrimary: string;
  textSecondary: string;
  borderColor: string;
}

// Default templates
export const themeTemplates: ThemeTemplate[] = [
  {
    id: 'tp1',
    name: 'Dark Pulse',
    primary: 'hsl(217, 91%, 60%)', // blue
    accent: 'hsl(262, 83%, 58%)', // purple
    background: 'hsl(224, 71%, 4%)', // dark blue
    cardBackground: 'rgba(15, 15, 30, 0.2)',
    textPrimary: 'hsl(210, 40%, 98%)', // white
    textSecondary: 'hsl(215, 20%, 65%)', // muted
    borderColor: 'hsl(217, 33%, 17%)', // border
  },
  {
    id: 'tp2',
    name: 'Emerald Dusk',
    primary: 'hsl(142, 71%, 45%)', // green
    accent: 'hsl(330, 81%, 60%)', // pink
    background: 'hsl(215, 60%, 8%)', // dark blue-gray
    cardBackground: 'rgba(20, 30, 40, 0.2)',
    textPrimary: 'hsl(210, 40%, 98%)', // white
    textSecondary: 'hsl(214, 20%, 69%)', // muted
    borderColor: 'hsl(215, 25%, 27%)', // border
  },
  {
    id: 'tp3',
    name: 'Amber Glow',
    primary: 'hsl(38, 92%, 50%)', // amber
    accent: 'hsl(244, 75%, 57%)', // indigo
    background: 'hsl(0, 0%, 7%)', // almost black
    cardBackground: 'rgba(25, 25, 25, 0.2)',
    textPrimary: 'hsl(210, 40%, 98%)', // white
    textSecondary: 'hsl(210, 14%, 66%)', // muted
    borderColor: 'hsl(0, 0%, 20%)', // border
  }
];

type ThemeContextType = {
  currentTheme: ThemeTemplate;
  changeTheme: (themeId: string) => void;
  applyCustomTheme: (theme: Partial<ThemeTemplate>) => void;
  availableTemplates: ThemeTemplate[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeTemplate>(themeTemplates[0]);
  
  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedThemeId = localStorage.getItem('gsmhub-theme');
    if (savedThemeId) {
      const savedTheme = themeTemplates.find(t => t.id === savedThemeId);
      if (savedTheme) setCurrentTheme(savedTheme);
    }
  }, []);
  
  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Update CSS variables
    root.style.setProperty('--background', currentTheme.background);
    root.style.setProperty('--foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--card', currentTheme.cardBackground);
    root.style.setProperty('--card-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--popover', currentTheme.background);
    root.style.setProperty('--popover-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--primary', currentTheme.primary);
    root.style.setProperty('--primary-rgb', hexToRgb(currentTheme.primary));
    
    root.style.setProperty('--secondary', 'hsl(217, 33%, 17%)');
    root.style.setProperty('--secondary-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--muted', 'hsl(217, 33%, 17%)');
    root.style.setProperty('--muted-foreground', currentTheme.textSecondary);
    
    root.style.setProperty('--accent', currentTheme.accent);
    root.style.setProperty('--accent-rgb', hexToRgb(currentTheme.accent));
    root.style.setProperty('--accent-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--destructive', 'hsl(0, 62.8%, 30.6%)');
    root.style.setProperty('--destructive-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--border', currentTheme.borderColor);
    root.style.setProperty('--input', currentTheme.borderColor);
    root.style.setProperty('--ring', 'hsl(224, 71%, 90%)');
    
    // Save to localStorage
    localStorage.setItem('gsmhub-theme', currentTheme.id);
  }, [currentTheme]);
  
  const changeTheme = (themeId: string) => {
    const newTheme = themeTemplates.find(t => t.id === themeId);
    if (newTheme) setCurrentTheme(newTheme);
  };
  
  const applyCustomTheme = (theme: Partial<ThemeTemplate>) => {
    setCurrentTheme(prev => ({
      ...prev,
      ...theme,
      id: 'custom',
      name: 'Custom Theme'
    }));
  };
  
  return (
    <ThemeContext.Provider value={{
      currentTheme,
      changeTheme,
      applyCustomTheme,
      availableTemplates: themeTemplates
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Helper to convert HSL to RGB
function hexToRgb(hsl: string): string {
  // Simple conversion for demo - in production use a proper HSL to RGB conversion
  // This is a placeholder function
  return "37, 99, 235"; // Example blue RGB
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

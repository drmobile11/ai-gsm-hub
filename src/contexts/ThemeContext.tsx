
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
  mode: 'dark' | 'light';
}

// Default templates
export const themeTemplates: ThemeTemplate[] = [
  // Dark themes
  {
    id: 'dark-pulse',
    name: 'Dark Pulse',
    primary: 'hsl(217, 91%, 60%)', // blue
    accent: 'hsl(262, 83%, 58%)', // purple
    background: 'hsl(224, 71%, 4%)', // dark blue
    cardBackground: 'rgba(15, 15, 30, 0.2)',
    textPrimary: 'hsl(210, 40%, 98%)', // white
    textSecondary: 'hsl(215, 20%, 65%)', // muted
    borderColor: 'hsl(217, 33%, 17%)', // border
    mode: 'dark',
  },
  {
    id: 'dark-emerald',
    name: 'Emerald Dusk',
    primary: 'hsl(142, 71%, 45%)', // green
    accent: 'hsl(330, 81%, 60%)', // pink
    background: 'hsl(215, 60%, 8%)', // dark blue-gray
    cardBackground: 'rgba(20, 30, 40, 0.2)',
    textPrimary: 'hsl(210, 40%, 98%)', // white
    textSecondary: 'hsl(214, 20%, 69%)', // muted
    borderColor: 'hsl(215, 25%, 27%)', // border
    mode: 'dark',
  },
  {
    id: 'dark-amber',
    name: 'Amber Glow',
    primary: 'hsl(38, 92%, 50%)', // amber
    accent: 'hsl(244, 75%, 57%)', // indigo
    background: 'hsl(0, 0%, 7%)', // almost black
    cardBackground: 'rgba(25, 25, 25, 0.2)',
    textPrimary: 'hsl(210, 40%, 98%)', // white
    textSecondary: 'hsl(210, 14%, 66%)', // muted
    borderColor: 'hsl(0, 0%, 20%)', // border
    mode: 'dark',
  },
  // Light themes
  {
    id: 'light-clean',
    name: 'Light Clean',
    primary: 'hsl(217, 91%, 60%)', // blue
    accent: 'hsl(262, 83%, 58%)', // purple
    background: 'hsl(0, 0%, 100%)', // white
    cardBackground: 'hsl(0, 0%, 98%)',
    textPrimary: 'hsl(222, 47%, 11%)', // dark blue
    textSecondary: 'hsl(215, 16%, 47%)', // gray
    borderColor: 'hsl(214, 32%, 91%)', // light gray
    mode: 'light',
  },
  {
    id: 'light-soft',
    name: 'Soft Light',
    primary: 'hsl(142, 71%, 45%)', // green
    accent: 'hsl(330, 81%, 60%)', // pink
    background: 'hsl(210, 20%, 98%)', // off-white
    cardBackground: 'hsl(0, 0%, 100%)',
    textPrimary: 'hsl(215, 25%, 27%)', // dark gray-blue
    textSecondary: 'hsl(215, 16%, 47%)', // medium gray
    borderColor: 'hsl(214, 32%, 91%)', // light gray
    mode: 'light',
  }
];

type ThemeContextType = {
  currentTheme: ThemeTemplate;
  changeTheme: (themeId: string) => void;
  applyCustomTheme: (theme: Partial<ThemeTemplate>) => void;
  availableTemplates: ThemeTemplate[];
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always initialize with dark-pulse theme
  const defaultDarkTheme = themeTemplates.find(t => t.id === 'dark-pulse') || themeTemplates[0];
  const [currentTheme, setCurrentTheme] = useState<ThemeTemplate>(defaultDarkTheme);
  
  // Force dark mode on initial load, then check localStorage
  useEffect(() => {
    // Force dark mode class immediately on document
    document.documentElement.classList.add('dark');
    
    // Set default theme in localStorage if not already set
    if (!localStorage.getItem('gsmhub-theme')) {
      localStorage.setItem('gsmhub-theme', 'dark-pulse');
    }
    
    // Then try to load saved theme
    const savedThemeId = localStorage.getItem('gsmhub-theme');
    if (savedThemeId) {
      const savedTheme = themeTemplates.find(t => t.id === savedThemeId);
      if (savedTheme) {
        setCurrentTheme(savedTheme);
        // Make sure dark mode class is set correctly based on saved theme
        if (savedTheme.mode === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  }, []);
  
  // Apply theme to CSS variables and manage dark class
  useEffect(() => {
    const root = document.documentElement;
    
    // Force dark mode class on document for components that rely on that
    if (currentTheme.mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update CSS variables
    root.style.setProperty('--background', currentTheme.background);
    root.style.setProperty('--foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--card', currentTheme.cardBackground);
    root.style.setProperty('--card-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--popover', currentTheme.background);
    root.style.setProperty('--popover-foreground', currentTheme.textPrimary);
    
    root.style.setProperty('--primary', currentTheme.primary);
    root.style.setProperty('--primary-rgb', hexToRgb(currentTheme.primary));
    root.style.setProperty('--primary-foreground', 
      currentTheme.mode === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(222, 47%, 11%)');
    
    root.style.setProperty('--secondary', 
      currentTheme.mode === 'dark' ? 'hsl(217, 33%, 17%)' : 'hsl(210, 40%, 96%)');
    root.style.setProperty('--secondary-foreground', 
      currentTheme.mode === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(222, 47%, 11%)');
    
    root.style.setProperty('--muted', 
      currentTheme.mode === 'dark' ? 'hsl(217, 33%, 17%)' : 'hsl(210, 40%, 96%)');
    root.style.setProperty('--muted-foreground', currentTheme.textSecondary);
    
    root.style.setProperty('--accent', currentTheme.accent);
    root.style.setProperty('--accent-rgb', hexToRgb(currentTheme.accent));
    root.style.setProperty('--accent-foreground', 
      currentTheme.mode === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(222, 47%, 11%)');
    
    root.style.setProperty('--destructive', 
      currentTheme.mode === 'dark' ? 'hsl(0, 62.8%, 30.6%)' : 'hsl(0, 84.2%, 60.2%)');
    root.style.setProperty('--destructive-foreground', 
      currentTheme.mode === 'dark' ? 'hsl(210, 40%, 98%)' : 'hsl(210, 40%, 98%)');
    
    root.style.setProperty('--border', currentTheme.borderColor);
    root.style.setProperty('--input', currentTheme.borderColor);
    root.style.setProperty('--ring', 
      currentTheme.mode === 'dark' ? 'hsl(224, 71%, 90%)' : 'hsl(215, 20.2%, 65.1%)');
    
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

  const toggleMode = () => {
    // Simply toggle between dark and light mode
    const targetMode = currentTheme.mode === 'dark' ? 'light' : 'dark';
    
    // Find the first theme with the target mode
    const newTheme = themeTemplates.find(t => t.mode === targetMode);
    if (newTheme) {
      setCurrentTheme(newTheme);
      // Directly set the dark class for immediate visual feedback
      if (targetMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };
  
  return (
    <ThemeContext.Provider value={{
      currentTheme,
      changeTheme,
      applyCustomTheme,
      availableTemplates: themeTemplates,
      toggleMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Helper to convert HSL to RGB
function hexToRgb(hsl: string): string {
  // Simple conversion for demo - in production use a proper HSL to RGB conversion
  // This is a placeholder function
  if (hsl.includes('38, 92%, 50%')) return "245, 158, 11"; // amber
  if (hsl.includes('142, 71%, 45%')) return "34, 197, 94"; // green
  if (hsl.includes('244, 75%, 57%')) return "79, 70, 229"; // indigo
  if (hsl.includes('330, 81%, 60%')) return "236, 72, 153"; // pink
  if (hsl.includes('262, 83%, 58%')) return "124, 58, 237"; // purple
  return "37, 99, 235"; // blue default
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

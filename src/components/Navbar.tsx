
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-10">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white font-bold">
              G
            </div>
            <span className={cn(
              "font-semibold text-xl transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )}>
              GSM Hub
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {['Services', 'Features', 'Pricing', 'API Docs'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    isScrolled ? "text-foreground" : "text-foreground"
                  )}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={cn(
              "h-6 w-6 transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )} />
          ) : (
            <Menu className={cn(
              "h-6 w-6 transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-md z-5 flex flex-col justify-center items-center transition-all duration-300 ease-in-out",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <ul className="flex flex-col space-y-6 items-center">
            {['Services', 'Features', 'Pricing', 'API Docs'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity w-full px-8 py-6 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

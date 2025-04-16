
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const StoreHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Pricing', path: '/pricing' },
    { title: 'Support', path: '/support' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/40 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white font-bold">
              G
            </div>
            <span className="font-semibold text-xl">GSM Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.path}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/user/dashboard">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          <ul className="flex flex-col space-y-6 items-center">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.path}
                  className="text-xl font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-6">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="lg" className="w-full gap-2 mb-4">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link to="/user/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity w-full">
                  Dashboard
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;

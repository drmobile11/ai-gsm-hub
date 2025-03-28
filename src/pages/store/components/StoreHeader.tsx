
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Menu, 
  Search, 
  User, 
  LogIn,
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const StoreHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-dark border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/store" className="text-xl font-bold gradient-text">GSM Store</Link>
            
            <nav className="hidden md:flex items-center gap-6 ml-10">
              <Link to="/store" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/store/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
              <Link to="/store/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
              <Link to="/store/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link to="/store/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-white/10">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            <Link to="/store/login">
              <Button variant="outline" className="hidden md:flex hover-lift">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-dark border-white/10">
                <SheetHeader>
                  <SheetTitle className="gradient-text">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <Link to="/store" className="text-sm font-medium p-2 hover:bg-white/10 rounded-md">Home</Link>
                  <Link to="/store/services" className="text-sm font-medium p-2 hover:bg-white/10 rounded-md">Services</Link>
                  <Link to="/store/pricing" className="text-sm font-medium p-2 hover:bg-white/10 rounded-md">Pricing</Link>
                  <Link to="/store/about" className="text-sm font-medium p-2 hover:bg-white/10 rounded-md">About</Link>
                  <Link to="/store/contact" className="text-sm font-medium p-2 hover:bg-white/10 rounded-md">Contact</Link>
                  <Link to="/store/login" className="text-sm font-medium p-2 hover:bg-white/10 rounded-md">Login</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;

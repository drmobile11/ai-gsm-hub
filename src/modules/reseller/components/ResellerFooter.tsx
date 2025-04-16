
import React from 'react';
import { Link } from 'react-router-dom';

const ResellerFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/40 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white font-bold text-xs">
              G
            </div>
            <span className="font-semibold">GSM Reseller Hub</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to="/support" className="text-sm text-muted-foreground hover:text-primary">Support</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © {currentYear} GSM Hub
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResellerFooter;

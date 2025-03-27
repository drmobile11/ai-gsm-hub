
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/20 pt-16 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="font-semibold text-xl">GSM Hub</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate AI-powered GSM service platform for IMEI unlocking, 
              server unlocks, and custom reseller website generation.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-gray-400 hover:text-accent transition-colors hover-lift"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['IMEI Unlocking', 'Server Unlocks', 'Remote Unlocking', 'File Downloads', 'Website Generator'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Blog', 'Careers', 'Press', 'Partners'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'API Documentation', 'Status Page', 'Terms of Service', 'Privacy Policy'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} GSM Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Terms', 'Privacy', 'Cookies'].map((item, i) => (
              <a key={i} href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

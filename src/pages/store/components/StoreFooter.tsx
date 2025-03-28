
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, GitHub, Mail, Phone } from 'lucide-react';

const StoreFooter = () => {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">GSM Store</h3>
            <p className="text-sm text-muted-foreground mb-4">
              All-in-one platform for GSM unlocking services, providing the most reliable solutions for all your device needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/store" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/store/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/store/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/store/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/store/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/store/services/imei" className="text-sm text-muted-foreground hover:text-primary transition-colors">IMEI Unlocking</Link></li>
              <li><Link to="/store/services/server" className="text-sm text-muted-foreground hover:text-primary transition-colors">Server Unlocks</Link></li>
              <li><Link to="/store/services/remote" className="text-sm text-muted-foreground hover:text-primary transition-colors">Remote Tools</Link></li>
              <li><Link to="/store/services/files" className="text-sm text-muted-foreground hover:text-primary transition-colors">File Downloads</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@gsmstore.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} GSM Store. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/store/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/store/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StoreFooter;

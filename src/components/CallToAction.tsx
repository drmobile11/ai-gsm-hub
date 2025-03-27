
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-primary/5 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto glass-dark rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your GSM Business?</h2>
              <p className="text-muted-foreground mb-6">
                Get started with our AI-powered GSM service platform and take your business to the next level.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "All-in-one GSM service automation",
                  "AI-powered website generator",
                  "Multi-API integration with top providers",
                  "Secure payment and credit system"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base py-6 px-8 w-full md:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Image */}
            <div className="bg-gradient-to-br from-accent to-primary p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block mb-4 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Launch Special Offer</h3>
                <p className="text-white/80 mb-6">
                  Get 30% off your first month and free website setup
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="bg-white text-accent font-bold text-2xl p-3 rounded-md">
                    USE CODE: <span className="text-primary">GSM30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

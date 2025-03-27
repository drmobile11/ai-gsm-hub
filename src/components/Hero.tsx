
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Server, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="absolute inset-0 bg-grid -z-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-accent/5 rounded-full filter blur-3xl animate-float opacity-70 -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-float animation-delay-1000 opacity-70 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 animate-slide-in">
              AI-Powered GSM Service Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              Next-Gen <span className="gradient-text">GSM Unlocking</span> & Service Automation
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Revolutionize your GSM services with our AI-powered platform offering automatic IMEI unlocking, API integration, and custom website generation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base py-6 px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-base py-6 px-8 border-gray-300">
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 mt-12 gap-4">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">500+</p>
                <p className="text-sm text-muted-foreground">GSM Services</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">10k+</p>
                <p className="text-sm text-muted-foreground">Daily Unlocks</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">99.9%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="w-full lg:w-1/2 relative" ref={heroRef}>
            <div className="relative mx-auto w-full max-w-md">
              {/* Main dashboard mockup */}
              <div className="w-full h-[480px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-slide-up">
                <div className="h-12 bg-accent/5 flex items-center px-4 border-b border-gray-100">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="w-full h-10 bg-gray-100 rounded-md mb-4"></div>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-accent/10 h-28 rounded-lg flex flex-col items-center justify-center">
                      <Smartphone className="h-8 w-8 text-accent mb-2" />
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-primary/10 h-28 rounded-lg flex flex-col items-center justify-center">
                      <Server className="h-8 w-8 text-primary mb-2" />
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-purple-100 h-28 rounded-lg flex flex-col items-center justify-center">
                      <Zap className="h-8 w-8 text-purple-500 mb-2" />
                      <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="w-full h-40 bg-gray-100 rounded-md mb-4"></div>
                  <div className="flex gap-4">
                    <div className="w-1/2 h-32 bg-gray-100 rounded-md"></div>
                    <div className="w-1/2 h-32 bg-gray-100 rounded-md"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating card 1 */}
              <div className="absolute -top-6 -right-6 w-36 h-24 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-3 border border-gray-100 animate-float">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                <div className="w-2/3 h-2 bg-gray-100 rounded-full mt-2"></div>
              </div>
              
              {/* Floating card 2 */}
              <div className="absolute -bottom-6 -left-6 w-36 h-24 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-3 border border-gray-100 animate-float animation-delay-500">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                <div className="w-2/3 h-2 bg-gray-100 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

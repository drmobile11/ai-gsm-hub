
import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Server, Zap, FileDown, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const StoreFront = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Unlock</span> the Full Potential of Your Device
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional GSM unlocking services for all major brands and models. Fast, reliable, and secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  Browse Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="hover-lift">
                  How It Works
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative animate-slide-in">
              <div className="relative mx-auto w-full max-w-md">
                <div className="glass-dark rounded-2xl shadow-xl overflow-hidden border border-white/10 p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/20 rounded-lg p-4 flex flex-col items-center justify-center hover-lift">
                      <Smartphone className="h-10 w-10 text-primary mb-3" />
                      <span className="text-sm font-medium">IMEI Unlock</span>
                    </div>
                    <div className="bg-accent/20 rounded-lg p-4 flex flex-col items-center justify-center hover-lift">
                      <Server className="h-10 w-10 text-accent mb-3" />
                      <span className="text-sm font-medium">Server Tools</span>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover-lift">
                      <Zap className="h-10 w-10 text-purple-500 mb-3" />
                      <span className="text-sm font-medium">Remote Unlock</span>
                    </div>
                    <div className="bg-green-500/20 rounded-lg p-4 flex flex-col items-center justify-center hover-lift">
                      <FileDown className="h-10 w-10 text-green-500 mb-3" />
                      <span className="text-sm font-medium">File Services</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    Get Started Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of GSM unlocking services to meet all your device needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Smartphone, 
                title: "IMEI Unlocking", 
                description: "Permanent factory unlock for all major carriers and devices.",
                color: "primary"
              },
              { 
                icon: Server, 
                title: "Server Unlocks", 
                description: "Premium server-based solutions for advanced unlocking.",
                color: "accent"
              },
              { 
                icon: Zap, 
                title: "Remote Services", 
                description: "Remote unlocking and repair services without shipping.",
                color: "purple-500"
              },
              { 
                icon: FileDown, 
                title: "File Downloads", 
                description: "Firmware, software and unlock files for DIY solutions.",
                color: "green-500"
              }
            ].map((service, index) => (
              <Card key={index} className="glass-dark border-white/10 hover-lift transition-all">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full bg-${service.color}/20 flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 text-${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={`/store/services/${service.title.toLowerCase().replace(" ", "-")}`} className="text-primary flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="glass-dark rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your GSM Business?</h2>
              <p className="text-muted-foreground mb-6">Get started with our GSM service platform and take your business to the next level.</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>All-in-one GSM service automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Integrated payment and credit system</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multi-API integration with top providers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 customer support included</span>
                </li>
              </ul>
              
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-base py-6 px-8 w-full md:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoreFront;

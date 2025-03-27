
import React from 'react';
import { 
  Code, 
  Zap, 
  Globe, 
  Bot, 
  BarChart, 
  Layers, 
  Shield, 
  Smartphone, 
  Server, 
  Download, 
  CreditCard, 
  Settings 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            Enterprise-Grade Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">AI-Powered GSM Platform</h2>
          <p className="text-lg text-muted-foreground">
            Complete automation solution for IMEI unlocking, server unlocks, and remote service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="glass-dark rounded-2xl border-white/10 p-2 w-full max-w-lg mx-auto">
                <div className="h-10 bg-background/30 rounded-lg mb-3 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <div className="ml-2 text-xs text-gray-400">AI Service Automation</div>
                </div>
                
                <div className="p-3 bg-background/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-dark rounded-md p-3 border-white/10">
                      <div className="h-4 w-16 bg-accent/30 rounded mb-2"></div>
                      <div className="h-3 w-full bg-white/5 rounded mb-1"></div>
                      <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                    </div>
                    <div className="glass-dark rounded-md p-3 border-white/10">
                      <div className="h-4 w-16 bg-primary/30 rounded mb-2"></div>
                      <div className="h-3 w-full bg-white/5 rounded mb-1"></div>
                      <div className="h-3 w-3/4 bg-white/5 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="mt-3 glass-dark rounded-md p-4 border-white/10">
                    <div className="flex items-center mb-3">
                      <div className="h-4 w-4 rounded-full bg-primary mr-2"></div>
                      <div className="h-3 w-24 bg-white/5 rounded"></div>
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded mb-1"></div>
                    <div className="h-3 w-full bg-white/5 rounded mb-1"></div>
                    <div className="h-3 w-2/3 bg-white/5 rounded"></div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 bg-accent/20 rounded"></div>
                      <div className="h-10 bg-primary/20 rounded"></div>
                      <div className="h-10 bg-purple-500/20 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="h-8 bg-accent rounded-lg mt-3 flex items-center justify-center">
                  <div className="text-xs text-white font-medium">Process IMEI Request</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full animate-pulse-subtle"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full animate-pulse-subtle"></div>
            </div>
          </div>
          
          <div className="space-y-10 animate-slide-in">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold">IMEI Unlocking Automation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Fully automated IMEI validation, processing and status tracking. Integrates with 
                all major GSM service providers through multi-API sync.
              </p>
              <ul className="space-y-2">
                {["Automatic IMEI validation", "API provider sync", "Real-time status updates"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold">AI-Powered Service Selection</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our AI system automatically selects the optimal service provider based on success 
                rate, processing time, and price, ensuring the best results for each request.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Server className="h-5 w-5" />,
              title: "Server-Based Unlocks",
              description: "Connect to multiple GSM servers for network unlocking with auto-selection of fastest providers."
            },
            {
              icon: <Download className="h-5 w-5" />,
              title: "Remote Unlocking Tools",
              description: "Software-based remote solutions for device unlocking with secure download links and verification."
            },
            {
              icon: <Code className="h-5 w-5" />,
              title: "Multi-API Integration",
              description: "Seamless integration with Dhru Fusion, GSMSync, UnlockBase, and custom REST APIs through a unified interface."
            },
            {
              icon: <CreditCard className="h-5 w-5" />,
              title: "Payment System",
              description: "Integrated wallet with credit system, supporting multiple payment gateways including PayPal, Stripe and crypto."
            },
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Multi-tier Reseller System",
              description: "Complete white-label solution with custom pricing, branding and domain for unlimited resellers."
            },
            {
              icon: <Settings className="h-5 w-5" />,
              title: "AI Website Generator",
              description: "Create custom GSM service websites for resellers with drag-and-drop AI builder and service auto-sync."
            }
          ].map((feature, i) => (
            <div key={i} className="glass-dark p-6 rounded-xl border-white/10 hover-lift">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

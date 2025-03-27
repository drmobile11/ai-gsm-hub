
import React from 'react';
import { Code, Zap, Globe, Bot, BarChart, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            Advanced Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered GSM Platform</h2>
          <p className="text-lg text-muted-foreground">
            Leverage the power of artificial intelligence for your GSM service business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-2 w-full max-w-lg mx-auto">
                <div className="h-10 bg-gray-50 rounded-lg mb-3 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                  <div className="ml-2 text-xs text-gray-400">AI Website Generator</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-md p-3 border border-gray-100">
                      <div className="h-4 w-16 bg-accent/20 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-100 rounded mb-1"></div>
                      <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white rounded-md p-3 border border-gray-100">
                      <div className="h-4 w-16 bg-primary/20 rounded mb-2"></div>
                      <div className="h-3 w-full bg-gray-100 rounded mb-1"></div>
                      <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-white rounded-md p-4 border border-gray-100">
                    <div className="flex items-center mb-3">
                      <div className="h-4 w-4 rounded-full bg-primary mr-2"></div>
                      <div className="h-3 w-24 bg-gray-100 rounded"></div>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded mb-1"></div>
                    <div className="h-3 w-full bg-gray-100 rounded mb-1"></div>
                    <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
                    
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-10 bg-accent/10 rounded"></div>
                      <div className="h-10 bg-primary/10 rounded"></div>
                      <div className="h-10 bg-purple-100 rounded"></div>
                    </div>
                  </div>
                </div>
                
                <div className="h-8 bg-accent rounded-lg mt-3 flex items-center justify-center">
                  <div className="text-xs text-white font-medium">Generate Website</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/5 rounded-full animate-pulse-subtle"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full animate-pulse-subtle"></div>
            </div>
          </div>
          
          <div className="space-y-10 animate-slide-in">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold">AI Website Generator</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Create custom GSM service websites for resellers with our drag-and-drop AI builder. 
                Automatically sync GSM services, customize branding, and deploy in minutes.
              </p>
              <ul className="space-y-2">
                {["Drag-and-drop customization", "GSM service auto-sync", "Custom domain & branding"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold">AI-Powered Service Selection</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our AI system automatically selects the optimal service provider based on success 
                rate, processing time, and price, ensuring the best results for each unlock request.
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
              icon: <Code className="h-5 w-5" />,
              title: "Multi-API Integration",
              description: "Connect to all major GSM service providers through a single unified API interface."
            },
            {
              icon: <Zap className="h-5 w-5" />,
              title: "Automated Processing",
              description: "Fully automated order processing, status updates, and notification system."
            },
            {
              icon: <BarChart className="h-5 w-5" />,
              title: "Advanced Analytics",
              description: "Detailed analytics and reporting on service performance and revenue."
            },
            {
              icon: <Shield className="h-5 w-5" />,
              title: "Secure Transactions",
              description: "End-to-end encrypted processing with secure payment handling."
            },
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Multi-tier Reseller System",
              description: "Support for unlimited reseller accounts with custom pricing and access."
            },
            {
              icon: <Globe className="h-5 w-5" />,
              title: "White Label Solutions",
              description: "Complete white label platform with your own branding and domain."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover-lift">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
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

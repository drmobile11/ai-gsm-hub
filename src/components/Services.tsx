
import React from 'react';
import { Smartphone, Server, Laptop, Code, Shield, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  delay: number;
}

const ServiceCard = ({ title, description, icon: Icon, color, delay }: ServiceCardProps) => {
  return (
    <div 
      className="glass-dark rounded-2xl p-6 hover-lift border-white/10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 bg-opacity-20"
        style={{ backgroundColor: `rgba(var(--${color}-rgb), 0.2)` }}>
        <Icon className="h-6 w-6" style={{ color: `hsl(var(--${color}))` }} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "IMEI Unlocking",
      description: "Automatic IMEI validation and unlocking with real-time status updates.",
      icon: Smartphone,
      color: "primary",
      delay: 100
    },
    {
      title: "Server Unlocks",
      description: "Connect to multiple GSM servers for fast and efficient network unlocking.",
      icon: Server,
      color: "accent",
      delay: 200
    },
    {
      title: "Remote Unlocking",
      description: "Software-based remote solutions for device unlocking and firmware updates.",
      icon: Laptop,
      color: "primary",
      delay: 300
    },
    {
      title: "API Integration",
      description: "Integrate with popular GSM reseller APIs like Dhru Fusion and UnlockBase.",
      icon: Code,
      color: "accent",
      delay: 400
    },
    {
      title: "Secure Processing",
      description: "End-to-end encrypted processing of all unlock requests and transactions.",
      icon: Shield,
      color: "primary",
      delay: 500
    },
    {
      title: "Payment System",
      description: "Built-in credit system with support for multiple payment gateways.",
      icon: CreditCard,
      color: "accent",
      delay: 600
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Comprehensive GSM Services</h2>
          <p className="text-lg text-muted-foreground">
            Our platform offers a complete suite of GSM unlocking and service management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const StoreFront = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
          Professional Mobile Unlocking Services
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Fast, reliable and secure phone unlocking solutions for all major brands and carriers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "IMEI Unlocking",
              description: "Permanent factory unlocking via IMEI for all phone brands.",
              icon: "📱",
              link: "/services/imei"
            },
            {
              title: "Server Unlocks",
              description: "Server-based unlocking solutions for secure device access.",
              icon: "🖥️",
              link: "/services/server"
            },
            {
              title: "Remote Unlocking",
              description: "Remote services for iOS and Android devices without shipping.",
              icon: "⚡",
              link: "/services/remote"
            },
            {
              title: "File Downloads",
              description: "Firmware, software, and tools for device maintenance.",
              icon: "📂",
              link: "/services/files"
            }
          ].map((service, index) => (
            <Link to={service.link} key={index} className="bg-background/50 border border-border/40 p-6 rounded-xl hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <span className="text-primary flex items-center text-sm">
                Learn more
                <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose GSM Hub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Round-the-clock customer service to assist you anytime."
              },
              {
                title: "100% Success Rate",
                description: "Guaranteed results or your money back."
              },
              {
                title: "Fast Turnaround",
                description: "Quick processing times for all unlocking services."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to unlock your device?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of satisfied customers who have trusted GSM Hub for their unlocking needs.
        </p>
        <Link to="/user/dashboard">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Go to Dashboard
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default StoreFront;

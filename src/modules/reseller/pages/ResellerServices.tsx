
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Smartphone, Server, Zap, FileDown, InfoIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ResellerServices = () => {
  // Mock service categories
  const serviceCategories = [
    {
      title: 'IMEI Unlocking',
      icon: Smartphone,
      services: [
        { 
          name: 'iPhone Factory Unlock', 
          description: 'Permanent IMEI-based factory unlock for all iPhone models',
          regularPrice: 49.99,
          resellerPrice: 39.99,
          discount: '20%',
          eta: '24-48 hours'
        },
        { 
          name: 'Samsung Network Unlock', 
          description: 'Official carrier unlock for all Samsung devices',
          regularPrice: 29.99,
          resellerPrice: 25.49,
          discount: '15%',
          eta: '1-3 days'
        },
        { 
          name: 'All Carriers Unlock Service', 
          description: 'Full unlock for devices from any carrier worldwide',
          regularPrice: 59.99,
          resellerPrice: 50.99,
          discount: '15%',
          eta: '1-5 days'
        },
      ]
    },
    {
      title: 'Server Unlocks',
      icon: Server,
      services: [
        { 
          name: 'iCloud Activation Lock Removal', 
          description: 'Remove iCloud activation lock from Apple devices',
          regularPrice: 89.99,
          resellerPrice: 76.49,
          discount: '15%',
          eta: '1-2 days'
        },
        { 
          name: 'Android FRP Bypass', 
          description: 'Remove Google Factory Reset Protection',
          regularPrice: 39.99,
          resellerPrice: 33.99,
          discount: '15%',
          eta: '12-24 hours'
        },
      ]
    },
    {
      title: 'Remote Unlocking',
      icon: Zap,
      services: [
        { 
          name: 'Remote Screen Unlock', 
          description: 'Unlock phone screens remotely without data loss',
          regularPrice: 29.99,
          resellerPrice: 25.49,
          discount: '15%',
          eta: '30-60 minutes'
        },
        { 
          name: 'MDM Bypass', 
          description: 'Remove Mobile Device Management restrictions',
          regularPrice: 99.99,
          resellerPrice: 84.99,
          discount: '15%',
          eta: '1-3 days'
        },
      ]
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Services</h1>
          <p className="text-sm text-muted-foreground">Browse available unlocking services</p>
        </div>
      </div>

      <Card className="glass-dark border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Search Services</CardTitle>
          <CardDescription>
            Find services by name or device
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
              className="pl-10 bg-secondary/20 border-white/10"
            />
          </div>
        </CardContent>
      </Card>

      {serviceCategories.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="glass-dark border-white/10 mb-8">
          <CardHeader className="flex flex-row items-center gap-2">
            <category.icon className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>
                Reseller services with special discounts
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex} 
                  className="border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-all hover:bg-white/5"
                >
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{service.name}</h3>
                        <Badge variant="secondary">{service.discount} off</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                      <div className="text-sm text-muted-foreground mt-2">
                        Estimated time: {service.eta}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Regular price</div>
                        <div className="line-through">${service.regularPrice.toFixed(2)}</div>
                        <div className="text-lg font-bold">${service.resellerPrice.toFixed(2)}</div>
                      </div>
                      <Button>Order Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="glass-dark border-white/10">
        <CardHeader className="flex flex-row items-center gap-2">
          <InfoIcon className="h-5 w-5 text-primary" />
          <CardTitle>Bulk Order Discounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="mb-2">Get additional discounts on bulk orders:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>5-9 devices: Additional 5% off</li>
              <li>10-24 devices: Additional 10% off</li>
              <li>25+ devices: Additional 15% off</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact for Custom Quote
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResellerServices;

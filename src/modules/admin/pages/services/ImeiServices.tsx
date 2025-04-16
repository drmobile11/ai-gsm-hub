
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Smartphone, InfoIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ImeiServices = () => {
  // Mock IMEI unlocking services
  const imeiServices = [
    { 
      name: 'iPhone Factory Unlock', 
      description: 'Permanent IMEI-based factory unlock for all iPhone models',
      regularPrice: 39.99,
      eta: '24-48 hours',
      success: '98%'
    },
    { 
      name: 'Samsung Network Unlock', 
      description: 'Official carrier unlock for all Samsung devices',
      regularPrice: 29.99,
      eta: '1-3 days',
      success: '95%'
    },
    { 
      name: 'All Carriers Unlock Service', 
      description: 'Full unlock for devices from any carrier worldwide',
      regularPrice: 49.99,
      eta: '1-5 days',
      success: '90%'
    },
    { 
      name: 'Premium Express Unlock', 
      description: 'Priority processing for urgent unlocking needs',
      regularPrice: 69.99,
      eta: '3-12 hours',
      success: '92%'
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">IMEI Unlocking Services</h1>
          <p className="text-sm text-muted-foreground">Manage your IMEI-based unlocking services</p>
        </div>
        <Button className="mt-4 md:mt-0">
          Add New Service
        </Button>
      </div>

      <Card className="glass-dark border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Search Services</CardTitle>
          <CardDescription>
            Find specific IMEI services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or description..."
              className="pl-10 bg-secondary/20 border-white/10"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="glass-dark border-white/10 mb-8">
        <CardHeader className="flex flex-row items-center gap-2">
          <Smartphone className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>IMEI Unlocking Services</CardTitle>
            <CardDescription>
              Services for carrier and network unlocks
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {imeiServices.map((service, index) => (
              <div 
                key={index} 
                className="border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-all hover:bg-white/5"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{service.name}</h3>
                      <Badge variant="secondary">Success: {service.success}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                    <div className="text-sm text-muted-foreground mt-2">
                      Estimated time: {service.eta}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Price</div>
                      <div className="text-lg font-bold">${service.regularPrice.toFixed(2)}</div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-dark border-white/10">
        <CardHeader className="flex flex-row items-center gap-2">
          <InfoIcon className="h-5 w-5 text-primary" />
          <CardTitle>Service Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="mb-2">Overall service statistics:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Average success rate: 94%</li>
              <li>Average processing time: 36 hours</li>
              <li>Customer satisfaction: 4.7/5</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full sm:w-auto">
                View Detailed Reports
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImeiServices;


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { getServices, Service } from '@/services/api/storeApi';
import { 
  Smartphone, 
  Server, 
  Wifi, 
  FileText, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const StoreServices = () => {
  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: getServices
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'imei':
        return <Smartphone className="h-5 w-5" />;
      case 'server':
        return <Server className="h-5 w-5" />;
      case 'remote':
        return <Wifi className="h-5 w-5" />;
      case 'file':
        return <FileText className="h-5 w-5" />;
      default:
        return <Smartphone className="h-5 w-5" />;
    }
  };

  const filterServicesByCategory = (category: string) => {
    if (!services) return [];
    return services.filter(service => service.category === category);
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Unlock Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive range of unlocking services for all device types and carriers worldwide.
          Fast, reliable and secure.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-5 mb-8">
          <TabsTrigger value="all" className="px-3 py-2">All</TabsTrigger>
          <TabsTrigger value="imei" className="px-3 py-2 flex items-center gap-1">
            <Smartphone className="h-4 w-4" />
            <span className="hidden sm:inline">IMEI</span>
          </TabsTrigger>
          <TabsTrigger value="server" className="px-3 py-2 flex items-center gap-1">
            <Server className="h-4 w-4" />
            <span className="hidden sm:inline">Server</span>
          </TabsTrigger>
          <TabsTrigger value="remote" className="px-3 py-2 flex items-center gap-1">
            <Wifi className="h-4 w-4" />
            <span className="hidden sm:inline">Remote</span>
          </TabsTrigger>
          <TabsTrigger value="file" className="px-3 py-2 flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">Files</span>
          </TabsTrigger>
        </TabsList>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-destructive">Error loading services. Please try again later.</p>
          </div>
        ) : (
          <>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services?.map((service: Service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="imei">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServicesByCategory('imei').map((service: Service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="server">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServicesByCategory('server').map((service: Service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="remote">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServicesByCategory('remote').map((service: Service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="file">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterServicesByCategory('file').map((service: Service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'imei':
        return <Smartphone className="h-5 w-5" />;
      case 'server':
        return <Server className="h-5 w-5" />;
      case 'remote':
        return <Wifi className="h-5 w-5" />;
      case 'file':
        return <FileText className="h-5 w-5" />;
      default:
        return <Smartphone className="h-5 w-5" />;
    }
  };

  return (
    <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift overflow-hidden">
      {service.popular && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-tl-none rounded-tr-none rounded-br-none bg-accent text-white">
            Popular
          </Badge>
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-primary/10 text-primary">
              {getCategoryIcon(service.category)}
            </div>
            <div>
              <CardTitle className="text-md md:text-lg">{service.name}</CardTitle>
              <CardDescription className="capitalize">{service.category} Unlock</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{service.processingTime}</span>
          </div>
          
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            <span>{service.success_rate}% Success</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {service.compatibility.slice(0, 3).map((device, index) => (
            <Badge key={index} variant="outline" className="bg-white/5">
              {device}
            </Badge>
          ))}
          {service.compatibility.length > 3 && (
            <Badge variant="outline" className="bg-white/5">
              +{service.compatibility.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t border-white/5 pt-4">
        <div>
          {service.discountPrice ? (
            <div className="flex flex-col">
              <span className="text-xl font-bold">${service.discountPrice.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground line-through">${service.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-xl font-bold">${service.price.toFixed(2)}</span>
          )}
        </div>
        
        <Link to={`/store/services/${service.id}`}>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StoreServices;

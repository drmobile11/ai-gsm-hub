
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Smartphone, 
  Server, 
  Wifi, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Info, 
  CheckCircle2, 
  HelpCircle,
  ShoppingCart
} from 'lucide-react';
import { getServiceById } from '@/services/api/storeApi';
import { useToast } from '@/hooks/use-toast';

const StoreServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orderDetails, setOrderDetails] = useState({
    imei: '',
    carrier: '',
    notes: ''
  });
  
  const { data: service, isLoading, error } = useQuery({
    queryKey: ['service', serviceId],
    queryFn: () => getServiceById(serviceId || ''),
    enabled: !!serviceId
  });

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'imei':
        return <Smartphone className="h-6 w-6" />;
      case 'server':
        return <Server className="h-6 w-6" />;
      case 'remote':
        return <Wifi className="h-6 w-6" />;
      case 'file':
        return <FileText className="h-6 w-6" />;
      default:
        return <Smartphone className="h-6 w-6" />;
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (service?.category === 'imei' && !orderDetails.imei) {
      toast({
        variant: "destructive",
        title: "IMEI Required",
        description: "Please enter a valid IMEI number to continue.",
      });
      return;
    }
    
    // Simulating adding to cart
    toast({
      title: "Service Added",
      description: `${service?.name} has been added to your order.`,
    });
    
    // In a real application, you would add to cart here
    // For demo purposes, we'll navigate to checkout
    navigate('/store/checkout');
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 md:p-6 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="container mx-auto p-4 md:p-6 text-center">
        <h1 className="text-2xl font-bold text-destructive">Service Not Found</h1>
        <p className="text-muted-foreground mt-2">
          The requested service could not be found or is no longer available.
        </p>
        <Button 
          className="mt-6" 
          variant="outline"
          onClick={() => navigate('/store/services')}
        >
          Browse All Services
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {getCategoryIcon(service.category)}
                </div>
                <div>
                  <Badge className="capitalize mb-1">
                    {service.category} Unlock
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl">{service.name}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center">
                  <Clock className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Processing Time</span>
                  <span className="font-medium">{service.processingTime}</span>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center">
                  <ShieldCheck className="h-6 w-6 text-green-500 mb-2" />
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="font-medium">{service.success_rate}%</span>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center text-center">
                  <CheckCircle2 className="h-6 w-6 text-accent mb-2" />
                  <span className="text-sm text-muted-foreground">Compatibility</span>
                  <span className="font-medium">{service.compatibility.length} Devices</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Compatible Devices</h3>
                <div className="flex flex-wrap gap-2">
                  {service.compatibility.map((device, index) => (
                    <Badge key={index} variant="outline" className="bg-white/5">
                      {device}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-lg">How It Works</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Our {service.category} unlock service provides permanent unlocking for your device following these simple steps:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Submit your order with the required information (IMEI, device model, etc.)</li>
                        <li>Our system will process your request and connect to the appropriate database</li>
                        <li>You'll receive confirmation once the unlock is complete</li>
                        <li>Follow the provided instructions to complete the unlock on your device</li>
                      </ol>
                      <p className="text-sm italic">Note: Processing time varies depending on the carrier and device model.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-lg">Frequently Asked Questions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-primary" />
                          Is this a permanent unlock?
                        </h4>
                        <p className="text-muted-foreground ml-6">Yes, our unlocks are permanent and survive system updates and factory resets.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-primary" />
                          What information do I need to provide?
                        </h4>
                        <p className="text-muted-foreground ml-6">
                          For most services, you'll need to provide your device's IMEI number and current carrier.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-primary" />
                          Do you offer refunds if the unlock fails?
                        </h4>
                        <p className="text-muted-foreground ml-6">
                          Yes, we offer a 100% money-back guarantee if we're unable to unlock your device.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all sticky top-20">
            <CardHeader>
              <CardTitle>Order This Service</CardTitle>
              <CardDescription>
                Complete the information below to place your order
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {service.category === 'imei' && (
                  <div className="space-y-2">
                    <Label htmlFor="imei">IMEI Number</Label>
                    <div className="relative">
                      <Input
                        id="imei"
                        name="imei"
                        placeholder="Enter 15-digit IMEI"
                        className="bg-secondary/20 border-white/10"
                        value={orderDetails.imei}
                        onChange={handleInputChange}
                        maxLength={15}
                      />
                      <div className="absolute right-3 top-3">
                        <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Dial *#06# on your phone to get the IMEI number
                    </p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="carrier">Current Carrier/Network</Label>
                  <Input
                    id="carrier"
                    name="carrier"
                    placeholder="e.g. AT&T, Verizon, T-Mobile"
                    className="bg-secondary/20 border-white/10"
                    value={orderDetails.carrier}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any specific instructions or details"
                    className="bg-secondary/20 border-white/10 min-h-[80px]"
                    value={orderDetails.notes}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-muted-foreground">Service Price:</span>
                    {service.discountPrice ? (
                      <div className="text-right">
                        <span className="text-xl font-bold">${service.discountPrice.toFixed(2)}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ${service.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold">${service.price.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Order
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter>
              <div className="w-full flex items-center justify-center text-center text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                <span>100% Secure Payment & Money-Back Guarantee</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StoreServiceDetail;

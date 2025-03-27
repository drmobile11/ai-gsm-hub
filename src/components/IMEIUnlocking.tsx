
import React, { useState } from 'react';
import { Smartphone, ArrowRight, Check, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const IMEIUnlocking = () => {
  const [imei, setImei] = useState('');
  const [model, setModel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const validateIMEI = () => {
    if (!imei || imei.length < 15) {
      toast.error('Please enter a valid IMEI number');
      return;
    }

    setIsLoading(true);
    
    // Simulate API validation
    setTimeout(() => {
      setIsLoading(false);
      setIsValidated(true);
      setModel('Samsung Galaxy S21');
      toast.success('IMEI validated successfully');
    }, 1500);
  };

  const handleSubmitOrder = () => {
    if (!selectedService) {
      toast.error('Please select a service');
      return;
    }

    setIsLoading(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Order submitted successfully');
      // Reset form
      setImei('');
      setModel('');
      setIsValidated(false);
      setSelectedService(null);
    }, 2000);
  };

  const services = [
    { id: 'network-unlock', name: 'Network Unlock', price: '$15.99', time: '24-48 hours', description: 'Unlock your device from current network carrier' },
    { id: 'icloud-unlock', name: 'iCloud Unlock', price: '$45.99', time: '1-3 days', description: 'Remove iCloud activation lock' },
    { id: 'frp-bypass', name: 'FRP Bypass', price: '$12.50', time: '24 hours', description: 'Bypass Factory Reset Protection' },
  ];

  return (
    <section id="imei-unlocking" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            IMEI Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">IMEI Unlocking Automation</h2>
          <p className="text-lg text-muted-foreground">
            Automated IMEI validation and unlocking with real-time status updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-dark rounded-2xl p-6 border-white/10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Smartphone className="mr-2 h-5 w-5 text-accent" />
                IMEI Verification
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="imei" className="block text-sm font-medium text-white/70 mb-1">
                    IMEI Number
                  </label>
                  <input
                    id="imei"
                    type="text"
                    value={imei}
                    onChange={(e) => setImei(e.target.value)}
                    className="w-full bg-background/20 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Enter 15-17 digit IMEI"
                    maxLength={17}
                    disabled={isValidated}
                  />
                  <p className="text-xs text-white/50 mt-1">
                    Find your IMEI by dialing *#06# on your device
                  </p>
                </div>
                
                {isValidated && (
                  <div className="animate-fade-in">
                    <label className="block text-sm font-medium text-white/70 mb-1">
                      Device Model
                    </label>
                    <div className="flex items-center bg-background/20 border border-white/10 rounded-md px-4 py-2">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-white">{model}</span>
                    </div>
                  </div>
                )}
                
                {!isValidated ? (
                  <Button 
                    onClick={validateIMEI} 
                    disabled={isLoading || imei.length < 15} 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>Validate IMEI</>
                    )}
                  </Button>
                ) : (
                  <Button 
                    onClick={() => setIsValidated(false)} 
                    variant="outline" 
                    className="w-full border-white/10 hover:bg-white/5"
                  >
                    Re-enter IMEI
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-dark rounded-2xl p-6 border-white/10 h-full">
              <h3 className="text-xl font-semibold mb-4">Available Services</h3>
              
              {!isValidated ? (
                <div className="flex items-center justify-center h-64 text-white/50">
                  <p>Please validate your IMEI first</p>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  {services.map((service) => (
                    <div 
                      key={service.id} 
                      className={cn(
                        "border rounded-xl p-4 transition-all cursor-pointer",
                        selectedService === service.id 
                          ? "border-accent bg-accent/10" 
                          : "border-white/10 hover:border-white/20"
                      )}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-white">{service.name}</h4>
                        <div className="text-lg font-semibold text-accent">{service.price}</div>
                      </div>
                      <p className="text-sm text-white/70 mt-1">{service.description}</p>
                      <div className="flex items-center mt-2 text-xs text-white/50">
                        <span>Processing time: {service.time}</span>
                        <div className="ml-auto">
                          {selectedService === service.id && (
                            <Check className="h-4 w-4 text-accent" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    onClick={handleSubmitOrder} 
                    disabled={isLoading || !selectedService} 
                    className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Submit Order</>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IMEIUnlocking;

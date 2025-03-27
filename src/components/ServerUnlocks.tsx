
import React, { useState } from 'react';
import { Server, Smartphone, Globe, Shield, ArrowRight, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ServerUnlocks = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<string | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const networks = [
    { id: 'at&t', name: 'AT&T', icon: Globe },
    { id: 'tmobile', name: 'T-Mobile', icon: Globe },
    { id: 'verizon', name: 'Verizon', icon: Globe },
    { id: 'sprint', name: 'Sprint', icon: Globe },
    { id: 'vodafone', name: 'Vodafone', icon: Globe },
    { id: 'orange', name: 'Orange', icon: Globe },
  ];
  
  const devices = [
    { id: 'iphone', name: 'iPhone', models: ['iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15'] },
    { id: 'samsung', name: 'Samsung', models: ['Galaxy S21', 'Galaxy S22', 'Galaxy S23', 'Galaxy Note'] },
    { id: 'huawei', name: 'Huawei', models: ['P40', 'P30', 'Mate 40', 'Nova'] },
    { id: 'motorola', name: 'Motorola', models: ['Edge', 'Razr', 'G', 'One'] },
  ];
  
  const handleSubmit = () => {
    if (!selectedNetwork || !selectedDevice) {
      toast.error('Please select both network and device');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Server unlock request submitted successfully');
      setSelectedNetwork(null);
      setSelectedDevice(null);
    }, 2000);
  };
  
  return (
    <section id="server-unlocks" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            Server Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Server-Based Unlocks</h2>
          <p className="text-lg text-muted-foreground">
            Connect to multiple GSM servers for fast and efficient network unlocking.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-2xl p-8 border-white/10">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Server className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Network Server Unlock</h3>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium mb-4">Select Network Carrier</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {networks.map((network) => {
                  const Icon = network.icon;
                  return (
                    <div
                      key={network.id}
                      className={cn(
                        "border rounded-xl p-4 flex items-center space-x-3 cursor-pointer transition-all",
                        selectedNetwork === network.id 
                          ? "border-primary bg-primary/10" 
                          : "border-white/10 hover:border-white/20"
                      )}
                      onClick={() => setSelectedNetwork(network.id)}
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span>{network.name}</span>
                      {selectedNetwork === network.id && (
                        <Check className="h-4 w-4 text-primary ml-auto" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium mb-4">Select Device</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {devices.map((device) => (
                  <div
                    key={device.id}
                    className={cn(
                      "border rounded-xl p-4 cursor-pointer transition-all",
                      selectedDevice === device.id 
                        ? "border-primary bg-primary/10" 
                        : "border-white/10 hover:border-white/20"
                    )}
                    onClick={() => setSelectedDevice(device.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">{device.name}</h5>
                      {selectedDevice === device.id && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {device.models.map((model, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl mb-6">
              <div>
                <p className="text-sm text-white/70">Estimated Processing Time</p>
                <p className="font-medium">24-48 hours</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/70">Price</p>
                <p className="text-xl font-semibold text-primary">$14.99</p>
              </div>
            </div>
            
            <Button 
              onClick={handleSubmit} 
              disabled={isLoading || !selectedNetwork || !selectedDevice} 
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity py-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  Process Server Unlock
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerUnlocks;

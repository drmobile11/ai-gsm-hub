
import React, { useState } from 'react';
import { Laptop, Download, Loader2, Check, Shield, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const RemoteUnlocking = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [deviceSelected, setDeviceSelected] = useState<string | null>(null);
  const [toolSelected, setToolSelected] = useState<string | null>(null);
  
  const devices = [
    { id: 'samsung', name: 'Samsung', supported: true },
    { id: 'huawei', name: 'Huawei', supported: true },
    { id: 'xiaomi', name: 'Xiaomi', supported: true },
    { id: 'oppo', name: 'OPPO', supported: true },
    { id: 'vivo', name: 'Vivo', supported: true },
    { id: 'iphone', name: 'iPhone', supported: false },
  ];
  
  const tools = [
    { 
      id: 'frp-bypass', 
      name: 'FRP Bypass Tool', 
      description: 'Remove Factory Reset Protection lock from your device',
      fileSize: '28.4 MB',
      price: '$12.99'
    },
    { 
      id: 'network-unlock', 
      name: 'Network Unlock Tool', 
      description: 'Universal network unlock software for Android devices',
      fileSize: '45.7 MB',
      price: '$19.99'
    },
    { 
      id: 'pattern-unlock', 
      name: 'Pattern/PIN Unlock', 
      description: 'Remove screen lock without data loss',
      fileSize: '32.1 MB',
      price: '$14.99'
    },
  ];
  
  const handleDeviceSelect = (id: string) => {
    const device = devices.find(d => d.id === id);
    if (device && !device.supported) {
      toast.error(`${device.name} is not supported for remote unlocking`);
      return;
    }
    setDeviceSelected(id);
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };
  
  const handleToolSelect = (id: string) => {
    setToolSelected(id);
  };
  
  const handleDownload = () => {
    if (!toolSelected) return;
    
    setIsLoading(true);
    
    // Simulate download
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Download link has been sent to your email');
      setStep(3);
    }, 2000);
  };
  
  const startOver = () => {
    setStep(1);
    setDeviceSelected(null);
    setToolSelected(null);
  };
  
  return (
    <section id="remote-unlocking" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            Remote Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Remote Unlocking Tools</h2>
          <p className="text-lg text-muted-foreground">
            Software-based remote solutions for device unlocking and firmware updates.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-dark rounded-2xl p-8 border-white/10">
            {/* Progress steps */}
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    step >= s ? "bg-accent text-white" : "bg-white/10 text-white/50"
                  )}>
                    {step > s ? <Check className="h-4 w-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={cn(
                      "w-16 h-1",
                      step > s ? "bg-accent" : "bg-white/10"
                    )}></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Step 1: Select Device */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-accent" />
                  Select Your Device
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {devices.map((device) => (
                    <div
                      key={device.id}
                      className={cn(
                        "border rounded-xl p-4 text-center cursor-pointer transition-all",
                        !device.supported && "opacity-50",
                        deviceSelected === device.id 
                          ? "border-accent bg-accent/10" 
                          : "border-white/10 hover:border-white/20"
                      )}
                      onClick={() => handleDeviceSelect(device.id)}
                    >
                      <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2">
                        <Smartphone className="h-6 w-6 text-white/80" />
                      </div>
                      <h4 className="font-medium">{device.name}</h4>
                      {!device.supported && (
                        <span className="text-xs text-white/50">Not supported</span>
                      )}
                    </div>
                  ))}
                </div>
                
                {isLoading && (
                  <div className="flex justify-center">
                    <Loader2 className="h-8 w-8 text-accent animate-spin" />
                  </div>
                )}
              </div>
            )}
            
            {/* Step 2: Select Tool */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Laptop className="h-5 w-5 mr-2 text-accent" />
                  Select Unlocking Tool
                </h3>
                
                <div className="space-y-4 mb-6">
                  {tools.map((tool) => (
                    <div
                      key={tool.id}
                      className={cn(
                        "border rounded-xl p-4 cursor-pointer transition-all",
                        toolSelected === tool.id 
                          ? "border-accent bg-accent/10" 
                          : "border-white/10 hover:border-white/20"
                      )}
                      onClick={() => handleToolSelect(tool.id)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{tool.name}</h4>
                        <span className="text-accent font-semibold">{tool.price}</span>
                      </div>
                      <p className="text-sm text-white/70 mt-1">{tool.description}</p>
                      <div className="flex items-center mt-2 text-xs text-white/50">
                        <span>File size: {tool.fileSize}</span>
                        {toolSelected === tool.id && (
                          <Check className="h-4 w-4 text-accent ml-auto" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    onClick={startOver}
                    variant="outline" 
                    className="w-1/4 border-white/10 hover:bg-white/5"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleDownload} 
                    disabled={isLoading || !toolSelected} 
                    className="w-3/4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download Tool
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Success */}
            {step === 3 && (
              <div className="animate-fade-in text-center py-6">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Download Link Sent!</h3>
                <p className="text-white/70 mb-6">
                  A secure download link has been sent to your registered email address.
                  The link will expire in 24 hours.
                </p>
                <div className="p-4 bg-white/5 rounded-lg text-sm text-white/70 mb-6">
                  <p>Once downloaded, follow these steps:</p>
                  <ol className="text-left list-decimal pl-5 mt-2 space-y-1">
                    <li>Install the tool on your computer</li>
                    <li>Connect your device via USB cable</li>
                    <li>Follow the on-screen instructions</li>
                    <li>Enter your unique unlock code when prompted</li>
                  </ol>
                </div>
                <Button 
                  onClick={startOver} 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  Start New Unlock
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteUnlocking;

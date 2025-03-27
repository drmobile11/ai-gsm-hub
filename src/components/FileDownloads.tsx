
import React, { useState } from 'react';
import { File, Download, Loader2, Check, Search, FileText, FileCode, Archive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const FileDownloads = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'firmware', name: 'Firmware', icon: FileText },
    { id: 'tools', name: 'Unlocking Tools', icon: FileCode },
    { id: 'drivers', name: 'Drivers', icon: Archive },
  ];
  
  const files = [
    { 
      id: 'samsung-a52-firmware', 
      name: 'Samsung A52 Firmware', 
      category: 'firmware',
      version: 'v12.0.1',
      size: '2.4 GB',
      date: '2023-10-15',
      downloads: 3542
    },
    { 
      id: 'xiaomi-redmi-note-10-firmware', 
      name: 'Xiaomi Redmi Note 10 Firmware', 
      category: 'firmware',
      version: 'MIUI 13',
      size: '3.1 GB',
      date: '2023-09-22',
      downloads: 2821
    },
    { 
      id: 'frp-bypass-tool', 
      name: 'Universal FRP Bypass Tool', 
      category: 'tools',
      version: 'v3.5.2',
      size: '45 MB',
      date: '2023-11-05',
      downloads: 8762
    },
    { 
      id: 'network-unlock-pro', 
      name: 'Network Unlock Pro', 
      category: 'tools',
      version: 'v2.1.0',
      size: '28 MB',
      date: '2023-10-30',
      downloads: 6543
    },
    { 
      id: 'qualcomm-drivers', 
      name: 'Qualcomm USB Drivers', 
      category: 'drivers',
      version: 'v1.0.4',
      size: '12 MB',
      date: '2023-08-15',
      downloads: 4231
    },
    { 
      id: 'mediatek-drivers', 
      name: 'MediaTek USB Drivers', 
      category: 'drivers',
      version: 'v2.3.1',
      size: '18 MB',
      date: '2023-09-10',
      downloads: 3876
    },
  ];
  
  const filteredFiles = files.filter(file => {
    // Filter by category if selected
    if (category && file.category !== category) return false;
    
    // Filter by search query
    if (searchQuery && !file.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });
  
  const handleDownload = (fileId: string) => {
    setIsLoading(true);
    
    // Simulate download
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Download started successfully');
    }, 1500);
  };
  
  return (
    <section id="file-downloads" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            GSM Files
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Firmware & Tool Downloads</h2>
          <p className="text-lg text-muted-foreground">
            Access the latest firmware files, unlocking tools, and drivers for your devices.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="glass-dark rounded-2xl p-8 border-white/10">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="Search for files..."
                  className="w-full bg-background/20 border border-white/10 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      className={cn(
                        "px-4 py-2 rounded-md border transition-all",
                        category === cat.id 
                          ? "border-primary bg-primary/10 text-white" 
                          : "border-white/10 bg-transparent text-white/70 hover:border-white/20"
                      )}
                      onClick={() => setCategory(cat.id === category ? null : cat.id)}
                    >
                      <div className="flex items-center">
                        <Icon className="h-4 w-4 mr-2" />
                        {cat.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Files List */}
            <div className="space-y-4">
              {filteredFiles.length === 0 ? (
                <div className="text-center py-12">
                  <File className="h-12 w-12 text-white/20 mx-auto mb-4" />
                  <p className="text-white/50">No files found matching your criteria</p>
                </div>
              ) : (
                filteredFiles.map((file) => {
                  const CategoryIcon = categories.find(c => c.id === file.category)?.icon || File;
                  return (
                    <div
                      key={file.id}
                      className="border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center mr-3">
                            <CategoryIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">{file.name}</h4>
                            <div className="flex items-center space-x-3 text-xs text-white/50 mt-1">
                              <span>Version: {file.version}</span>
                              <span>Size: {file.size}</span>
                              <span>{file.downloads.toLocaleString()} downloads</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleDownload(file.id)} 
                          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                        >
                          {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
            
            {/* Premium Access Banner */}
            <div className="mt-8 rounded-xl p-6 bg-gradient-to-r from-primary/20 to-accent/20 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Premium Access</h3>
                  <p className="text-white/70">
                    Get unlimited access to all files and priority download speeds.
                  </p>
                </div>
                <Button className="bg-white text-background hover:bg-white/90 transition-opacity">
                  Upgrade Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileDownloads;

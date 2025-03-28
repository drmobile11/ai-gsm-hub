
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Download, Upload, Zap } from 'lucide-react';

const RemoteServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock remote unlocking services
  const remoteServices = [
    { id: 1, name: 'Samsung Remote Unlock Tool', price: 25.00, downloads: 847, updated: '2024-02-15', status: 'active' },
    { id: 2, name: 'Huawei Bootloader Unlock', price: 30.00, downloads: 562, updated: '2024-01-22', status: 'active' },
    { id: 3, name: 'LG Remote Service Tool', price: 20.00, downloads: 324, updated: '2024-02-28', status: 'active' },
    { id: 4, name: 'Motorola Bootloader Access', price: 22.00, downloads: 198, updated: '2024-03-01', status: 'active' },
    { id: 5, name: 'Sony Xperia Unlock Tool', price: 28.00, downloads: 156, updated: '2024-02-12', status: 'maintenance' }
  ];
  
  const filteredServices = remoteServices.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Remote Unlocking Services</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Tools
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload New Tool
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tools</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{remoteServices.filter(s => s.status === 'active').length}</div>
            <p className="text-xs text-muted-foreground">
              Out of {remoteServices.length} total tools
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {remoteServices.reduce((acc, curr) => acc + curr.downloads, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all remote tools
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(remoteServices.reduce((acc, curr) => acc + curr.price, 0) / remoteServices.length).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Per remote tool
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Remote Unlocking Tools</CardTitle>
          <CardDescription>
            Manage remote unlocking software tools
          </CardDescription>
          <div className="mt-4 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tool Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.id}</TableCell>
                  <TableCell>{service.name}</TableCell>
                  <TableCell>${service.price.toFixed(2)}</TableCell>
                  <TableCell>{service.downloads}</TableCell>
                  <TableCell>{new Date(service.updated).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      service.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {service.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Remote Tool Usage</CardTitle>
          <CardDescription>
            Track downloads and usage of remote unlocking tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Tool</TableHead>
                <TableHead>Download Date</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock data for downloads */}
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">user{1000 + Math.floor(Math.random() * 9000)}@example.com</TableCell>
                  <TableCell>{remoteServices[Math.floor(Math.random() * remoteServices.length)].name}</TableCell>
                  <TableCell>{new Date(Date.now() - i * 86400000 * 2).toLocaleDateString()}</TableCell>
                  <TableCell>{['Windows 10', 'macOS', 'Ubuntu 20.04', 'Windows 11'][Math.floor(Math.random() * 4)]}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      ['bg-green-100 text-green-800', 'bg-blue-100 text-blue-800'][Math.floor(Math.random() * 2)]
                    }`}>
                      {['Downloaded', 'Activated'][Math.floor(Math.random() * 2)]}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RemoteServices;

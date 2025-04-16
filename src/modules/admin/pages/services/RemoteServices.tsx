
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
import { Search, Download, Upload, Zap, Lightning, InfoIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Remote Unlocking Services</h1>
          <p className="text-sm text-muted-foreground">Manage your remote unlocking tools and software</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
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
      
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="glass-dark border-white/10">
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
        
        <Card className="glass-dark border-white/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
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
        
        <Card className="glass-dark border-white/10">
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
      
      <Card className="glass-dark border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Search Remote Tools</CardTitle>
          <CardDescription>
            Find specific remote unlocking tools
          </CardDescription>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tools by name..."
              className="pl-10 bg-secondary/20 border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
      </Card>
      
      <Card className="glass-dark border-white/10">
        <CardHeader className="flex flex-row items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <div>
            <CardTitle>Remote Unlocking Tools</CardTitle>
            <CardDescription>
              Manage remote unlocking software tools
            </CardDescription>
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
                    <Badge variant={service.status === 'active' ? 'default' : 'secondary'}>
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="glass-dark border-white/10 mt-8">
        <CardHeader className="flex flex-row items-center gap-2">
          <InfoIcon className="h-5 w-5 text-primary" />
          <CardTitle>Tool Usage Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="mb-2">Overall tool statistics:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>Most downloaded: Samsung Remote Unlock Tool (847 downloads)</li>
              <li>Average downloads per tool: 417</li>
              <li>User satisfaction: 4.3/5</li>
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

export default RemoteServices;

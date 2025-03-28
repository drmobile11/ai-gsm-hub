
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
import { Search, RefreshCw, Server } from 'lucide-react';

const ServerServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock server unlock services
  const serverServices = [
    { id: 1, name: 'T-Mobile Device Unlock', price: 15.00, success_rate: '98%', delivery_time: '1-4 hours', status: 'active' },
    { id: 2, name: 'AT&T Premium Unlock', price: 25.00, success_rate: '99%', delivery_time: '1-12 hours', status: 'active' },
    { id: 3, name: 'Sprint Server Unlock', price: 20.00, success_rate: '95%', delivery_time: '2-24 hours', status: 'active' },
    { id: 4, name: 'Verizon Device Unlock', price: 18.00, success_rate: '97%', delivery_time: '1-6 hours', status: 'active' },
    { id: 5, name: 'MetroPCS Server Unlock', price: 12.00, success_rate: '94%', delivery_time: '1-12 hours', status: 'active' },
    { id: 6, name: 'Cricket Premium Unlock', price: 14.00, success_rate: '96%', delivery_time: '2-24 hours', status: 'maintenance' }
  ];
  
  const filteredServices = serverServices.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Server Unlock Services</h2>
        <Button>
          <RefreshCw className="mr-2 h-4 w-4" />
          Sync Services
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{serverServices.filter(s => s.status === 'active').length}</div>
            <p className="text-xs text-muted-foreground">
              Out of {serverServices.length} total services
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Price</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${(serverServices.reduce((acc, curr) => acc + curr.price, 0) / serverServices.length).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Across all services
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Success Rate</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(serverServices.reduce((acc, curr) => acc + parseInt(curr.success_rate), 0) / serverServices.length)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Across all active services
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Server Unlock Services</CardTitle>
          <CardDescription>
            Manage all server-based unlocking services
          </CardDescription>
          <div className="mt-4 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
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
                <TableHead>Service Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Success Rate</TableHead>
                <TableHead>Delivery Time</TableHead>
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
                  <TableCell>{service.success_rate}</TableCell>
                  <TableCell>{service.delivery_time}</TableCell>
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
                    <Button variant="outline" size="sm">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Server Unlock Orders</CardTitle>
          <CardDescription>
            View recent server-based unlock orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Device</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock data for recent orders */}
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">SRV{200000 + i}</TableCell>
                  <TableCell>{serverServices[Math.floor(Math.random() * serverServices.length)].name}</TableCell>
                  <TableCell>{['iPhone 13', 'Samsung S21', 'Google Pixel 6', 'OnePlus 9'][Math.floor(Math.random() * 4)]}</TableCell>
                  <TableCell>{new Date(Date.now() - i * 86400000).toLocaleDateString()}</TableCell>
                  <TableCell>${(10 + Math.random() * 30).toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      ['bg-green-100 text-green-800', 'bg-blue-100 text-blue-800', 'bg-yellow-100 text-yellow-800'][Math.floor(Math.random() * 3)]
                    }`}>
                      {['Completed', 'Processing', 'Pending'][Math.floor(Math.random() * 3)]}
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

export default ServerServices;

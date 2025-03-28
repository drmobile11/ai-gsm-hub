
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
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Plus, Edit, Trash } from 'lucide-react';
import { useImeiServices, useImeiOrder } from '@/hooks/useImeiServices';

const ImeiServices = () => {
  const { services, isLoading, isError, refetch } = useImeiServices();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">IMEI Unlocking Services</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Order
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Place New IMEI Order</DialogTitle>
              <DialogDescription>
                Enter the IMEI number and service details to place a new unlock order.
              </DialogDescription>
            </DialogHeader>
            <NewOrderForm services={services} />
          </DialogContent>
        </Dialog>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Services List</CardTitle>
          <CardDescription>
            View and manage all available IMEI unlocking services
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
          {isLoading ? (
            <div className="flex justify-center p-6">
              <p>Loading services...</p>
            </div>
          ) : isError ? (
            <div className="flex justify-center p-6 text-destructive">
              <p>Error loading services. Please try again.</p>
              <Button variant="outline" size="sm" onClick={() => refetch()}>
                Retry
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Delivery Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredServices.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center">
                      No services found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredServices.map((service) => (
                    <TableRow key={service.service_id}>
                      <TableCell className="font-medium">{service.service_id}</TableCell>
                      <TableCell>{service.name}</TableCell>
                      <TableCell>
                        {service.price} {service.currency}
                      </TableCell>
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
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent IMEI Orders</CardTitle>
          <CardDescription>
            The most recent IMEI unlock orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>IMEI</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock data for recent orders */}
              {[...Array(5)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">ORD{100000 + i}</TableCell>
                  <TableCell>35699{Math.floor(Math.random() * 10000000000)}</TableCell>
                  <TableCell>iPhone {10 + Math.floor(Math.random() * 5)} Unlock</TableCell>
                  <TableCell>{new Date(Date.now() - i * 86400000).toLocaleDateString()}</TableCell>
                  <TableCell>${(20 + Math.random() * 80).toFixed(2)}</TableCell>
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

const NewOrderForm = ({ services }) => {
  const { placeOrder, isPlacingOrder } = useImeiOrder();
  const [formData, setFormData] = useState({
    serviceId: '',
    imei: '',
    model: '',
    carrier: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="serviceId">Service</Label>
          <select
            id="serviceId"
            name="serviceId"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formData.serviceId}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.service_id} value={service.service_id}>
                {service.name} - {service.price} {service.currency}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="imei">IMEI Number</Label>
          <Input
            id="imei"
            name="imei"
            value={formData.imei}
            onChange={handleChange}
            required
            pattern="[0-9]{15}"
            maxLength={15}
            placeholder="15-digit IMEI number"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="model">Phone Model</Label>
            <Input
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="e.g. iPhone 13"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="carrier">Current Carrier</Label>
            <Input
              id="carrier"
              name="carrier"
              value={formData.carrier}
              onChange={handleChange}
              placeholder="e.g. AT&T"
            />
          </div>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Input
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any special requirements or information"
          />
        </div>
      </div>
      
      <DialogFooter>
        <Button type="submit" disabled={isPlacingOrder}>
          {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
        </Button>
      </DialogFooter>
    </form>
  );
};

export default ImeiServices;

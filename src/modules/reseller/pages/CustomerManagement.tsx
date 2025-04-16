
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, User, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const CustomerManagement = () => {
  // Mock customer data
  const customers = [
    { id: 1, name: 'Mobile Fix NYC', email: 'info@mobilefixnyc.com', status: 'Active', orders: 24, credits: 450.00 },
    { id: 2, name: 'Cell Repair Plus', email: 'support@cellrepairplus.com', status: 'Active', orders: 18, credits: 315.75 },
    { id: 3, name: 'Quick Unlock Shop', email: 'sales@quickunlock.com', status: 'Inactive', orders: 5, credits: 0 },
    { id: 4, name: 'Phone Masters', email: 'contact@phonemasters.com', status: 'Active', orders: 31, credits: 780.50 },
    { id: 5, name: 'Tech Solutions', email: 'help@techsolutions.com', status: 'Pending', orders: 0, credits: 100.00 },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Customer Management</h1>
          <p className="text-sm text-muted-foreground">Manage your reseller customers</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <Plus className="mr-2 h-4 w-4" />
            Add New Customer
          </Button>
        </div>
      </div>

      <Card className="glass-dark border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Search Customers</CardTitle>
          <CardDescription>
            Find customers by name, email or ID
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="pl-10 bg-secondary/20 border-white/10"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="glass-dark border-white/10">
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            Showing all {customers.length} customers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="py-3 px-4 text-left font-medium">Customer</th>
                  <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Email</th>
                  <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Status</th>
                  <th className="py-3 px-4 text-right font-medium">Orders</th>
                  <th className="py-3 px-4 text-right font-medium">Credits</th>
                  <th className="py-3 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-xs text-muted-foreground md:hidden">{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">{customer.email}</td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <Badge
                        variant={customer.status === 'Active' ? 'default' : 
                               customer.status === 'Inactive' ? 'secondary' : 'outline'}
                      >
                        {customer.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">{customer.orders}</td>
                    <td className="py-3 px-4 text-right">${customer.credits.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                          <DropdownMenuItem>Add Credits</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerManagement;

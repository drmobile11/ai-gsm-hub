
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Check, Clock, AlertCircle, MoreHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const ResellerOrders = () => {
  // Status badge variant
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'default';
      case 'Processing':
        return 'secondary';
      case 'Failed':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  // Status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Check className="h-4 w-4" />;
      case 'Processing':
        return <Clock className="h-4 w-4" />;
      case 'Failed':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  // Mock orders data
  const orders = [
    {
      id: 'ORD-5678',
      customer: 'Mobile Fix NYC',
      service: 'Bulk iPhone 14 Unlock (10)',
      date: '2023-12-15',
      price: 99.90,
      status: 'Completed'
    },
    {
      id: 'ORD-5679',
      customer: 'Cell Repair Plus',
      service: 'Samsung S22 Network Unlock',
      date: '2023-12-18',
      price: 65.50,
      status: 'Processing'
    },
    {
      id: 'ORD-5680',
      customer: 'Quick Unlock Shop',
      service: 'Google Pixel Server Unlock',
      date: '2023-12-20',
      price: 45.00,
      status: 'Processing'
    },
    {
      id: 'ORD-5681',
      customer: 'Phone Masters',
      service: 'iPhone 13 iCloud Unlock',
      date: '2023-12-21',
      price: 120.00,
      status: 'Failed'
    },
    {
      id: 'ORD-5682',
      customer: 'Tech Solutions',
      service: 'Huawei FRP Bypass',
      date: '2023-12-22',
      price: 35.75,
      status: 'Completed'
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Orders</h1>
          <p className="text-sm text-muted-foreground">Manage customer orders</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Create New Order
          </Button>
        </div>
      </div>

      <Card className="glass-dark border-white/10 mb-8">
        <CardHeader>
          <CardTitle>Search Orders</CardTitle>
          <CardDescription>
            Find orders by ID, customer, or service
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                className="pl-10 bg-secondary/20 border-white/10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-dark border-white/10">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>
            Showing last {orders.length} orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="py-3 px-4 text-left font-medium">Order ID</th>
                  <th className="py-3 px-4 text-left font-medium">Service</th>
                  <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Customer</th>
                  <th className="py-3 px-4 text-left font-medium hidden md:table-cell">Date</th>
                  <th className="py-3 px-4 text-right font-medium">Price</th>
                  <th className="py-3 px-4 text-center font-medium">Status</th>
                  <th className="py-3 px-4 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <div className="font-medium">{order.service}</div>
                        <div className="text-xs text-muted-foreground md:hidden">{order.customer}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">{order.customer}</td>
                    <td className="py-3 px-4 hidden md:table-cell">{order.date}</td>
                    <td className="py-3 px-4 text-right">${order.price.toFixed(2)}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge
                        variant={getStatusVariant(order.status)}
                        className="inline-flex items-center gap-1"
                      >
                        {getStatusIcon(order.status)}
                        {order.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Check Status</DropdownMenuItem>
                          <DropdownMenuItem>Download Invoice</DropdownMenuItem>
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

export default ResellerOrders;

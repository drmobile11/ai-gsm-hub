
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Package, Search, Filter, Eye, FileText, ArrowUpDown } from 'lucide-react';

const ResellerOrders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock orders data
  const orders = [
    { 
      id: 'ORD-9876', 
      customerName: 'John Smith', 
      customerEmail: 'john@example.com',
      date: '2023-10-15', 
      total: 120, 
      status: 'completed',
      items: [
        { name: 'iPhone 12 Unlock', quantity: 1, price: 45 },
        { name: 'Samsung Credits', quantity: 3, price: 25 }
      ]
    },
    { 
      id: 'ORD-8765', 
      customerName: 'Sarah Johnson', 
      customerEmail: 'sarah@example.com',
      date: '2023-10-14', 
      total: 75, 
      status: 'processing',
      items: [
        { name: 'Huawei Unlock', quantity: 1, price: 55 },
        { name: 'Remote Service', quantity: 1, price: 20 }
      ]
    },
    { 
      id: 'ORD-7654', 
      customerName: 'Michael Brown', 
      customerEmail: 'michael@example.com',
      date: '2023-10-12', 
      total: 50, 
      status: 'pending',
      items: [
        { name: 'LG Unlock', quantity: 1, price: 30 },
        { name: 'Server Credits', quantity: 1, price: 20 }
      ]
    },
    { 
      id: 'ORD-6543', 
      customerName: 'Emily Davis', 
      customerEmail: 'emily@example.com',
      date: '2023-10-10', 
      total: 90, 
      status: 'completed',
      items: [
        { name: 'Sony Xperia Unlock', quantity: 2, price: 35 },
        { name: 'File Service', quantity: 1, price: 20 }
      ]
    },
  ];
  
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-500';
      case 'processing': return 'bg-blue-500/20 text-blue-500';
      case 'pending': return 'bg-yellow-500/20 text-yellow-500';
      case 'cancelled': return 'bg-red-500/20 text-red-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Reseller Orders</h1>
      
      <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="mr-2 h-5 w-5 text-primary" />
            Orders Management
          </CardTitle>
          <CardDescription>View and manage orders placed by your customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by order ID or customer..." 
                className="pl-9 bg-secondary/20 border-white/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center">
                      Order ID
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center">
                      Customer
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center">
                      Date
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">
                    <div className="flex items-center">
                      Amount
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">
                        <div>{order.customerName}</div>
                        <div className="text-sm text-muted-foreground">{order.customerEmail}</div>
                      </td>
                      <td className="py-3 px-4">{order.date}</td>
                      <td className="py-3 px-4 font-medium">${order.total.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className={`${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-muted-foreground">
                      No orders found matching your search criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResellerOrders;


import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getUserOrders, Order } from '@/services/api/storeApi';
import { Search, Filter, AlertCircle, Check, Clock, FileText, Eye } from 'lucide-react';

const UserOrders = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  
  // Query orders
  const { data: orders, isLoading } = useQuery({
    queryKey: ['userOrders'],
    queryFn: () => getUserOrders('user-123') // Using mock user ID
  });
  
  // Get status badge based on order status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Complete':
        return (
          <Badge className="bg-green-500/20 text-green-500 border-green-500/10 flex items-center gap-1">
            <Check className="h-3 w-3" />
            Complete
          </Badge>
        );
      case 'Processing':
        return (
          <Badge variant="outline" className="bg-amber-500/20 text-amber-500 border-amber-500/10 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Processing
          </Badge>
        );
      case 'Pending':
        return (
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500/10 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
      case 'Failed':
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Failed
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {status}
          </Badge>
        );
    }
  };
  
  // Filter orders based on search and status
  const filteredOrders = React.useMemo(() => {
    if (!orders) return [];
    
    return orders.filter((order: Order) => {
      // Filter by search query
      const matchesSearch = 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.service.toLowerCase().includes(searchQuery.toLowerCase());
        
      // Filter by status
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchQuery, statusFilter]);

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your service orders</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            asChild
          >
            <Link to="/store/services">
              Place New Order
            </Link>
          </Button>
        </div>
      </div>
      
      <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                View and track all your orders
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  className="pl-10 bg-secondary/20 border-white/10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select onValueChange={setStatusFilter} defaultValue="all">
                <SelectTrigger className="w-full sm:w-40 bg-secondary/20 border-white/10">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Filter" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Complete">Complete</SelectItem>
                  <SelectItem value="Processing">Processing</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-white/5">
                    <TableHead>Order ID</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order: Order) => (
                      <TableRow key={order.id} className="hover:bg-white/5">
                        <TableCell>
                          <div className="font-medium">{order.id}</div>
                        </TableCell>
                        <TableCell>{order.service}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          {getStatusBadge(order.status)}
                        </TableCell>
                        <TableCell className="text-right">${order.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/store/user/orders/${order.id}`}>
                              <Eye className="h-4 w-4 mr-1" />
                              Details
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-12">
                        <div className="flex flex-col items-center justify-center">
                          <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                          <p className="text-lg font-medium">No orders found</p>
                          <p className="text-muted-foreground mb-4">
                            {searchQuery || statusFilter !== 'all'
                              ? "Try adjusting your search or filter"
                              : "You haven't placed any orders yet"}
                          </p>
                          {(searchQuery || statusFilter !== 'all') && (
                            <Button 
                              variant="outline" 
                              onClick={() => {
                                setSearchQuery('');
                                setStatusFilter('all');
                              }}
                            >
                              Clear filters
                            </Button>
                          )}
                          {!searchQuery && statusFilter === 'all' && (
                            <Button 
                              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 mt-2"
                              asChild
                            >
                              <Link to="/store/services">
                                Browse Services
                              </Link>
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
          
          {filteredOrders.length > 0 && (
            <div className="flex justify-between items-center mt-6">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <div className="text-sm text-muted-foreground">
                Page 1 of 1
              </div>
              <Button variant="outline" disabled>
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserOrders;

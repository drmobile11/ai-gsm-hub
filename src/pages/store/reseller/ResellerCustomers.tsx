
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserPlus, Search, MoreHorizontal, Edit, Trash2, UserCheck, ShieldAlert } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'pending';
  totalOrders: number;
  totalSpent: number;
  created: string;
}

const ResellerCustomers = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = React.useState('');
  
  // Mock customers data
  const customers: Customer[] = [
    {
      id: 'cus-1001',
      name: 'Alex Johnson',
      email: 'alex@example.com',
      phone: '+1 555-123-4567',
      status: 'active',
      totalOrders: 12,
      totalSpent: 325.50,
      created: '2023-06-15'
    },
    {
      id: 'cus-1002',
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      phone: '+1 555-987-6543',
      status: 'active',
      totalOrders: 8,
      totalSpent: 189.99,
      created: '2023-07-22'
    },
    {
      id: 'cus-1003',
      name: 'Michael Brown',
      email: 'michael@example.com',
      phone: '+1 555-555-5555',
      status: 'inactive',
      totalOrders: 3,
      totalSpent: 78.45,
      created: '2023-08-10'
    },
    {
      id: 'cus-1004',
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+1 555-444-3333',
      status: 'pending',
      totalOrders: 0,
      totalSpent: 0,
      created: '2023-11-05'
    },
    {
      id: 'cus-1005',
      name: 'Robert Wilson',
      email: 'robert@example.com',
      phone: '+1 555-222-1111',
      status: 'active',
      totalOrders: 15,
      totalSpent: 420.75,
      created: '2023-05-18'
    }
  ];
  
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );
  
  const handleAddCustomer = () => {
    toast({
      title: "Add Customer",
      description: "Customer management form will open here",
    });
  };
  
  const handleEditCustomer = (id: string) => {
    toast({
      title: "Edit Customer",
      description: `Editing customer with ID: ${id}`,
    });
  };
  
  const handleDeleteCustomer = (id: string) => {
    toast({
      variant: "destructive",
      title: "Delete Customer",
      description: `Are you sure you want to delete customer with ID: ${id}?`,
    });
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline" className="text-muted-foreground">Inactive</Badge>;
      case 'pending':
        return <Badge variant="outline" className="bg-amber-500/20 text-amber-500 border-amber-500/20">Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Manage Customers</h1>
          <p className="text-muted-foreground">View, add, and manage your customer accounts</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
            onClick={handleAddCustomer}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
      </div>
      
      <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <CardTitle>Your Customers</CardTitle>
              <CardDescription>
                {filteredCustomers.length} customer{filteredCustomers.length !== 1 ? 's' : ''} found
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                className="pl-10 bg-secondary/20 border-white/10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-white/5">
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead className="text-right">Total Spent</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <TableRow key={customer.id} className="hover:bg-white/5">
                      <TableCell>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-xs text-muted-foreground">{customer.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(customer.status)}
                      </TableCell>
                      <TableCell>{customer.totalOrders}</TableCell>
                      <TableCell className="text-right">${customer.totalSpent.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-card border-white/10">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-white/10" />
                            <DropdownMenuItem className="cursor-pointer" onClick={() => handleEditCustomer(customer.id)}>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <UserCheck className="mr-2 h-4 w-4" />
                              View Orders
                            </DropdownMenuItem>
                            {customer.status === 'active' ? (
                              <DropdownMenuItem className="cursor-pointer text-amber-500">
                                <ShieldAlert className="mr-2 h-4 w-4" />
                                Deactivate
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="cursor-pointer text-green-500">
                                <UserCheck className="mr-2 h-4 w-4" />
                                Activate
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator className="bg-white/10" />
                            <DropdownMenuItem 
                              className="cursor-pointer text-destructive focus:bg-destructive/10" 
                              onClick={() => handleDeleteCustomer(customer.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-6">
                      <div className="text-muted-foreground">No customers found</div>
                      <Button 
                        variant="link" 
                        className="mt-2"
                        onClick={() => setSearchQuery('')}
                      >
                        Clear search
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-between items-center mt-4">
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
        </CardContent>
      </Card>
    </div>
  );
};

export default ResellerCustomers;

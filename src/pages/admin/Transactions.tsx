
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
import { Search, Download, DollarSign, CreditCard, RefreshCw, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock transactions data
  const transactions = [
    { id: 'TRX001', user: 'john@example.com', type: 'payment', amount: 150.00, method: 'Credit Card', status: 'completed', date: '2024-03-03', description: 'Account credit' },
    { id: 'TRX002', user: 'jane@example.com', type: 'refund', amount: 25.00, method: 'Wallet', status: 'completed', date: '2024-03-02', description: 'Order refund' },
    { id: 'TRX003', user: 'mike@example.com', type: 'payment', amount: 75.50, method: 'PayPal', status: 'completed', date: '2024-03-01', description: 'IMEI service payment' },
    { id: 'TRX004', user: 'sarah@example.com', type: 'payment', amount: 120.00, method: 'Bitcoin', status: 'pending', date: '2024-03-03', description: 'Account credit' },
    { id: 'TRX005', user: 'david@example.com', type: 'payment', amount: 45.00, method: 'Credit Card', status: 'completed', date: '2024-03-02', description: 'File download' },
    { id: 'TRX006', user: 'emily@example.com', type: 'payment', amount: 200.00, method: 'Bank Transfer', status: 'processing', date: '2024-03-01', description: 'Account credit' },
    { id: 'TRX007', user: 'robert@example.com', type: 'refund', amount: 50.00, method: 'Wallet', status: 'completed', date: '2024-02-28', description: 'Service cancellation' },
  ];
  
  const filteredTransactions = transactions.filter(transaction => 
    transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    transaction.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Calculate totals
  const totalRevenue = transactions
    .filter(t => t.type === 'payment' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalRefunds = transactions
    .filter(t => t.type === 'refund' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const pendingAmount = transactions
    .filter(t => t.status === 'pending' || t.status === 'processing')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Transactions</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sync
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
            <div className="flex items-center pt-1 text-xs text-green-500">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>+16.2% from last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Refunds</CardTitle>
            <ArrowDownLeft className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRefunds.toFixed(2)}</div>
            <div className="flex items-center pt-1 text-xs text-red-500">
              <ArrowDownLeft className="mr-1 h-4 w-4" />
              <span>{((totalRefunds / totalRevenue) * 100).toFixed(1)}% of revenue</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingAmount.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting processing
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>
            View and manage all financial transactions
          </CardDescription>
          <div className="mt-4 relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by ID, user or description..."
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
                <TableHead>Transaction ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-4">
                    No transactions found matching your search
                  </TableCell>
                </TableRow>
              ) : (
                filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.id}</TableCell>
                    <TableCell>{transaction.user}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        transaction.type === 'payment' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.type}
                      </span>
                    </TableCell>
                    <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                    <TableCell>{transaction.method}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>
            Overview of payment methods used
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { name: 'Credit Card', count: transactions.filter(t => t.method === 'Credit Card').length, icon: CreditCard },
              { name: 'PayPal', count: transactions.filter(t => t.method === 'PayPal').length, icon: DollarSign },
              { name: 'Wallet', count: transactions.filter(t => t.method === 'Wallet').length, icon: CreditCard },
              { name: 'Other', count: transactions.filter(t => !['Credit Card', 'PayPal', 'Wallet'].includes(t.method)).length, icon: CreditCard }
            ].map((method, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{method.name}</CardTitle>
                  <method.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{method.count}</div>
                  <p className="text-xs text-muted-foreground">
                    Transactions
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;

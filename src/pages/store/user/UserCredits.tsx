
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus, History, ArrowRight } from 'lucide-react';

const UserCredits = () => {
  // Mock credit data
  const creditBalance = 150;
  const recentTransactions = [
    { id: 1, date: '2023-10-15', amount: 50, type: 'deposit', description: 'Credit purchase' },
    { id: 2, date: '2023-10-12', amount: -20, type: 'withdrawal', description: 'IMEI Unlock Service' },
    { id: 3, date: '2023-10-05', amount: 100, type: 'deposit', description: 'Credit purchase' },
    { id: 4, date: '2023-09-28', amount: -30, type: 'withdrawal', description: 'Server Unlock Service' },
  ];

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">My Credits</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Credit Balance Card */}
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300 col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-primary" />
              Credit Balance
            </CardTitle>
            <CardDescription>Your current credit balance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{creditBalance} Credits</div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-gradient-to-r from-primary to-accent flex-1">
                <Plus className="mr-1 h-4 w-4" />
                Add Credits
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Transactions Card */}
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300 col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <History className="mr-2 h-5 w-5 text-primary" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Your recent credit activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-md bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-sm text-muted-foreground">{transaction.date}</div>
                  </div>
                  <div className={`font-bold ${transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'}`}>
                    {transaction.type === 'deposit' ? '+' : ''}{transaction.amount} Credits
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="ghost" className="w-full mt-4 text-primary">
              View All Transactions
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserCredits;

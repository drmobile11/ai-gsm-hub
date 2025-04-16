import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  ArrowUp, 
  ShoppingCart, 
  CreditCard, 
  AlertCircle, 
  Check, 
  Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    credits: 45.50,
    recentOrders: [
      { id: 'ORD-1234', service: 'iPhone 14 Unlock', status: 'Complete', date: '2023-12-10', price: 12.99 },
      { id: 'ORD-1235', service: 'Samsung S22 Unlock', status: 'Processing', date: '2023-12-15', price: 15.50 },
      { id: 'ORD-1236', service: 'Google Pixel 7 Unlock', status: 'Complete', date: '2023-12-18', price: 9.99 },
    ]
  };

  // Get status icon based on order status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Complete':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'Processing':
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Welcome, {userData.name}</h1>
          <p className="text-sm text-muted-foreground">{userData.email}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Place New Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Credits</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${userData.credits.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">
              <Link to="/store/credits" className="text-primary hover:underline">Add more credits</Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <div className="text-xs text-muted-foreground">
              Last order placed 2 days ago
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed Orders</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs flex items-center text-green-500">
              <ArrowUp className="h-3 w-3 mr-1" />
              2 more than last month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>
            Your latest unlock service orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {userData.recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div>
                  <div className="font-medium">{order.service}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    {getStatusIcon(order.status)}
                    <span>{order.status}</span> • {order.date}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">${order.price.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground">{order.id}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/store/orders" className="text-sm text-primary hover:underline">
              View All Orders
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;

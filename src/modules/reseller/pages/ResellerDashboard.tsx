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
  Users, 
  ShoppingCart, 
  CreditCard, 
  AlertCircle, 
  Check, 
  Clock,
  Percent,
  BarChart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ResellerDashboard = () => {
  // Mock reseller data
  const resellerData = {
    name: 'TechUnlock Solutions',
    username: 'techunlock',
    credits: 1850.75,
    customers: 24,
    recentOrders: [
      { id: 'ORD-5678', customer: 'Apple Store NYC', service: 'Bulk iPhone 14 Unlock (10)', status: 'Complete', date: '2023-12-15', price: 99.90 },
      { id: 'ORD-5679', customer: 'MobileFix Shop', service: 'Samsung S22 Network Unlock', status: 'Processing', date: '2023-12-18', price: 65.50 },
      { id: 'ORD-5680', customer: 'Cell Repair Plus', service: 'Google Pixel Server Unlock', status: 'Pending', date: '2023-12-20', price: 45.00 },
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
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">Welcome, {resellerData.name}</h1>
          <p className="text-sm text-muted-foreground">Reseller account: {resellerData.username}</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <ShoppingCart className="mr-2 h-4 w-4" />
            New Order
          </Button>
          <Button variant="outline" className="hover-lift">
            <Users className="mr-2 h-4 w-4" />
            Manage Customers
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Credits</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${resellerData.credits.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">
              <Link to="/store/credits" className="text-primary hover:underline">Add more credits</Link>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resellerData.customers}</div>
            <div className="text-xs flex items-center text-green-500">
              <ArrowUp className="h-3 w-3 mr-1" />
              3 new this month
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Discount Rate</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <div className="text-xs text-muted-foreground">
              On all unlock services
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all hover-lift">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Orders</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <div className="text-xs flex items-center text-green-500">
              <ArrowUp className="h-3 w-3 mr-1" />
              18% from last month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Your latest customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {resellerData.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <div>
                    <div className="font-medium">{order.service}</div>
                    <div className="text-xs text-muted-foreground">
                      Customer: {order.customer}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
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
        
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
          <CardHeader>
            <CardTitle>Service Discounts</CardTitle>
            <CardDescription>
              Your special reseller pricing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">iPhone Unlock Services</div>
                    <div className="text-xs text-muted-foreground">All models supported</div>
                  </div>
                  <div className="text-xl font-bold text-green-500">20%</div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Samsung Unlock Services</div>
                    <div className="text-xs text-muted-foreground">All carriers</div>
                  </div>
                  <div className="text-xl font-bold text-green-500">15%</div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Server Unlocks</div>
                    <div className="text-xs text-muted-foreground">Premium tier</div>
                  </div>
                  <div className="text-xl font-bold text-green-500">10%</div>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Bulk Orders (10+)</div>
                    <div className="text-xs text-muted-foreground">Additional discount</div>
                  </div>
                  <div className="text-xl font-bold text-green-500">+5%</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/store/pricing" className="text-sm text-primary hover:underline">
                View Full Pricing
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResellerDashboard;

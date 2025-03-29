
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Home } from 'lucide-react';

const StoreOrderSuccess = () => {
  // Mock order data
  const orderDetails = {
    orderId: 'ORD-12345-6789',
    date: new Date().toLocaleDateString(),
    items: [
      { id: 1, name: 'iPhone 12 Pro Max Unlock', price: 45, quantity: 1 },
      { id: 2, name: 'Samsung Server Credits', price: 20, quantity: 2 },
    ],
    total: 85,
    email: 'customer@example.com'
  };
  
  return (
    <div className="container mx-auto p-4 max-w-4xl flex flex-col items-center">
      <div className="text-center mb-8 mt-6">
        <div className="inline-flex items-center justify-center bg-green-500/20 w-24 h-24 rounded-full mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold">Order Successful!</h1>
        <p className="text-muted-foreground mt-2">
          Your order has been placed and is being processed
        </p>
      </div>
      
      <Card className="glass-dark border-white/10 w-full">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          <CardDescription>
            Order #{orderDetails.orderId} • {orderDetails.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {orderDetails.items.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-white/10 pb-2">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold">${item.price * item.quantity}</div>
              </div>
            ))}
            
            <div className="flex justify-between pt-2 font-bold">
              <div>Total</div>
              <div className="text-primary">${orderDetails.total.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="bg-secondary/20 p-4 rounded-md">
            <p className="text-sm">
              A confirmation email has been sent to <span className="font-medium">{orderDetails.email}</span>
            </p>
            <p className="text-sm mt-1">
              You can track your order status in your account dashboard
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="w-full sm:w-auto hover-lift" asChild>
            <Link to="/store/user/orders">
              <FileText className="mr-2 h-4 w-4" />
              View My Orders
            </Link>
          </Button>
          <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent" asChild>
            <Link to="/store">
              <Home className="mr-2 h-4 w-4" />
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StoreOrderSuccess;

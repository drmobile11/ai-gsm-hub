
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, ChevronsRight, ShoppingCart, Check, ChevronLeft } from 'lucide-react';

const StoreCheckout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Mock cart data
  const cartItems = [
    { id: 1, name: 'iPhone 12 Pro Max Unlock', price: 45, quantity: 1 },
    { id: 2, name: 'Samsung Server Credits', price: 20, quantity: 2 },
  ];
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order Placed Successfully",
        description: "Your order has been processed.",
      });
      navigate('/store/order-success');
    }, 2000);
  };
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Summary */}
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5 text-primary" />
              Order Summary
            </CardTitle>
            <CardDescription>Review your order before proceeding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-white/10 pb-2">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold">${item.price * item.quantity}</div>
              </div>
            ))}
            
            <div className="flex justify-between pt-2">
              <div className="font-medium">Subtotal</div>
              <div className="font-bold">${subtotal.toFixed(2)}</div>
            </div>
            
            <div className="flex justify-between">
              <div className="font-medium">Tax</div>
              <div className="font-bold">${tax.toFixed(2)}</div>
            </div>
            
            <div className="flex justify-between pt-2 border-t border-white/10">
              <div className="font-bold">Total</div>
              <div className="font-bold text-primary">${total.toFixed(2)}</div>
            </div>
          </CardContent>
        </Card>
        
        {/* Payment Form */}
        <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all duration-300 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-primary" />
              Payment Details
            </CardTitle>
            <CardDescription>Enter your payment information</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Cardholder Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-secondary/20 border-white/10" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-secondary/20 border-white/10" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="4242 4242 4242 4242" className="bg-secondary/20 border-white/10" required />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" className="bg-secondary/20 border-white/10" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" className="bg-secondary/20 border-white/10" required />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate(-1)}
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Back
              </Button>
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-primary to-accent"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Complete Order
                    <ChevronsRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default StoreCheckout;

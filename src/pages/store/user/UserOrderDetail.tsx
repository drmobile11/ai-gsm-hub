
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Download, 
  HelpCircle 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserOrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // This is hardcoded data for demo, in production this would come from an API call
  const order = {
    id: orderId || 'ORD-1234',
    service: 'iPhone 14 Unlock',
    status: 'Complete',
    date: '2023-12-10',
    price: 12.99,
    details: {
      imei: '123456789012345',
      carrier: 'AT&T',
      model: 'iPhone 14 Pro Max',
      notes: 'Please process as soon as possible'
    },
    timeline: [
      { date: '2023-12-10 09:15', status: 'Order Placed', description: 'Order received and payment confirmed' },
      { date: '2023-12-10 10:30', status: 'Processing', description: 'Order sent to processing queue' },
      { date: '2023-12-10 14:45', status: 'Processing', description: 'Unlocking in progress' },
      { date: '2023-12-10 17:20', status: 'Complete', description: 'Unlock completed successfully' }
    ],
    result: {
      unlockCode: 'N/A - Remote Unlock',
      instructions: 'Your iPhone has been unlocked. Please insert a SIM card from the new carrier and follow the on-screen instructions to complete the setup.',
      success: true
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Complete':
        return (
          <Badge className="bg-green-500/20 text-green-500 border-green-500/10 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
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
  
  const handleDownloadReceipt = () => {
    toast({
      title: "Receipt Downloaded",
      description: "Your receipt has been downloaded successfully.",
    });
  };
  
  const handleReportIssue = () => {
    toast({
      title: "Report Issue",
      description: "Please describe the issue you're experiencing.",
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="mb-4 -ml-3"
          asChild
        >
          <Link to="/store/user/orders">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold gradient-text">Order Details</h1>
        <p className="text-muted-foreground flex items-center gap-2">
          Order ID: {order.id}
          {getStatusBadge(order.status)}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle>Order Information</CardTitle>
              <CardDescription>Details about your unlock service order</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Service</p>
                  <p className="font-medium">{order.service}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Date</p>
                  <p className="font-medium">{order.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <div>{getStatusBadge(order.status)}</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Amount</p>
                  <p className="font-medium">${order.price.toFixed(2)}</p>
                </div>
              </div>
              
              <Separator className="bg-white/10" />
              
              <div>
                <h3 className="text-lg font-medium mb-3">Device Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">IMEI Number</p>
                    <p className="font-medium">{order.details.imei}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Device Model</p>
                    <p className="font-medium">{order.details.model}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Carrier</p>
                    <p className="font-medium">{order.details.carrier}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Customer Notes</p>
                    <p className="font-medium">{order.details.notes || 'None'}</p>
                  </div>
                </div>
              </div>
              
              {order.result && (
                <>
                  <Separator className="bg-white/10" />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Unlock Result</h3>
                    {order.result.success ? (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start mb-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-green-500">Unlock Successful</h4>
                            <p className="text-muted-foreground text-sm">
                              The unlock service was completed successfully
                            </p>
                          </div>
                        </div>
                        {order.result.unlockCode && order.result.unlockCode !== 'N/A - Remote Unlock' && (
                          <div className="mb-3">
                            <p className="text-sm text-muted-foreground mb-1">Unlock Code</p>
                            <div className="font-mono bg-black/20 p-2 rounded border border-white/10">
                              {order.result.unlockCode}
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Instructions</p>
                          <p>{order.result.instructions}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                        <div className="flex items-start mb-3">
                          <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-destructive">Unlock Failed</h4>
                            <p className="text-muted-foreground text-sm">
                              We were unable to complete the unlock service
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Reason</p>
                          <p>{order.result.instructions || 'An error occurred during the unlocking process. Our support team has been notified and will contact you soon.'}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all mt-6">
            <CardHeader>
              <CardTitle>Order Timeline</CardTitle>
              <CardDescription>Track the progress of your order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pl-6 space-y-6 before:absolute before:left-[15px] before:h-full before:w-[1px] before:bg-white/20">
                {order.timeline.map((event, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-6 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <div className="mb-1 flex items-baseline justify-between">
                      <h4 className="font-medium">
                        {event.status}
                      </h4>
                      <time className="text-xs text-muted-foreground">{event.date}</time>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all sticky top-20">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>
                Manage your order
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={handleDownloadReceipt}
              >
                <Download className="h-4 w-4" />
                Download Receipt
              </Button>
              
              <Button 
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={handleReportIssue}
              >
                <HelpCircle className="h-4 w-4" />
                Report an Issue
              </Button>
              
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                asChild
              >
                <Link to="/store/services">
                  Order Again
                </Link>
              </Button>
            </CardContent>
            <CardFooter className="border-t border-white/10 pt-4">
              <div className="w-full text-center">
                <p className="text-sm text-muted-foreground mb-2">Need help with this order?</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 h-auto"
                  asChild
                >
                  <a href="#">Contact Support</a>
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          <Card className="glass-dark border-white/10 hover:border-primary/50 transition-all mt-6">
            <CardHeader className="pb-2">
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  How long will my unlock take?
                </h4>
                <p className="text-xs text-muted-foreground ml-6">
                  Most unlocks are completed within the estimated time frame shown when you placed your order. Check the timeline for updates.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  What if my unlock fails?
                </h4>
                <p className="text-xs text-muted-foreground ml-6">
                  We offer a 100% money-back guarantee if we cannot unlock your device. Contact support for assistance.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Can I cancel my order?
                </h4>
                <p className="text-xs text-muted-foreground ml-6">
                  Orders can only be cancelled if they haven't entered the processing stage. Contact support immediately if you need to cancel.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserOrderDetail;

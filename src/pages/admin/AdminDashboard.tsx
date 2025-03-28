
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown, DollarSign, Users, Smartphone, Server, FileDown, Zap } from 'lucide-react';
import dhruApi from '@/services/api/dhruApi';

const AdminDashboard = () => {
  const { data: accountInfo, isLoading } = useQuery({
    queryKey: ['accountInfo'],
    queryFn: dhruApi.getAccountInfo,
  });

  // Mocked statistics
  const statistics = {
    totalEarnings: 5840.50,
    ordersCompleted: 142,
    averageTime: '1.8 hours',
    activeUsers: 89,
    servicesSummary: [
      { name: 'IMEI Unlocks', count: 86, icon: Smartphone, change: 12.4 },
      { name: 'Server Unlocks', count: 35, icon: Server, change: -2.1 },
      { name: 'Remote Tools', count: 14, icon: Zap, change: 5.7 },
      { name: 'File Downloads', count: 7, icon: FileDown, change: 1.2 },
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <div className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${statistics.totalEarnings.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">
              +12.4% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Orders Completed</CardTitle>
            <Smartphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.ordersCompleted}</div>
            <div className="text-xs text-muted-foreground">
              +5.2% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Time</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.averageTime}</div>
            <div className="text-xs text-muted-foreground">
              -0.3 hours from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statistics.activeUsers}</div>
            <div className="text-xs text-muted-foreground">
              +2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="text-xl font-semibold mt-6 mb-4">Services Overview</h3>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statistics.servicesSummary.map((service, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{service.name}</CardTitle>
              <service.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{service.count}</div>
              <div className={`text-xs flex items-center ${service.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {service.change > 0 ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {Math.abs(service.change)}% from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              Your Dhru Fusion account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {isLoading ? (
              <div className="text-muted-foreground">Loading account information...</div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Username</p>
                    <p>{accountInfo?.data?.username || 'example_user'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Credits</p>
                    <p>{accountInfo?.data?.credits || '$100.00'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p>{accountInfo?.data?.email || 'user@example.com'}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className="text-green-500">{accountInfo?.data?.account_status || 'Active'}</p>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">Last login: {accountInfo?.data?.last_login || 'March 4, 2024 10:30 AM'}</p>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest transactions and orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="flex items-center justify-between pb-2 border-b">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">iPhone 14 Unlock</p>
                    <p className="text-xs text-muted-foreground">Order #{Math.floor(Math.random() * 1000000)}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="font-medium">${(Math.random() * 100).toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(Date.now() - Math.random() * 86400000 * 5).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <a href="/admin/transactions" className="text-sm text-primary hover:underline">
              View all transactions
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

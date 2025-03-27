
import React from 'react';
import { Activity, BarChart3, CreditCard, Grid, LineChart, PieChart, Settings, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            Platform Overview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Dashboard & Management</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools to manage your GSM service business, from order processing to analytics.
          </p>
        </div>

        <div className="relative">
          {/* Dashboard mockup */}
          <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto overflow-hidden animate-fade-in">
            {/* Dashboard header */}
            <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-accent to-primary flex items-center justify-center text-white font-bold">
                  G
                </div>
                <span className="font-medium">GSM Hub Dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Settings className="h-4 w-4 text-gray-500" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6">
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Orders", value: "8,941", icon: Activity, color: "blue" },
                  { label: "Success Rate", value: "99.7%", icon: PieChart, color: "green" },
                  { label: "Active Services", value: "524", icon: Grid, color: "purple" },
                  { label: "Revenue", value: "$16,289", icon: CreditCard, color: "amber" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <div className={cn(`bg-${stat.color}-100 text-${stat.color}-500 w-7 h-7 rounded-md flex items-center justify-center`)}>
                        <stat.icon className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-2xl font-semibold">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Chart 1 */}
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Orders Overview</h3>
                    <LineChart className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="h-48 bg-gray-50 rounded-lg flex items-end p-4">
                    {[35, 45, 30, 60, 75, 65, 75, 90, 85].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-5 bg-primary/60 rounded-t-sm" 
                          style={{ height: `${height}%` }}
                        ></div>
                        <div className="text-xs text-gray-500 mt-2">{i + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart 2 */}
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Service Distribution</h3>
                    <BarChart3 className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="h-48 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-8 border-primary/30 relative">
                      <div className="absolute inset-0 border-8 border-transparent border-t-accent rounded-full"></div>
                      <div className="absolute inset-0 border-8 border-transparent border-l-primary/80 border-b-primary/80 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent orders */}
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Recent Orders</h3>
                  <button className="text-xs text-accent">View All</button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-xs text-left font-medium text-muted-foreground pb-2">IMEI/SN</th>
                      <th className="text-xs text-left font-medium text-muted-foreground pb-2">Service</th>
                      <th className="text-xs text-left font-medium text-muted-foreground pb-2">Status</th>
                      <th className="text-xs text-right font-medium text-muted-foreground pb-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { imei: "356938035643809", service: "Samsung Network Unlock", status: "Complete", price: "$8.50" },
                      { imei: "490154203237646", service: "iPhone iCloud Unlock", status: "Processing", price: "$45.00" },
                      { imei: "353878048356234", service: "Huawei FRP Remove", status: "Complete", price: "$12.75" },
                      { imei: "354678098765432", service: "Google Account Reset", status: "Complete", price: "$9.99" }
                    ].map((order, i) => (
                      <tr key={i} className="border-b border-gray-50">
                        <td className="py-3 text-sm">{order.imei}</td>
                        <td className="py-3 text-sm">{order.service}</td>
                        <td className="py-3 text-sm">
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full",
                            order.status === "Complete" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          )}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-right">{order.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl mx-auto">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResellerLayout from "./ResellerLayout";
import ResellerDashboard from "./pages/ResellerDashboard";
import ResellerLogin from "./pages/ResellerLogin";
import CustomerManagement from "./pages/CustomerManagement";
import ResellerOrders from "./pages/ResellerOrders";
import ResellerServices from "./pages/ResellerServices";

const queryClient = new QueryClient();

const ResellerApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResellerLayout />}>
            <Route index element={<ResellerDashboard />} />
            <Route path="login" element={<ResellerLogin />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="orders" element={<ResellerOrders />} />
            <Route path="services" element={<ResellerServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default ResellerApp;

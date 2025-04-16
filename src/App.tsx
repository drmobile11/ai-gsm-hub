
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

// Landing page
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin module
import AdminLayout from "./modules/admin/AdminLayout";
import AdminDashboard from "./modules/admin/pages/AdminDashboard";
import ImeiServices from "./modules/admin/pages/services/ImeiServices";
import ServerServices from "./modules/admin/pages/services/ServerServices";
import RemoteServices from "./modules/admin/pages/services/RemoteServices";
import FileServices from "./modules/admin/pages/services/FileServices";
import UserManagement from "./modules/admin/pages/UserManagement";
import Transactions from "./modules/admin/pages/Transactions";
import PageBuilder from "./modules/admin/pages/PageBuilder";
import Settings from "./modules/admin/pages/Settings";

// Store module
import StoreLayout from "./modules/store/StoreLayout";
import StoreFront from "./modules/store/pages/StoreFront";
import StoreLogin from "./modules/store/pages/auth/StoreLogin";
import UserDashboard from "./modules/store/pages/auth/UserDashboard";

// Reseller module
import ResellerLayout from "./modules/reseller/ResellerLayout";
import ResellerDashboard from "./modules/reseller/pages/ResellerDashboard";
import ResellerLogin from "./modules/reseller/pages/ResellerLogin";
import CustomerManagement from "./modules/reseller/pages/CustomerManagement";
import ResellerOrders from "./modules/reseller/pages/ResellerOrders";
import ResellerServices from "./modules/reseller/pages/ResellerServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="services/imei" element={<ImeiServices />} />
            <Route path="services/server" element={<ServerServices />} />
            <Route path="services/remote" element={<RemoteServices />} />
            <Route path="services/files" element={<FileServices />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="page-builder" element={<PageBuilder />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Store Routes */}
          <Route path="/store" element={<StoreLayout />}>
            <Route index element={<StoreFront />} />
            <Route path="login" element={<StoreLogin />} />
            <Route path="user/dashboard" element={<UserDashboard />} />
          </Route>
          
          {/* Reseller Routes */}
          <Route path="/reseller" element={<ResellerLayout />}>
            <Route index element={<ResellerDashboard />} />
            <Route path="login" element={<ResellerLogin />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="orders" element={<ResellerOrders />} />
            <Route path="services" element={<ResellerServices />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

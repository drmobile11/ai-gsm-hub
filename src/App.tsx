
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Import all pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Admin pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ImeiServices from "./pages/admin/services/ImeiServices";
import ServerServices from "./pages/admin/services/ServerServices";
import RemoteServices from "./pages/admin/services/RemoteServices";
import FileServices from "./pages/admin/services/FileServices";
import UserManagement from "./pages/admin/UserManagement";
import Transactions from "./pages/admin/Transactions";
import PageBuilder from "./pages/admin/PageBuilder";
import Settings from "./pages/admin/Settings";
import ThemeSettings from "./pages/admin/ThemeSettings";

// Store pages
import StoreLayout from "./pages/store/StoreLayout";
import StoreFront from "./pages/store/StoreFront";
import StoreLogin from "./pages/store/auth/StoreLogin";
import StoreRegister from "./pages/store/auth/StoreRegister";
import StoreForgotPassword from "./pages/store/auth/StoreForgotPassword";
import UserDashboard from "./pages/store/auth/UserDashboard";
import ResellerDashboard from "./pages/store/auth/ResellerDashboard";
import UserProfile from "./pages/store/user/UserProfile";
import UserOrders from "./pages/store/user/UserOrders";
import UserOrderDetail from "./pages/store/user/UserOrderDetail";
import UserCredits from "./pages/store/user/UserCredits";
import StoreServices from "./pages/store/services/StoreServices";
import StoreServiceDetail from "./pages/store/services/StoreServiceDetail";
import StoreCheckout from "./pages/store/checkout/StoreCheckout";
import StoreOrderSuccess from "./pages/store/checkout/StoreOrderSuccess";
import ResellerCustomers from "./pages/store/reseller/ResellerCustomers";
import ResellerOrders from "./pages/store/reseller/ResellerOrders";
import ResellerSettings from "./pages/store/reseller/ResellerSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
              <Route path="theme-settings" element={<ThemeSettings />} />
            </Route>
            
            {/* Store Routes */}
            <Route path="/store" element={<StoreLayout />}>
              <Route index element={<StoreFront />} />
              <Route path="login" element={<StoreLogin />} />
              <Route path="register" element={<StoreRegister />} />
              <Route path="forgot-password" element={<StoreForgotPassword />} />
              <Route path="services" element={<StoreServices />} />
              <Route path="services/:serviceId" element={<StoreServiceDetail />} />
              <Route path="checkout" element={<StoreCheckout />} />
              <Route path="order-success" element={<StoreOrderSuccess />} />
              
              {/* User routes */}
              <Route path="user/dashboard" element={<UserDashboard />} />
              <Route path="user/profile" element={<UserProfile />} />
              <Route path="user/orders" element={<UserOrders />} />
              <Route path="user/orders/:orderId" element={<UserOrderDetail />} />
              <Route path="user/credits" element={<UserCredits />} />
              
              {/* Reseller routes */}
              <Route path="reseller/dashboard" element={<ResellerDashboard />} />
              <Route path="reseller/customers" element={<ResellerCustomers />} />
              <Route path="reseller/orders" element={<ResellerOrders />} />
              <Route path="reseller/settings" element={<ResellerSettings />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

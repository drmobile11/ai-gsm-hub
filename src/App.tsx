
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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

// Store frontend imports
import StoreLayout from "./pages/store/StoreLayout";
import StoreFront from "./pages/store/StoreFront";
import StoreLogin from "./pages/store/auth/StoreLogin";
import UserDashboard from "./pages/store/auth/UserDashboard";
import ResellerDashboard from "./pages/store/auth/ResellerDashboard";

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
            <Route path="reseller/dashboard" element={<ResellerDashboard />} />
            {/* Add more store routes as needed */}
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

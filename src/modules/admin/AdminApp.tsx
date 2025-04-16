
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import ImeiServices from "./pages/services/ImeiServices";
import ServerServices from "./pages/services/ServerServices";
import RemoteServices from "./pages/services/RemoteServices";
import FileServices from "./pages/services/FileServices";
import UserManagement from "./pages/UserManagement";
import Transactions from "./pages/Transactions";
import PageBuilder from "./pages/PageBuilder";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const AdminApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AdminApp;


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreLayout from "./StoreLayout";
import StoreFront from "./pages/StoreFront";
import StoreLogin from "./pages/auth/StoreLogin";
import UserDashboard from "./pages/auth/UserDashboard";

const queryClient = new QueryClient();

const StoreApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreLayout />}>
            <Route index element={<StoreFront />} />
            <Route path="login" element={<StoreLogin />} />
            <Route path="user/dashboard" element={<UserDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default StoreApp;

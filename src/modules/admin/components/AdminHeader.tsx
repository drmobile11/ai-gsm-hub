import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const AdminHeader = () => {
  return (
    <header className="h-16 border-b px-4 md:px-6 flex items-center justify-between bg-background/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="hover:bg-primary/10 transition-colors" />
        <h1 className="text-xl font-semibold hidden md:block gradient-text">Admin Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-64 pl-10 pr-4 py-2 rounded-md bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
        </div>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon" className="relative hover-lift">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-subtle">
                3
              </span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 glass-dark">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Notifications</h4>
              <div className="space-y-1">
                <div className="text-xs bg-primary/10 p-2 rounded-md">
                  <p className="font-medium">New Order #123456</p>
                  <p className="text-muted-foreground">iPhone 13 Unlock Service</p>
                </div>
                <div className="text-xs bg-secondary/20 p-2 rounded-md">
                  <p className="font-medium">Order Completed #789012</p>
                  <p className="text-muted-foreground">Samsung S21 Remote Unlock</p>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover-lift">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <span className="hidden md:inline-block">Admin User</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-dark">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AdminHeader;

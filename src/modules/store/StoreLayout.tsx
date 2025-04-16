
import React from 'react';
import { Outlet } from 'react-router-dom';
import StoreHeader from './components/StoreHeader';
import StoreFooter from './components/StoreFooter';

const StoreLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <StoreHeader />
      <main className="flex-1 bg-dots">
        <Outlet />
      </main>
      <StoreFooter />
    </div>
  );
};

export default StoreLayout;


import React from 'react';
import { Outlet } from 'react-router-dom';
import ResellerHeader from './components/ResellerHeader';
import ResellerFooter from './components/ResellerFooter';

const ResellerLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ResellerHeader />
      <main className="flex-1 bg-dots">
        <Outlet />
      </main>
      <ResellerFooter />
    </div>
  );
};

export default ResellerLayout;

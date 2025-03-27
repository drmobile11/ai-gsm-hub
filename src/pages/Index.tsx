
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Dashboard from '../components/Dashboard';
import IMEIUnlocking from '../components/IMEIUnlocking';
import ServerUnlocks from '../components/ServerUnlocks';
import RemoteUnlocking from '../components/RemoteUnlocking';
import FileDownloads from '../components/FileDownloads';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <IMEIUnlocking />
        <ServerUnlocks />
        <RemoteUnlocking />
        <FileDownloads />
        <Dashboard />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

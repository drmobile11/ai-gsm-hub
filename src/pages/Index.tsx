
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import Dashboard from '../components/Dashboard';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Dashboard />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

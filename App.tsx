import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <Reviews />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
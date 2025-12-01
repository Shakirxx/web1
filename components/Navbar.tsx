import React, { useState, useEffect } from 'react';
import { Shield, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.open(`https://wa.me/923117269475`, '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Remote<span className="text-primary">Security</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Features</a>
          <a href="#comparison" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Comparison</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
          <button 
            onClick={handleCall}
            className="bg-primary hover:bg-emerald-400 text-black font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-glow flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            FREE 15-MIN CALL
          </button>
        </div>

        {/* Mobile CTA only (menu hidden for simplicity in single page) */}
        <div className="md:hidden">
          <button 
            onClick={handleCall}
            className="bg-primary text-black font-bold py-2 px-4 rounded-full text-xs"
          >
            BOOK CALL
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
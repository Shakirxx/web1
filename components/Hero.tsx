import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
          alt="Security Monitoring Center" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-6 backdrop-blur-sm shadow-lg shadow-primary/5">
            <ShieldCheck className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">USA & Canada Coverage</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Smarter Security.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Lower Costs.
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300 mb-10 leading-relaxed">
            Reduce security guard salary costs by up to 80%. 
            Professional remote monitoring for stores, warehouses, and malls starting from just $299/mo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => window.open('https://wa.me/923117269475', '_blank')}
              className="w-full sm:w-auto bg-primary hover:bg-emerald-400 text-secondary font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2 text-lg"
            >
              Start Free 15-Min Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <a 
              href="#comparison"
              className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-700/50 text-white border border-slate-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              Compare Costs
            </a>
          </div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              A Quick Info About Our Service !!
              <span className="w-8 h-1 bg-primary rounded-full"></span>
            </h3>

            <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-2 border-slate-700/50 bg-black aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/iCj7Vb6xumI?si=7wdiWyDJN1otwG7C" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
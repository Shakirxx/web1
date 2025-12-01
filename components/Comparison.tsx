import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, DollarSign } from 'lucide-react';
import { COMPARISON_DATA } from '../constants';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092921461-eab62e47a872?auto=format&fit=crop&q=80" 
          alt="Warehouse Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-dark/90" />
      </div>

      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Switch to Remote Monitoring?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stop overpaying for traditional security guards. Get better protection for a fraction of the price.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-sm bg-slate-900/50"
        >
          <div className="grid grid-cols-3 bg-slate-800/80 text-white p-6 border-b border-slate-700 font-bold text-sm md:text-lg text-center">
            <div className="text-left pl-4">Comparison</div>
            <div className="text-red-400">Traditional Guard</div>
            <div className="text-primary">Remote Monitoring</div>
          </div>

          {COMPARISON_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-3 p-6 border-b border-slate-700/50 items-center text-center ${index % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-800/30'} hover:bg-slate-800/50 transition-colors`}
            >
              <div className="text-left pl-4 font-medium text-slate-200 text-sm md:text-base">{item.criteria}</div>
              
              <div className="text-slate-400 flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-base">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>{item.guard}</span>
              </div>
              
              <div className="text-white font-semibold flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-base bg-primary/10 py-2 px-3 rounded-lg border border-primary/20">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{item.remote}</span>
              </div>
            </div>
          ))}
          
          <div className="p-8 bg-slate-900/90 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-xl border border-primary/20 text-primary">
              <DollarSign className="w-6 h-6 mr-2" />
              <span className="font-bold text-lg">Save up to $2,700/month per location</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;
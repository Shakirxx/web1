import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { CLIENT_REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Trusted by Business Owners
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg">
            See how we're helping businesses across North America secure their assets and save money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {CLIENT_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.2)"
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="relative bg-slate-900/60 border border-slate-700 p-8 rounded-2xl backdrop-blur-md flex flex-col h-full group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-800 group-hover:text-slate-700 transition-colors">
                <Quote size={48} className="transform rotate-180 opacity-50" />
              </div>

              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                    VERIFIED
                  </div>
                </div>
                <div className="ml-4 z-10">
                  <h4 className="text-white font-bold text-lg">{review.name}</h4>
                  <p className="text-primary text-sm">{review.role}</p>
                  <p className="text-slate-500 text-xs">{review.location}</p>
                </div>
              </div>

              <div className="flex mb-4 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="mr-1" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed italic relative z-10">
                "{review.content}"
              </p>
              
              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
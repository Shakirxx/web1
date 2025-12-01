import React from 'react';
import { MapPin, Mail, Phone, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-white">
                Remote<span className="text-primary">Security</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              VisionsDigi provides world-class remote monitoring solutions for businesses across USA & Canada. Secure, reliable, and cost-effective.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '').replace('+', '')}`} 
                    className="flex items-center group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-primary/50 transition-colors mr-3">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">WhatsApp (24/7)</span>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{CONTACT_INFO.whatsapp}</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center group">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-primary/50 transition-colors mr-3">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500">Email</span>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{CONTACT_INFO.email}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div>
               <h4 className="text-white font-bold text-lg mb-6">Location</h4>
               <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 mr-3 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-slate-300 block leading-relaxed">
                      {CONTACT_INFO.location}
                    </span>
                    <span className="text-xs text-slate-500 mt-2 block">
                      Serving clients in USA & Canada
                    </span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {CONTACT_INFO.companyName}. Powered by VisionsDigi.
          </p>
          <p className="text-slate-600 text-xs mt-2 md:mt-0">
            Confidential & Secure Monitoring Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
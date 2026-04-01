import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_DETAILS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Link to="/" className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter text-brand-primary leading-none">
                  NAVIG<span className="text-brand-accent">-8</span>
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Energy Advisory
                  </span>
                  <div className="ml-2 flex flex-col w-3.5 h-2.5 overflow-hidden rounded-sm shadow-sm opacity-60">
                    <div className="flex-1 bg-[#EA2839]"></div>
                    <div className="flex-1 bg-[#1A206D]"></div>
                    <div className="flex-1 bg-[#FFD500]"></div>
                    <div className="flex-1 bg-[#00A551]"></div>
                  </div>
                </div>
              </Link>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm">
              Independent solar energy consultancy helping businesses and homeowners in Mauritius make informed, risk-free decisions about renewable energy investments.
            </p>
            <p className="text-sm font-bold text-slate-900 mb-1">{BUSINESS_DETAILS.name}</p>
            <p className="text-sm text-slate-600">{BUSINESS_DETAILS.location}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li>
                <span className="block text-slate-400 uppercase tracking-wider text-[10px] mb-1">WhatsApp</span>
                <a href={BUSINESS_DETAILS.whatsappLink} className="hover:text-brand-primary transition-colors font-medium">
                  {BUSINESS_DETAILS.whatsapp}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Legal</h4>
            <div className="space-y-4">
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider">
                Any estimates or discussions are indicative and subject to detailed assessment and site conditions.
              </p>
              <div className="flex flex-col gap-2 text-xs font-medium">
                <Link to="/privacy-policy" className="text-slate-600 hover:text-brand-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="text-slate-600 hover:text-brand-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-slate-300 uppercase tracking-[0.2em] font-bold">
            Independent solar advisory for Mauritius
          </p>
        </div>
      </div>
    </footer>
  );
};

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
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold tracking-tighter text-brand-primary">
                  NAVIG<span className="text-brand-accent">-8</span>
                </span>
                <span className="ml-2 text-xs uppercase tracking-widest text-slate-400 font-medium">
                  Energy Advisory
                </span>
              </Link>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed text-sm">
              Independent solar energy consultancy helping Mauritian businesses make informed, risk-free decisions about renewable energy investments.
            </p>
            <p className="text-sm font-bold text-slate-900">{BUSINESS_DETAILS.location}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>{BUSINESS_DETAILS.whatsapp}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Legal</h4>
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider mb-4">
              Any estimates or discussions are indicative and subject to detailed assessment and site conditions.
            </p>
            <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider">
              By using this website, you acknowledge our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-400">
            <Link to="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

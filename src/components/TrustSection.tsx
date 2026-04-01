import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export const TrustSection = () => {
  return (
    <section className="relative py-24 overflow-hidden border-y border-slate-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1920"
          alt="Solar technology background"
          className="w-full h-full object-cover opacity-[0.12]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-6">Get Started</h2>
        <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
          Start With a Conversation
        </h3>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          If you’re considering solar, we’re happy to discuss your situation and provide initial guidance. No pressure, just clarity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition-all shadow-lg shadow-blue-900/10"
          >
            Request a Discussion
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a
            href={BUSINESS_DETAILS.whatsappLink}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-all"
          >
            <MessageCircle className="mr-2 w-5 h-5 text-green-600" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

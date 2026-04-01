import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-[0.03] hidden lg:block">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1e3a8a" d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,78.6,-43.5C87.1,-29.6,92.3,-13.8,91.4,1.7C90.5,17.2,83.5,32.3,73.6,45.1C63.7,57.9,50.9,68.4,36.5,75.1C22.1,81.8,6.1,84.7,-10.1,83.1C-26.3,81.5,-42.7,75.4,-56.1,65.6C-69.5,55.8,-79.9,42.3,-85.4,27.1C-90.9,11.9,-91.5,-5,-86.9,-20.2C-82.3,-35.4,-72.5,-48.9,-60.1,-56.6C-47.7,-64.3,-32.7,-66.2,-18.8,-71.4C-4.9,-76.6,7.9,-85.1,23.4,-83.6C38.9,-82.1,44.7,-76.4,44.7,-76.4Z" transform="translate(200 200)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-6">
                Independent Solar Advisory
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Make the Right Decision About Solar
              </h1>
              <p className="text-xl lg:text-2xl text-slate-700 mb-6 font-medium leading-relaxed">
                Independent advice for businesses and homeowners in Mauritius considering solar energy.
              </p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
                Before committing to a significant investment, get clarity on costs, savings, system size, and the best approach for your situation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  Independent advice
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  No obligation
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  Mauritius-focused
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
                alt="Rooftop solar installation on a modern building"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </motion.div>
            
            {/* Memory Hook Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 max-w-[280px]"
            >
              <p className="text-lg font-semibold text-slate-900 mb-2">
                Clarity Before Commitment
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our role is simple: help you understand whether solar is worth it, and if it is, how to do it properly.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

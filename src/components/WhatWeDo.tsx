import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingDown, Home, Building2 } from 'lucide-react';

const services = [
  "Assess potential savings",
  "Recommend appropriate system size",
  "Advise on whether a battery is needed",
  "Compare supplier options",
  "Guide you through the decision process"
];

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b354bcadccea?auto=format&fit=crop&q=80&w=1920"
          alt="Solar battery storage background"
          className="w-full h-full object-cover opacity-[0.10]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center mb-24">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Independent Guidance for Informed Decisions
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We help you understand the opportunity, avoid costly mistakes, and make informed decisions about solar energy without the pressure of a sales pitch.
            </p>
            
            <div className="space-y-5">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0" />
                  <span className="text-lg text-slate-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 relative">
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Example Opportunities</h4>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm transition-all hover:bg-white/60">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-brand-accent" />
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Commercial</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    A school of this scale in Mauritius could potentially reduce electricity costs by several million rupees per year, subject to usage and site conditions.
                  </p>
                </div>

                <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm transition-all hover:bg-white/60">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-5 h-5 text-brand-accent" />
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Residential</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    A homeowner with a high electricity bill may significantly reduce monthly costs and improve energy independence with a properly sized system.
                  </p>
                </div>
              </div>

              <p className="mt-8 text-xs text-slate-400 italic text-center">
                * Figures are indicative and subject to detailed assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

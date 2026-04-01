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
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      A school with a monthly electricity bill in the range of Rs 300,000 – Rs 500,000 could typically support a solar system of approximately 250–400 kWp.
                    </p>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">This could translate to:</p>
                      <ul className="space-y-1 list-disc list-inside ml-2">
                        <li>Annual savings: <span className="font-semibold text-brand-primary">~Rs 3M – Rs 6M</span></li>
                        <li>Payback period: <span className="font-semibold text-brand-primary">~4–6 years</span></li>
                        <li>System lifetime value: <span className="font-semibold text-brand-primary">significant long-term cost reduction</span></li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-3">
                      Actual results depend on usage patterns, available roof space, and applicable CEB scheme.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm transition-all hover:bg-white/60">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-5 h-5 text-brand-accent" />
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-sm">Residential</span>
                  </div>
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    <p>
                      A homeowner with a monthly bill of Rs 8,000 – Rs 15,000 could typically benefit from a 5–10 kWp system.
                    </p>
                    <div>
                      <p className="font-bold text-slate-900 mb-2">This could result in:</p>
                      <ul className="space-y-1 list-disc list-inside ml-2">
                        <li>Monthly savings: <span className="font-semibold text-brand-primary">50–80% reduction</span></li>
                        <li>Payback period: <span className="font-semibold text-brand-primary">~4–7 years</span></li>
                        <li>Improved energy independence, especially with <span className="font-semibold text-brand-primary">future battery integration</span></li>
                      </ul>
                    </div>
                    <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-3">
                      The optimal setup depends heavily on daytime usage and future needs (e.g. EVs, air conditioning).
                    </p>
                  </div>
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

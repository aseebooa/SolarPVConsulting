import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const services = [
  "Assess potential savings",
  "Recommend appropriate system size",
  "Advise on whether a battery is needed",
  "Compare supplier options",
  "Guide you through the decision process"
];

export const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Independent Guidance for Informed Decisions
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We help businesses understand the opportunity, avoid costly mistakes, and make informed decisions about solar energy.
            </p>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-brand-primary mb-2">01</div>
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Assessment</p>
                <p className="text-xs text-slate-500">Deep dive into your energy usage patterns.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-brand-primary mb-2">02</div>
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Strategy</p>
                <p className="text-xs text-slate-500">Defining the optimal system configuration.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="text-3xl font-bold text-brand-primary mb-2">03</div>
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Selection</p>
                <p className="text-xs text-slate-500">Comparing quotes from trusted installers.</p>
              </div>
              <div className="bg-brand-primary p-8 rounded-2xl shadow-lg text-white">
                <p className="text-sm font-medium italic">
                  "Our goal is clarity, not a sale."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingDown, Home, Building2 } from 'lucide-react';

const services = [
  "Assess potential savings and payback",
  "Choose the right system size for your needs",
  "Select the right brand and technology",
  "Identify the right supplier and installer",
  "Avoid the pressure of a sales pitch"
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">What We Do</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Helping You Make the Right Choices
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We provide the independent clarity you need to navigate the entire solar journey. From technical specs to supplier selection, we ensure you get it right the first time.
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=1920"
                alt="Solar installation"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

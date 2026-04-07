import React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, Home, Building2 } from 'lucide-react';

export const ExampleOpportunities = () => {
  return (
    <section id="examples" className="relative py-24 overflow-hidden bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Real-World Examples</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            So what does this look like in practice?
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            Based on typical electricity usage patterns in Mauritius, here are indicative scenarios for commercial and residential solar investments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-wider text-sm">Commercial Opportunity</h4>
            </div>
            
            <div className="text-slate-600 leading-relaxed space-y-6">
              <p className="text-lg">
                A school with a monthly electricity bill in the range of Rs 300,000 – Rs 500,000 could typically support a solar system of approximately 250–400 kWp.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900 mb-4">This could translate to:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    <span>Annual savings: <span className="font-bold text-slate-900">~Rs 3M – Rs 6M</span></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    <span>Payback period: <span className="font-bold text-slate-900">~4–6 years</span></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    <span>System lifetime value: <span className="font-bold text-slate-900">significant long-term cost reduction</span></span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-slate-400 italic border-t border-slate-100 pt-4">
                Actual results depend on usage patterns, available roof space, and applicable CEB scheme.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-wider text-sm">Residential Opportunity</h4>
            </div>
            
            <div className="text-slate-600 leading-relaxed space-y-6">
              <p className="text-lg">
                A homeowner with a monthly bill of Rs 8,000 – Rs 15,000 could typically benefit from a 5–10 kWp system.
              </p>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900 mb-4">This could result in:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                    <span>Monthly savings: <span className="font-bold text-slate-900">50–80% reduction</span></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                    <span>Payback period: <span className="font-bold text-slate-900">~4–7 years</span></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                    <span>Improved energy independence, especially with <span className="font-bold text-slate-900">future battery integration</span></span>
                  </li>
                </ul>
              </div>
              <p className="text-xs text-slate-400 italic border-t border-slate-100 pt-4">
                The optimal setup depends heavily on daytime usage and future needs (e.g. EVs, air conditioning).
              </p>
            </div>
          </motion.div>
        </div>
        
        <p className="mt-12 text-center text-xs text-slate-400 italic">
          * Figures are indicative and subject to detailed assessment.
        </p>
      </div>
    </section>
  );
};

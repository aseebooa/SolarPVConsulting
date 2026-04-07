import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Clock, BarChart3, Wallet, AlertTriangle } from 'lucide-react';

const financialFactors = [
  {
    icon: TrendingUp,
    title: "Expected Savings",
    text: "How much you could realistically reduce your electricity bill based on your usage and system design."
  },
  {
    icon: Clock,
    title: "Payback Period",
    text: "How long it takes for the system to recover its cost through energy savings."
  },
  {
    icon: BarChart3,
    title: "Return on Investment",
    text: "How solar compares to other uses of your capital over the long term."
  },
  {
    icon: Wallet,
    title: "Cashflow Impact",
    text: "Whether the system reduces your monthly expenses from day one, especially when financing options are considered."
  },
  {
    icon: AlertTriangle,
    title: "Risk & Assumptions",
    text: "What factors can affect actual performance and savings, including usage patterns, tariffs, and system design."
  }
];

export const FinancialEvaluation = () => {
  return (
    <section id="financial-evaluation" className="relative py-24 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1920"
          alt="Financial analysis background"
          className="w-full h-full object-cover opacity-[0.08]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-6">Step 2: Clarity on the Numbers</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Is Solar a Good Investment?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Before anything else, you need to understand the financials. Solar is not just a technical decision — it’s a financial one.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-brand-primary text-sm font-bold">
            “We help you understand whether it actually makes sense before you commit.”
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {financialFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/60 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <factor.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{factor.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {factor.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-blue-50/50 border-l-4 border-brand-primary backdrop-blur-sm shadow-sm"
        >
          <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
            “We estimate savings and help you understand whether the investment makes financial sense.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

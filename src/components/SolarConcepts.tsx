import React from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, Battery, Activity, Maximize } from 'lucide-react';

const concepts = [
  {
    icon: Zap,
    title: "System Size (kWp)",
    description: "How much electricity your system can generate.",
    whyItMatters: "The biggest driver of both cost and savings. Oversizing or undersizing can significantly impact return on investment."
  },
  {
    icon: Cpu,
    title: "Inverter",
    description: "The component that converts solar energy into usable electricity.",
    whyItMatters: "Affects reliability, efficiency, and future flexibility of the system."
  },
  {
    icon: Battery,
    title: "Battery (Optional)",
    description: "Stores excess solar energy for use later, such as at night.",
    whyItMatters: "Not always necessary. Often misunderstood or oversold depending on usage patterns."
  },
  {
    icon: Activity,
    title: "Your Usage Pattern",
    description: "When and how your home or business uses electricity.",
    whyItMatters: "This is one of the most important factors in determining real savings — and one of the most commonly misunderstood."
  },
  {
    icon: Maximize,
    title: "Roof & Site Constraints",
    description: "The physical characteristics of your building or land.",
    whyItMatters: "Impacts how much solar can be installed and how efficiently it will perform."
  }
];

export const SolarConcepts = () => {
  return (
    <section id="understanding-solar" className="relative py-24 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1920"
          alt="Solar technology background"
          className="w-full h-full object-cover opacity-[0.08]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Understanding Solar</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            What Actually Matters
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            You don’t need to understand everything about solar. But a few key elements have a major impact on cost, performance, and long-term value.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/60 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <concept.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{concept.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {concept.description}
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">Why it matters</p>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {concept.whyItMatters}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 rounded-2xl bg-blue-50/50 border-l-4 border-brand-primary backdrop-blur-sm"
        >
          <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
            “The right solar system is not just about components — it’s about how everything fits your specific usage and goals.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

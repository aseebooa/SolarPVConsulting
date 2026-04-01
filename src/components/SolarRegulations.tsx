import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Ruler, Zap, RefreshCw } from 'lucide-react';

const regulations = [
  {
    icon: ClipboardList,
    title: "CEB Schemes & Eligibility",
    text: "Solar installations are governed by specific CEB schemes depending on whether you are a homeowner, business, or institution. Each scheme has its own rules, limits, and application process."
  },
  {
    icon: Ruler,
    title: "System Size & Constraints",
    text: "The size of your system is not only a design choice — it must also align with what is permitted under the applicable scheme and your electrical setup."
  },
  {
    icon: Zap,
    title: "Grid Connection & Approval",
    text: "Connecting to the grid requires compliance with technical standards and approval from the CEB, including system design validation and commissioning."
  },
  {
    icon: RefreshCw,
    title: "Exporting Energy to the Grid",
    text: "Depending on the scheme, excess electricity may be exported to the grid under net metering or other mechanisms. The financial benefit depends on how your system is structured."
  }
];

export const SolarRegulations = () => {
  return (
    <section id="solar-regulations" className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1920"
          alt="Mauritius landscape background"
          className="w-full h-full object-cover opacity-[0.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Local Expertise</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Navigating Solar Regulations in Mauritius
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            Solar systems in Mauritius must comply with specific Central Electricity Board (CEB) schemes and technical requirements. Understanding these is essential to avoid delays, rework, or incorrect system design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {regulations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white/60 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <item.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-blue-50/50 border-l-4 border-brand-primary backdrop-blur-sm shadow-sm"
          >
            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
              “Getting solar right in Mauritius is not just about installing panels — it’s about aligning with the right scheme, system size, and approval process.”
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 font-medium italic"
          >
            We help you understand how these rules apply to your situation, so you can make informed decisions before committing.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

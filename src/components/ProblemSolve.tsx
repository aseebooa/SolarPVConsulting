import React from 'react';
import { AlertCircle, XCircle } from 'lucide-react';

const mistakes = [
  {
    title: "System Sizing Errors",
    description: "Oversized systems waste capital; undersized systems fail to deliver expected savings."
  },
  {
    title: "Unnecessary Costs",
    description: "Paying for features or equipment that don't align with your actual usage profile."
  },
  {
    title: "Supplier Mismatch",
    description: "Choosing installers based on price alone without vetting technical capability or support."
  },
  {
    title: "Battery Misconceptions",
    description: "Investing in storage when it's not economically viable, or missing it when it's critical."
  }
];

export const ProblemSolve = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-red-500/20">
              <AlertCircle className="w-3 h-3 mr-2" />
              Risk Mitigation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Avoid Common Mistakes</h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Solar is a 20-year decision. Most mistakes happen in the first 30 days of planning. We help you navigate these pitfalls with helpful, objective analysis.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm italic text-slate-300">
                "Our role is to protect your investment by ensuring the technical solution matches the commercial reality."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {mistakes.map((mistake, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <XCircle className="w-5 h-5 text-red-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">{mistake.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

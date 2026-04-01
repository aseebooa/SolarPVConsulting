import React from 'react';
import { AlertCircle, XCircle, ShieldAlert } from 'lucide-react';

const mistakes = [
  {
    title: "Oversizing Systems",
    description: "Installing more capacity than your actual usage requires leads to wasted capital and poor ROI."
  },
  {
    title: "Wrong Technical Setup",
    description: "Choosing equipment or configurations that don't align with your specific site conditions or goals."
  },
  {
    title: "Paying More Than Necessary",
    description: "Without independent benchmarks, it's easy to overpay for systems or unnecessary features."
  },
  {
    title: "Misunderstanding Batteries",
    description: "Investing in storage when it's not economically viable, or choosing the wrong technology for your needs."
  },
  {
    title: "Usage Misalignment",
    description: "Failing to align system generation with your actual consumption patterns throughout the day."
  }
];

export const ProblemSolve = () => {
  return (
    <section id="avoid-mistakes" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-white"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-red-500/20">
              <ShieldAlert className="w-3 h-3 mr-2" />
              Risk Mitigation
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">Avoid Costly Mistakes</h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Solar is a 20-year decision. Most mistakes happen in the first 30 days of planning. We help you navigate these pitfalls with practical, objective analysis.
            </p>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <p className="text-lg italic text-slate-300 leading-relaxed">
                "Our role is to protect your investment by ensuring the technical solution matches your actual requirements."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {mistakes.map((mistake, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <XCircle className="w-6 h-6 text-red-400 mb-6" />
                <h4 className="text-xl font-bold mb-3">{mistake.title}</h4>
                <p className="text-slate-400 leading-relaxed">
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

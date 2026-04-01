import React from 'react';

const steps = [
  {
    number: "01",
    title: "Understand your situation",
    description: "We take the time to understand your usage, goals, and constraints through a low-pressure initial discussion."
  },
  {
    number: "02",
    title: "Provide clarity",
    description: "We assess the opportunity and outline realistic options, giving you a clear picture of potential costs and savings."
  },
  {
    number: "03",
    title: "Guide your decision",
    description: "We help you choose the right approach and avoid unnecessary costs, ensuring you move forward with confidence."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-we-work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">How We Work</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            A Simple, Reassuring Process
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            No pressure, no jargon. Just a clear path to the right decision for your energy future.
          </p>
        </div>
        
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white group">
                <div className="w-20 h-20 bg-brand-primary text-white rounded-3xl flex items-center justify-center text-3xl font-bold mb-10 shadow-xl shadow-blue-900/10 mx-auto lg:mx-0 group-hover:scale-105 transition-transform">
                  {step.number}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:text-left tracking-tight">{step.title}</h4>
                <p className="text-lg text-slate-600 leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

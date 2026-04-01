import React from 'react';

const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description: "We start by understanding your business operations and analyzing your current electricity usage patterns."
  },
  {
    number: "02",
    title: "Structured Assessment",
    description: "We perform a detailed technical and financial estimate of potential savings and outline suitable system options."
  },
  {
    number: "03",
    title: "Guided Decision",
    description: "We help you compare supplier quotes and choose the solution that offers the best long-term value."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">How We Work</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            A Simple, Reassuring Process
          </h3>
          <p className="text-lg text-slate-600">
            No pressure, no jargon. Just a clear path to the right decision.
          </p>
        </div>
        
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white">
                <div className="w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-8 shadow-lg shadow-blue-900/20 mx-auto lg:mx-0">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 text-center lg:text-left">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed text-center lg:text-left">
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

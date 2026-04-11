import React from 'react';
import { Shield, Target, Scale, Lightbulb, UserCheck } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Independent from Installers",
    description: "We are not tied to any installer or equipment manufacturer. Our loyalty is strictly to you and your best interests."
  },
  {
    icon: Scale,
    title: "Engineering-Led Thinking",
    description: "We use a rigorous, data-driven process to evaluate every aspect of your energy needs and potential solutions."
  },
  {
    icon: Target,
    title: "Focus on Your Outcome",
    description: "We focus on your specific goals and long-term energy security, not on selling you a particular system."
  },
  {
    icon: Lightbulb,
    title: "Structured Decision Process",
    description: "Our approach is designed to provide clarity at every step, helping you avoid costly mistakes and unnecessary risks."
  }
];

export const WhyUs = () => {
  return (
    <section id="why-work-with-us" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1920"
          alt="Solar inverter background"
          className="w-full h-full object-cover opacity-[0.12]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-6">Understand the Risks</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            Why Work With an Independent Advisor?
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Most people go directly to installers — but this can create problems. An installer’s goal is to sell you a system; our goal is to ensure that system actually makes sense for you.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-brand-primary text-sm font-bold">
            “Because once you commit, it becomes difficult and costly to reverse the decision.”
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 rounded-3xl border border-white/20 bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-all group">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <reason.icon className="w-7 h-7 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

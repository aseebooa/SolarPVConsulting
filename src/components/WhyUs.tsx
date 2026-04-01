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
    <section id="why-work-with-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Why Work With Navig-8</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Expertise Built on Trust and Independence
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            We bridge the gap between complex energy technology and practical decisions, positioning ourselves as your dedicated decision guide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
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

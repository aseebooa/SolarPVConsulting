import React from 'react';
import { Shield, Target, Zap, Lightbulb, Scale } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Independent Advice",
    description: "We are not tied to any installer or equipment manufacturer. Our loyalty is to you."
  },
  {
    icon: Target,
    title: "Outcome Focused",
    description: "We focus strictly on your business goals, ROI, and long-term energy security."
  },
  {
    icon: Scale,
    title: "Structured Approach",
    description: "We use a rigorous engineering-led process to evaluate every aspect of your project."
  },
  {
    icon: Lightbulb,
    title: "Risk Reduction",
    description: "Our expertise is designed to identify and mitigate risks before they become costly errors."
  }
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Why Work With Us</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Expertise Built on Trust and Independence
          </h3>
          <p className="text-lg text-slate-600">
            We bridge the gap between complex energy technology and practical business decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-all">
                <reason.icon className="w-6 h-6 text-brand-primary group-hover:text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

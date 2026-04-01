import React from 'react';

export const TrustSection = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-8">Our Approach</h2>
        <blockquote className="text-2xl sm:text-3xl font-medium text-slate-900 leading-tight mb-8">
          “We focus on clarity, not sales. Our role is to help you make the right decision — even if that means deciding not to proceed.”
        </blockquote>
        <div className="w-12 h-1 bg-brand-accent mx-auto mb-8"></div>
        <p className="text-lg text-slate-600 font-medium">
          We believe the best outcomes come from informed decisions.
        </p>
      </div>
    </section>
  );
};

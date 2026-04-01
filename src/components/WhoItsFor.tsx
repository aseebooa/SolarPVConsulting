import React from 'react';
import { Building2, Home, CheckCircle2, School, Warehouse, ShoppingCart, Briefcase, Factory } from 'lucide-react';

export const WhoItsFor = () => {
  return (
    <section id="who-we-work-with" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Who We Work With</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Tailored Guidance for Your Context
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you are managing a large facility or planning your family home, we provide the clarity needed to make a sound investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Commercial Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Building2 className="w-8 h-8 text-brand-primary" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Commercial Clients</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              For businesses and organisations with significant electricity bills looking for long-term operational cost reduction.
            </p>
            
            <div className="space-y-6 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Typical Organisations</p>
                  <p className="text-sm text-slate-600">Schools, offices, supermarkets, warehouses, and SMEs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Strategic Focus</p>
                  <p className="text-sm text-slate-600">Cost reduction, ROI analysis, and system scalability.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="grid grid-cols-3 gap-4 opacity-40">
                <School className="w-6 h-6" />
                <ShoppingCart className="w-6 h-6" />
                <Warehouse className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Residential Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Home className="w-8 h-8 text-brand-primary" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Residential Clients</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              For homeowners planning solar systems to reduce monthly costs and improve energy independence.
            </p>
            
            <div className="space-y-6 mb-10 flex-grow">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Project Types</p>
                  <p className="text-sm text-slate-600">New builds, major retrofits, or high-usage households.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-50 p-1 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Strategic Focus</p>
                  <p className="text-sm text-slate-600">Bill reduction, battery storage, and future-proofing (EV integration).</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50">
              <div className="grid grid-cols-3 gap-4 opacity-40">
                <Home className="w-6 h-6" />
                <Briefcase className="w-6 h-6" />
                <Factory className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

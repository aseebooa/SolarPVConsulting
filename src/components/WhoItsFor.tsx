import React from 'react';
import { Building2, School, Warehouse, ShoppingCart, Briefcase, Factory } from 'lucide-react';

const sectors = [
  { icon: School, name: "Schools & Institutions" },
  { icon: ShoppingCart, name: "Supermarkets & Retail" },
  { icon: Building2, name: "Offices & Commercial" },
  { icon: Warehouse, name: "Warehouses & Logistics" },
  { icon: Factory, name: "SMEs & Light Industry" },
  { icon: Briefcase, name: "Professional Services" }
];

export const WhoItsFor = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Who This Is For</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Tailored for Mauritian Commercial Clients
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              We specialize in helping organizations that want to reduce operational costs and carbon footprint without taking unnecessary risks.
            </p>
            <ul className="space-y-4">
              {[
                "Businesses with significant electricity bills",
                "Organisations exploring solar for the first time",
                "Decision-makers who want clarity before investing"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <sector.icon className="w-8 h-8 text-brand-primary mb-4" />
                <span className="text-sm font-semibold text-slate-800">{sector.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

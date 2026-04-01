import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LegalSectionProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const LegalSection: React.FC<LegalSectionProps> = ({ title, icon: Icon, children }) => {
  return (
    <div className="py-10 border-b border-slate-100 last:border-0">
      <div className="flex items-start gap-4 mb-6">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-brand-primary" />
          </div>
        )}
        <h2 className="text-2xl font-bold text-slate-900 pt-1">{title}</h2>
      </div>
      <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-900 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

interface CalloutBoxProps {
  children: React.ReactNode;
}

export const CalloutBox: React.FC<CalloutBoxProps> = ({ children }) => {
  return (
    <div className="my-8 p-6 bg-slate-50 border-l-4 border-brand-accent rounded-r-xl">
      <p className="text-lg font-medium text-slate-700 italic leading-relaxed">
        {children}
      </p>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';

interface LegalPageProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, subtitle, effectiveDate, children }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100 overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920"
            alt="Solar PV background"
            className="w-full h-full object-cover opacity-[0.08]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
        </div>

        <div className="absolute top-0 right-0 z-0 w-1/3 h-full opacity-5 hidden lg:block">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1e3a8a" d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,78.6,-43.5C87.1,-29.6,92.3,-13.8,91.4,1.7C90.5,17.2,83.5,32.3,73.6,45.1C63.7,57.9,50.9,68.4,36.5,75.1C22.1,81.8,6.1,84.7,-10.1,83.1C-26.3,81.5,-42.7,75.4,-56.1,65.6C-69.5,55.8,-79.9,42.3,-85.4,27.1C-90.9,11.9,-91.5,-5,-86.9,-20.2C-82.3,-35.4,-72.5,-48.9,-60.1,-56.6C-47.7,-64.3,-32.7,-66.2,-18.8,-71.4C-4.9,-76.6,7.9,-85.1,23.4,-83.6C38.9,-82.1,44.7,-76.4,44.7,-76.4Z" transform="translate(200 200)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
              {subtitle}
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
              Effective Date: {effectiveDate}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

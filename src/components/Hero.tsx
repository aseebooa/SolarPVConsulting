import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

const questions = [
  {
    text: "I'm interested in Solar - Who should I contact?",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    delay: 0.1
  },
  {
    text: "What system do I need?",
    color: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
    delay: 0.2
  },
  {
    text: "Which is the right brand to choose?",
    color: "bg-slate-50 text-slate-700 border-slate-200",
    delay: 0.3
  },
  {
    text: "Who can install and set it up professionally for me?",
    color: "bg-blue-50 text-blue-700 border-blue-100",
    delay: 0.4
  },
  {
    text: "Should I prioritise cost or system quality?",
    color: "bg-slate-50 text-slate-700 border-slate-200",
    delay: 0.5
  },
  {
    text: "How do I know a local supplier is not just a seller but knows the system inside out?",
    color: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
    delay: 0.6
  }
];

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Professional Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800"
          alt="Solar PV background"
          className="w-full h-full object-cover opacity-[0.12]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-semibold uppercase tracking-wider">
                  Independent Solar Advisory
                </span>
                <div className="flex flex-col w-5 h-3.5 overflow-hidden rounded-sm shadow-sm border border-slate-100">
                  <div className="flex-1 bg-[#EA2839]"></div>
                  <div className="flex-1 bg-[#1A206D]"></div>
                  <div className="flex-1 bg-[#FFD500]"></div>
                  <div className="flex-1 bg-[#00A551]"></div>
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Make the Right Decisions About Solar
              </h1>
              <p className="text-xl lg:text-2xl text-slate-700 mb-6 font-medium leading-relaxed">
                Independent advice for businesses and homeowners in Mauritius. We help you choose the right system, the right brand, the right supplier, and the right installer.
              </p>
              <p className="text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
                Understand your potential savings, payback, and whether solar is worth it — before you commit to the wrong setup.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary/90 transition-all shadow-lg shadow-blue-900/10"
                >
                  Request a Discussion
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={BUSINESS_DETAILS.whatsappLink}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5 text-green-600" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=1920"
                alt="Solar panels with sun flare"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </motion.div>
            
            {/* Memory Hook Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 max-w-[280px]"
            >
              <p className="text-lg font-semibold text-slate-900 mb-2">
                Clarity Before Commitment
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our role is simple: help you understand whether solar is worth it, and if it is, how to do it properly.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Integrated Thinking Bubbles */}
        <div className="mt-24 pt-12 border-t border-slate-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-4">
              <HelpCircle className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">The Problem We Solve</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Does this sound like you?
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
            {questions.map((q, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + q.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative p-5 sm:p-6 rounded-[1.5rem] border ${q.color} shadow-sm max-w-[300px] flex items-center justify-center text-center transition-all cursor-default`}
              >
                <p className="text-sm sm:text-base font-semibold leading-relaxed">
                  "{q.text}"
                </p>
                
                {/* Decorative "tail" for the bubble */}
                <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b ${q.color.split(' ')[0]} ${q.color.split(' ')[2]}`}></div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 italic text-base">
              Navig-8 provides independent, engineering-led clarity to every one of these questions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

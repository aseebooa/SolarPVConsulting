import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, MessageCircle, Info, CheckCircle2, TrendingUp, Wallet, Clock } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

type ClientType = 'Business' | 'Home';

interface EstimationResult {
  annualSavings: [number, number];
  investment: [number, number];
  payback: [number, number];
  suitability: string;
  advisory: string;
  fit: 'Strong fit' | 'Worth exploring' | 'Needs tailored review';
}

const BILL_OPTIONS = {
  Business: [
    { label: 'Under Rs 10,000', value: 'under_10k' },
    { label: 'Rs 10,000 – 25,000', value: '10k_25k' },
    { label: 'Rs 25,000 – 50,000', value: '25k_50k' },
    { label: 'Rs 50,000 – 100,000', value: '50k_100k' },
    { label: 'Above Rs 100,000', value: 'above_100k' },
  ],
  Home: [
    { label: 'Under Rs 2,500', value: 'under_2.5k' },
    { label: 'Rs 2,500 – 5,000', value: '2.5k_5k' },
    { label: 'Rs 5,000 – 10,000', value: '5k_10k' },
    { label: 'Rs 10,000 – 20,000', value: '10k_20k' },
    { label: 'Above Rs 20,000', value: 'above_20k' },
  ],
};

const OBJECTIVES = [
  { label: 'Lower my electricity bill', value: 'lower_bill' },
  { label: 'Best long-term return', value: 'roi' },
  { label: 'More energy independence', value: 'independence' },
  { label: 'Plan for EV / future demand', value: 'future' },
];

const USAGE_PATTERNS = [
  { label: 'Mostly daytime', value: 'daytime' },
  { label: 'Mixed day and evening', value: 'mixed' },
  { label: 'Mostly evening / night', value: 'evening' },
];

const BATTERY_INTEREST = [
  { label: 'Probably not', value: 'no' },
  { label: 'Maybe', value: 'maybe' },
  { label: 'Yes', value: 'yes' },
];

export const ROIEstimator = () => {
  const [clientType, setClientType] = useState<ClientType>('Business');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [objective, setObjective] = useState('');
  const [usagePattern, setUsagePattern] = useState('');
  const [batteryInterest, setBatteryInterest] = useState('');
  const [results, setResults] = useState<EstimationResult | null>(null);

  const calculateROI = () => {
    if (!monthlyBill || !objective || !usagePattern || !batteryInterest) return;

    let annualSavings: [number, number] = [0, 0];
    let investment: [number, number] = [0, 0];
    let payback: [number, number] = [0, 0];
    let fit: EstimationResult['fit'] = 'Worth exploring';

    // Base Heuristics
    if (clientType === 'Business') {
      switch (monthlyBill) {
        case 'under_10k':
          investment = [120000, 300000];
          annualSavings = [18000, 60000];
          payback = [4, 7];
          break;
        case '10k_25k':
          investment = [300000, 700000];
          annualSavings = [70000, 180000];
          payback = [4, 6];
          break;
        case '25k_50k':
          investment = [700000, 1800000];
          annualSavings = [180000, 420000];
          payback = [4, 6];
          break;
        case '50k_100k':
          investment = [1800000, 4000000];
          annualSavings = [420000, 900000];
          payback = [4, 6];
          break;
        case 'above_100k':
          investment = [4000000, 6000000]; // 6M as a placeholder cap for range
          annualSavings = [900000, 1500000];
          payback = [4, 7];
          fit = 'Needs tailored review';
          break;
      }
    } else {
      switch (monthlyBill) {
        case 'under_2.5k':
          investment = [80000, 180000];
          annualSavings = [10000, 24000];
          payback = [5, 8];
          break;
        case '2.5k_5k':
          investment = [180000, 350000];
          annualSavings = [24000, 54000];
          payback = [5, 7];
          break;
        case '5k_10k':
          investment = [350000, 700000];
          annualSavings = [54000, 120000];
          payback = [4, 7];
          break;
        case '10k_20k':
          investment = [700000, 1600000];
          annualSavings = [120000, 240000];
          payback = [4, 7];
          break;
        case 'above_20k':
          investment = [1600000, 2500000];
          annualSavings = [240000, 400000];
          payback = [4, 7];
          break;
      }
    }

    // Adjustments
    if (usagePattern === 'daytime') {
      annualSavings = [annualSavings[0] * 1.1, annualSavings[1] * 1.1];
      payback = [Math.max(3, payback[0] - 0.5), payback[1] - 0.5];
      fit = 'Strong fit';
    } else if (usagePattern === 'evening') {
      annualSavings = [annualSavings[0] * 0.9, annualSavings[1] * 0.9];
      payback = [payback[0] + 0.5, payback[1] + 0.5];
    }

    if (batteryInterest === 'yes') {
      investment = [investment[0] * 1.4, investment[1] * 1.5];
    }

    // Suitability Note
    let suitability = "Your profile appears well suited to solar, especially with strong daytime usage.";
    if (usagePattern === 'evening') {
      suitability = "Solar may still be worthwhile, but evening-heavy usage may affect returns without a battery.";
    }
    if (batteryInterest === 'yes' || batteryInterest === 'maybe') {
      suitability += " A battery may be worth discussing depending on your backup or evening energy goals.";
    }

    // Advisory Note
    let advisory = "This is a first-level estimate designed to help you assess financial potential. A more accurate recommendation depends on your actual consumption profile, site conditions, and system design.";
    if (objective === 'future') {
      advisory += " Since you are planning for future demand (like an EV), we should size the system to account for that growth.";
    }

    setResults({
      annualSavings: [Math.round(annualSavings[0] / 1000) * 1000, Math.round(annualSavings[1] / 1000) * 1000],
      investment: [Math.round(investment[0] / 1000) * 1000, Math.round(investment[1] / 1000) * 1000],
      payback: [Math.round(payback[0] * 2) / 2, Math.round(payback[1] * 2) / 2],
      suitability,
      advisory,
      fit
    });
  };

  const formatCurrency = (val: number) => {
    if (val >= 1000000) return `Rs ${(val / 1000000).toFixed(1)}M`;
    return `Rs ${val.toLocaleString()}`;
  };

  return (
    <section id="roi-estimator" className="relative py-24 overflow-hidden bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Quick ROI Estimator</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            See the Potential
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed">
            Get a simple first indication of potential savings, investment level, and payback — based on a few quick inputs.
          </p>
          <p className="mt-4 text-xs text-slate-400 italic">
            Indicative only. Final results depend on usage profile, site conditions, tariffs, and system design.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Form Side */}
              <div className="lg:w-1/2 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="space-y-8">
                  {/* Client Type */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">I am a...</label>
                    <div className="flex p-1 bg-slate-100 rounded-2xl">
                      {(['Business', 'Home'] as ClientType[]).map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setClientType(type);
                            setMonthlyBill('');
                            setResults(null);
                          }}
                          className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${
                            clientType === type
                              ? 'bg-white text-brand-primary shadow-sm'
                              : 'text-slate-500 hover:text-slate-700'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Bill */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Average Monthly Bill</label>
                    <select
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select range...</option>
                      {BILL_OPTIONS[clientType].map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Objective */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Main Objective</label>
                    <select
                      value={objective}
                      onChange={(e) => setObjective(e.target.value)}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select objective...</option>
                      {OBJECTIVES.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Usage Pattern */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Usage Pattern</label>
                    <select
                      value={usagePattern}
                      onChange={(e) => setUsagePattern(e.target.value)}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select pattern...</option>
                      {USAGE_PATTERNS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Battery Interest */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Battery Interest</label>
                    <select
                      value={batteryInterest}
                      onChange={(e) => setBatteryInterest(e.target.value)}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-700 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select interest...</option>
                      {BATTERY_INTEREST.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={calculateROI}
                    disabled={!monthlyBill || !objective || !usagePattern || !batteryInterest}
                    className="w-full py-5 bg-brand-primary text-white font-bold rounded-2xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Estimate My ROI
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-slate-400 justify-center">
                    <Info className="w-4 h-4" />
                    <span>This tool provides a practical first estimate — not a sales pitch.</span>
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="lg:w-1/2 bg-slate-50/50 p-8 lg:p-12 flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  {!results ? (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                        <Calculator className="w-10 h-10 text-slate-300" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Ready to calculate</h4>
                        <p className="text-slate-500">Complete the form to see your indicative solar ROI.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-bold text-slate-900">Your ROI Estimate</h4>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                          results.fit === 'Strong fit' ? 'bg-green-100 text-green-700' : 
                          results.fit === 'Worth exploring' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {results.fit}
                        </span>
                      </div>

                      <div className="grid gap-4">
                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
                          <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Annual Savings</p>
                            <p className="text-2xl font-bold text-slate-900">
                              {formatCurrency(results.annualSavings[0])} – {formatCurrency(results.annualSavings[1])}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                            <Wallet className="w-6 h-6 text-brand-primary" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Indicative Investment</p>
                            <p className="text-2xl font-bold text-slate-900">
                              {formatCurrency(results.investment[0])} – {formatCurrency(results.investment[1])}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-5">
                          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                            <Clock className="w-6 h-6 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated Payback</p>
                            <p className="text-2xl font-bold text-slate-900">
                              {results.payback[0]} – {results.payback[1]} years
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 leading-relaxed">{results.suitability}</p>
                        </div>
                        <div className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-brand-primary">
                          <p className="text-xs text-slate-600 leading-relaxed italic">
                            {results.advisory}
                          </p>
                        </div>
                      </div>

                      <div className="pt-4 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href="#contact"
                            className="flex-1 py-4 bg-brand-primary text-white text-center font-bold rounded-xl hover:bg-brand-primary/90 transition-all"
                          >
                            Request a Discussion
                          </a>
                          <a
                            href={BUSINESS_DETAILS.whatsappLink}
                            className="flex-1 py-4 bg-white border border-slate-200 text-slate-700 text-center font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                          >
                            <MessageCircle className="w-5 h-5 text-green-600" />
                            WhatsApp
                          </a>
                        </div>
                        <p className="text-center text-xs text-slate-400">
                          Have a recent electricity bill? Share it for a more tailored review.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

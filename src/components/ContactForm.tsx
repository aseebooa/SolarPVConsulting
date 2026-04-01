import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../constants';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      contact: formData.get('contact'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again or contact us via WhatsApp.');
      setStatus('idle');
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1920"
          alt="Solar technology background"
          className="w-full h-full object-cover opacity-[0.10]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16 bg-brand-primary text-white">
              <h2 className="text-3xl font-bold mb-6">Start With a Conversation</h2>
              <p className="text-lg text-blue-100 mb-10">
                If you are considering solar, we’re happy to discuss your situation and share initial insights. No pressure, just clarity.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">WhatsApp</p>
                    <p className="font-medium">{BUSINESS_DETAILS.whatsapp}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <a
                  href={BUSINESS_DETAILS.whatsappLink}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-white text-brand-primary font-bold hover:bg-blue-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="p-8 sm:p-12 lg:p-16">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. We will get back to you shortly to schedule a discussion.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-brand-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Company</label>
                      <input
                        required
                        name="company"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email or Phone</label>
                    <input
                      required
                      name="contact"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                      placeholder="How can we reach you?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                      placeholder="Briefly describe your situation"
                    ></textarea>
                  </div>
                  <button
                    disabled={status === 'submitting'}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-primary text-white font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-blue-900/10 disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Request a Discussion'}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center uppercase tracking-wider mt-4">
                    By using this website, you acknowledge our Privacy Policy and Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

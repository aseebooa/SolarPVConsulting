import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS, NAVIGATION_LINKS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage && href.startsWith('#')) {
      // Navigation to anchor from another page is handled by the browser if we use Link to="/"
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-100' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col group">
              <span className="text-2xl font-bold tracking-tighter text-brand-primary group-hover:text-brand-accent transition-colors leading-none">
                NAVIG<span className="text-brand-accent group-hover:text-brand-primary transition-colors">-8</span>
              </span>
              <div className="flex items-center mt-1">
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Energy Advisory
                </span>
                <div className="ml-2 flex flex-col w-3.5 h-2.5 overflow-hidden rounded-sm shadow-sm opacity-80">
                  <div className="flex-1 bg-[#EA2839]"></div>
                  <div className="flex-1 bg-[#1A206D]"></div>
                  <div className="flex-1 bg-[#FFD500]"></div>
                  <div className="flex-1 bg-[#00A551]"></div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                className="text-sm font-bold text-slate-600 hover:text-brand-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BUSINESS_DETAILS.whatsappLink}
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-brand-primary hover:bg-brand-primary/90 transition-all shadow-md shadow-blue-900/10 uppercase tracking-widest"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-primary p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-8 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-5 text-base font-bold text-slate-600 hover:text-brand-primary border-b border-slate-50 uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 px-4">
                <a
                  href={BUSINESS_DETAILS.whatsappLink}
                  className="flex items-center justify-center w-full px-6 py-4 border border-transparent text-base font-bold rounded-full text-white bg-brand-primary shadow-lg shadow-blue-900/10 uppercase tracking-widest"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

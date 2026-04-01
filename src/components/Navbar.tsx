import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS, NAVIGATION_LINKS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      // If not on home page, navigation to anchors won't work directly
      // This is a simple implementation, ideally we'd navigate to / and then scroll
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold tracking-tighter text-brand-primary">
                NAVIG<span className="text-brand-accent">-8</span>
              </span>
              <span className="ml-2 text-xs uppercase tracking-widest text-slate-400 font-medium hidden sm:block">
                Energy Advisory
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BUSINESS_DETAILS.whatsappLink}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-brand-primary hover:bg-brand-primary/90 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-primary p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-brand-primary border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={BUSINESS_DETAILS.whatsappLink}
                  className="flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-brand-primary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

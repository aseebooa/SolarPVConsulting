import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { WhyUs } from './components/WhyUs';
import { ProblemSolve } from './components/ProblemSolve';
import { HowItWorks } from './components/HowItWorks';
import { WhoItsFor } from './components/WhoItsFor';
import { TrustSection } from './components/TrustSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <WhyUs />
        <ProblemSolve />
        <HowItWorks />
        <WhoItsFor />
        <TrustSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

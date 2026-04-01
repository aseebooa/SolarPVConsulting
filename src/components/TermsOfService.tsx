import React from 'react';
import { LegalPage } from './LegalPage';
import { LegalSection, CalloutBox } from './LegalComponents';
import { BUSINESS_DETAILS } from '../constants';
import { Gavel, Info, Target, ShieldCheck, AlertCircle, Lock, FileText, Globe, Mail } from 'lucide-react';

export const TermsOfService = () => {
  return (
    <LegalPage 
      title="Terms of Service" 
      subtitle="How we work and what you can expect from us"
      effectiveDate={BUSINESS_DETAILS.effectiveDate}
    >
      <CalloutBox>
        All estimates and projections provided by Navig-8 Energy Advisory are indicative and not guaranteed. Our goal is to provide you with the most accurate independent advice to guide your decision-making.
      </CalloutBox>

      <LegalSection title="1. Nature of Services" icon={Info}>
        <p>
          Navig-8 Energy Advisory provides independent energy consultancy and advisory services. We are <strong>not</strong> equipment suppliers, installers, or contractors. Our role is to provide analysis, recommendations, and guidance to help commercial clients make informed decisions regarding solar energy and energy efficiency.
        </p>
      </LegalSection>

      <LegalSection title="2. Advisory Only" icon={Target}>
        <p>
          Any assessments, savings projections, or technical recommendations provided are <strong>indicative only</strong>. While we use industry-standard methods and available data to provide accurate estimates, actual performance and savings depend on numerous factors beyond our control, including weather, future electricity tariffs, and system maintenance.
        </p>
      </LegalSection>

      <LegalSection title="3. Client Responsibilities" icon={FileText}>
        <p>To provide accurate advice, we rely on information provided by the client (such as electricity bills, site access, and operational data). The client is responsible for:</p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Providing accurate and complete information</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Conducting their own due diligence on any third-party installers or equipment recommended</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Making the final decision on any investments or contracts</span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. No Guarantees" icon={AlertCircle}>
        <p>
          We do not guarantee specific financial outcomes, energy savings, or the performance of third-party equipment or installers. Any decision to proceed with a solar installation or energy project remains the sole responsibility of the client.
        </p>
      </LegalSection>

      <LegalSection title="5. Limitation of Liability" icon={ShieldCheck}>
        <p>
          To the maximum extent permitted by law, Navig-8 Energy Advisory shall not be liable for any direct, indirect, or consequential losses arising from the use of our advice or the performance of systems installed by third parties.
        </p>
      </LegalSection>

      <LegalSection title="6. Confidentiality" icon={Lock}>
        <p>
          We treat all client information as confidential and will not disclose sensitive business data to third parties without your consent, except where required for service delivery or by law.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual Property" icon={Gavel}>
        <p>
          All reports, assessments, and materials provided to the client are for their internal use only and remain the intellectual property of Navig-8 Energy Advisory unless otherwise agreed in writing.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing Law" icon={Globe}>
        <p>
          These terms are governed by the laws of the Republic of Mauritius. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mauritius.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us" icon={Mail}>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="flex-grow">
            <p className="text-slate-600 mb-4">If you have any questions regarding these terms, please contact us:</p>
            <div className="space-y-2">
              <p className="text-slate-900 font-bold">Email: <span className="text-brand-primary font-medium">{BUSINESS_DETAILS.email}</span></p>
              <p className="text-slate-900 font-bold">WhatsApp: <span className="text-brand-primary font-medium">{BUSINESS_DETAILS.whatsapp}</span></p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all whitespace-nowrap"
          >
            Request Discussion
          </a>
        </div>
      </LegalSection>
    </LegalPage>
  );
};

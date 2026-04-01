import React from 'react';
import { LegalPage } from './LegalPage';
import { LegalSection, CalloutBox } from './LegalComponents';
import { BUSINESS_DETAILS } from '../constants';
import { Shield, Info, Database, Eye, Scale, Share2, Clock, UserCheck, Lock, Mail } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <LegalPage 
      title="Privacy Policy" 
      subtitle="How we collect, use, and protect your information"
      effectiveDate={BUSINESS_DETAILS.effectiveDate}
    >
      <CalloutBox>
        This policy is designed to ensure your data is handled responsibly and transparently. We are committed to protecting your personal data and handling it with the highest level of care.
      </CalloutBox>

      <LegalSection title="1. Introduction" icon={Info}>
        <p>
          Navig-8 Energy Advisory ("we", "us", or "our") is committed to protecting personal data and handling it responsibly. This policy describes how personal data is collected, used, and protected when users visit our website or contact our business.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect" icon={Database}>
        <p>We may collect information that you voluntarily provide to us, including but not limited to:</p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Name and contact information</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Company name and business details</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Phone number and email address</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Electricity bills or supporting documents submitted for assessment</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Information provided in website enquiries or messages</span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information" icon={Eye}>
        <p>The information we collect may be used to:</p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Respond to your enquiries and provide advisory services</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Assess potential solar or energy-saving opportunities for your business</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Communicate with you via phone, WhatsApp, or email</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Improve the quality of our services and website experience</span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Legal Basis for Processing" icon={Scale}>
        <p>
          We process your data because you have contacted us, consented to provide information, or the information is necessary to respond to a request or potential engagement.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Sharing" icon={Share2}>
        <p>
          <strong>We do not sell personal data.</strong> Information may be shared with trusted third parties only where necessary for service delivery or with the client’s knowledge (for example, with installers or technical partners if you wish to proceed with a project).
        </p>
      </LegalSection>

      <LegalSection title="6. Data Retention" icon={Clock}>
        <p>
          Data is kept only as long as reasonably necessary for service delivery, follow-up, record-keeping, or to comply with legal obligations.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights" icon={UserCheck}>
        <p>You have the right to request:</p>
        <ul className="list-none space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Access to the personal data we hold about you</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Correction of any inaccurate data</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Deletion of your data where appropriate</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span>Withdrawal of your consent at any time</span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="8. Data Security" icon={Lock}>
        <p>
          We take reasonable steps to protect personal information from unauthorised access, misuse, or loss. However, no method of transmission over the internet is 100% secure.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact" icon={Mail}>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="flex-grow">
            <p className="text-slate-600 mb-4">If you have any questions about this policy, please reach out to us:</p>
            <div className="space-y-2">
              <p className="text-slate-900 font-bold">Email: <span className="text-brand-primary font-medium">{BUSINESS_DETAILS.email}</span></p>
              <p className="text-slate-900 font-bold">WhatsApp: <span className="text-brand-primary font-medium">{BUSINESS_DETAILS.whatsapp}</span></p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </LegalSection>

      <LegalSection title="10. Updates to This Policy" icon={Shield}>
        <p>
          This policy may be updated from time to time. The latest version will always be posted on our website.
        </p>
      </LegalSection>
    </LegalPage>
  );
};

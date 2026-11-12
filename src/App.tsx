/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessSteps } from './components/ProcessSteps';
import { IndustrySolutions } from './components/IndustrySolutions';
import { LiveAssistantDemo } from './components/LiveAssistantDemo';
import { RoiCalculator } from './components/RoiCalculator';
import { SecurityCompliance } from './components/SecurityCompliance';
import { AboutFounder } from './components/AboutFounder';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<'impressum' | 'datenschutz'>('impressum');

  const scrollToContact = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenImpressum = () => {
    setLegalModalTab('impressum');
    setLegalModalOpen(true);
  };

  const handleOpenDatenschutz = () => {
    setLegalModalTab('datenschutz');
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Bar following Top Bar Contract */}
      <Navbar onOpenContact={scrollToContact} onOpenDemo={scrollToDemo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenContact={scrollToContact} onOpenDemo={scrollToDemo} />

        {/* Process / 3 Steps */}
        <ProcessSteps onOpenContact={scrollToContact} />

        {/* Industry Solutions (KMU, Pflege, Handwerk, Kanzlei) */}
        <IndustrySolutions onOpenContact={scrollToContact} />

        {/* Interactive Live Assistant Sandbox */}
        <LiveAssistantDemo onOpenContact={scrollToContact} />

        {/* ROI and Time Savings Calculator */}
        <RoiCalculator onOpenContact={scrollToContact} />

        {/* Security & GDPR First */}
        <SecurityCompliance />

        {/* About Thomas Meyer / Founder & Regional trust */}
        <AboutFounder onOpenContact={scrollToContact} />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact and Potential Analysis Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenImpressum={handleOpenImpressum}
        onOpenDatenschutz={handleOpenDatenschutz}
      />

      {/* Mobile Sticky Quick Dock (Thumb-zone optimization) */}
      <MobileQuickBar
        onOpenContact={scrollToContact}
        onOpenDemo={scrollToDemo}
      />

      {/* Legal Modal (Impressum / Datenschutz) */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalModalTab}
      />
    </div>
  );
}

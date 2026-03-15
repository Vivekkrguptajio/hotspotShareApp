import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ScreenshotsSection from '../components/ScreenshotsSection';
import PrivacyPolicySection from '../components/PrivacyPolicySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ScreenshotsSection />
        <PrivacyPolicySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

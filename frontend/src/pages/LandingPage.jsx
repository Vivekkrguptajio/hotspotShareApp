import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SecurityTipsSection from '../components/SecurityTipsSection';
import ScreenshotsSection from '../components/ScreenshotsSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SecurityTipsSection />
        <ScreenshotsSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;

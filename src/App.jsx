import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import DualAudience from './components/DualAudience';
import FeaturesShowcase from './components/FeaturesShowcase';
import CallToActionFooter from './components/CallToActionFooter';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <DualAudience />
      <FeaturesShowcase />
      <CallToActionFooter />
    </div>
  );
}

export default App;
import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import DualAudience from './components/DualAudience';
import FeaturesShowcase from './components/FeaturesShowcase';
import CallToActionFooter from './components/CallToActionFooter';
import MapComponent from './components/MapComponent'; // Import the new MapComponent

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <DualAudience />
      <FeaturesShowcase />
      
      {/* Adding the MapComponent here for demonstration */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-12">
            Explore Issues on the <span className="text-yellow-400">Map</span>
          </h2>
          <MapComponent />
        </div>
      </section>

      <CallToActionFooter />
    </div>
  );
}

export default App;
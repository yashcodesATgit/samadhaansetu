import React from 'react';
import { ArrowRight, MapPin, Camera, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Citizens.{' '}
              <span className="text-yellow-400">Fixing Cities.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Report civic issues like potholes, broken lights, and garbage in real-time — 
              and track resolutions instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Report an Issue</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Explore Map</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">5,247</div>
                <div className="text-sm text-gray-400">Issues Reported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">4,891</div>
                <div className="text-sm text-gray-400">Issues Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-400">93%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl">
              {/* Mock Phone Interface */}
              <div className="bg-white rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-400 p-2 rounded-lg">
                    <Camera className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <div className="text-black font-semibold">Report Issue</div>
                    <div className="text-gray-500 text-sm">Pothole on Main Street</div>
                  </div>
                </div>
                <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-500" />
                </div>
                <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold">
                  Submit Report
                </button>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 p-3 rounded-full">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
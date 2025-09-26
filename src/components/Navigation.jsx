import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <MapPin className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-black">CivicFix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="text-gray-700 hover:text-black transition-colors font-medium">
              Features
            </a>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Report Issue
            </button>
            <button className="text-black border-2 border-black px-6 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
              Admin Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <a href="#how-it-works" className="block text-gray-700 hover:text-black transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="block text-gray-700 hover:text-black transition-colors font-medium">
              Features
            </a>
            <div className="space-y-3 pt-4">
              <button className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Report Issue
              </button>
              <button className="w-full text-black border-2 border-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">
                Admin Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
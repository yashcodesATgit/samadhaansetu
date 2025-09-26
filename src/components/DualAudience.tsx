import React from 'react';
import { Users, Shield, Camera, BarChart, Clock, MapPin, ArrowRight } from 'lucide-react';

const DualAudience: React.FC = () => {
  const citizenFeatures = [
    { icon: Camera, title: "Easy Reporting", description: "Snap, describe, submit - it's that simple" },
    { icon: Clock, title: "Real-time Updates", description: "Track your reports from submission to resolution" },
    { icon: MapPin, title: "Location-based", description: "GPS-enabled reporting with precise coordinates" },
    { icon: Users, title: "Community Impact", description: "See how your reports help improve the city" }
  ];

  const adminFeatures = [
    { icon: BarChart, title: "Smart Dashboard", description: "Comprehensive analytics and performance insights" },
    { icon: Shield, title: "Automated Routing", description: "Issues automatically assigned to right departments" },
    { icon: Users, title: "Team Management", description: "Coordinate multiple teams and track workload" },
    { icon: Clock, title: "Priority System", description: "Smart prioritization based on severity and impact" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="text-yellow-400">Everyone</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're a concerned citizen or a municipal administrator, 
            our platform provides the tools you need to make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Citizens Section */}
          <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative">
              <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">For Citizens</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Empower yourself to make a real difference in your community. 
                Report issues quickly and see the impact of your civic engagement.
              </p>

              <div className="space-y-6 mb-8">
                {citizenFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-yellow-400 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center space-x-2 group">
                <span>Start Reporting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Administrators Section */}
          <div className="bg-white text-black rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-5 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative">
              <div className="bg-black w-16 h-16 rounded-xl flex items-center justify-center mb-8">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">For Administrators</h3>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Streamline your municipal operations with powerful tools designed 
                for efficient issue management and resolution tracking.
              </p>

              <div className="space-y-6 mb-8">
                {adminFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-black text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2 group">
                <span>Admin Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-400">Cities Using Platform</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">25k+</div>
            <div className="text-gray-400">Active Citizens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-400">Resolution Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">48h</div>
            <div className="text-gray-400">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualAudience;
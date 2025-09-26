import React from 'react';
import { 
  MapPin, 
  Camera, 
  Bell, 
  Smartphone, 
  BarChart3, 
  Shield,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react';

const FeaturesShowcase: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Issue Tracking",
      description: "Track every report from submission to resolution with live status updates and notifications.",
      benefits: ["Live progress updates", "Status notifications", "Resolution timeline", "Completion confirmation"],
      color: "bg-yellow-400"
    },
    {
      icon: Camera,
      title: "Photo & Location Uploads",
      description: "Capture detailed evidence with photos, GPS coordinates, and comprehensive descriptions.",
      benefits: ["High-quality photo uploads", "Automatic GPS tagging", "Detailed categorization", "Rich descriptions"],
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "Automated Routing",
      description: "Smart system automatically routes issues to the right department for faster resolution.",
      benefits: ["Intelligent categorization", "Auto-department assignment", "Priority-based routing", "Escalation protocols"],
      color: "bg-green-500"
    },
    {
      icon: Smartphone,
      title: "Cross-Device Support",
      description: "Access the platform seamlessly across mobile, tablet, and desktop devices.",
      benefits: ["Mobile-first design", "Responsive interface", "Offline capability", "Cross-platform sync"],
      color: "bg-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive dashboards with performance metrics and actionable insights for administrators.",
      benefits: ["Performance dashboards", "Trend analysis", "Custom reporting", "Data-driven insights"],
      color: "bg-red-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with intelligent notifications about your reports and community updates.",
      benefits: ["Real-time alerts", "Custom preferences", "Community updates", "Resolution notifications"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Powerful <span className="text-yellow-400">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to report, track, and resolve civic issues efficiently. 
            Built with cutting-edge technology for maximum impact.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {/* Icon */}
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="text-black font-semibold flex items-center space-x-2 group-hover:text-yellow-600 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="bg-black rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Enterprise-Grade <span className="text-yellow-400">Security</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Your data and privacy are our top priorities. We use industry-leading security 
                measures to protect sensitive information and ensure compliance with government standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Data Encryption</h4>
                    <p className="text-gray-400 text-sm">End-to-end encryption for all communications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Privacy Protection</h4>
                    <p className="text-gray-400 text-sm">GDPR compliant with anonymous reporting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Monitoring</h4>
                    <p className="text-gray-400 text-sm">Continuous security monitoring and alerts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Audit Trails</h4>
                    <p className="text-gray-400 text-sm">Complete activity logging and reporting</p>
                  </div>
                </div>
              </div>

              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Security Details
              </button>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
                {/* Mock Security Dashboard */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">Security Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Secure</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Data Encryption</span>
                      <span className="text-yellow-400 text-sm">AES-256</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Uptime</span>
                      <span className="text-green-400 text-sm">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Compliance</span>
                      <span className="text-blue-400 text-sm">GDPR</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-400 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
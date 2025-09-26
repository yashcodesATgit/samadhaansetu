import React from 'react';
import { Camera, Send, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture the Issue",
      description: "Take a photo, add location, and describe the civic problem you've encountered.",
      details: ["Photo documentation", "GPS location", "Issue categorization", "Detailed description"]
    },
    {
      icon: Send,
      title: "Submit & Track Progress",
      description: "Submit your report and receive real-time updates on resolution progress.",
      details: ["Instant submission", "Unique tracking ID", "Real-time notifications", "Progress updates"]
    },
    {
      icon: CheckCircle,
      title: "Resolved by Municipality",
      description: "Local authorities receive your report and work to resolve the issue quickly.",
      details: ["Auto-routing to departments", "Priority assignment", "Professional resolution", "Completion confirmation"]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            How It <span className="text-yellow-400">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From problem to solution in three simple steps. Our streamlined process 
            ensures your civic concerns get the attention they deserve.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Step Number */}
                <div className="absolute -top-6 left-8 bg-black text-yellow-400 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                {/* Features */}
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-yellow-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
            <span>Start Reporting Issues</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
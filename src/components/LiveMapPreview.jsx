import React, { useState } from 'react';
import { MapPin, Calendar, User, Eye, Filter } from 'lucide-react';

const LiveMapPreview = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const issues = [
    { id: 1, type: 'pothole', status: 'pending', x: '25%', y: '30%', title: 'Large pothole on Main St', date: '2 hours ago', reporter: 'John D.' },
    { id: 2, type: 'streetlight', status: 'in-progress', x: '60%', y: '45%', title: 'Broken streetlight', date: '1 day ago', reporter: 'Sarah M.' },
    { id: 3, type: 'garbage', status: 'resolved', x: '40%', y: '65%', title: 'Overflowing trash bin', date: '3 days ago', reporter: 'Mike R.' },
    { id: 4, type: 'pothole', status: 'pending', x: '75%', y: '25%', title: 'Road damage after storm', date: '4 hours ago', reporter: 'Lisa K.' },
    { id: 5, type: 'streetlight', status: 'pending', x: '30%', y: '75%', title: 'Flickering street lamp', date: '6 hours ago', reporter: 'Tom B.' },
  ];

  const categories = [
    { key: 'all', label: 'All Issues', count: 5 },
    { key: 'pothole', label: 'Potholes', count: 2 },
    { key: 'streetlight', label: 'Street Lights', count: 2 },
    { key: 'garbage', label: 'Garbage', count: 1 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-400';
      case 'in-progress': return 'bg-blue-400';
      case 'resolved': return 'bg-green-400';
      default: return 'bg-yellow-400';
    }
  };

  const filteredIssues = selectedCategory === 'all' 
    ? issues 
    : issues.filter(issue => issue.type === selectedCategory);

  return (
    <section id="map" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Live Issue <span className="text-yellow-400">Map</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See real-time civic issues reported in your area. Track progress, 
            explore patterns, and stay informed about your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl p-6 h-96 lg:h-[500px] relative overflow-hidden">
              {/* Mock Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 opacity-50"></div>
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-gray-400"></div>
                  ))}
                </div>
              </div>

              {/* Issue Pins */}
              {filteredIssues.map((issue) => (
                <div
                  key={issue.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group`}
                  style={{ left: issue.x, top: issue.y }}
                >
                  <div className={`w-6 h-6 ${getStatusColor(issue.status)} rounded-full border-3 border-white shadow-lg group-hover:scale-125 transition-transform duration-200`}>
                    <MapPin className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="font-semibold">{issue.title}</div>
                    <div className="text-gray-300">{issue.date}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              ))}

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Filter className="w-5 h-5 text-gray-700" />
                </button>
                <button className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Eye className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Resolved</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Category Filter */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-black mb-4">Filter Issues</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.key
                        ? 'bg-yellow-400 text-black'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.label}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.key ? 'text-black' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Issues */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-black mb-4">Recent Reports</h3>
              <div className="space-y-4">
                {filteredIssues.slice(0, 3).map((issue) => (
                  <div key={issue.id} className="bg-white rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-3 h-3 ${getStatusColor(issue.status)} rounded-full mt-2`}></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-black text-sm mb-1">{issue.title}</h4>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{issue.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{issue.reporter}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
            Explore Full Map
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveMapPreview;
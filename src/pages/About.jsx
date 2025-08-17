import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CADPlay</h1>
          <p className="text-xl text-gray-600">
            Making 3D modeling and CAD design accessible to everyone
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            CADPlay is designed to make learning 3D modeling and Computer-Aided Design (CAD) 
            fun and accessible. We believe that everyone should have the opportunity to learn 
            these valuable skills through hands-on practice and interactive challenges.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Interactive 3D Environment</h3>
              <p className="text-gray-600">
                Work with real 3D objects using professional-grade tools powered by Three.js
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Progressive Learning</h3>
              <p className="text-gray-600">
                Start with basic shapes and progress to complex assemblies and boolean operations
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get instant feedback on your work with helpful hints and suggestions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Challenge-based Learning</h3>
              <p className="text-gray-600">
                Learn through practical challenges that simulate real-world modeling tasks
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Technology</h2>
          <p className="text-gray-700 mb-4">
            CADPlay is built using modern web technologies:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>React</strong> - For the user interface and component management</li>
            <li><strong>Three.js</strong> - For 3D graphics and rendering</li>
            <li><strong>React Three Fiber</strong> - React renderer for Three.js</li>
            <li><strong>Tailwind CSS</strong> - For responsive and modern styling</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-gray-700 mb-6">
            Ready to begin your 3D modeling journey? Start with our interactive playground 
            or jump into a challenge to test your skills.
          </p>
          <div className="space-x-4">
            <a 
              href="/playground" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Open Playground
            </a>
            <a 
              href="/challenges" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View Challenges
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

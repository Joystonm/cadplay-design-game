import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            CADPlay
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">
            Learn, Design, Assist.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Master 3D modeling and CAD design through gamified challenges focused on assistive technology. 
            Build empathy-driven designs that make a real-world impact while learning professional CAD skills.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Link 
              to="/playground" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg shadow-lg"
            >
              🎮 Start Creating
            </Link>
            <Link 
              to="/challenges" 
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg shadow-lg"
            >
              🏆 Take Challenges
            </Link>
          </div>
          
          <p className="text-gray-500">
            New to CAD? <Link to="/tutorial" className="text-blue-600 hover:underline font-medium">Start with our interactive tutorial</Link>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">♿</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Assistive Technology Focus</h3>
            <p className="text-gray-600">
              Learn to design for accessibility and inclusion. Create tools that help people with disabilities 
              live more independently through thoughtful engineering.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Gamified Learning</h3>
            <p className="text-gray-600">
              Progress through carefully designed challenges that build your skills step by step. 
              Earn achievements and unlock new tools as you advance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Professional CAD Tools</h3>
            <p className="text-gray-600">
              Work with real 3D modeling tools including Boolean operations, precise transformations, 
              and material systems powered by Three.js.
            </p>
          </div>
        </div>

        {/* Game Modes */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Choose Your Learning Path</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tutorial" className="block p-6 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Tutorial Mode</h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step guided training for beginners. Learn CAD basics with interactive lessons.
                </p>
              </div>
            </Link>

            <Link to="/challenges" className="block p-6 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-colors">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Challenge Mode</h3>
                <p className="text-gray-600 text-sm">
                  Mission-based tasks focused on assistive technology. Progress from beginner to advanced.
                </p>
              </div>
            </Link>

            <Link to="/playground" className="block p-6 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Playground Mode</h3>
                <p className="text-gray-600 text-sm">
                  Open-ended sandbox with all tools unlocked. Perfect for experimentation and creativity.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Example Challenges Preview */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Example Challenges</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">🥄 Ergonomic Spoon</h3>
              <p className="text-sm opacity-90">
                Design an easy-grip spoon for users with arthritis. Learn about ergonomics and accessibility.
              </p>
              <div className="mt-3 text-xs opacity-75">
                Skills: Resize, rotate, grip ergonomics
              </div>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">📱 One-Handed Phone Stand</h3>
              <p className="text-sm opacity-90">
                Create a stable phone stand operable with one hand. Focus on stability and ease of use.
              </p>
              <div className="mt-3 text-xs opacity-75">
                Skills: Align, group, Boolean operations
              </div>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">🧼 Adaptive Soap Holder</h3>
              <p className="text-sm opacity-90">
                Design a soap holder with finger slots for users with weak grip. Consider drainage and safety.
              </p>
              <div className="mt-3 text-xs opacity-75">
                Skills: Position, Boolean subtract, edge design
              </div>
            </div>
          </div>
        </div>

        {/* Learning Benefits */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why CADPlay?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold mb-2">Empathy-Driven Design</h3>
              <p className="text-sm text-gray-600">
                Learn to design with users' needs in mind, especially those with disabilities
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-semibold mb-2">Engineering Principles</h3>
              <p className="text-sm text-gray-600">
                Master modularity, symmetry, constraints, and other core engineering concepts
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="font-semibold mb-2">Accessible Learning</h3>
              <p className="text-sm text-gray-600">
                Makes CAD fun and approachable, even for absolute beginners
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">Real-World Impact</h3>
              <p className="text-sm text-gray-600">
                Bridge technical skills with meaningful solutions that help people
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

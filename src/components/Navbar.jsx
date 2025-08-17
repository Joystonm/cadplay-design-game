import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const { completedChallenges } = useApp();

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/tutorial', name: 'Tutorial', icon: '📚' },
    { path: '/challenges', name: 'Challenges', icon: '🏆' },
    { path: '/playground', name: 'Playground', icon: '🎨' },
    { path: '/about', name: 'About', icon: 'ℹ️' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">CADPlay</h1>
              <p className="text-xs opacity-75">Learn, Design, Assist</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                  isActive(item.path)
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
                {item.name === 'Challenges' && completedChallenges.length > 0 && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {completedChallenges.length}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Empty space for future features */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg">
              <span className="text-lg">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Hidden by default) */}
        <div className="md:hidden border-t border-white border-opacity-20 py-4">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-white bg-opacity-20'
                    : 'hover:bg-white hover:bg-opacity-10'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

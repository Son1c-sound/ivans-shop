"use client"
import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'SHOP', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'CONTACTS', href: '#' }
  ];

  return (
    <div>
      <div className="w-full font-bold bg-teal-600 text-white text-center py-3 text-md">
        Welcome to our store!
      </div>
      <nav className="bg-white p-4 border-b relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section */}
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8 ml-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-xl font-bold tracking-wider text-center absolute left-1/2 transform -translate-x-1/2">
              GET SUPPLEMENTS
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-gray-900">
                <User className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-gray-900 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
              <div className="flex flex-col space-y-4 px-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
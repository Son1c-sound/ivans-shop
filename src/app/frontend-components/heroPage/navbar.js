"use client"
import React, { useState } from 'react';
import { ShoppingCart,  Menu, X } from 'lucide-react';
import SidebarCart from '../cartSidebar/sidebarCart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'SHOP', href: '#SHOP' },
    { name: 'FAQ', href: '#FAQ' },
    { name: 'CONTACTS', href: '#CONTACT' }
  ];

  return (
    <div>
      <div className="w-full  bg-teal-600 text-white text-center py-3 text-md">
        Welcome to our store!
      </div>
      <nav className="bg-white p-4 border-b relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
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
              <div className="hidden md:flex space-x-8 ml-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 "
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-xl mainTitle  tracking-wider text-center absolute left-1/2 transform -translate-x-1/2">
            <a href='/' className='font-bold mainTitle'>
              GET SUPPLEMENTS
              </a>
            </div>
            <div className="flex items-center space-x-6 cursor-pointer">
            <SidebarCart><ShoppingCart className="h-6 w-6" /></SidebarCart>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
              <div className="flex flex-col space-y-4 px-4 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 "
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
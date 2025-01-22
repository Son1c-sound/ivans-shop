import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-gray-900">Join our newsletter folks</h3>
          <p className="text-sm text-gray-600">
            Enter your email address to receive occasional, lovely emails from us.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
              →
            </button>
          </div>
        </div>

        {/* Info Links Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg text-gray-900">Info</h3>
          <ul className="space-y-2">
            {[
              'Contact Us',
              'Shipping Policy',
              'Privacy Policy',
              'Refund Policy',
              'Terms of Service',
              'Do not sell or share my personal information'
            ].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Text Section */}
        <div>
          <p className="text-sm text-gray-600">
            Statements made on this website have not been evaluated by the U.S. Food
            and Drug Administration. These products are not intended to diagnose,
            treat, cure, or prevent any disease. Information provided by this
            website or this company is not a substitute for individual medical
            advice.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Socials */}
          <div className="flex gap-4 items-center">
            <h3 className="text-sm font-medium text-gray-900">Our socials</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2H3v20h18V2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © 2025, get supplements
          </div>

          {/* Payment Methods */}
          <div className="flex gap-2">
            {['American Express', 'Apple Pay', 'Diners Club', 'Discover', 'Google Pay', 'Mastercard', 'Shop Pay', 'Visa'].map((method) => (
              <div key={method} className="w-8 h-6 bg-gray-100 rounded border border-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
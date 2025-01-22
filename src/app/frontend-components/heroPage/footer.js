import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-500 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Join our newsletter folks</h3>
          <p className="text-sm">
            Enter your email address to receive occasional, lovely emails from us.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 rounded border border-gray-300"
            />
            <button className="bg-black text-white px-4 py-2 rounded">→</button>
          </div>
        </div>

        {/* Info Links Section */}
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Info</h3>
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
                <a href="#" className="text-sm hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Text Section */}
        <div>
          <p className="text-sm">
            Statements made on this website have not been evaluated by the U.S. Food
            and Drug Administration. These products are not intended to diagnose,
            treat, cure, or prevent any disease. Information provided by this
            website or this company is not a substitute for individual medical
            advice.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-teal-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Socials */}
          <div className="flex gap-4">
            <h3 className="text-sm font-medium">Our socials</h3>
            <div className="flex gap-4">
              <Twitter size={20} />
              <Facebook size={20} />
              <Instagram size={20} />
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
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm">
            © 2025, get supplements
          </div>

          {/* Payment Methods */}
          <div className="flex gap-2">
            {['American Express', 'Apple Pay', 'Diners Club', 'Discover', 'Google Pay', 'Mastercard', 'Shop Pay', 'Visa'].map((method) => (
              <div key={method} className="w-8 h-6 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
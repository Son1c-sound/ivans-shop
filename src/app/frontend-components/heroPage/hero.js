"use client"
import React from 'react';
import Navbar from './navbar';
import Link from 'next/link';
import { useProducts } from '@/app/hooks/getProduct';


const Hero = () => {
  const { products, isLoading, error } = useProducts()

  const heroTexts = [
    'Get Strong',
    'Get Shredded',
    'Get Hard',
    'Get Clear Skin',
    'Get Attractive',
    'Get Confident',
    'Get Strong',
    'Get Shredded'
  ];

  return (
    <main className="relative overflow-hidden">
         <style>{marqueeStyles}</style>
      <div className="absolute inset-0 z-0">
        <img
          src="https://getsupplements.com/cdn/shop/files/hero.jpg?v=1726232274"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2 justify-center md:justify-start">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base">
                    Based on 194 reviews
                  </p>
                </div>
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl  mb-4 md:mb-6 text-gray-900">
                  Start Your <br/> Hero&apos;s Journey Today
                </h1>
                <p className="text-lg sm:text-xl mb-6 md:mb-8 text-gray-800">
                  GET Strong, GET Shredded, GET Attractive
                </p>
                <p className="mb-6 md:mb-8 text-gray-800 text-sm sm:text-base">
                  FREE SHIPPING ON ORDERS $50+
                </p>
                <Link href={`/products/${products[0]?._id}`}>
                <button className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-green-400 transition-colors text-sm sm:text-base">
                  SHOP NOW
                </button>
              </Link>
              </div>
              <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <div className="relative w-72 sm:w-80 md:w-96">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black backdrop-blur-sm overflow-hidden">
          <div className="relative flex items-center justify-center py-2">
            <div className="animate-marquee flex items-center whitespace-nowrap">
              {[...heroTexts, ...heroTexts].map((text, index) => (
                <>
                  <span
                    key={`${text}-${index}`}
                    className="text-white text-xs hover:text-gray-300 cursor-pointer transition-colors  sm:text-xs mx-6 md:mx-8"
                  >
                    {text}
                  </span>
                  <span className="text-white">•</span>
                </>
              ))}
            </div>
            <div className="animate-marquee2 absolute flex items-center whitespace-nowrap">
              {[...heroTexts, ...heroTexts].map((text, index) => (
                <>
                  <span
                    key={`${text}-${index}`}
                    className="text-white hover:text-gray-300 cursor-pointer transition-colors text-sm sm:text-xs mx-6 md:mx-8"
                  >
                    {text}
                  </span>
                  <span className="text-white">•</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
  @keyframes marquee2 {
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
  .animate-marquee {
    animation: marquee 25s linear infinite;
  }
  .animate-marquee2 {
    animation: marquee2 25s linear infinite;
  }
`;
"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from './faqData'


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mb-10 mt-10" id='FAQ'>
      <div className="text-center mb-8">
        <h2 className="text-xs uppercase tracking-wider mb-2">FEEL THE DIFFERENCE</h2>
        <h1 className="text-2xl md:text-3xl font-semibold">Science behind this product</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 flex items-start justify-center">
          <div className="bg-gray-50 p-8 rounded-lg w-full">
            <img 
              src="https://getsupplements.com/cdn/shop/files/1725012022825-generated-label-image-0.png?v=1726233849"
              alt="Product bottle"
              className="w-64 mx-auto"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                className="border-b border-gray-200 overflow-hidden transition-all duration-200 ease-in-out"
              >
                <button
                  className="w-full px-1 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className=" text-md">{faq.title}</span>
                  <span className="transform transition-transform duration-200">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`grid transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-1 pb-4">
                      <p className="text-gray-700 mb-2">{faq.content}</p>
                      <p className="text-sm text-gray-500">Source: {faq.source}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
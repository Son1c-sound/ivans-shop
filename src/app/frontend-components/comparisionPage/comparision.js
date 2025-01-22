import React from 'react';
import { comparisonData } from './data';

const ComparisonSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-12">{comparisonData.title}</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {comparisonData.columns.map((column, columnIndex) => {
          const Icon = column.icon;
          return (
            <div 
              key={columnIndex}
              className={`${column.bgColor} p-6 rounded-lg`}
            >
              <h2 className="text-xl font-bold text-center mb-6">
                {column.title}
              </h2>
              
              <div className="space-y-4">
                {column.points.map((point, pointIndex) => (
                  <div 
                    key={pointIndex}
                    className="flex items-start gap-3"
                  >
                    <Icon className={`w-5 h-5 mt-1 ${column.iconColor} flex-shrink-0`} />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ComparisonSection;
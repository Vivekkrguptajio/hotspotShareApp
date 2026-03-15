import React from 'react';
import { motion } from 'framer-motion';

const MockupPhone = ({ delay, rotate }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`relative w-64 h-[500px] bg-gray-900 rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl mx-auto flex-shrink-0 ${rotate}`}
  >
    {/* Screen */}
    <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden flex flex-col pt-8">
      {/* Notch placeholder */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
        <div className="w-32 h-6 bg-gray-900 rounded-b-xl"></div>
      </div>
      
      {/* App UI Mockup */}
      <div className="p-4 flex flex-col h-full bg-gray-50">
        <div className="w-full h-12 bg-primary-100 rounded-xl mb-4 flex items-center px-4">
          <div className="w-24 h-4 bg-primary-300 rounded-full"></div>
        </div>
        
        <div className="flex-1 space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-20 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
              <div className="flex-1 space-y-2">
                <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-1/2 h-3 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-full h-16 bg-primary-600 rounded-xl mt-4 flex items-center justify-center text-white font-bold tracking-wider">
          TRANSFER
        </div>
      </div>
    </div>
  </motion.div>
);

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-24 bg-primary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">Beautiful Interface</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Designed for Simplicity
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-12 px-4">
          <MockupPhone delay={0.1} rotate="md:-rotate-6 md:translate-y-8" />
          <MockupPhone delay={0.3} rotate="z-10 scale-105" />
          <MockupPhone delay={0.5} rotate="md:rotate-6 md:translate-y-8 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;

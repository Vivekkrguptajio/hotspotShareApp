import React from 'react';
import { motion } from 'framer-motion';

const PhoneFrame = ({ imgSrc, alt, delay, rotate }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`relative flex-shrink-0 ${rotate}`}
  >
    {/* Phone frame */}
    <div className="relative w-56 sm:w-64 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl mx-auto">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-10">
        <div className="w-28 h-5 bg-gray-900 rounded-b-2xl"></div>
      </div>
      
      {/* Screen with real screenshot */}
      <div className="rounded-[2rem] overflow-hidden bg-white">
        <img 
          src={imgSrc} 
          alt={alt} 
          className="w-full h-auto block"
        />
      </div>
    </div>
  </motion.div>
);

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-24 bg-primary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">App Screenshots</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            See It In Action
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A clean and intuitive interface designed for effortless file transfers
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-16 px-4">
          <PhoneFrame 
            imgSrc="/s.jpg" 
            alt="HotspotShare App - Start Server Screen" 
            delay={0.1} 
            rotate="md:-rotate-6 md:translate-y-8" 
          />
          <PhoneFrame 
            imgSrc="/t.jpg" 
            alt="HotspotShare App - Server Running Screen" 
            delay={0.3} 
            rotate="z-10 md:scale-105" 
          />
        </div>

        {/* PC Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h4 className="text-center text-lg font-semibold text-gray-700 mb-6">PC Browser Interface</h4>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
            {/* Browser chrome */}
            <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-700 rounded-lg px-3 py-1 text-center">
                  <span className="text-xs text-gray-400 font-mono">http://10.193.86.240:8080</span>
                </div>
              </div>
            </div>
            <img 
              src="/image.png" 
              alt="HotspotShare PC Dashboard - Manage and Transfer Files" 
              className="w-full h-auto block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;

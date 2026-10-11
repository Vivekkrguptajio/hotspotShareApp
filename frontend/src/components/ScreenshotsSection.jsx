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
    <div className="relative w-52 sm:w-60 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl mx-auto">
      <div className="absolute top-0 inset-x-0 flex justify-center z-10">
        <div className="w-24 h-4 bg-gray-900 rounded-b-xl"></div>
      </div>
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
    <section id="screenshots" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">App Screenshots</h2>
          <h3 className="section-title mb-4">See It In Action</h3>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A clean and intuitive interface designed for effortless file transfers
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-14 px-4">
          <PhoneFrame
            imgSrc="/s.jpeg"
            alt="HotspotShare App - Start Server Screen"
            delay={0.1}
            rotate="md:-rotate-3 md:translate-y-4"
          />
          <PhoneFrame
            imgSrc="/t.jpeg"
            alt="HotspotShare App - Server Running Screen"
            delay={0.25}
            rotate="z-10 md:scale-105"
          />
        </div>

        {/* PC Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <h4 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">PC Browser Interface</h4>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/60 bg-white">
            <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-700/50 rounded-md px-3 py-0.5 text-center">
                  <span className="text-[11px] text-gray-500 font-mono">http://10.193.86.240:8080</span>
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

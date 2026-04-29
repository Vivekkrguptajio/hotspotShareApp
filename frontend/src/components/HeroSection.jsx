import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Monitor } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 top-40 -right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold mb-6 text-sm shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
              No Internet Required
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Fast Phone to PC File Transfer using <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">WiFi Hotspot</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transfer files between your phone and computer instantly without internet. 
              Hotspot Share makes sharing your photos, videos, and documents seamless and secure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://drive.google.com/file/d/1LXyMS8faFp5AqLimBKfPMsUyLt7XKdDs/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all shadow-xl shadow-primary-500/30 transform hover:-translate-y-1"
              >
                <Download size={20} />
                Download App
              </a>
              <a 
                href="#how-it-works"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
              >
                Learn More
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-gray-500">
              <span className="flex items-center gap-1"><Smartphone size={16} /> Android</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Monitor size={16} /> Windows PC</span>
            </div>
          </motion.div>
          
          {/* Visual/Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-400/20 to-blue-400/20 rounded-3xl blur-2xl"></div>
              
              {/* PC Dashboard Screenshot */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
                <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-400 font-mono">10.193.86.240:8080</span>
                  </div>
                </div>
                <img 
                  src="/image.png" 
                  alt="HotspotShare PC Dashboard - File Transfer Interface" 
                  className="w-full h-auto block"
                />
              </div>

              {/* Floating mobile screenshot */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 w-28 sm:w-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src="/t.jpg" 
                  alt="HotspotShare Mobile App - Server Running" 
                  className="w-full h-auto block"
                />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

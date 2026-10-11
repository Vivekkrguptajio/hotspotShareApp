import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Monitor, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-primary-100 rounded-full blur-[120px] opacity-40 -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] opacity-40 top-20 -right-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-semibold mb-6 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              No Internet Required
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Fast Phone to PC File Transfer using{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">WiFi Hotspot</span>
            </h1>

            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transfer files between your phone and computer instantly without internet.
              Hotspot Share makes sharing your photos, videos, and documents seamless and secure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href="/HotspotShare.apk"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all shadow-lg shadow-primary-600/20 hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Direct Download
              </a>
              <a
                href="https://drive.google.com/drive/folders/1HULqNq_jNXVjfnfYrxxVWuIoWydD3LK7?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary-200 text-gray-600 hover:text-primary-600 px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:shadow-sm"
              >
                <ExternalLink size={18} />
                Google Drive
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-5 text-sm text-gray-400 font-medium">
              <span className="flex items-center gap-1.5"><Smartphone size={15} /> Android</span>
              <span className="text-gray-200">|</span>
              <span className="flex items-center gap-1.5"><Monitor size={15} /> Windows PC</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary-200/20 via-transparent to-blue-200/20 rounded-3xl blur-2xl pointer-events-none"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 bg-white">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[11px] text-gray-500 font-mono">10.193.86.240:8080</span>
                  </div>
                </div>
                <img
                  src="/image.png"
                  alt="HotspotShare PC Dashboard - File Transfer Interface"
                  className="w-full h-auto block"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -right-3 lg:-right-6 w-28 sm:w-32 rounded-2xl overflow-hidden shadow-xl border-[3px] border-white ring-1 ring-gray-100"
              >
                <img
                  src="/t.jpeg"
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

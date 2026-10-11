import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">About The App</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
            The easiest way to move files between devices
          </h3>
          
          <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-gray-900">Hotspot Share</strong> is a simple and fast file transfer application that allows users to send files between their phone and PC using a local WiFi hotspot connection.
            </p>
            <p>
              Forget about finding the right cables or waiting for a slow internet connection. With Hotspot Share, no internet is required, meaning your data plan stays untouched while you transfer at lightning-fast local WiFi speeds.
            </p>
            <p>
              Users can easily and securely transfer their photos, large video files, important documents, favorite music, and other items directly across devices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Connect Devices',
    description: 'Turn on hotspot on your phone or ensure both your phone and PC are connected to the same WiFi network.'
  },
  {
    number: '02',
    title: 'Open App',
    description: 'Launch the Hotspot Share application on your mobile device.'
  },
  {
    number: '03',
    title: 'Enter Address',
    description: 'Type the provided IP address (e.g., 192.168.43.1:8080) into your PC\'s web browser.'
  },
  {
    number: '04',
    title: 'Start Transfer',
    description: 'Begin uploading or downloading files instantly between your devices with zero mobile data usage.'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">Simple Process</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Hotspot Share Works
          </h3>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:border-primary-500 transition-colors duration-300">
                  <span className="text-3xl font-black text-primary-600">{step.number}</span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

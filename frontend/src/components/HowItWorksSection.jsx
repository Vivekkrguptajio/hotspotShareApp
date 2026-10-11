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
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Simple Process</h2>
          <h3 className="section-title">How Hotspot Share Works</h3>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:border-primary-200 group-hover:shadow-md transition-all duration-300">
                  <span className="text-2xl font-black text-primary-600">{step.number}</span>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
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

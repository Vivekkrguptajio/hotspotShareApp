import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, WifiOff, Power, AlertTriangle } from 'lucide-react';

const tips = [
  {
    icon: <Wifi className="w-5 h-5" />,
    title: 'Use Your Own Hotspot',
    description: 'Always use your personal mobile hotspot for file transfers. This keeps your connection private and secure.',
    safe: true
  },
  {
    icon: <WifiOff className="w-5 h-5" />,
    title: 'Avoid Public WiFi',
    description: 'Don\'t use Hotspot Share on public WiFi networks like cafes, colleges, or offices — anyone on that network could access your files.',
    safe: false
  },
  {
    icon: <Power className="w-5 h-5" />,
    title: 'Stop Server When Done',
    description: 'Always tap "Stop Server" in the app after your transfer is complete to prevent any unauthorized access.',
    safe: true
  }
];

const SecurityTipsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Stay Safe</h2>
          <h3 className="section-title">Security Tips</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex items-start gap-4"
        >
          <div className="bg-amber-100 text-amber-600 p-2.5 rounded-xl flex-shrink-0 mt-0.5">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-1">How it works</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Hotspot Share creates a local server on your phone. Anyone connected to the same WiFi or hotspot network who knows the URL can view and download your shared files. There is no password protection — so your personal hotspot is the safest option.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl p-6 border ${tip.safe ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${tip.safe ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
                {tip.icon}
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2">{tip.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityTipsSection;

import React from 'react';
import { Send, Download as DownloadIcon, WifiOff, Zap, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Send className="w-6 h-6 text-primary-600" />,
    title: 'Phone to PC Transfer',
    description: 'Easily send photos, videos, and large files from your mobile device directly to your computer.'
  },
  {
    icon: <DownloadIcon className="w-6 h-6 text-primary-600" />,
    title: 'PC to Phone Transfer',
    description: 'Quickly push documents and media from your computer straight to your phone storage.'
  },
  {
    icon: <WifiOff className="w-6 h-6 text-primary-600" />,
    title: 'No Internet Required',
    description: 'Works entirely offline. Uses local WiFi hotspot to transfer files without eating up your data plan.'
  },
  {
    icon: <Zap className="w-6 h-6 text-primary-600" />,
    title: 'High Speed Transfer',
    description: 'Experience lightning-fast transfer speeds leveraging the full bandwidth of your WiFi connection.'
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-primary-600" />,
    title: 'Simple Interface',
    description: 'Clean, intuitive, and modern design makes sharing files as simple as a few taps.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
    title: 'Secure Local Network',
    description: 'Your files never leave your local network. No external servers involved, ensuring maximum privacy.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Core Features</h2>
          <h3 className="section-title">Everything you need for seamless sharing</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-gray-50/50 rounded-2xl p-7 hover:bg-primary-50/40 transition-all duration-300 border border-transparent hover:border-primary-100 group"
            >
              <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm border border-gray-100 group-hover:border-primary-100 group-hover:shadow-md transition-all duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Speed Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 font-semibold text-sm mb-4">
              <Zap size={14} />
              Speed Proof
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              70+ MB/s Transfer Speed
            </h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Real-world tested — transferring a 25 GB file at 70.1 MB/s over local WiFi hotspot
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/60 bg-white">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[11px] text-gray-500 font-mono">Hotspot Share — File Transfer</span>
                </div>
              </div>
              <img
                src="/speed.png"
                alt="HotspotShare Speed Proof - 70.1 MB/s Transfer Speed"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

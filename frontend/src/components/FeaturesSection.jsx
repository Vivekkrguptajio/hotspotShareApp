import React from 'react';
import { Send, Download as DownloadIcon, WifiOff, Zap, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Send className="w-8 h-8 text-primary-600" />,
    title: 'Phone to PC Transfer',
    description: 'Easily send photos, videos, and large files from your mobile device directly to your computer.'
  },
  {
    icon: <DownloadIcon className="w-8 h-8 text-primary-600" />,
    title: 'PC to Phone Transfer',
    description: 'Quickly push documents and media from your computer straight to your phone storage.'
  },
  {
    icon: <WifiOff className="w-8 h-8 text-primary-600" />,
    title: 'No Internet Required',
    description: 'Works entirely offline. Uses local WiFi hotspot to transfer files without eating up your data plan.'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary-600" />,
    title: 'High Speed Transfer',
    description: 'Experience lightning-fast transfer speeds leveraging the full bandwidth of your WiFi connection.'
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary-600" />,
    title: 'Simple Interface',
    description: 'Clean, intuitive, and modern design makes sharing files as simple as a few taps.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
    title: 'Secure Local Network',
    description: 'Your files never leave your local network. No external servers involved, ensuring maximum privacy.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">Core Features</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything you need for seamless sharing
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Speed Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
              <Zap size={16} />
              Speed Proof
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              70+ MB/s Transfer Speed
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Real-world tested — transferring a 25 GB file at 70.1 MB/s over local WiFi hotspot
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
              <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-700 rounded-lg px-3 py-1 text-center">
                    <span className="text-xs text-gray-400 font-mono">Hotspot Share — File Transfer</span>
                  </div>
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

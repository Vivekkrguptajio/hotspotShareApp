import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const PrivacyPolicySection = () => {
  return (
    <section id="privacy" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-50 rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary-600 p-3 rounded-xl text-white shadow-md">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Privacy Policy
              </h3>
            </div>
            
            <div className="prose prose-lg prose-blue max-w-none text-gray-700">
              <p className="mb-6 font-medium text-gray-900 text-lg">
                Your privacy and data security are our top priorities.
              </p>
              
              <ul className="space-y-4 list-disc pl-5">
                <li className="pl-2">
                  <strong className="text-gray-900 block mb-1">Local Transfers Only</strong>
                  Hotspot Share does not collect, store, or share personal user data. File transfers occur entirely locally between your devices using the same WiFi network or hotspot.
                </li>
                <li className="pl-2">
                  <strong className="text-gray-900 block mb-1">No External Servers</strong>
                  Your files are never uploaded to any cloud storage or external servers during the transfer process.
                </li>
                <li className="pl-2">
                  <strong className="text-gray-900 block mb-1">Advertisement Partners</strong>
                  The application may display advertisements using Google AdMob. AdMob may collect anonymous device information, such as advertising IDs, for ad personalization and analytics purposes directly governed by Google's Privacy Policy.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;

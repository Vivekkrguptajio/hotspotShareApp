import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-3">Get in Touch</h2>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Need Help or Have Feedback?
        </h3>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We are always looking to improve Hotspot Share. If you encounter any issues, have feature requests, or just want to say hello, feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:vivekkumarguptajio@gmail.com"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-primary-300 px-8 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="bg-primary-50 p-3 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
              <Mail size={24} />
            </div>
            <div className="text-left whitespace-nowrap">
              <span className="block text-sm text-gray-500 font-medium mb-0.5">Email Support</span>
              <span className="block font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">p8drblwwq@mozmail.com</span>
            </div>
          </a>

          <div className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-200 px-8 py-5 rounded-2xl opacity-75 cursor-not-allowed">
            <div className="bg-gray-100 p-3 rounded-xl text-gray-500">
              <MessageSquare size={24} />
            </div>
            <div className="text-left">
              <span className="block text-sm text-gray-500 font-medium mb-0.5">Live Chat</span>
              <span className="block font-semibold text-gray-600">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

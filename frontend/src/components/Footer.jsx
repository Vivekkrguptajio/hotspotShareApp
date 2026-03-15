import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 p-1.5 rounded-lg text-white">
                <Wifi size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Hotspot Share</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Fast, secure, and intuitive file transfer between your mobile devices and personal computer without relying on internet connectivity.
            </p>
          </div>

          {/* Links Cols */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About App</a></li>
              <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How it Works</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
              <li><a href="mailto:vivekkumarguptajio@gmail.com" className="hover:text-primary-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Hotspot Share. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs">
              Designed with <span className="text-red-500">♥</span> for seamless sharing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

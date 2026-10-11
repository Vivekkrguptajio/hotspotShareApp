import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary-600 p-2 rounded-xl text-white">
                <Wifi size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Hotspot Share</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Fast, secure, and intuitive file transfer between your mobile devices and personal computer without relying on internet connectivity.
            </p>
            <a
              href="/HotspotShare.apk"
              download
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-md shadow-primary-600/20"
            >
              <Download size={15} />
              Download APK
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How it Works</a></li>
              <li><a href="#screenshots" className="hover:text-primary-400 transition-colors">Screenshots</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm">Legal & Support</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><a href="mailto:p8drblwwq@mozmail.com" className="hover:text-primary-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Hotspot Share. All rights reserved.</p>
          <span className="text-xs text-gray-600">
            Designed with <span className="text-red-400">&hearts;</span> for seamless sharing
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

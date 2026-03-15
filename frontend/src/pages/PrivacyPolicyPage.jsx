import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-50 to-white border-b border-gray-200 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-4 inline-flex items-center gap-1 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 mt-3">Hotspot Share</h1>
          <p className="text-gray-500 mt-1 text-lg">Privacy Policy</p>
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-semibold mt-4 tracking-wide">
            Last Updated: March 14, 2026
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-10 text-gray-700 text-[15px] leading-relaxed">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">1. Introduction</h2>
            <p className="mb-3">
              Welcome to <strong className="text-gray-900">Hotspot Share</strong> ("we", "our", "us"). We are committed to protecting your privacy.
              This Privacy Policy explains how our mobile application <strong className="text-gray-900">Hotspot Share</strong> ("the App")
              handles your information when you use our services.
            </p>
            <p>
              By downloading, installing, or using Hotspot Share, you agree to the terms described in this Privacy Policy.
              If you do not agree, please uninstall the application.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">2. Information We Collect</h2>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-r-xl mb-6 text-sm">
              <strong className="text-primary-700">Key Fact:</strong> Hotspot Share does <strong>NOT</strong> collect, store, or transmit any personal user data to external servers.
              All file transfers happen locally on your private network.
            </div>

            <h3 className="text-base font-semibold text-gray-900 mb-2">2.1 Personal Data</h3>
            <p className="mb-4">
              We do <strong>not</strong> collect any personally identifiable information (PII) such as your name, email address,
              phone number, or location.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mb-2">2.2 File Data</h3>
            <p className="mb-4">
              The App accesses files on your device solely for the purpose of local file transfer between your phone and PC.
              Files are transferred directly over your local WiFi network or hotspot.
              We do <strong>not</strong> upload, store, copy, or access your files on any remote server.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mb-2">2.3 Device Permissions</h3>
            <p className="mb-2">The App may request the following permissions:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li><strong>Storage / Media Access:</strong> To read and write files for transfer between devices.</li>
              <li><strong>WiFi / Network State:</strong> To detect network connectivity and establish local connections for file transfer.</li>
              <li><strong>Hotspot / Tethering:</strong> To enable or detect WiFi hotspot for direct device-to-device connectivity.</li>
              <li><strong>Foreground Service / Notifications:</strong> To keep the file transfer running reliably in the background and notify you of progress.</li>
            </ul>
            <p className="mb-4">These permissions are used <strong>only</strong> for core app functionality and are never used to collect personal data.</p>

            <h3 className="text-base font-semibold text-gray-900 mb-2">2.4 Automatically Collected Information</h3>
            <p>
              Hotspot Share itself does not collect analytics, crash reports, or usage statistics. However,
              third-party services integrated into the App (see Section 3) may collect certain anonymous information.
            </p>
          </section>

          {/* 3. Third-Party Services */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">3. Third-Party Services</h2>

            <h3 className="text-base font-semibold text-gray-900 mb-2">3.1 Google AdMob</h3>
            <p className="mb-2">
              The App uses <strong>Google AdMob</strong> to display advertisements. AdMob is a service provided by Google LLC.
              AdMob may collect and use certain information to serve personalized or non-personalized ads, including:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Device advertising ID (Google Advertising ID)</li>
              <li>Device type, model, and operating system version</li>
              <li>IP address (for approximate location-based ads)</li>
              <li>App usage data and ad interaction data</li>
            </ul>
            <p className="mb-3">
              This data collection is governed by Google's own privacy policy.
              You can learn more at: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://policies.google.com/privacy</a>
            </p>
            <p className="mb-4">
              You can opt out of personalized advertising by visiting your device's
              <strong> Settings → Google → Ads → Opt out of Ads Personalization</strong>.
            </p>

            <h3 className="text-base font-semibold text-gray-900 mb-2">3.2 Google Play Services</h3>
            <p>
              The App may use Google Play Services, which has its own privacy policies.
              More information: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Privacy Policy</a>
            </p>
          </section>

          {/* 4. Data Sharing */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">4. Data Sharing</h2>
            <p className="mb-3">
              We do <strong>not</strong> sell, trade, rent, or share your personal data with any third parties.
              Since we do not collect personal data, there is nothing to share.
            </p>
            <p>
              The only data shared with third parties is the anonymous information collected by Google AdMob
              as described in Section 3.1 above, which is governed by Google's privacy policy.
            </p>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">5. Data Security</h2>
            <p className="mb-3">
              All file transfers occur over your local WiFi network or hotspot connection.
              Data does <strong>not</strong> travel over the internet. This means:
            </p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Your files are transferred directly between your phone and PC on a local, private network.</li>
              <li>No files are uploaded to or stored on any cloud servers.</li>
              <li>Transfer security depends on the security of your local WiFi/hotspot network.</li>
            </ul>
            <p>
              We recommend using a password-protected WiFi hotspot to prevent unauthorized access during file transfers.
            </p>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">6. Children's Privacy</h2>
            <p>
              Hotspot Share is not directed at children under the age of 13. We do not knowingly collect personal
              information from children. If you are a parent or guardian and believe your child has provided personal
              data through the App, please contact us and we will take steps to address the issue.
            </p>
          </section>

          {/* 7. Changes */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an
              updated "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">8. Your Rights</h2>
            <p className="mb-3">Since Hotspot Share does not collect personal data, there is generally no user data for us to access, modify, or delete. However, you may:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Uninstall the App at any time to stop all data processing.</li>
              <li>Reset your device's advertising ID or opt out of personalized ads via your device settings.</li>
              <li>Contact us if you have any questions or concerns regarding your privacy.</li>
            </ul>
          </section>

          {/* 9. Contact Us */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary-100">9. Contact Us</h2>
            <p className="mb-2">
              If you have any questions, concerns, or requests regarding this Privacy Policy
              or the App, please contact us at:
            </p>
            <p className="mb-1">
              <strong>Email:</strong> <a href="mailto:p8drblwwq@mozmail.com" className="text-primary-600 hover:underline">p8drblwwq@mozmail.com</a>
            </p>
            <p>
              <strong>Developer:</strong> Team Hotspot Share
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200 text-gray-400 text-sm">
        © 2026 Hotspot Share. All rights reserved. |{' '}
        <Link to="/" className="text-primary-600 hover:underline">Back to Home</Link>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;

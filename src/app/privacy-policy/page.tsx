import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Optivra",
  description: "Privacy Policy for Optivra - Learn how we collect, use, and protect your personal information. GDPR compliant data protection practices.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last Updated: February, 2026</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-a:text-primary hover:prose-a:text-white prose-a:transition-colors">
          <h2 className="text-2xl text-white mt-12 mb-4">1. Introduction</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            Optivra respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://optivra.in or engage with our services.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">2. Information We Collect</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
          <ul className="list-disc list-outside ml-6 text-gray-400 font-light leading-relaxed mb-6 space-y-2">
            <li><strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site (e.g., "Contact Us" forms, Newsletter subscriptions).</li>
            <li><strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-2xl text-white mt-12 mb-4">3. Use of Your Information</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc list-outside ml-6 text-gray-400 font-light leading-relaxed mb-6 space-y-2">
            <li>Deliver and facilitate the delivery of services (e.g., MVP development, consulting).</li>
            <li>Correspondence regarding your inquiries or projects.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
            <li>Send you a newsletter (if you have opted in).</li>
          </ul>

          <h2 className="text-2xl text-white mt-12 mb-4">4. Disclosure of Your Information</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul className="list-disc list-outside ml-6 text-gray-400 font-light leading-relaxed mb-6 space-y-2">
            <li><strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li><strong className="text-white">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, and customer service.</li>
          </ul>

          <h2 className="text-2xl text-white mt-12 mb-4">5. Data Security</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">6. International Data Transfers</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            If you are accessing our Site from outside India, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information, in India. By using our services, you consent to any such transfer of information outside of your country.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">7. Your Data Rights (GDPR & Global)</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-outside ml-6 text-gray-400 font-light leading-relaxed mb-6 space-y-2">
            <li><strong className="text-white">The right to access</strong> – You have the right to request copies of your personal data.</li>
            <li><strong className="text-white">The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong className="text-white">The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            To exercise these rights, please contact us at <a href="mailto:hello@optivra.in" className="text-primary hover:text-white transition-colors">hello@optivra.in</a>.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            We may use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">9. Third-Party Websites</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            Our Site may contain links to third-party websites and applications of interest. Once you have used these links to leave our Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
          </p>

          <h2 className="text-2xl text-white mt-12 mb-4">11. Contact Us</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <p className="text-gray-300 font-light leading-relaxed mb-2"><strong className="text-white">Email:</strong> <a href="mailto:hello@optivra.in" className="text-primary hover:text-white transition-colors">hello@optivra.in</a></p>
            <p className="text-gray-300 font-light leading-relaxed mb-2"><strong className="text-white">Phone:</strong> +91-7439071619, +91-6280179738</p>
            <p className="text-gray-300 font-light leading-relaxed"><strong className="text-white">Address:</strong> Prestige M.G Road, Bangalore, 560001, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

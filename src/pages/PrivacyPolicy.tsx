import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6 sm:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-oswald font-bold text-primary mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-base leading-relaxed mb-4">
          At <span className="font-semibold">ASTED (Association for Social Technical and Educational Development)</span>, 
          we are committed to protecting your personal information and maintaining your trust.
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal details: name, email, contact number, address.</li>
          <li>
            Payment and transaction data (processed securely through third-party gateways).
          </li>
          <li>
            Browsing data for improving user experience and platform performance.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To process orders and deliver products or services.</li>
          <li>To communicate updates, offers, or important notifications.</li>
          <li>
            For internal analysis to improve our programmes and e-commerce platform.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Data Protection</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            All payment data is encrypted and handled through secure SSL-certified systems.
          </li>
          <li>
            We never sell, rent, or trade user data to third parties.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Third-Party Services</h2>
        <p className="text-base leading-relaxed mb-4">
          Our platform may use verified third-party vendors (e.g., payment processors, logistics partners) 
          who comply with global data privacy standards.
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">User Rights</h2>
        <p className="text-base leading-relaxed mb-4">
          Users can request access, modification, or deletion of their personal data by contacting{" "}
          <a
            href="mailto:asted2025@gmail.com"
            className="text-primary font-semibold underline"
          >
            asted2025@gmail.com
          </a>.
        </p>

        <p className="text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} ASTED. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

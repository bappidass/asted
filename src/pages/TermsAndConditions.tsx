import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 px-6 sm:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-oswald font-bold text-primary mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-base leading-relaxed mb-4">
          By using the <span className="font-semibold">ASTED Marketplace</span> or participating in any 
          <span className="font-semibold"> ASTED programme</span>, you agree to the following terms:
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">General Terms</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            ASTED is a registered not-for-profit organization operating to promote social, technical, and educational development.
          </li>
          <li>
            The e-commerce platform supports rural artisans and entrepreneurs by enabling them to sell local products globally.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Users must provide accurate information during registration and checkout.</li>
          <li>
            Any misuse of the platform, fraudulent activity, or violation of law will lead to account termination.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Product Information & Pricing</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            We strive for accuracy, but occasional errors in product details or pricing may occur.
          </li>
          <li>
            ASTED reserves the right to modify or update prices, product details, or availability at any time.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Shipping & Delivery</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Domestic and international shipping timelines vary by product and destination.
          </li>
          <li>
            ASTED is not responsible for delays caused by logistics partners or customs processes.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Intellectual Property</h2>
        <p className="text-base leading-relaxed mb-4">
          All content, logos, and materials on the website are property of <span className="font-semibold">ASTED</span> and 
          cannot be copied, modified, or reproduced without prior written permission.
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Liability Disclaimer</h2>
        <p className="text-base leading-relaxed mb-4">
          ASTED will not be liable for indirect, incidental, or consequential damages arising from 
          the use or misuse of any product or service purchased through our platform.
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Contact Information</h2>
        <p className="text-base leading-relaxed">
          For any queries, feedback, or disputes, please contact us at:
        </p>
        <ul className="list-none mt-2 space-y-1">
          <li>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:asted2025@gmail.com"
              className="text-primary font-semibold underline"
            >
              asted2025@gmail.com
            </a>
          </li>
          <li>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+919854113164"
              className="text-primary font-semibold underline"
            >
              +91 9854113164
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} ASTED. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;

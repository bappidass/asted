import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white  text-gray-800 py-10 px-6 sm:px-16 lg:px-32">
      <div className=" mx-auto rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-oswald font-bold text-primary mb-6 text-center">
          Refund Policy
        </h1>

        <p className="text-base leading-relaxed mb-4">
          At <span className="font-semibold">ASTED (Association for Social Technical and Educational Development)</span>, 
          we value customer satisfaction and aim to ensure a transparent and fair refund process for all our products and services.
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Eligibility for Refund</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Refunds are applicable only for products purchased directly through the ASTED Marketplace.</li>
          <li>To qualify, customers must raise a refund request within <span className="font-semibold">7 days</span> of receiving the product.</li>
          <li>Products must be unused, undamaged, and returned in their original packaging.</li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Non-Refundable Items</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Downloadable digital goods, training modules, or services already delivered.</li>
          <li>Customized or perishable products.</li>
          <li>Donations made towards social or developmental programmes.</li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">Refund Process</h2>
        <p className="text-base leading-relaxed mb-4">
          To initiate a refund, contact us at{" "}
          <a href="mailto:asted2025@gmail.com" className="text-primary font-semibold underline">
            asted2025@gmail.com
          </a>{" "}
          or call{" "}
          <a href="tel:+919854113164" className="text-primary font-semibold underline">
            +91 9854113164
          </a>{" "}
          with your order details. Once approved, refunds will be processed within
          <span className="font-semibold"> 7–10 business days </span> through the original payment method.
        </p>

        <h2 className="text-xl font-bold text-primary mt-6 mb-2">International Orders</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>International customers are responsible for shipping and customs costs for returned items.</li>
          <li>Refunds will exclude international transaction fees (if any).</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} ASTED. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;

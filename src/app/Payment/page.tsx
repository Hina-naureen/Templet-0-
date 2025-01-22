'use client';
import React from 'react';

const Payment = () => {
  return (
    <section className="bg-[#FAF4F4] flex justify-center items-center" style={{ height: '300px' }}>
      <div
        className="flex justify-between items-start"
        style={{
          width: '1440px',
        }}
      >
        {/* Free Delivery */}
        <div className="w-[376px]">
          <h3 className="text-2xl font-medium text-black mb-3">Free Delivery</h3>
          <p className="text-base text-gray-700">
            For all orders over $50, consectetur<br />
            adipiscing elit.
          </p>
        </div>

        {/* 90 Days Return */}
        <div className="w-[376px]">
          <h3 className="text-2xl font-medium text-black mb-3">90 Days Return</h3>
          <p className="text-base text-gray-700">
            If goods have problems, consectetur<br />
            adipiscing elit.
          </p>
        </div>

        {/* Secure Payment */}
        <div className="w-[376px]">
          <h3 className="text-2xl font-medium text-black mb-3">Secure Payment</h3>
          <p className="text-base text-gray-700">
            100% secure payment, consectetur<br />
            adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payment;
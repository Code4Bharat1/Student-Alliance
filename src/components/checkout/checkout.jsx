"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CheckoutForm() {
  const [deliveryMethod, setDeliveryMethod] = useState('Delivery');

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Checkout</h2>
      
      <div className="flex gap-4 mb-6">
        {['Delivery', 'Pick up'].map(method => (
          <button
            key={method}
            className={`px-4 py-2 rounded-lg border ${deliveryMethod === method ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'} hover:shadow-md transition`}
            onClick={() => setDeliveryMethod(method)}
          >
            {method}
          </button>
        ))}
      </div>

      <form className="space-y-5 text-black">
        {['Full name', 'Email address', 'Phone number', 'Country', 'City', 'State', 'ZIP Code'].map((label, idx) => (
          <div key={idx}>
            <label className="block text-sm font-medium text-black">{label}</label>
            <input
              type="text"
              placeholder={`Enter ${label.toLowerCase()}`}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        ))}

        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="text-sm text-gray-600">I agree to Terms and Conditions</label>
        </div>
      </form>
    </div>
  );
}

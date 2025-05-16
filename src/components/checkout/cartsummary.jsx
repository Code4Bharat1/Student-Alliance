"use client"

import { motion } from 'framer-motion';

export default function CartSummary() {
    
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-blue-500 text-white rounded-xl shadow-2xl flex flex-col justify-between"
    >
      <div>
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Your Shopping Cart
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
            <div>
              <p className="font-medium">DuoComfort Sofa Premium</p>
              <span className="text-sm text-gray-200">1x</span>
            </div>
            <span className="font-semibold">₹1,499</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
            <div>
              <p className="font-medium">IronOne Desk</p>
              <span className="text-sm text-gray-200">1x</span>
            </div>
            <span className="font-semibold">₹1,899</span>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <input 
              type="text" 
              placeholder="Enter promo code" 
              className="w-full px-4 py-3 rounded-lg text-black  focus:ring-2 focus:ring-yellow-400 focus:outline-none" 
            />
            <button className="bg-yellow-400 text-black px-5 py-3 rounded-lg hover:bg-yellow-500 transition font-medium shadow-md hover:shadow-yellow-400/30">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div className="flex justify-between border-b border-white/20 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">₹3,398</span>
        </div>
        <div className="flex justify-between border-b border-white/20 pb-2">
          <span>Shipping</span>
          <span className="font-medium">₹99</span>
        </div>
        <div className="flex justify-between border-b border-white/20 pb-2 text-green-300">
          <span>Discount</span>
          <span className="font-medium">-₹500</span>
        </div>
        <div className="flex justify-between font-bold text-2xl pt-2">
          <span>Total</span>
          <span className="text-yellow-400">₹2,997</span>
        </div>

        <button className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-100 shadow-lg hover:shadow-yellow-400/40">
          Proceed to Payment
        </button>

        <div className="flex items-center justify-center gap-2 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-sm text-gray-200">100% Secure Checkout - SSL Encrypted</p>
        </div>
      </div>
    </motion.div>
  );
}
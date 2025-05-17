"use client"

import { motion } from 'framer-motion';

export default function CartSummary() {
    
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-gradient-to-br from-indigo-900 to-purple-800 text-white rounded-xl shadow-2xl flex flex-col justify-between border border-white/10"
    >
      <div>
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            Your Shopping Cart
          </span>
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
            <div>
              <p className="font-medium">DuoComfort Sofa Premium</p>
              <span className="text-sm text-gray-300">1x</span>
            </div>
            <span className="font-semibold text-yellow-300">₹1,499</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
            <div>
              <p className="font-medium">IronOne Desk</p>
              <span className="text-sm text-gray-300">1x</span>
            </div>
            <span className="font-semibold text-yellow-300">₹1,899</span>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <input 
              type="text" 
              placeholder="Enter promo code" 
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:bg-white/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder-gray-300 transition-all" 
            />
            <button className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-gray-900 px-5 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all font-medium shadow-md hover:shadow-yellow-400/40 active:scale-95">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div className="flex justify-between border-b border-white/20 pb-3">
          <span>Subtotal</span>
          <span className="font-medium">₹3,398</span>
        </div>
        <div className="flex justify-between border-b border-white/20 pb-3">
          <span>Shipping</span>
          <span className="font-medium">₹99</span>
        </div>
        <div className="flex justify-between border-b border-white/20 pb-3 text-green-300">
          <span>Discount</span>
          <span className="font-medium">-₹500</span>
        </div>
        <div className="flex justify-between font-bold text-2xl pt-3">
          <span>Total</span>
          <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            ₹2,997
          </span>
        </div>

        <button className="w-full mt-6 bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-gray-900 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-yellow-400/40">
          Proceed to Payment
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 p-3 bg-white/5 rounded-lg backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <p className="text-sm text-gray-300">100% Secure Checkout - SSL Encrypted</p>
        </div>
      </div>
    </motion.div>
  );
}
"use client"

import { motion } from 'framer-motion';

export default function CartSummary() {
    
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-10 bg-gradient-to-tr from-blue-700 to-blue-500 text-white flex flex-col justify-between"
    >
      <div>
        <h3 className="text-2xl font-semibold mb-6">Review your cart</h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p>DuoComfort Sofa Premium</p>
              <span className="text-sm text-gray-200">1x</span>
            </div>
            <span>$20.00</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p>IronOne Desk</p>
              <span className="text-sm text-gray-200">1x</span>
            </div>
            <span>$25.00</span>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <input type="text" placeholder="Discount code" className="w-full px-3 py-2 rounded-lg text-black" />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Apply</button>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$45.00</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between text-green-300">
          <span>Discount</span>
          <span>-$10.00</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>$40.00</span>
        </div>

        <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl text-lg transition transform hover:scale-105">Pay Now</button>

        <p className="text-xs text-gray-200 text-center mt-2">Secure Checkout - SSL Encrypted</p>
      </div>
    </motion.div>
  );
}

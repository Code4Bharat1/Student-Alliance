'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';
import { useRouter } from 'next/navigation';

const PrinterDetails7 = () => {

   const router = useRouter();
        const [quantity, setQuantity] = useState(1);
      
        const originalPricePerUnit = 108000;
        const totalOriginalPrice = originalPricePerUnit * quantity;
        const totalPrice = Math.round(totalOriginalPrice * 0.75); // 25% discount
      
        const product = {
          id: 307,
          name: "3D printer (Ender 5 S 1)",
          price: totalPrice,
          image: "/images/printer7.png",
          description:
            "Designed for precision, it supports high-temp printing with a fully enclosed chamber.",
        };
      
        // ✅ Define increment and decrement handlers
        const increment = () => setQuantity((prev) => prev + 1);
        const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
      
        const handleAddToCart = () => {
          const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            description: product.description,
            quantity,
          };
      
          const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
          const existingItem = existingCart.find((item) => item.id === newProduct.id);
      
          if (existingItem) {
            existingItem.quantity += newProduct.quantity;
          } else {
            existingCart.push(newProduct);
          }
      
          localStorage.setItem("cart", JSON.stringify(existingCart));
          router.push("/mycart");
        };
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-0">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Page Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8 border-b-2 border-purple-600 pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Products Details
        </motion.h2>

        <div className="text-sm breadcrumbs text-gray-600 mb-4">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span>Home</span> &gt; <span>Products</span> &gt; <span className="text-purple-600">3D printer (Ender 5 S 1)</span>
                  </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/printer7.png"
              alt="3D printer (Ender 5 S 1)"
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">3D printer (Ender 5 S 1)</h3>
            <p className="text-gray-600 leading-relaxed">
              Bring ideas to life with the high-performance 3D printer (Ender 5 S 1).
              Designed for precision, it supports high-temp printing with a fully enclosed chamber.
              Ideal for education and prototyping, it delivers smooth, detailed, and durable prints every time.
            </p>

            {/* User Reviews */}
            <div className="flex items-center gap-2">
              <div className="text-yellow-400 text-xl">★★★★☆</div>
              <span className="text-sm text-gray-500">User Reviews</span>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-4 text-lg font-semibold">
              <span className="text-indigo-600 text-2xl">₹{totalPrice.toLocaleString()}</span>
              <span className="line-through text-gray-500">₹{totalOriginalPrice.toLocaleString()}</span>
              <span className="text-green-600">25% Off</span>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 text-gray-700">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={decrement}
                    className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <div className="px-6 py-2 text-lg border-x border-gray-200 font-medium">
                    {quantity}
                  </div>
                  <button
                    onClick={increment}
                    className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded transition duration-300"
                >
                  BUY NOW
                </button>
                <button
                  onClick={handleAddToCart}
                  className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded transition duration-300"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsAppWidget/>
    </div>
  );
};

export default PrinterDetails7;

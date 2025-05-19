"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const ProductDetails3 = () => {
  const basePrice = 108000;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = basePrice * quantity;
   const router = useRouter();

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
// Product details
  const product = {
    id: 502,
    name: "86 Inch IFPD - Interactive Flat Panel Display",
    price: totalPrice,
    image: "/images/86_inch.png",
    description: "Our 86 Interactive Flat Panel Display is designed for powerful collaboration and immersive presentations. With crystal-clear 4K UHD resolution, advanced multi-touch capabilities, and dual operating system support (Android/Windows),t’s ideal for modern classrooms, conference rooms, and collaborative workspaces.",
  };

  const handleAddToCart = () => {
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingItem = existingCart.find((item) => item.id === newProduct.id);

    if (existingItem) {
      // Increase quantity if the product exists
      existingItem.quantity += newProduct.quantity;
    } else {
      // Add new product if it doesn't exist
      existingCart.push(newProduct);
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Navigate to MyCart page
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
            <span>Home</span> &gt; <span>Products</span> &gt;{" "}
            <span className="text-purple-600">
              86" Inch IFPD - Interactive Flat Panel Display
            </span>
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
              src="/images/86_inch.png" // Update this path to the actual 75 inch image if needed
              alt='86" Inch IFPD - Interactive Flat Panel Display'
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
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              86" Inch IFPD - Interactive Flat Panel Display
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our 85" Interactive Flat Panel Display is designed for powerful
              collaboration and immersive presentations. With crystal-clear 4K
              UHD resolution, advanced multi-touch capabilities, and dual
              operating system support (Android/Windows), it’s ideal for modern
              classrooms, conference rooms, and collaborative workspaces.
            </p>

            {/* User Reviews */}
            <div className="flex items-center gap-2">
              <div className="text-yellow-400 text-xl">★★★★☆</div>
              <span className="text-sm text-gray-500">User Reviews</span>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-4 text-lg font-semibold">
              <span className="text-indigo-600 text-2xl">
                ₹{totalPrice.toLocaleString()}
              </span>
              <span className="line-through text-gray-500">
                ₹{(145000 * quantity).toLocaleString()}
              </span>
              <span className="text-green-600">25% Off</span>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 text-gray-700">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
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

              {/* Buttons */}
              <div className="flex gap-3">
                <button onClick={handleAddToCart} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded transition duration-300">
                  BUY NOW
                </button>
                <button onClick={handleAddToCart} className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded transition duration-300">
                  ADD TO CART
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsAppWidget />
    </div>
  );
};

export default ProductDetails3;

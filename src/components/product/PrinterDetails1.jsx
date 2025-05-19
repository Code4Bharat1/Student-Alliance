"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const PrinterDetails1 = () => {
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
            <span className="text-purple-600">3D Printer (CR-5 Pro H)</span>
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
              src="/images/printer.png"
              alt="3D Printer (CR-5 Pro H)"
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
              3D Printer (CR-5 Pro H)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bring ideas to life with the high-performance CR-5 Pro H 3D
              Printer. Designed for precision, it supports high-temp printing
              with a fully enclosed chamber. Ideal for education and
              prototyping, it delivers smooth, detailed, and durable prints
              every time.
            </p>

            {/* User Reviews */}
            <div className="flex items-center gap-2">
              <div className="text-yellow-400 text-xl">★★★★☆</div>
              <span className="text-sm text-gray-500">User Reviews</span>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-4 text-lg font-semibold">
              <span className="text-indigo-600 text-2xl">₹108000</span>
              <span className="line-through text-gray-500">₹145000</span>
              <span className="text-green-600">25% Off</span>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <div>
                <label htmlFor="quantity" className="block text-gray-600 mb-1">
                  Quantity:
                </label>
                <select
                  id="quantity"
                  className="border text-gray-800 border-gray-300 rounded px-3 py-1"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded transition duration-300">
                  BUY NOW
                </button>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-5 py-2 rounded transition duration-300">
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

export default PrinterDetails1;

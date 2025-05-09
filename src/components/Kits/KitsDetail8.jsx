'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const KitsDetail8 = () => {
  // Product price details
  const originalPrice = 10000;
  const discountPercentage = 50; // 50% off
  const discountedPrice = originalPrice * (1 - discountPercentage / 100);
  
  // State for quantity
  const [quantity, setQuantity] = useState(1);
  
  // Calculate total price based on quantity
  const totalPrice = discountedPrice * quantity;
  const totalSavings = (originalPrice - discountedPrice) * quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/k8.jpg"
              alt='Make an IoT based robotic Wi-Fi car using L298n Motor driver module and NodeMCU ESP8266-12e Wi-Fi board'
              width={800}
              height={800}
              className="w-full h-auto object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full text-xs">
              NEW ARRIVAL
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-xs">
              {discountPercentage}% OFF
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Make an IoT based robotic Wi-Fi car using L298n Motor driver module and NodeMCU ESP8266-12e Wi-Fi board</h3>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400 text-lg">
                  ★★★★☆
                </div>
                <span className="text-sm text-gray-500">(48 customer reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded">
        Introduction In this project, we will make an IoT based wireless Wi-fi robot car using the NodeMCU ESP8266-12e Wi-Fi board with the L298n Motor driver module. We will interface this Wi-fi Car with Mert Arduino application in which by entering the IP address, you can control by giving the directional command using the smartphone. HARDWARE REQUIRED Node MCU (esp82 66-12e v1.0) Wi-fi Board -1 L298N Motor driver Module -1 Jumper wires (male to male) - 20 pcs Jumper wires (male to female) - 20 pcs 170 pt. Breadboard -1 Micro USB cable-1 1050mah rechargeable battery Li-Po battery -1 (not included in the kit) 2-wheel car chassis kit -1 WORKING AND OUTPUT After uploading the code, open the application. The wi-fi address for the phone and board should be the same. The operating system of the smart mobile phone in android we develop a remote control program. The program connected with wi-fi to communicate with the robot. Wireless control is the most important basic needs of all people. Wireless network-controlled robots use wi-fi modules. Arduino blue control android application will transmit command using wi-fi to the car so that it can move in the required direction like moving forward, reverse, turning left, turning right and stop.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700"> The L298N is a dual H-Bridge motor driver capable of controlling two DC motors independently—ideal for two-wheel robot platforms.</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">NodeMCU ESP8266 CP2102 is a WiFi-enabled microcontroller with built-in USB support, compatible with Arduino IDE, MicroPython, and Mongoose IoT.

</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Connect VCC of L298N to Vin of NodeMCU.
                    <br/>

Connect GND of L298N to GND of NodeMCU. </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">IN1–IN4 → D8, D7, D4, D3 respectively (IN1→D8, IN2→D7, IN3→D4, IN4→D3)</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-bold text-indigo-600">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-lg line-through text-gray-500">
                  ₹{(originalPrice * quantity).toLocaleString('en-IN')}
                </span>
                <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded-full text-sm">
                  Save ₹{totalSavings.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {quantity} {quantity > 1 ? 'items' : 'item'} × ₹{discountedPrice.toLocaleString('en-IN')} each
              </div>
            </div>

            {/* Quantity & Buttons */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div>
                  <label htmlFor="quantity" className="block text-gray-600 mb-1 font-medium">
                    Quantity:
                  </label>
                  <select 
                    id="quantity" 
                    className="border border-gray-300 text-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5,5,6].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="text-sm text-gray-500 mt-6">Only 7 left in stock</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button 
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  BUY NOW 
                </motion.button>
                <motion.button 
                  className="flex-1 bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-lg shadow-sm transition duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ADD TO CART
                </motion.button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>Need help? Call us at +91 1234567890</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <WhatsAppWidget/>
    </div>
  );
};

export default KitsDetail8;
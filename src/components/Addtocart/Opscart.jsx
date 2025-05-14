"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function OpsCart() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  
  // Base price and discount information
  const basePrice = 36000;
  const originalPrice = 50000;
  const pricePerUnit = basePrice;
  
  // Calculate current price based on quantity
  const currentPrice = quantity * pricePerUnit;
  const currentOriginalPrice = quantity * originalPrice;
  const totalSavings = currentOriginalPrice - currentPrice;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const addToCart = () => {
    const newItem = {
      id: "ops-srx900", // Unique identifier for the product
      name: "AIWaft OPS SRX900 for Interactive Displays",
      price: basePrice,
      originalPrice: originalPrice,
      quantity: quantity,
      image: "/shop/opsx.png"
    };

    setCartItems([...cartItems, newItem]);
    setIsAdded(true);
    
    // Reset the added state after 3 seconds
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Cart Notification */}
        {isAdded && (
          <div className="fixed top-4 right-4 z-50">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in">
              <CheckCircleIcon className="w-6 h-6 mr-2" />
              <span>Item added to cart! ({quantity} x AIWaft OPS SRX900)</span>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section: Main Product Image */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-gray-50">
              <Image
                src="/shop/opsx.png"
                alt="AIWaft OPS SRX900 for Interactive Displays"
                fill
                className="object-contain p-8"
                priority
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                HOT DEAL
              </div>
            </div>

            {/* About Section Image - Moved to left side */}
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutops1.png"
                alt="AIWaft OPS SRX900 for Interactive Displays"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutops1-1.png"
                alt="AIWaft OPS SRX900 for Interactive Displays"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutops1-2.png"
                alt="AIWaft OPS SRX900 for Interactive Displayss"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                AIWaft OPS SRX900 for Interactive Displays
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">6 reviews</span>
              <span className="text-sm text-blue-600 ml-2 hover:underline cursor-pointer">
                Write a review
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <div className="flex items-end gap-4 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{currentPrice.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{currentOriginalPrice.toLocaleString()}
                </span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save ₹ {totalSavings.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-gray-500 mb-2">
                ₹{pricePerUnit.toLocaleString()} per unit
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <CheckCircleIcon className="w-5 h-5 mr-1" />
                In stock • Ready to ship
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {[
                "Interactive flat panel displays",
                "Intel i5/i7 processors",
                "12th Gen",
                "4K60Hz visuals",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-purple-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="mb-8 text-gray-700">
              <div className="flex items-center gap-4">
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
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={addToCart}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md flex items-center justify-center gap-2 font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                ADD TO CART
              </button>
              <button className="flex-1 border-2 border-gray-800 text-gray-800 py-4 px-6 rounded-lg hover:bg-gray-50 transition font-medium shadow-sm">
                BUY IT NOW
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center border-t border-gray-100 pt-6">
              {[
                { icon: "🚚", text: "Free Shipping" },
                { icon: "🔄", text: "Easy Returns" },
                { icon: "💳", text: "Secure Payment" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
            <br /> <br /> 

            {/* OPS Module Features */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Features of the AIWaft OPS SRX900 Upgrade Module
            </h2>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>12th Gen i5/i7 processors for fast interactive display performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Intel Iris-Xe graphics for HD visuals with vibrant clarity</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>HDMI/DP/Type-C ports support 4K60Hz dual/triple display setups</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Advanced connectivity: HDMI 2.0, DP 1.4, and JAE 80PIN</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Expandable up to 64GB DDR4 RAM and 1TB NVMe/SATA storage</span>
              </li>
            </ul>

            {/* Technical Specifications */}
            {/* Clean Product Specifications Table with Brand Highlight */}
            <div className="mt-12 border-t border-gray-100 pt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Technical Specifications
  </h2>

  <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-full divide-y divide-gray-200">
    <tbody className="divide-y divide-gray-200 bg-white">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Brand</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIWaft</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Manufacturer</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIWaft Pvt Ltd, AIWaft Pvt Ltd</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SRX900</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model Year</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operating System</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Linux, Windows 8, Windows 11, Windows 10</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CPU Speed</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.3 GHz</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Graphics Card Description</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Integrated</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Graphics Coprocessor</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intel Iris Xe Graphics</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Memory Storage Capacity</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 TB</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Memory Slots Available</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 x SO-DIMM DDR4 slots for expandable RAM.</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Specific Uses For Product</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          The AIWaft OPS is ideal for upgrading interactive flat panel displays with advanced computing power, 4K video output, and extensive connectivity options, making it perfect for educational, business, and presentation environments.
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Screen Size</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">86 Inches</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RAM Memory Installed Size</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 GB</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Product Dimensions</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18 x 11.9 x 3 cm; 1.2 kg</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RAM Memory Maximum Size</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">64 GB</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ram Memory Technology</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DDR4</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hard Disk Description</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SSD</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Processor Brand</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intel</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Processor Count</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Processor Model Number</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Intel® Core™ i5-1235U / i5-1245U / i7-1255U / i7-1265U</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Hardware Interface</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bluetooth, AV Port, DisplayPort, USB 3.0 Type C, HDMI, USB 3.0, USB 2.0</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Graphics Card Ram Size</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 GB</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Resolution</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3840 x 2160</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Compatible Devices</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Interactive Flat Panel Displays, Monitors and Screens</td>
      </tr>
      {/* Continue the rest of the specifications in same structure... */}
      {/* Due to space limits, you can continue using the same pattern for remaining data */}
    </tbody>
  </table>
</div>

</div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import Image from "next/image";
import { useState } from "react";
import React, { useRef, useEffect } from 'react'; //scroll in mobile
import { StarIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/navigation';

export default function MicCart4() {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  
  // Base price and discount information
  const basePrice = 32000;
  const originalPrice = 42000;
  const pricePerUnit = basePrice;
  
  // Calculate current price based on quantity
  const currentPrice = quantity * pricePerUnit;
  const currentOriginalPrice = quantity * originalPrice;
  const totalSavings = currentOriginalPrice - currentPrice;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Product details
  const product = {
    id: 2, // Different ID from MicCart3
    name: "SENNHEISER XSW 1-ME3-A Wireless Headset Mic",
    price: basePrice,
    image: "/shop/mic4.png",
    description: "SENNHEISER XSW 1-ME3-A Wireless Headset Mic with advanced noise reduction and high-fidelity audio",
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

  //Scroll in Mobile
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const images = ["/shop/mic4.png", "/shop/aboutmic4.png", "/shop/aboutmic4-1.png", "/shop/aboutmic4-2.png"];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const containerWidth = scrollContainerRef.current.clientWidth;
        const newIndex = Math.round(scrollLeft / containerWidth);
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Scrollable container */}
              <div
                ref={scrollContainerRef}
                className="flex flex-row lg:flex-col overflow-x-auto snap-x snap-mandatory space-x-4 lg:space-x-0 pb-4 lg:pb-0 hide-scrollbar"
              >
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden aspect-square bg-gray-50 min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 snap-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <Image
                      src={img}
                      alt={
                        i === 0
                          ? "SENNHEISER XSW 1-ME3-A Wireless Headset Mic"
                          : `Feature ${i}`
                      }
                      fill
                      className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                      priority={i === 0}
                    />
                    {i === 0 && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        HOT DEAL
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Scroll indicators with active state */}
              <div className="lg:hidden flex justify-center space-x-2 mt-4">
                {images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-purple-600 w-4"
                        : "bg-gray-300 bg-opacity-60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Style to hide scrollbar but keep functionality */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                {product.name}
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
                "Advanced Noise Reduction",
                "High-Fidelity Audio",
                "Handles High Volume",
                "Real-Time Monitoring",
                "Smart Controls",
                "Perfect for Creators",
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
                onClick={handleAddToCart}
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
              <button onClick={handleAddToCart} className="flex-1 border-2 border-gray-800 text-gray-800 py-4 px-6 rounded-lg hover:bg-gray-50 transition font-medium shadow-sm">
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
    About This Product
  </h2>
  <ul className="space-y-3 text-gray-700 text-sm">
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Exceptional audio clarity for live performances and monitoring</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Simple plug-and-play setup for speeches and presentations</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>120ft (36m) wireless range for unrestricted movement</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>10 selectable channels for interference-free operation</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>High-fidelity sound with minimal latency (48kHz/24bit)</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Advanced noise reduction for crystal-clear transmission</span>
  </li>
</ul>


            {/* Clean Product Specifications Table with Brand Highlight */}
          <div className="mt-12 border-t border-gray-100 pt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Technical Specifications
  </h2>

 <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-max divide-y divide-gray-200">
    <tbody className="divide-y divide-gray-200 bg-white">
      <tr className="bg-blue-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">Compatible Devices</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Headphone</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Colour</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Black</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Included Components</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(RX-1N,TX-1N,MIC-1N, STACKING ELEMENTS-2N,PS UNIT-1N, ANTENNAS-2N,BAT-2N)</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Polar Pattern</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unidirectional</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Audio Sensitivity</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">52 dB</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Item Weight</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">613 Grams</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Impedance</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600 Ohm</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Microphone Form Factor</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Microphone System</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Item Dimensions L x W x H</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34.8 x 34.5 x 8.6 Centimeters</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Power Source</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Battery Powered</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Number of Batteries</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 AA batteries required. (included)</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Material</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Metal</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Number of Channels</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Frequency Range</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">548 - 572 MHz</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Frequency Response</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16000 Hz</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Noise Level</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 dB</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Manufacturer</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sennheiser electronic GmbH & Co. KG, Sennheiser Electronics GmbH</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Product Dimensions</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34.8 x 34.5 x 8.6 cm; 613 g</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Batteries</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 AA batteries required. (included)</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Item Model Number</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">XSW 1-ME3-A</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Size</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">XSW 1-ME3-A-Headworn set</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Battery Type</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">NiMH</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Country of Origin</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Taiwan</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Imported By</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sennheiser Electronics India Pvt Ltd. 104-ABC, 1st Floor, Time Tower, M.G Road, Gurgaon-122002. Haryana.</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">ASIN</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">B01N13N6ZK</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Date First Available</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 March 2017</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Packer</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sennheiser electronic GmbH & Co. KG, Am Labor 1, 30900 Wedemark, Germany</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Importer</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sennheiser Electronics India Pvt Ltd. 104-ABC, 1st Floor, Time Tower, M.G Road, Gurgaon-122002. Haryana.</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Net Quantity</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Count</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Generic Name</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Wireless Microphone</td>
      </tr>
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
"use client"

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import React, { useRef, useEffect } from 'react'; //scroll in mobile
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Camcart8() {
  const unitPrice = 4444; // Base price per unit
  const originalPrice = 6999; // Original price per unit
  const discountPerUnit = originalPrice - unitPrice; // Discount per unit

  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  const totalDiscount = discountPerUnit * quantity;

   // Product details
  const product = {
    id: 108,
    name: "Student Alliance 4K Webcam ",
    price: unitPrice,
    image: "/shop/cam8.png",
    description: "WebCam with AI Auto Focus for Streaming, Video Conferencing, Zoom, YouTube & Live Streaming | Best 4K Webcam for Laptops & PC in India",
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
  const images = ["/shop/cam8.png", "/shop/cam8-1.png", "/shop/cam8-2.png", "/shop/cam8-3.png", "/shop/cam8-4.png", "/shop/cam8-5.png"];

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
         {/* Left Section: Main Product Image */}
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
                alt={i === 0 ? "Student Alliance 4K PTZ Camera Pro" : `Feature ${i}`}
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-purple-600 w-4' : 'bg-gray-300 bg-opacity-60'}`}
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
            Student Alliance 4K Webcam with AI Auto Focus for Streaming, Video Conferencing, Zoom, YouTube & Live Streaming | Best 4K Webcam for Laptops & PC in India
              </h1>
              <p className="text-lg text-gray-600">
               Shop with Confidence – Your Transaction is 100% Secure.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className={`w-5 h-5 ${i < 4 ? "text-yellow-400" : "text-gray-200"}`} />
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
                <span className="text-4xl font-bold text-gray-900">₹{totalPrice.toLocaleString()}</span>
                <span className="text-lg text-gray-500 line-through">₹{totalOriginalPrice.toLocaleString()}</span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save ₹{totalDiscount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                In stock • Ready to ship
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {[
                "Ultra-Clear 4K Quality",
                "AI Auto-Focus Technology",
                "Built-In Dual Microphones",
                "Enhanced EPTZ Functionality",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-purple-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quantity Selector */}
            <div className="mb-8 text-gray-700">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={decrement}
                    className="px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <div className="px-6 py-2 text-lg border-x border-gray-200 font-medium">{quantity}</div>
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
                { icon: "🛡️", text: "2-Year Warranty" },
                { icon: "💳", text: "Secure Payment" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* About Section Content (without image) */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Product:  Evota 10X HD PTZ Camera
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "The Evota 4K Webcam delivers outstanding 1080P Full HD resolution with smooth 30fps streaming, a wide 120° field of view, and superior low-light performance. Ideal for video conferencing, streaming, and online meetings, this webcam combines advanced CMOS sensor technology and noise reduction for clear, high-quality visuals and sound.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications Table */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
  <div className="overflow-x-auto">
  <div className="inline-block min-w-full align-middle">
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200 bg-white">
          {[
             { name: "Brand", value: "Student Alliance" },
  { name: "Manufacturer", value: "Student Alliance Private Limited" },
  { name: "Model Name", value: "VEOαCAM" },
  { name: "Product Dimensions", value: "5.72 x 10.6 x 5.55 cm; 150 g" },
  { name: "Item model number", value: "VEOαCAM" },
  { name: "Operating System", value: "Windows" },
  { name: "Compatible Devices", value: "Linux Devices, macOS Devices, Android Devices, Windows PCs" },
  { name: "Special Features", value: "2D Noise Reduction for enhanced low-light performance., EPTZ Support for flexible framing and zooming., 4k for smooth, high-quality video., AI Auto-Focus ensures sharp and clear visuals., Dual Omnidirectional Microphones for superior audio clarity." },
  { name: "Mounting Hardware", value: "User Manual, Warranty Card, Student Alliance 4K EPTZ Webcam unit, 1.5m USB2.0 cable" },
  { name: "Number of items", value: "1" },
  { name: "Image Aspect Ratio", value: "16:9" },
  { name: "Has Image Stabilisation", value: "No" },
  { name: "Digital zoom", value: "3 x" },
  { name: "Min Focal Length", value: "1.89 Millimeters" },
  { name: "Video Capture Resolution", value: "4K" },
  { name: "Batteries Included", value: "No" },
  { name: "Connector Type", value: "USB" },
  { name: "Form Factor", value: "Compact" },
  { name: "Lens type", value: "Wide Angle" },
  { name: "Media type", value: "Video" },
  { name: "Horizontal View Angle", value: "69.8" },
  { name: "Vertical viewing angle", value: "54.5" },
  { name: "Diagonal viewing angle", value: "81.5" },
  { name: "Generic Name", value: "HD USB Webcam" },
  { name: "Flicker", value: "50HZ/60HZ" },
  { name: "WDR/Backlight contrast", value: "Support" },
  { name: "Backlight Compensation", value: "Support" },
  { name: "Mirror, Flip", value: "Support" },
  { name: "Sensitivity", value: "-26±2dB RL-2.2K V1=2.0V" },
  { name: "Saturation/Contrast", value: "Support" },
  { name: "Input Voltage", value: "USB5V" },
  { name: "Product certification", value: "ROHS, FCC, CE" },
  { name: "Item Dimensions LxWxH", value: "5.7 x 10.6 x 5.5 Centimeters" },
  { name: "Is there a timer?", value: "No" },
  { name: "Item Weight", value: "150 g" },
  { name: "Manufacturer", value: "Student Alliance Private Limited" },
          ].map((spec, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "" : "bg-gray-50"}
            >
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {spec.name}
              </td>
              <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 whitespace-normal">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
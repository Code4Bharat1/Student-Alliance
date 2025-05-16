"use client"

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import React, { useRef, useEffect } from 'react'; //scroll in mobile
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Camcart5() {
  const unitPrice = 75000; // Base price per unit
  const originalPrice = 95000; // Original price per unit
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
    id: 105,
    name: "Evota 4K PTZ Camera 12X Optical Zoom",
    price: unitPrice,
    image: "/shop/cam5.jpg",
    description: "Professional wireless light with advanced noise reduction and high-fidelity audio quality",
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
  const images = ["/shop/cam5.jpg", "/shop/Aboutcam5-img1.png", "/shop/Aboutcam5-img2.png", "/shop/Aboutcam5-img3.png"];

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
               Evota 4K PTZ Camera 12X Optical Zoom 
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
                "Manual Controls",
                "High-Quality Lens",
                "Authentic Experience",
                "Durable Build",
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
              <button className="flex-1 border-2 border-gray-800 text-gray-800 py-4 px-6 rounded-lg hover:bg-gray-50 transition font-medium shadow-sm">
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
                About This Product: Evota E-PTZ Camera
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Vintage Design: Retro aesthetic that appeals to photography enthusiasts and collectors.",
                  "Manual Controls: Offers traditional film loading and manual adjustments for focus, exposure, and aperture settings.",
                  "High-Quality Lens: Delivers sharp, vibrant images, capturing the essence of every scene with clarity and detail.",
                  "Authentic Experience: Provides a hands-on, nostalgic shooting experience free from modern AI technology.",
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
            { name: "Model", value: "Evota – C12HUL" },
            { name: "Type", value: "Evota 4k PTZ Camera" },
            { name: "Resolution", value: "2160p @ 60fps, 1080P @ 60fps, 720P @ 60fps" },
            { name: "Video Format", value: "H.264 AVC, H.264 SVC, H.265, MJPEG" },
            { name: "Optical Zoom", value: "12X (f 4.4mm ~ 52.8mm, F1.8 ~ F2.6)" },
            { name: "Digital Zoom", value: "16X" },
            { name: "Minimal Illumination", value: "0.05 Lux @ (F1.8, AGC ON)" },
            { name: "White Balance", value: "Automatic, one-click, manual" },
            { name: "Backlight Compensation", value: "Support" },
            { name: "Video S/N", value: "≥55dB" },
            { name: "Digital Noise Reduction", value: "2D&3D Digital Noise Reduction" },
            { name: "Sensor", value: "1 / 2.5”, CMOS, Effective Pixel: 8.51M" },
            { name: "PAN Range", value: "±170°" },
            { name: "Tilt Range", value: "-30° ~ +30°" },
            { name: "Horizontal Angle of View", value: "71 ° ~ 8.2 °" },
            { name: "Vertical Angle of view", value: "42.7 ° ~ 4.5 °" },
            { name: "Input/Output Interface", value: "HDMI, USB 3.0, LAN(RJ-45), RS232, 3G-SDI, Line In" },
            { name: "Operating System Support of Evota 4k PTZ Camera", value: "Windows, Mac OS X, Linux, Android" },
            { name: "No. of Preset", value: "255 Preset" },
            { name: "Input Voltage", value: "DC 12V" },
            { name: "Power Consumption", value: "12W (Max)" },
            { name: "Operating Temperature", value: "-10 ° C ~ 40 ° C" },
            { name: "Dimension (W X H X D)", value: "200mm x 176mm x 130mm" },
            { name: "Net weight", value: "1.41 Kg" },
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
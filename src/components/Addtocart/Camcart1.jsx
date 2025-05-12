"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";


export default function Camcart1() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section: Main Product Image */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-gray-50">
              <Image
                src="/shop/cam1.jpg"
                alt="AIWaft 4K PTZ Camera Pro"
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
                src="/shop/aboutcam1.png" // Replace with your about section image if different
                alt="4K PTZ Camera Features"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutcam1-1.png" // Replace with your about section image if different
                alt="4K PTZ Camera Features"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutcam1-2.png" // Replace with your about section image if different
                alt="4K PTZ Camera Features"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                AIWaft 4K PTZ Camera Pro Lens
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
                  ₹40,000
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹60,000
                </span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save ₹20,000
                </span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                In stock • Ready to ship
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {[
                "4K Ultra HD Resolution",
                "12X Optical Zoom",
                "360° Pan Range",
                "Auto Tracking",
                "3-Year Warranty",
                "Includes Remote",
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
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md flex items-center justify-center gap-2 font-medium">
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

            {/* About Section Content (without image) */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Product: Features of the 4K PTZ Camera
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    <strong>Ultra HD 4K Video</strong>: Capture sharp 4K footage
                    at 60fps with 12x optical zoom, ideal for classroom
                    recording.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    <strong>AI Tracking & Low Light Performance</strong>:
                    Features advanced auto-tracking and gesture control for
                    effortless usability.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    <strong>Versatile Connectivity</strong>: Equipped with HDMI,
                    USB 3.0, LAN, RS232, and 3G-SDI for live streaming and dual
                    streaming.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    <strong>Wide Pan-Tilt Control</strong>: Offers ±170° pan and
                    -30° to +30° tilt range with 255 preset positions for
                    flexible movement.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>
                    <strong>Durable & Compatible</strong>: Works seamlessly with
                    Windows, macOS, Linux, and Android for integration with any
                    teaching setup.
                  </span>
                </li>
              </ul>
            </div>

            {/* Clean Product Specifications Table with Brand Highlight */}
<div className="mt-12 border-t border-gray-100 pt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
  
  <div className="overflow-hidden rounded-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <tbody className="divide-y divide-gray-200 bg-white">
        {/* Highlighted Brand Row */}
        <tr className="bg-blue-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">Brand</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">AIWaft</td>
        </tr>
        
        {/* Normal Specification Rows */}
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Black</td>
        </tr>
        
        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model Number</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIW20A1</td>
        </tr>
        
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Included Components</td>
          <td className="px-6 py-4 text-sm text-gray-500">Camera, Remote, Cable (1.5m), Adapter, Wall Mount</td>
        </tr>
        
        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Connectivity</td>
          <td className="px-6 py-4 text-sm text-gray-500">HDMI, USB 3.0, LAN, RS232, 3G-SDI</td>
        </tr>
        
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dimensions</td>
          <td className="px-6 py-4 text-sm text-gray-500">20 × 13 × 17.6 cm</td>
        </tr>
        
        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Weight</td>
          <td className="px-6 py-4 text-sm text-gray-500">1.3 kg</td>
        </tr>
        
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Optical Zoom</td>
          <td className="px-6 py-4 text-sm text-gray-500">12×</td>
        </tr>
        
        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Resolution</td>
          <td className="px-6 py-4 text-sm text-gray-500">3840 × 2160 pixels (4K UHD)</td>
        </tr>
        
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sensor Type</td>
          <td className="px-6 py-4 text-sm text-gray-500">CMOS</td>
        </tr>
        
        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Viewing Angle</td>
          <td className="px-6 py-4 text-sm text-gray-500">170°</td>
        </tr>
        
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Compatibility</td>
          <td className="px-6 py-4 text-sm text-gray-500">Windows, macOS, Linux, Android, iOS</td>
        </tr>
        
        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Manufacturer</td>
          <td className="px-6 py-4 text-sm text-gray-500">AIWaft Pvt Ltd</td>
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

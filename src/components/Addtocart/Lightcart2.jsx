"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function LightCart2() {
  const [quantity, setQuantity] = useState(1);
  
  // Base price and discount information
  const basePrice = 3850;
  const originalPrice = 6000;
  const pricePerUnit = basePrice;
  
  // Calculate current price based on quantity
  const currentPrice = quantity * pricePerUnit;
  const currentOriginalPrice = quantity * originalPrice;
  const totalSavings = currentOriginalPrice - currentPrice;

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
                src="/shop/light2.png"
                alt="AIWaft 18-Inch Ring Light with Stand & Phone Holder"
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
                src="/shop/aboutlight2.png"
                alt="AIWaft 18-Inch Ring Light with Stand & Phone Holder"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutlight2-1.png"
                alt="AIWaft 18-Inch Ring Light with Stand & Phone Holder"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutlight2-2.png"
                alt="AIWaft 18-Inch Ring Light with Stand & Phone Holder"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
               AIWaft 18-Inch Ring Light with Stand & Phone Holder
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
                "Adjustable Brightness & 3 Lighting Modes",
                "Powerful 45W Output & High Luminance",
                "2700K-6500K Color Temperature Range ",
                "480 LED Beads with High CRI (85)",
                "360° Rotating Phone Holder",
                "Large 18-Inch LED Ring Light",
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
            <br /> <br /> 

              {/* About Features */}
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    AIWaft 18-Inch Ring Light with Stand & Phone Holder
  </h2>
 <ul className="space-y-3 text-gray-700 text-sm">
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>The AIWaft 18-inch ring light is the perfect lighting solution for YouTube videos, live streaming, makeup tutorials, photography, and professional shoots</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>4500 lumens brightness ensures crystal-clear lighting for every scenario</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Adjustable color temperatures (2700K-6500K) for versatile lighting options</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>480 high-quality LED lamp beads provide even, professional illumination</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Sturdy stand and dual phone holders provide maximum flexibility and stability</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Remote control and knob dimming allow effortless brightness adjustments</span>
  </li>
</ul>



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

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Manufacturer</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIWaft Pvt Ltd</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">AIW20RL</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Ring Fill Light</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">RL 18 ring light</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Input Voltage</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">110V-220V</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Frequency</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50/60HZ</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total Power</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45W</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Luminance</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4500lm</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CCT</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2700K-6500K</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CRI</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lighting Mode</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 Modes Cold/Warm/Neutral white</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dimming Mode</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Remote Control + Knob</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Outer Diameter</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45CM</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Inner Diameter</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">34cm</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Material</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ABS shell + Curved PC cover</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Light Diffusion Lampshade</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PC frosted surface</td>
        </tr>

        <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Assembly Method</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Snap + Ultrasonic</td>
        </tr>

        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Standard Accessories</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18" Arc Ring Light, Remote control, Phone holders, Handle bag</td>
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
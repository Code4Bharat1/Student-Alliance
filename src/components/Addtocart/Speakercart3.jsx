"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function SpeakerCart3() {
  const [quantity, setQuantity] = useState(1);
  
  // Base price and discount information
  const basePrice = 3670;
  const originalPrice = 4600;
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
                src="/shop/speaker2.png"
                alt="Ahuja PS400TM 16 Watt Speaker"
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
                src="/shop/aboutspeaker2.png"
                alt="Ahuja PS400TM 16 Watt Speaker"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutspeaker2-1.png"
                alt="Ahuja PS400TM 16 Watt Speaker"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/aboutspeaker3-2.png"
                alt="Ahuja PS400TM 16 Watt Speaker"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                Ahuja PS400TM 16 Watt Speaker
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
                "High fidelity 2-Way",
                "Facility to use as 8 ohms",
                "Power taps ",
                "Rotary switch",
                "Wide Use",
                "multi-purpose PA wall speaker",
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

              {/* OPS Module Features */}
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    About This Product
  </h2>
 <ul className="space-y-3 text-gray-700 text-sm">
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>10W high-fidelity sound with 2-way speaker design</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>100V line operation with selectable power taps (6W/3W/1.5W)</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Versatile for music playback and PA announcements</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Professional-grade components for clear audio reproduction</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Easy integration with existing sound systems</span>
  </li>
  <li className="flex items-start">
    <span className="text-purple-500 mr-2">•</span>
    <span>Durable construction for reliable performance</span>
  </li>
</ul>



            {/* Clean Product Specifications Table with Brand Highlight */}
         <div className="mt-12 border-t border-gray-100 pt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Technical Specifications
  </h2>

 <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="min-w-full divide-y divide-gray-200">
    <tbody className="divide-y divide-gray-200 bg-white">
      <tr className="bg-blue-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">Model</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PS-400TM</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Special Feature</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16 Watt wired Speaker</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Recommended Uses For Product</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">For Smartphones or Tablets, For Televisions Tablets</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Subwoofer Diameter</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18 Inches</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Net Quantity</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Piece</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Controller Type</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Remote Control</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Colour</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">WHITE</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Included Components</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">SPEAKER, USER MANUAL</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Product Dimensions</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25.2D x 19W x 19.1H Centimeters</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Age Range (Description)</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Adult</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Item Weight</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1800 Grams</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Impedance</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 Ohm</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Is Waterproof</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Number of Items</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wireless Communication Technology</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bluetooth</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Power Source</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ac</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tweeter Diameter</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Inches</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Connectivity Protocol</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Bluetooth</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Manufacturer</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ahuja, AHUJA RADIOS 215, Okhla Industrial Estate, New Delhi-110 020, India</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PS-400TM</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Item model number</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PS-400TM</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Audio input compatible with the item</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Auxiliary</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Speaker amplification type</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Passive</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Voltage</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100 Volts</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wattage</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16 Watts</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Batteries Required</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Country of Origin</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">India</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Item Weight</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 kg 800 g</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">ASIN</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">B0B21H7YLR</td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Date First Available</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23 May 2022</td>
      </tr>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Generic Name</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ps400Tm</td>
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
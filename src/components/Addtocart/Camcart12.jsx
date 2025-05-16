"use client"

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Camcart12() {
  const unitPrice = 19000; // Base price per unit
  const originalPrice = 22000; // Original price per unit
  const discountPerUnit = originalPrice - unitPrice; // Discount per unit

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  const totalDiscount = discountPerUnit * quantity;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section: Images */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-gray-50">
              <Image
                src="/shop/cam12.png"
                alt="Logitech BCC950 ConferenceCam – USB 2.0, HD 1080p, 3MP
"
                fill
                className="object-contain p-8"
                priority
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                HOT DEAL
              </div>
            </div>
             {/* About Section Images */}
                        {[
                          "cam12-1.jpg",
                          "cam12-2.jpg",
                          "cam12-3.png",
                          "cam12-4.png",
                          
                          
                        ].map((img, i) => (
                          <div
                            key={i}
                            className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50"
                          >
                            <Image
                              src={`/shop/${img}`}
                              alt="4K PTZ Camera Features"
                              fill
                              className="object-contain p-8"
                            />
                          </div>
                        ))}
          </div>

          {/* Right Section: Details */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
          Logitech BCC950 ConferenceCam – USB 2.0, HD 1080p, 3MP

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
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-md flex items-center justify-center gap-2 font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
            { name: "Brand", value: "Logitech" },
   { name: "Brand", value: "Logitech" },
  { name: "Manufacturer", value: "Logitech" },
  { name: "Series", value: "BCC950" },
  { name: "Colour", value: "Black" },
  { name: "Item Height", value: "4.88 Inches" },
  { name: "Item Width", value: "6.97 Inches" },
  { name: "Standing screen display size", value: "65 Inches" },
  { name: "Product Dimensions", value: "17.3 x 17.7 x 12.4 cm; 568 g" },
  { name: "Batteries", value: "1 Lithium Polymer batteries required." },
  { name: "Item model number", value: "960-000866" },
  { name: "Rear Webcam Resolution", value: "5 MP" },
  { name: "Are Batteries Included", value: "No" },
  { name: "Lithium Battery Energy Content", value: "1 Watt Hours" },
  { name: "Lithium Battery Weight", value: "113 g" },
  { name: "Lithium Battery Energy Content", value: "1" },
  { name: "Included Components", value: "USB cable, Camera extender stem, Power cable, Quick start guide, Remote control" },
  { name: "Country of Origin", value: "China" },
  { name: "Item Weight", value: "568 g" },
  { name: "ASIN", value: "B0083I7Y8W" },
  { name: "Date First Available", value: "6 August 2012" },
  { name: "Item Dimensions LxWxH", value: "17.3 x 17.7 x 12.4 Centimeters" },
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
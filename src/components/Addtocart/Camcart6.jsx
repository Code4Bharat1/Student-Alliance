"use client"

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Camcart6() {
  const unitPrice = 75000; // Base price per unit
  const originalPrice = 95000; // Original price per unit
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
                src="/shop/cam6.jpg"
                alt="Evota 4K PTZ Camera 12X Optical"
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
                          "cam6-1.png",
                          "cam6-2.png",
                          "cam6-3.png",
                          "cam6-4.png",
                          
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
              Evota 10X HD PTZ Camera
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
                "Full Function USB Interface",
                "1080P Full HD",
                "Ultra-high Frame Rate",
                "H.264 Slice/ H.264 SVC Support",
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

            {/* About Section Content (without image) */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About This Product:  Evota 10X HD PTZ Camera
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "The Evota 10X HD PTZ Camera offers a high-definition 1080P output, with a versatile USB interface that supports audio and compressed video. With 2.07 million effective pixels, this camera provides stunning clarity and precise PTZ control, ideal for professional video conferencing and streaming applications.",
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
           { name: "White Balance", value: "Auto, 3000K/Indoor, 4000K, 5000K/Outdoor, 6500K_1, 6500K_2, 6500K_3, One Push" },
            { name: "Backlight Compensation", value: "Support" },
            { name: "Color Optimization", value: "Support" },
            { name: "Digital Noise Reduction", value: "2D&3D Digital Noise Reduction" },
            { name: "Video S/N", value: "≥55dB" },
            { name: "Horizontal Field of View", value: "55° Degrees" },
            { name: "Vertical Field of View", value: "42° Degrees" },
            { name: "Diagonal Field of View", value: "68° Degrees" },
            { name: "Horizontal Rotation Range", value: "±170°" },
            { name: "Vertical Rotation Range", value: "-30° ~ 90°" },
            { name: "Pan Speed Range", value: "2.7° ~ 35.7°/s" },
            { name: "Tilt Speed Range", value: "2.7° ~ 31.5°/s" },
            { name: "H & V Flip", value: "Support" },
            { name: "Image Freeze", value: "Support" },
            { name: "Number of Preset", value: "255" },
            { name: "Preset Accuracy", value: "0.1°" },
            { name: "Input Voltage", value: "DC 12V" },
            { name: "Current Consumption", value: "0.5A (Max)" },
            { name: "Operating Temperature", value: "-10°C ~ 40°C (14°F ~ 104°F)" },
            { name: "Storage Temperature", value: "-40°C ~ 60°C (-40°F ~ 140°F)" },
            { name: "Power Consumption", value: "5W (Max)" },
            { name: "MTBF", value: ">30000h" },
            { name: "Size", value: "141.3mm x 153mm x 163.6mm" },
            { name: "Net Weight", value: "1.153 KG" },
            { name: "Operate System", value: "Windows 7, Windows 8, Windows 10, Mac OS X, Linux, Android" },
            { name: "Color System /", value: "YUV 4:2:2 / H.264 / MJPEG" },
            { name: "Video Format", value: "H.264 AVC: max to 1080P@30fps, H.264 SVC: max to 1080P@30fps, MJPEG: max to 1080P@30fps" },
            { name: "USB Video Communication Protocol", value: "UVC 1.0" },
            { name: "UVC PTZ", value: "Support" },
            { name: "Remote", value: "IR Remote" },
            { name: "USB Interface", value: "1xUSB2.0: Type B female jack" },
            { name: "Communication Interface", value: "1xRS232 In: 8pin Min DIN, Max Distance: 30m, Protocol: VISCA/Pelco-D/Pelco-P" },
            { name: "Power Jack", value: "JEITA type (DC IN 12V)/USB B type（DC IN 5V）" },
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
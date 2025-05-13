"use client"

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Camcart5() {
  const unitPrice = 20000; // Base price per unit
  const originalPrice = 25000; // Original price per unit
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
                src="/shop/cam5.jpg"
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
                          "Aboutcam5-img1.png",
                          "Aboutcam5-img2.png",
                          "Aboutcam5-img3.png",
                          "Aboutcam5-img4.png",
                          "Aboutcam5-img5.png",
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
                          { name: "Brand", value: "AIWaft", highlight: true },
                          { name: "Color", value: "Black" },
                          { name: "Model", value: "Evota – C12HUL" },
                          { name: "Type", value: "Evota 4k PTZ Camera" },
                          { name: "Model Number", value: "AIW20A1" },
                          {
                            name: "Included Components",
                            value: "Camera, Remote, Cable (1.5m), Adapter, Wall Mount",
                          },
                          {
                            name: "Connectivity",
                            value: "HDMI, USB 3.0, LAN, RS232, 3G-SDI",
                          },
                          { name: "Dimensions", value: "200mm x 176mm x 130mm (W x H x D)" },
                          { name: "Weight", value: "1.41 kg" },
                          { name: "Optical Zoom", value: "12X (f 4.4mm ~ 52.8mm, F1.8 ~ F2.6)" },
                          {
                            name: "Resolution",
                            value: "2160p @ 60fps, 1080P @ 60fps, 720P @ 60fps",
                          },
                          { name: "Video Format", value: "H.264 AVC, H.264 SVC, H.265, MJPEG" },
                          { name: "Digital Zoom", value: "16X" },
                          { name: "Sensor Type", value: "CMOS" },
                          { name: "Sensor", value: "1/2.5'', CMOS, Effective Pixel: 8.51M" },
                          { name: "Viewing Angle", value: "170°" },
                          {
                            name: "Horizontal Angle of View",
                            value: "71° ~ 8.2°"
                          },
                          {
                            name: "Vertical Angle of view",
                            value: "42.7° ~ 4.5°"
                          },
                          {
                            name: "Compatibility",
                            value: "Windows, Mac OS X, Linux, Android",
                          },
                          {
                            name: "Manufacturer",
                            value: "AIWaft Pvt Ltd",
                          },
                          {
                            name: "Minimal Illumination",
                            value: "0.05 Lux @ (F1.8, AGC ON)"
                          },
                          {
                            name: "White Balance",
                            value: "Automatic, one-click, manual"
                          },
                          { name: "Backlight Compensation", value: "Support" },
                          { name: "Video S/N", value: "≥55dB" },
                          {
                            name: "Digital Noise Reduction",
                            value: "2D&3D Digital Noise Reduction"
                          },
                          { name: "PAN Range", value: "±170°" },
                          { name: "Tilt Range", value: "-30° ~ +30°" },
                          {
                            name: "Input/Output Interface",
                            value: "HDMI, USB 3.0, LAN(RJ-45), RS232, 3G-SDI, Line In"
                          },
                          { name: "No. of Preset", value: "255 Preset" },
                          { name: "Input Voltage", value: "DC 12V" },
                          { name: "Power Consumption", value: "12W (Max)" },
                          {
                            name: "Operating Temperature",
                            value: "-10°C ~ 40°C"
                          },
                          { name: "Scanning Mode", value: "Progressive" },
                          { name: "Lens Mount", value: "M12" },
                          { name: "Lens", value: "Focus: f=2.8mm, FOV: 120°" },
                          { name: "Autofocus", value: "Support" },
                          { name: "Shutter", value: "1/30s ~ 1/10000s" },
                          { name: "Camera bracket", value: "Bracket with damper" },
                          {
                            name: "Operating System",
                            value: "Windows® 7 (1080P and under only), Windows 8.1, Windows 10 or higher mac OS™ 10.10 or higher Google™ Chrome book™ Version 29.0.1547.70 or higher Linux"
                          },
                          {
                            name: "Hardware Requirement",
                            value: "2.4 GHz Intel® Core 2 Duo processor or higher 2 GB RAM or more USB 2.0 port (USB 3.0 required for 4K)"
                          },
                          {
                            name: "Color System / Compression",
                            value: "H.265 / H.264 / MJPEG / YUY2"
                          },
                          {
                            name: "USB Video Communication Protocol",
                            value: "UVC v1.0/v1.1"
                          },
                          { name: "UVC PTZ", value: "Support(EPTZ)" },
                          {
                            name: "USB Interface",
                            value: "1xUSB 3.0: Type B, female"
                          },
                          {
                            name: "HDMI Interface",
                            value: "1xHDMI: Version 1.4)"
                          },
                          { name: "MTBF", value: "30000h" },
                          { name: "Part code", value: "PPU-IVC-4K-120AF" }
                        ].map((spec, i) => (
                          <tr
                            key={i}
                            className={`${
                              spec.highlight
                                ? "bg-blue-50"
                                : i % 2 === 0
                                ? ""
                                : "bg-gray-50"
                            }`}
                          >
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {spec.name}
                            </td>
                            <td
                              className={`px-4 sm:px-6 py-4 text-sm ${
                                spec.highlight
                                  ? "font-bold text-blue-800"
                                  : "text-gray-500"
                              } ${
                                spec.name.length > 15 || spec.value.length > 50
                                  ? "whitespace-normal"
                                  : "whitespace-nowrap"
                              }`}
                            >
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
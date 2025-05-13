"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Digital4() {
  const sizeOptions = {
    "65": { unitPrice: 132812, originalPrice: 200000 },
    "75": { unitPrice: 148434, originalPrice: 220000 },
    "86": { unitPrice: 230468, originalPrice: 330000 }
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("65");

  const { unitPrice, originalPrice } = sizeOptions[selectedSize];
  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  const totalSavings = (originalPrice - unitPrice) * quantity;

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-gray-50">
              <Image
                src="/shop/digital-d4.png"
                alt="AIWaft 4K Interactive Flat Panel | Ultra HD (3840x2160) LED | Android | Touch Display | Ideal for Schools, Colleges, Offices & Hospitals"
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
                src="/shop/d31.png"
                alt="AIWaft OPS SRX900 for Interactive Displays"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/D32.png"
                alt="AIWaft OPS SRX900 for Interactive Displays"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/D33.png"
                alt="Maxhub Digital Board | U3 Series"
                fill
                className="object-contain p-8"
              />
            </div>
             <div className="relative rounded-xl overflow-hidden mt-8 aspect-square bg-gray-50">
              <Image
                src="/shop/D34.png"
                alt="AIWaft OPS SRX900 for Interactive Displayss"
                fill
                className="object-contain p-8"
              />
            </div>
             
            
          
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
              Maxhub Digital Board | U3 Series
              </h1>
              <p className="text-lg text-gray-600">
                Shop with Confidence – Your Transaction is 100% Secure.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-500">
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <span className="text-sm text-gray-500">6 reviews</span>
              <span className="text-sm text-blue-600 ml-2 hover:underline cursor-pointer">
                Write a review
              </span>
            </div>

            {/* Price Section */}
            <div className="mb-6 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <div className="flex items-end gap-4 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  {formatPrice(totalPrice)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(totalOriginalPrice)}
                </span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save {formatPrice(totalSavings)}
                </span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                In stock • Ready to ship
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-800">Select Your Size</h3>
                <span className="text-xs text-gray-500">
                  {selectedSize ? `Selected: ${sizeOptions[selectedSize].label}` : ""}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Object.entries(sizeOptions).map(([size, { label }]) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative rounded-xl p-4 font-medium text-center transition-all duration-200 transform
          ${selectedSize === size
                        ? "border-2 border-indigo-500 text-indigo-600 bg-indigo-50 scale-[1.02] shadow-sm"
                        : "border border-gray-200 text-gray-700 hover:border-indigo-300 hover:shadow-md"
                      }`}
                  >
                    {selectedSize === size && (
                      <div className="absolute -top-2 -right-2 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <span className="block text-lg font-semibold">{size}"</span>
                    <span className="block text-xs text-gray-500 mt-1">{label}</span>
                  </button>
                ))}
              </div>

              {selectedSize && (
                <div className="mt-3 text-sm text-indigo-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  {sizeOptions[selectedSize].description}
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {[
                "Professional 4K Display",
                "Versatile USB Type-C",
                "Natural Writing Experience",
                "Productive Teaching",
                "Responsive Hardware",
                "SGS-certified antibacterial components."
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
<br /> <br />
             <h2 className="text-2xl font-bold text-gray-900 mb-6">
   Description
  </h2>
  <ul className="space-y-3 text-gray-700 text-sm">
    <li className="flex items-start">
    Professional 4K Display: High Color Accuracy, AE≤2 Wide Color Gamut, NTSC 72%.
    <br/>
Versatile USB Type-C: Integrate 65-watt power charge, video, audio, touch, and internet access features into one interface.
<br/>
Eyes Care: TUV Low Blue light, TUV Flicker-free with ambient light sensor and anti-glare glass.
<br/>
    </li>
  </ul>
  {/* Clean Product Specifications Table with Brand Highlight */}
<div className="mt-12 border-t border-gray-100 pt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Technical Specifications
  </h2>

 <div className="mt-12 border-t border-gray-100 pt-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Technical Specifications
  </h2>

  <div className="overflow-hidden rounded-lg border border-gray-200">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200 bg-white">
          {/* Highlighted Brand Row */}
          <tr className="bg-blue-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">Brand</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">AIWaft</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">RAM</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8GB</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SSD</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">128GB</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Windows</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model 65"</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">E6520C</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model 75"</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">E7520C</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Model 86"</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">E8620C</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Glass</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Anti-glare, Tempered</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bonding</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Zero parallax</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Viewing Angle</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">178° (H/V)</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aspect Ratio</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16:9</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Backlight</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DLED</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Resolution</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3840 x 2160</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contrast Ratio</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1200:1</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color Depth</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.078 (10bit)</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color Gamut (typ.)</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">72% NTSC</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Color Accuracy</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Delta E ≤ 2</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Refresh Rate</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60Hz</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Response Time</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8ms</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operating System</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Android</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CPU</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.0GHz quad core ARM A55</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GPU</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mali-G52 MP2</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operating Temperature</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0°C - 40°C</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Storage Temperature</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-20°C - 60°C</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operating Humidity</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10% -90% RH</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Storage Humidity</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10% -90% RH</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sound Channel</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.0</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Power Output</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 x 12W</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Touch Sensor</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Infrared (IR)</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Touch Tool</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Finger, Gesture, Stylus</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Multitouch Capabilities</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Up to 40 touch points (OS dependent)</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Touch Accuracy</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">±1.5mm</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Object Recognition Range</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">23mm</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stylus Type</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Passive dual nibs</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Supported Operating System (Touch Return)</td>
            <td className="px-6 py-4 text-sm text-gray-500">Windows 10/Windows8/Windows7/WindowsXP/Android/Linux/Mac OS X/Chrome OS</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Screen Share</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">On Board Apps</td>
            <td className="px-6 py-4 text-sm text-gray-500">Browser, Cloud Drive, System Keeper, Note, Palette, Annotate, Timer, Screen Record, Split Screen, Screen Lock, etc.</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dimension (W x H x D)</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1488.1 x 896.3 x 88.3 mm</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Shipping Dimension (W x H x D)</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1628 x 1024 x 208 mm</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">VESA</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">600 x 400 mm, M8 x 25 mm</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Accessory</td>
            <td className="px-6 py-4 text-sm text-gray-500">
              3m Power Cord<br />
              1.4m HDMI Cable<br />
              5m USB Touch Cable (Type A-B)<br />
              1.8m USB Type-C Cable<br />
              Remote Control
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">OPS Slot</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes, 3840 x 2160 @ 60fps</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">OPS Compatible</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OPS62A</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wired</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1000baseT RJ45 x 2</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wi-Fi</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.4Ghz, 5Ghz band 802.11ac/b/g/n/a/ax</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">HDMI</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              HDMI 2.0 In x 3<br />
              HDMI Out x 1 (Up to 4K @ 60fps)
            </td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Touch</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">USB Type-B x 2</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Control</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">RS-232 x 1</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Analog</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">VGA In x 1</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Audio</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              Audio In x 1<br />
              Audio Out x 1<br />
              S/PDIF Out x 1
            </td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">USB Type-A</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              USB 3.0 x 4<br />
              USB 2.0 x 1
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Multifunction Port</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">USB Type-C x 1</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TÜV Rheinland Flicker Free</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Yes, 3840 x 2160 @ 60fps</td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TÜV Rheinland Low Blue Light</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OPS62A</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SGS Antibacterial</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Stylus, Power Button Protection Glass (optional)</td>
          </tr>
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

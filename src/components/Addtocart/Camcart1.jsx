"use client";

import Image from "next/image";
import { useState } from "react";
import React, { useRef, useEffect } from 'react'; //scroll in mobile
import { StarIcon } from "@heroicons/react/solid";
import Link from "next/link";
export default function Camcart1() {
  const [quantity, setQuantity] = useState(1);

  const basePrice = 75000;
  const discountPrice = 95000;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const totalPrice = basePrice * quantity;
  const totalDiscountPrice = discountPrice * quantity;
  const totalSaved = totalDiscountPrice - totalPrice;

  //Scroll in Mobile
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const images = ["/shop/cam1.png", "/shop/aboutcam1.png", "/shop/aboutcam1-1.png", "/shop/aboutcam1-2.png"];

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
                Student Alliance 4K PTZ Camera | Live Streaming, Online Teaching & Classroom Recording | Auto-Tracking | 12X Optical Zoom | Best for Online Classes in India
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
                  ₹{totalPrice.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{totalDiscountPrice.toLocaleString()}
                </span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save ₹{totalSaved.toLocaleString()}
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
                "AI Tracking & Low Light Performance",
                "Versatile Connectivity",
                "Wide Pan-Tilt Control",
                "Durable & Compatible",
                "Supports HDMI, USB 3.0, LAN, RS232",
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
    {[
      "Ultra HD 4K Video: Capture sharp 4K footage at 60fps with 12x optical zoom, ideal for classroom recording.",
      "AI Tracking & Low Light Performance: Features advanced auto-tracking and gesture control for effortless usability.",
      "Versatile Connectivity: Equipped with HDMI, USB 3.0, LAN, RS232, and 3G-SDI for live streaming and dual streaming.",
      "Wide Pan-Tilt Control: Offers ±170° pan and -30° to +30° tilt range with 255 preset positions for flexible movement.",
      "Durable & Compatible: Works seamlessly with Windows, macOS, Linux, and Android for integration with any teaching setup.",
    ].map((text, i) => (
      <li key={i} className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span className="break-words">{text}</span>
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
      <div className="overflow-hidden rounded-lg border border-gray-200 min-w-[1000px]">
        <table className="min-w-full w-max divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200 bg-white">
            {[
              ['Brand', 'Student Alliance'],
              ['Colour', 'Black'],
              ['Number of Items', '1'],
              ['Included Components', 'Camera, Remote, Cable (1.5 meter), Adapter & Wall Mount.'],
              ['Wireless Communication Technology', 'HDMI USB 3.0 LAN (RJ-45) RS232 3G-SDI'],
              ['Form Factor', 'Desktop or mounted form factor'],
              ['Viewing Angle', '170 Degrees'],
              ['Item dimensions L x W x H', '20 x 13 x 17.6 Centimeters'],
              ['Flash Memory Type', 'SD'],
              ['Optical Zoom', '12 x'],
              ['Maximum Shutter Speed', '1/10000s Seconds'],
              ['Focus Type', 'Auto Focus'],
              ['Zoom Type', 'Optical, Digital'],
              ['Video Capture Format', '4K'],
              ['Specific Uses For Product', 'Broadcasting and Live Events, Security and Surveillance, Video Conferencing and Telepresence, Education and Training, Telemedicine and Remote Healthcare, Content Creation and Production, Wildlife Monitoring and Nature Documentaries.'],
              ['Net Quantity', '1.00 count'],
              ['Photo Sensor Technology', 'CMOS'],
              ['Maximum Webcam Image Resolution', '8.51 MP'],
              ['Control Method', 'Remote'],
              ['Manufacturer', 'Student Alliance Pvt Ltd, Student Alliance20@gmail.com'],
              ['Model', 'AIW20A1'],
              ['Product Dimensions', '20 x 13 x 17.6 cm; 1.3 kg'],
              ['Operating System', 'Linux, Windows, iOS, Android'],
              ['Special Features', 'Create multiple scenes, auto-track movements, adjust color contrast, and control pan-tilt-zoom all via remote with this versatile camera.'],
              ['Image Aspect Ratio', '16:9'],
              ['Image stabilization technology', 'Digital'],
              ['Digital Zoom', '16 x'],
              ['Resolution', '3840 x 2160 Pixels'],
              ['Minimum Shutter Speed', '1/30s Seconds'],
              ['Minimum diaphragm opening', '1.8 f'],
              ['Min Focal Length', '4.4 Millimeters'],
              ['Total USB ports', '1'],
              ['Lens type', 'Zoom'],
              ['Media type', 'H.264 SVC, H.264 AVC, H.265, MJPEG'],
              ['Is there a timer?', 'No'],
              ['Includes remote', 'Yes'],
              ['Item Weight', '1 kg 300 g'],
              ['Packer', 'Student Alliance Pvt Ltd'],
              ['Importer', 'Student Alliance'],
              ['Item Dimensions LxWxH', '20 x 13 x 17.6 Centimeters'],
              ['Generic Name', '4K PTZ Camera']
            ].map(([key, value], index) => (
              <tr key={key} className={index % 2 === 0 ? 'bg-blue-50' : ''}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black" >{key}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{value}</td>
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
  );
}

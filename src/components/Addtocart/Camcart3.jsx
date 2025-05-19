"use client";

import Image from "next/image";
import { useState } from "react";
import React, { useRef, useEffect } from 'react'; //scroll in mobile
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/navigation';

export default function Camcart3() {
  const [quantity, setQuantity] = useState(1);
      const router = useRouter();

  const basePrice = 66000;
  const originalPrice = 80000;
  const discountAmount = originalPrice - basePrice;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    // Product details
  const product = {
    id: 103,
    name: "Evota 12X HD PTZ Camera",
    price: basePrice,
    image: "/shop/cam3.jpg",
    description: "Professional 12X HD PTZ Camera",
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
    const images = [ "/shop/cam3.jpg", "/shop/aboutcam3-img3.png", "/shop/aboutcam3-img2.png", "/shop/aboutcam3-img1.png"];
  
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
                Evota 12X HD PTZ Camera
              </h1>
              <p className="text-lg text-gray-600">
                12X Zoom • Auto Tracking • 4K Resolution
              </p>
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
                  ₹{(basePrice * quantity).toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{(originalPrice * quantity).toLocaleString()}
                </span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save ₹{(discountAmount * quantity).toLocaleString()}
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
                "12x optical zoom",
                "Field Of View 72.5 degree",
                "IR remote controllable:",
                "True HD 1080p @ 60 FP",
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
                About This Product: Features of the 4K PTZ Camera Pro Lens
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "12x optical zoom: Optical zoom is a true zoom lens that produces much better-quality images than digital zoom which performs in-camera image processing.",
                  "FOV 72.5 degree: The camera has a wide field of view (FOV), the area covered by the camera, of 72.5 degrees.",
                  "RS- 232: RS – 232 / VISCA to control the PTZ functions of the camera remotely.",
                  "True HD 1080p @ 60 FP: This camera offers recordings with very vivid clarity (True HD) at a resolution of 1080p @ 60 frames per second (FPS).",
                  "IR remote controllable: Remotes with infrared light can be used to reliably control this camera.",
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

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {/* Highlighted Brand Row */}
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">
                        Brand
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">
                        Evota
                      </td>
                    </tr>

                    {/* Camera Specifications */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Manufacturer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        evota, IECS House, A-2, C-Block Community Centre,
                        <br />
                        Naraina Vihar, New Delhi - 110028(India)
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Model Name
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        EDU PRO C412UL
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Package Dimensions
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        15.6 x 12.85 x 11.8 cm
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Item Part Number
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        C412UL
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Colour
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Black
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Photo Sensor Technology
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        CMOS
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Operating System
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Windows 7, Windows 8, Windows 10, Mac OS X,
                        <br />
                        Linux
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Compatible Devices
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Laptop, Desktop
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Special Features
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        12x Optical Zoom, True HD 1080p @ 60 FPS, 16x Digital
                        Zoom
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Remote Control
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Infrared (Includes remote: Yes)
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Image Aspect Ratio
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        16:9
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Digital Zoom
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        16x
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1080p Full HD Pixels
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Maximum Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1080 Pixels
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Maximum Shutter Speed
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Auto, 3000K/Indoor, 4000K, 5000K/Outdoor, 6500K_1,
                        6500K_2, 6500K_3, One Push, Manual Seconds
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Capture Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1080p
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Power Source
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        AC
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Connector Type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        USB
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Country of Origin
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        India
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ASIN
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        B0C5F25QMW
                      </td>
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

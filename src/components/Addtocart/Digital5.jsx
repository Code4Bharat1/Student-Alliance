"use client";

import Image from "next/image";
import { useState } from "react";
import React, { useRef, useEffect } from "react"; //scroll in mobile
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/navigation';

export default function Digital5() {
  const sizeOptions = {
    65: { unitPrice: 85937, originalPrice: 130000 },
    75: { unitPrice: 93750, originalPrice: 150000 },
    86: { unitPrice: 164062, originalPrice: 260000 },
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("65");
  const router = useRouter();

  const { unitPrice, originalPrice } = sizeOptions[selectedSize];
  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  const totalSavings = (originalPrice - unitPrice) * quantity;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    // Product details
  const product = {
    id: 19, // Different ID from previous products
    name: "Evota Smart Board",
    basePrice: unitPrice,
    image: "/shop/digital-d5.png",
    description: "Smart Digital Board for Teaching, Classrooms & Online Learning with Android 14 and Multi-Touch",
  };

  const handleAddToCart = () => {
    const newProduct = {
      id: product.id,
      name: `${product.name} (${selectedSize}")`,
      price: unitPrice,
      image: product.image,
      description: product.description,
      quantity: quantity,
      size: selectedSize
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product with same size already exists in the cart
    const existingItem = existingCart.find(
      (item) => item.id === newProduct.id && item.size === newProduct.size
    );

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
  const images = [
    "/shop/digital-d5.png",
    "/shop/d51.png",
    "/shop/D52.png",
    "/shop/D53.png",
    "/shop/D54.png",
  ];

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
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                      alt={
                        i === 0
                          ? "MaxHub Interactive Flat Panel | With OPS"
                          : `Feature ${i}`
                      }
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "bg-purple-600 w-4"
                        : "bg-gray-300 bg-opacity-60"
                    }`}
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

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                Evota Smart Board
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
            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-800">
                  Select Your Size
                </h3>
                <span className="text-xs text-gray-500">
                  {selectedSize
                    ? `Selected: ${sizeOptions[selectedSize].label}`
                    : ""}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {Object.entries(sizeOptions).map(([size, { label }]) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative rounded-xl p-4 font-medium text-center transition-all duration-200 transform
          ${
            selectedSize === size
              ? "border-2 border-indigo-500 text-indigo-600 bg-indigo-50 scale-[1.02] shadow-sm"
              : "border border-gray-200 text-gray-700 hover:border-indigo-300 hover:shadow-md"
          }`}
                  >
                    {selectedSize === size && (
                      <div className="absolute -top-2 -right-2 bg-indigo-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    <span className="block text-lg font-semibold">{size}"</span>
                    <span className="block text-xs text-gray-500 mt-1">
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              {selectedSize && (
                <div className="mt-3 text-sm text-indigo-600 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {sizeOptions[selectedSize].description}
                </div>
              )}
            </div>
            {/* Key Features */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              {[
                "High-Resolution Display",
                "Interactive Pen Support",
                "Fast and Accurate Touch Response",
                "Wireless Connectivity",
                "Collaboration Tools",
                "Effective collaboration tools such as screen sharing, split-screen mode.",
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
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
            <br /> <br />
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Description
            </h2>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start">
                High-Resolution Display: A top-quality interactive flat panel
                should offer a high-resolution display, such as 4K or even 8K,
                providing sharp and clear visuals for presentations, videos, and
                interactive content.
                <br />
                Interactive Pen Support: The inclusion of interactive pens or
                styluses allows for precise writing and drawing on the screen,
                making it ideal for educational and creative purposes.
                <br />
              </li>
            </ul>
            {/* Clean Product Specifications Table with Brand Highlight */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-[1000px] divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">
                        Brand
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">
                        evota
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Product Dimensions
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        10.16 x 170 x 104 cm
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Flash memory type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        SDXC, SDHC
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Hardware Interface
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        HDMI
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        4K UHD 2160p
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Compatible Devices
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Laptop, Tablet, Smartphone
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Special Features
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Anti-Glare Coating, Touch Screen, Flicker-Free
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mounting Hardware
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Battery
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Display Technology
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        LCD
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Viewing Angle
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        120 Degrees
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Image brightness
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        300
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Image stabilization technology
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Digital
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Aspect Ratio
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        16:9
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Screen Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3840 x 2160
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3840 x 2160 Pixels
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Capture Resolution
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        720p
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Wattage
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        225 Watts
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Refresh Rate
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3 Hz
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Total USB ports
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        5
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Connector Type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Wi-Fi
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Form Factor
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Compact
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Lens type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Zoom
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Media type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        CD, Flash
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Mounting Type
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Wall Mount
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Manufacturer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        evota
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Generic Name
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Smart Interactive Flat Panel
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Item Dimensions (LxWxH)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        10.2 x 170 x 104 Centimeters
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

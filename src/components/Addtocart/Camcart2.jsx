"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Camcart2() {
  const [quantity, setQuantity] = useState(1);

  const basePrice = 95000;
  const discountPrice = 40000;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const totalPrice = basePrice * quantity;
  const totalDiscountPrice = discountPrice * quantity;
  const totalSaved = totalDiscountPrice - totalPrice;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section: Images */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-gray-50">
              <Image
                src="/shop/cam2.jpg"
                alt="Student Alliance 4K PTZ Camera Pro"
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
              "Aboutcam2-img3.png",
              "Aboutcam2-img2.png",
              "Aboutcam2-img1.png",
              "Aboutcam2-img4.png",
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
                Student Alliance 4K PTZ Camera Pro Lens – 12X Zoom, Auto Tracking, Best
                for Online Teaching, Live Streaming & Classroom Recording,
                HDMI/SDI/USB/IP
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
                "12X Optical Zoom",
                "Auto Focus & Low-Light",
                "Auto Tracking",
                "Multiple Connectivity",
                "Smooth Pan,Tilt & Zoom – 170° & 90° ",
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
                  "Ultra HD 4K Video: Delivers sharp 4K resolution with 12X optical zoom, perfect for online teaching and professional streaming.",
                  "AI Auto-Tracking & Smooth PTZ: Features advanced auto-tracking and seamless pan, tilt, and zoom for dynamic recording.",
                  "Multiple Connectivity Options: Supports HDMI, SDI, USB, and IP for flexible integration with live streaming setups.",
                  "Superior Low-Light Performance: Ensures clear video quality even in dimly lit environments.",
                  "Power over Ethernet (PoE): Simplifies installation with a single-cable setup for both power and data.",
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
                        Student Alliance
                      </td>
                    </tr>

                    {/* Camera Specifications */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Manufacturer
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                       Student Alliance Private Limited
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Model Number
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        AIW20A2
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Format (HDMI)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        1920*1080P60/50/30/25/59.94/29.97/24/23.98,
                        1920*1080i60/50/59.94, 1280*720P60/50/30/25/59.94/29.97
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Format (SDI)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        1920*1080P60/50/30/25/59.94/29.97/24/23.98,
                        1920*1080i60/50/59.94, 1280*720P60/50/30/25/59.94/29.97
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Format (USB)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        1920*1080P60/50/30/25(USB3.0),
                        1280*720P60/50/30(USB3.0), 1280*720P25(USB3.0&USB2.0),
                        1024*576P30(USB3.0&USB2.0), 960*540P30(USB2.0),
                        640*360P30(USB2.0), 512*288P30(USB2.0)
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Format (IP)
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Main Stream: 1920*1080@3~30; 1280*720@3~30;
                        1024*576@3~30
                        <br />
                        Sub Stream: 1280*720@3~30; 1024*576@3~30; 640*360@3~30
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Interface
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        HDMI, SDI, RJ45, USB3.0, USB2.0
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Sensor
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1/2.8" 2.4MP CMOS sensor
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        View Angle
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        72.5°(Far)-6.43° (Near)
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Zoom
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        F3.92~47.32mm(12X)
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Rotation Angle
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Pan: -170°~+170°, Tilt: -30°~+90°
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Rotation Speed
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Pan: 0°~120°/s, Tilt: 0°~80°/s
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Preset
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Remote controller: 10; RS232: 128; Accuracy: 0.1°
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Control Port
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        RS232, RS485(optional), RJ45 (VISCA over IP), USB3.0
                        (UVC1.5), USB2.0 (UVC1.1)
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Network Speed
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1000M
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Encode
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        H.264/H.265(default: H.264)
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Bit Rate Control
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Variable Bit Rate, Constant Bit Rate
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Video Bit Rate
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0Kbps~15360Kbps
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        IP Protocol
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        TCP/IP, HTTP, RTSP, DHCP, RTMP, Onvif, VISCA over
                        IP(TCP&UDP), HTMLS, VISCA, PELCO-P/D
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        POE
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Daisy Chain
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Support RS232 serial daisy chain
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Minimum Lux
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0.01lux
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        White Balance
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        ATW/Manual/Auto/Indoor/Outdoor/Push
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Exposure
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Auto/Manual/Shutter/Iris/Bright
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Focus
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Auto/Manual
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Iris
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Auto/Manual
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Electric Shutter
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        Auto/Manual
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Gamma
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        WDR
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        BLC
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2D Noise Reduction
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        3D Noise Reduction
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Anti Flicker
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        OFF/50Hz/60Hz
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Pan Tilt Flip
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Supported
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Input Voltage
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        DC12V/POE(IEEE802.3af)
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dimensions
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        220mm×190mm×173mm
                      </td>
                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Net Weight
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        1.40kg
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

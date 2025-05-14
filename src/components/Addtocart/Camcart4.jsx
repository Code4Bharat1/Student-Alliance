"use client";

import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";

export default function Camcart4() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 50000;
  const originalPrice = 55000;
  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  const totalSavings = (originalPrice - unitPrice) * quantity;

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 p-8">
          {/* Left Section: Images */}
          <div className="flex flex-col lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-gray-50">
              <Image
                src="/shop/cam4.jpg"
                alt="Evota E-PTZ Camera"
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
              "Aboutcam4-img1.png",
              "Aboutcam4-img2.png",
              "Aboutcam4-img3.png",
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
                Evota E-PTZ Camera
              </h1>
              <p className="text-lg text-gray-600">
                Shop with Confidence – Your Transaction is 100% Secure.
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">6 reviews</span>
              <span className="text-sm text-blue-600 ml-2 hover:underline cursor-pointer">
                Write a review
              </span>
            </div>

            {/* Dynamic Price Section */}
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
              <div className="flex items-end gap-4 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{totalPrice.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{totalOriginalPrice.toLocaleString()}
                </span>
                <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                  Save ₹{totalSavings.toLocaleString()}
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
                "High-Definition Video",
                "Reliable 4K Visuals ",
                "8X Digital Zoom",
                "Wide 120° Field Of View",
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
                About This Product: Evota E-PTZ Camera
              </h2>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Full HD 1080p Resolution: Delivers crisp 1080p video at 60fps with 8X digital zoom, perfect for professional broadcasting and meetings.",
                  "Wide 120° Field of View: Captures expansive spaces clearly, ideal for conference rooms and security monitoring.",
                  "Versatile Installation Options: Features multiple mounting choices for flexible setup in various environments.",
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
                          { name: "Brand", value: "Student Alliance", highlight: true },
                          { name: "Color", value: "Black" },
                          { name: "Model Number", value: "AIW20A1" },
                          {
                            name: "Included Components",
                            value:
                              "Camera, Remote, Cable (1.5m), Adapter, Wall Mount",
                          },
                          {
                            name: "Connectivity",
                            value: "HDMI, USB 3.0, LAN, RS232, 3G-SDI",
                          },
                          { name: "Dimensions", value: "20 × 13 × 17.6 cm" },
                          { name: "Weight", value: "1.3 kg" },
                          { name: "Optical Zoom", value: "12×" },
                          {
                            name: "Resolution",
                            value: "3840 × 2160 pixels (4K UHD)",
                          },
                          { name: "Sensor Type", value: "CMOS" },
                          { name: "Viewing Angle", value: "170°" },
                          {
                            name: "Compatibility",
                            value: "Windows, macOS, Linux, Android, iOS",
                          },
                          {
                            name: "Manufacturer",
                            value: "Student Alliance Pvt Ltd",
                          },
                          { name: "Digital Zoom", value: "8X" },
                          {
                            name: "Video System(HDMI)",
                            value:
                              "4K@30fps/25fps, 1080P@30/25fps, 1080I@60/50fps, 720P@60/50fps",
                          },
                          {
                            name: "Sensor",
                            value: "1/2.5'', CMOS, Effective Pixel: 8.51M",
                          },
                          { name: "Scanning Mode", value: "Progressive" },
                          { name: "Lens Mount", value: "M12" },
                          { name: "Lens", value: "Focus: f=2.8mm, FOV: 120°" },
                          { name: "Autofocus", value: "Support" },
                          {
                            name: "Minimal Illumination",
                            value: "0.05 Lux @ (F1.8, AGC ON)",
                          },
                          { name: "Shutter", value: "1/30s ~ 1/10000s" },
                          {
                            name: "White Balance",
                            value: "Auto, Indoor, Outdoor, One Push, Manual",
                          },
                          {
                            name: "Camera bracket",
                            value: "Bracket with damper",
                          },
                          {
                            name: "Digital Noise Reduction",
                            value: "2D,3D digital noise reduction",
                          },
                          { name: "Backlight Compensation", value: "Support" },
                          {
                            name: "Operating System",
                            value:
                              "Windows® 7 (1080P and under only), Windows 8.1, Windows 10 or higher mac OS™ 10.10 or higher Google™ Chrome book™ Version 29.0.1547.70 or higher Linux",
                          },
                          {
                            name: "Hardware Requirement",
                            value:
                              "2.4 GHz Intel® Core 2 Duo processor or higher 2 GB RAM or more USB 2.0 port (USB 3.0 required for 4K)",
                          },
                          {
                            name: "Color System / Compression",
                            value: "H.265 / H.264 / MJPEG / YUY2",
                          },
                          {
                            name: "Resolution",
                            value:
                              "4K, 1080P, 720P, 960x540P, 640x360P, 320x240P",
                          },
                          {
                            name: "Frame rate",
                            value:
                              "30fps, 25fps, 24fps, 20fps, 15fps, 10fps, 7.5fps, 5fps",
                          },
                          {
                            name: "USB Video Communication Protocol",
                            value: "UVC v1.0/v1.1",
                          },
                          { name: "UVC PTZ", value: "Support(EPTZ)" },
                          {
                            name: "USB Interface",
                            value: "1xUSB 3.0: Type B, female",
                          },
                          {
                            name: "HDMI Interface",
                            value: "1xHDMI: Version 1.4)",
                          },
                          {
                            name: "Input Voltage",
                            value: "5V (USB power supply)",
                          },
                          { name: "Current Consumption", value: "L1A" },
                          {
                            name: "Operating Temperature",
                            value:
                              "-10°C ~ 40°C (14°F ~ 104°F) Storage Temperature -40°C ~ 60°C (-40°F ~ 140°F)",
                          },
                          { name: "Power Consumption", value: "3.5W(TBD)" },
                          {
                            name: "Size",
                            value: "194mm x 34mm x 42mm (without bracket)",
                          },
                          { name: "Net Weight", value: "0.5Kg(TBD)" },
                          { name: "MTBF", value: "30000h" },
                          { name: "Part code", value: "PPU-IVC-4K-120AF" },
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

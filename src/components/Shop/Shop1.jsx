"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const controls = useAnimation();

  const filters = [
    "All",
    "Camera",
    "Digital Board",
    "Mic",
    "Cable",
    "Speaker",
    "OPS",
    "Stand",
    "Lighting",
  ];
  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Rating",
  ];

  const products = [
    //camera
    {
      id: 1,
      name: "AIWaft 4K PTZ Camera",
      price: 95000,
      discount: 20000,
      rating: 5,
      category: "Camera",
      isNew: true,
      image: "/Shop/cam1.jpg",
      cartLink: "/addtocart/camcart1",
    },
    {
      id: 2,
      name: "AIWaft 4K PTZ Camera Pro",
      price: 105000,
      discount: 10000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam2.jpg",
      cartLink: "/addtocart/camcart2",
    },
    {
      id: 3,
      name: "Evota 12X HD P TZ Camera",
      price: 80000,
      discount: 14000,
      rating: 5,
      category: "Camera",
      isNew: true,
      image: "/Shop/cam3.jpg",
      cartLink: "addtocart/camcart3",
    },
    {
      id: 4,
      name: "Evota E-PTZ Camera at Best Price",
      price: 55000,
      discount: 5000,
      rating: 4,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam4.jpg",
      cartLink: "addtocart/camcart4",
    },
    {
      id: 5,
      name: "Evota 4K PTZ Camera 12X Optical",
      price: 95000,
      discount: 20000,
      rating: 4,
      category: "Camera",
      isNew: true,
      image: "/Shop/cam5.jpg",
      cartLink: "addtocart/camcart5",
    },
    {
      id: 6,
      name: "Evota 10x HD PTZ Camera",
      price: 65000,
      discount: 10000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam6.jpg",
      cartLink: "addtocart/camcart6",
    },
    {
      id: 7,
      name: "Evota 4K Webcam",
      price: 37000,
      discount: 6000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam7.png",
      cartLink: "addtocart/camcart7",
    },
    {
      id: 8,
      name: "AIWAFT 4K Webcam with AI Auto",
      price: 6999,
      discount: 2555,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam8.png",
      cartLink: "addtocart/camcart8",
    },
    {
      id: 9,
      name: "AIWaft EPTZ 4K Webcam - Ultra HD",
      price: 40000,
      discount: 21000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam9.png",
      cartLink: "addtocart/camcart9",
    },
    {
      id: 10,
      name: "Logitech MeetUp HD 1 Wx Optical",
      price: 114000,
      discount: 24900,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam10.png",
      cartLink: "addtocart/camcart10",
    },
    {
      id: 11,
      name: "Logitech C920e Webcam — Full HD",
      price: 11000,
      discount: 1400,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam11.png",
      cartLink: "addtocart/camcart11",
    },
    {
      id: 13,
      name: "Logitech BCC950 ConferenceCam ",
      price: 22000,
      discount: 3000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam12.png",
      cartLink: "addtocart/camcart12",
    },
    //Digital Board
    {
      id: 14,
      name: "AIWaft Turbo Tab – AI-Powered 4K Interactive Flat Panel",
      price: 150000,
      discount: 50000,
      rating: 5,
      category: "Digital Board",
      isNew: false,
      image: "/Shop/digital-d1.jpg",
      cartLink: "addtocart/digital1",
    },
    {
      id: 15,
      name: "AIWaft 4K Interactive Flat Panel ",
      price: 150000,
      discount: 70000,
      rating: 5,
      category: "Digital Board",
      isNew: false,
      image: "/Shop/digital-d2.png",
      cartLink: "addtocart/digital2",
    },
    {
      id: 16,
      name: "Maxhub Digital Board | U3 Series",
      price: 150000,
      discount: 40000,
      rating: 5,
      category: "Digital Board",
      isNew: false,
      image: "/Shop/digital-d3.png",
      cartLink: "addtocart/digital3",
    },
    {
      id: 17,
      name: "MaxHub Interactive Flat Panel | With OPS",
      price: 150000,
      discount: 30000,
      rating: 5,
      category: "Digital Board",
      isNew: false,
      image: "/Shop/digital-d4.png",
      cartLink: "addtocart/digital4",
    },
    {
      id: 18,
      name: "Evota Smart Board",
      price: 150000,
      discount: 30000,
      rating: 5,
      category: "Digital Board",
      isNew: false,
      image: "/Shop/digital-d5.png",
      cartLink: "addtocart/digital5",
    },
    {
      id: 19,
      name: "Maxhub Digital Board | E21 Series",
      price: 150000,
      discount: 25000,
      rating: 5,
      category: "Digital Board",
      isNew: false,
      image: "/Shop/digital-d6.png",
      cartLink: "addtocart/digital6",
    },
    //mic
    {
      id: 20,
      name: "AIWaft Wireless Microphone | 48kHz/24bit Audio ",
      price: 6999,
      discount: 4000,
      rating: 5,
      category: "Mic",
      isNew: false,
      image: "/Shop/Mic1.png",
      cartLink: "addtocart/mic1",
    },
    {
      id: 21,
      name: "AHUJA MTP-20 Lavalier Mic",
      price: 2500,
      discount: 1000,
      rating: 5,
      category: "Mic",
      isNew: false,
      image: "/Shop/Mic2.png",
      cartLink: "addtocart/mic2",
    },
    {
      id: 22,
      name: "Sennheiser ME 2-II Lavalier Mic – Compact, Omni-Directional",
      price: 42000,
      discount: 10000,
      rating: 5,
      category: "Mic",
      isNew: false,
      image: "/Shop/Mic3.png",
      cartLink: "addtocart/mic3",
    },
    {
      id: 23,
      name: "SENNHEISER XSW 1-ME3-A Wireless Headset Mic",
      price: 42000,
      discount: 10000,
      rating: 5,
      category: "Mic",
      isNew: false,
      image: "/Shop/Mic4.png",
      cartLink: "addtocart/mic4",
    },
    //cable
    {
      id: 24,
      name: "AIWaft 10M USB 2.0 Extension Cable, Male to Female",
      price: 4500,
      discount: 1000,
      rating: 5,
      category: "Cable",
      isNew: false,
      image: "/Shop/cable1.png",
      cartLink: "addtocart/cable1",
    },
    {
      id: 25,
      name: "AIWaft 10m USB 3.0 Extension Cable, Male to Female",
      price: 5500,
      discount: 1000,
      rating: 5,
      category: "Cable",
      isNew: false,
      image: "/Shop/cable1.png",
      cartLink: "addtocart/cable2",
    },
    //Speaker
    {
      id: 26,
      name: "AIWaft Conference Speaker with Microphone",
      price: 20000,
      discount: 5000,
      rating: 5,
      category: "Speaker",
      isNew: false,
      image: "/Shop/speaker1.png",
      cartLink: "addtocart/speaker1",
    },
    {
      id: 27,
      name: "Ahuja PS300TM 10 Watt Speaker",
      price: 3000,
      discount: 755,
      rating: 5,
      category: "Speaker",
      isNew: false,
      image: "/Shop/speaker2.png",
      cartLink: "addtocart/speaker2",
    },
    {
      id: 28,
      name: "Ahuja PS400TM 16 Watt Speaker",
      price: 4600,
      discount: 930,
      rating: 5,
      category: "Speaker",
      isNew: false,
      image: "/Shop/speaker2.png",
      cartLink: "addtocart/speaker3",
    },
    {
      id: 29,
      name: "Ahuja PS500TM 32 Watt Speaker",
      price: 7000,
      discount: 1700,
      rating: 5,
      category: "Speaker",
      isNew: false,
      image: "/Shop/speaker2.png",
      cartLink: "addtocart/speaker4",
    },
    //OPS
    {
      id: 30,
      name: "AIWaft OPS SRX900 for Interactive Displays",
      price: 50000,
      discount: 14000,
      rating: 5,
      category: "OPS",
      isNew: false,
      image: "/Shop/opsx.png",
      cartLink: "addtocart/ops",
    },
    //Stand
    {
      id: 31,
      name: "AIWaft Metal Floor Digital Board Stand",
      price: 36000,
      discount: 10000,
      rating: 5,
      category: "Stand",
      isNew: false,
      image: "/Shop/stand.png",
      cartLink: "addtocart/stand",
    },
    //Lighting
    {
      id: 32,
      name: "AIWaft 13-Inch Ring Light with Phone Holder",
      price: 3999,
      discount: 2849,
      rating: 5,
      category: "Lighting",
      isNew: false,
      image: "/Shop/light1.png",
      cartLink: "addtocart/light1",
    },
    {
      id: 33,
      name: "AIWaft 18-Inch Ring Light with Stand & Phone Holder",
      price: 6000,
      discount: 2150,
      rating: 5,
      category: "Lighting",
      isNew: false,
      image: "/Shop/light2.png",
      cartLink: "addtocart/light2",
    },
    {
      id: 34,
      name: "Diamond solution- 9 lights",
      price: 60000,
      discount: 6900,
      rating: 5,
      category: "Lighting",
      isNew: false,
      image: "/Shop/light3.png",
      cartLink: "addtocart/light3",
    },
    {
      id: 35,
      name: "Gold solution - 7 lights",
      price: 50000,
      discount: 8700,
      rating: 5,
      category: "Lighting",
      isNew: false,
      image: "/Shop/light4.png",
      cartLink: "addtocart/light4",
    },
    {
      id: 36,
      name: "Hybride classes solution - 6 Lights",
      price: 45000,
      discount: 10000,
      rating: 5,
      category: "Lighting",
      isNew: false,
      image: "/Shop/light5.png",
      cartLink: "addtocart/light5",
    },
    {
      id: 37,
      name: "Silver solution - 4 lights",
      price: 35000,
      discount: 5500,
      rating: 5,
      category: "Lighting",
      isNew: false,
      image: "/Shop/light6.png",
      cartLink: "addtocart/light6",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === activeFilter)
      );
    }
    controls.start({ opacity: 1, y: 0 });
  }, [activeFilter, controls]);

  useEffect(() => {
    let sorted = [...filteredProducts];
    switch (sortBy) {
      case "Price: Low to High":
        sorted.sort((a, b) => a.price - a.discount - (b.price - b.discount));
        break;
      case "Price: High to Low":
        sorted.sort((a, b) => b.price - b.discount - (a.price - a.discount));
        break;
      case "Rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredProducts(sorted);
  }, [sortBy]);

  const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Premium AV Solutions
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
          >
            Discover cutting-edge audio-visual technology for your professional needs
          </motion.p>
        </motion.div>

        {/* Filters with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 font-medium"
            >
              {filteredProducts.length} products found
            </motion.p>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 shadow-sm hover:shadow-md transition-all"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort by: {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products with enhanced animations */}
        <motion.div
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative group">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                {product.isNew && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                  >
                    NEW
                  </motion.div>
                )}
                {product.discount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow"
                  >
                    ₹{product.discount.toLocaleString("en-IN")} OFF
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating ? "text-yellow-400" : "text-gray-200"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product.discount > 0 ? (
                      <>
                        <span className="text-gray-400 line-through text-sm">
                          {formatINR(product.price)}
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                          {formatINR(product.price - product.discount)}
                        </span>
                      </>
                    ) : (
                      <span className="text-xl font-bold text-gray-900">
                        {formatINR(product.price)}
                      </span>
                    )}
                  </div>
                  <Link
                    href={product.cartLink}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <WhatsAppWidget />
      </div>
    </div>
  );
};

export default Shop;
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");

  const filters = [
    "All",
    "Camera",
    "Digital Board",
    "Mic",
    "Cable",
    "Speaker",
    "OPS",
    "Stand",
  ];
  const sortOptions = [
    "Featured",
    "Price: Low to High",
    "Price: High to Low",
    "Rating",
  ];

  const products = [
    {
      id: 1,
      name: "AIWaft 4K PTZ Camera",
      price: 60000,
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
      price: 40000,
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
      price: 50000,
      discount: 10000,
      rating: 5,
      category: "Camera",
      isNew: true,
      image: "/Shop/cam3.jpg",
      cartLink: "addtocart/camcart3",
    },
    {
      id: 4,
      name: "Evota E-PTZ Camera at Best Price",
      price: 15000,
      discount: 3000,
      rating: 4,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam4.jpg",
      cartLink: "addtocart/camcart4",
    },
    {
      id: 5,
      name: "Evota 4K PTZ Camera 12X Optical",
      price: 25000,
      discount: 5000,
      rating: 4,
      category: "Camera",
      isNew: true,
      image: "/Shop/cam5.jpg",
      cartLink: "addtocart/camcart5",
    },
    {
      id: 6,
      name: "Evota lox HD PTZ Camera",
      price: 80000,
      discount: 15000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam6.jpg",
      cartLink: "addtocart/camcart6",
    },
    {
      id: 7,
      name: "Evota 4K Webcam",
      price: 20000,
      discount: 2000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam7.png",
      cartLink: "addtocart/camcart7",
    },
    {
      id: 8,
      name: "AIWAFT 4K Webcam with A1 Auto",
      price: 20000,
      discount: 8000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam8.png",
      cartLink: "addtocart/camcart8",
    },
    {
      id: 9,
      name: "AIWaft EPTZ 4K Webcam - Ultra HD",
      price: 9000,
      discount: 1000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam9.png",
      cartLink: "addtocart/camcart9",
    },
    {
      id: 10,
      name: "Logitech MeetUp HD 1 Wx Optical",
      price: 15000,
      discount: 3000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam10.png",
      cartLink: "addtocart/camcart10",
    },
    {
      id: 11,
      name: "Logitech C920e Webcam — Full HD",
      price: 20000,
      discount: 5000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam11.png",
      cartLink: "addtocart/camcart11",
    },
    {
      id: 13,
      name: "Logitech BCC950 ConferenceCam ",
      price: 34000,
      discount: 8000,
      rating: 5,
      category: "Camera",
      isNew: false,
      image: "/Shop/cam12.png",
      cartLink: "addtocart/camcart12",
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
  }, [activeFilter]);

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
        // Featured - keep original order
        break;
    }
    setFilteredProducts(sorted);
  }, [sortBy]);

  // Format currency for Indian Rupees
  const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Professional AV Equipment
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            High-quality audio visual solutions for your business needs
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">{filteredProducts.length} products</p>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort by: {option}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4"
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

        

        {/* Products */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover"
                />
                {product.isNew && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                {product.discount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    ₹{product.discount.toLocaleString("en-IN")} OFF
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    {product.discount > 0 ? (
                      <>
                        <span className="text-gray-500 line-through mr-2">
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
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </div>
  );
};

export default Shop;
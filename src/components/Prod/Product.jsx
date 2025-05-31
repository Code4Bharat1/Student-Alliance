"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products/category/IFPD"
        );
        setProducts(res.data);
        if (!res.data || res.data.length === 0) {
          console.warn("No products found in the database.");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="bg-white text-black">
      {/* Header */}
      <motion.div
        className="text-center py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">Products</h1>
        <div className="text-xl bg-gray-300 py-4 mt-4 font-bold">
          Flat Panel Display
        </div>
      </motion.div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center py-10 text-lg">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
          {products.map((product, index) => (
            <motion.div
              key={product._id || index}
              className="rounded-md overflow-hidden border border-gray-300 shadow hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  alt="Image of product"
                  src={product.image}
                  width={400}
                  height={300}
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4 text-center font-semibold text-sm flex-grow text-black">
                {product.name}
              </div>
              <div className="bg-white p-4 text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => router.push(`/product/${product._id}`)}
                >
                  Show More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      <WhatsAppWidget />
    </div>
  );
}

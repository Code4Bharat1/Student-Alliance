"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const KitsSection = () => {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://student-alliance-api.code4bharat.com/api/products/category/STEM%20%26%20Robotics"
        );
        setKits(res.data);
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

  return (
    <section className="bg-gray-100 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-semibold mb-8 text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kits
        </motion.h2>

        {loading ? (
          <div className="text-center py-10 text-lg">Loading kits...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {kits.map((kit, idx) => (
              <motion.div
                key={kit._id || idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={kit.image}
                  alt={kit.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-60"
                />
                <div className="p-4 flex flex-col gap-4 items-center">
                  <h3 className="text-lg font-medium text-center text-gray-800">
                    {kit.name}
                  </h3>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
                    onClick={() => {
                      router.push(`/product/${kit._id}`);
                    }}
                    >
                      Show Details
                    </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <WhatsAppWidget />
    </section>
  );
};

export default KitsSection;

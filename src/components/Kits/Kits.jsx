"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const kits = [
  {
    title: "Multi-function 14WD Robot Car Kit",
    image: "/images/k1.jpg",
    link: "/kitsDetails/kits-d1",
  },
  {
    title: "Make A Line Follower Robot Using Motor Driver",
    image: "/images/k2.jpg",
    link: "/kitsDetails/kits-d2",
  },
  {
    title: "Advance Smart Robot Car Kit 4wd Robot Car Kit",
    image: "/images/k3.jpg",
    link: "/kitsDetails/kits-d3",
  },
  {
    title: "Make a Line Follower Robot Car Motor Driver",
    image: "/images/k4.jpg",
    link: "/kitsDetails/kits-d4",
  },
  {
    title: "Smart Learning Robotics IOT Kit",
    image: "/images/k5.jpg",
    link: "/kitsDetails/kits-d5",
  },
  {
    title: "Ultimate Uno R3 Kit compatible",
    image: "/images/k6.jpg",
    link: "/kitsDetails/kits-d6",
  },
  {
    title: "Make A Line Follower Robot",
    image: "/images/k7.jpg",
    link: "/kitsDetails/kits-d7",
  },
  {
    title: "Make an IoT based robotic Wi-Fi car",
    image: "/images/k8.jpg",
    link: "/kitsDetails/kits-d8",
  },
  {
    title: "4WD 4 Wheel Smart Car Chassis DIY LWD Double-Deck Smart",
    image: "/images/k9.jpg",
    link: "/kitsDetails/kits-d9",
  },
  {
    title: "DIY Dinosaur STEM Kit Kids",
    image: "/images/k10.jpg",
    link: "/kitsDetails/kits-d10",
  },
  {
    title: "Crowbits-Creator Kit Based on Arduino",
    image: "/images/k11.jpg",
    link: "/kitsDetails/kits-d11",
  },
  {
    title: "2 Wheel Smart Car Chassis Kit",
    image: "/images/k12.jpg",
    link: "/kitsDetails/kits-d12",
  },
  {
    title: "4 Wheel Robotic Platform DIY",
    image: "/images/k13.jpg",
    link: "/kitsDetails/kits-d13",
  },
  {
    title: "Make A Line Follower Robot",
    image: "/images/k14.jpg",
    link: "/kitsDetails/kits-d14",
  },
  {
    title: "DIY Balance Scale STEM Kit DIY Balance Scale Lever Wooden",
    image: "/images/k15.jpg",
    link: "/kitsDetails/kits-d15",
  },
  {
    title: "DIY Password Case STEM Kit Portable Unassembled",
    image: "/images/k16.jpg",
    link: "/kitsDetails/kits-d16",
  },
];

const KitsSection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {kits.map((kit, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={kit.image}
                alt={kit.title}
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
              <div className="p-4 flex flex-col gap-4 items-center">
                <h3 className="text-lg font-medium text-center text-gray-800">
                  {kit.title}
                </h3>
                {kit.link ? (
                  <a href={kit.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
                    >
                      BUY NOW
                    </motion.button>
                  </a>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg shadow cursor-not-allowed"
                    disabled
                  >
                    Link Unavailable
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <WhatsAppWidget />
    </section>
  );
};

export default KitsSection;

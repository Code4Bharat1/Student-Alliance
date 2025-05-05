"use client"

import React from "react";
import { motion } from "framer-motion";
import WhatsAppWidget from "../WhatsApp/WhatApp";

const Hero = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 backdrop-brightness-80"></div>

        <motion.div
          className="relative z-10 max-w-4xl px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl md:text-5xl font-extrabold mb-6 tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            India’s Pioneer in STEM & Robotics Lab Solutions
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            className="text-md md:text-lg leading-relaxed text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Founded in 2012, Student Alliance LLP is India’s leading provider of
            innovative educational lab solutions. We design and deliver cutting-edge
            STEM and robotics labs that spark curiosity, creativity, and future-ready
            learning.
            <br /><br />
            With a passionate team and end-to-end services—ranging from layout
            design to artistic decor—we’ve transformed 100+ school labs across
            India.
          </motion.p>
        </motion.div>
      </section>

      {/* Add WhatsApp Floating Icon */}
      <WhatsAppWidget />
    </>
  );
};

export default Hero;

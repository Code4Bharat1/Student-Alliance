"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const printerData = [
  {
    title: '3D Printer (CR-5 Pro H)',
    image: '/images/printer1.png',
    link: '/pri1',
  },
  {
    title: '3D Printer (Creator 3)',
    image: '/images/printer2.png',
    link: 'pri2',
  },
  {
    title: '3D Printer (Ender 5 Plus)',
    image: '/images/printer3.png',
    link: '/pri3',
  },
  {
    title: '3D printer (Ender 5 S 1)',
    image: '/images/printer4.png',
    link: '/pri4',
  },
  {
    title: '3D Printer (LD-002H)',
    image: '/images/printer5.png',
    link: '/pri5',
  },
  {
    title: '3D Printer (Sermoon VI)',
    image: '/images/printer6.png',
    link: '/pri6',
  },
  {
    title: '3D printer (Ender 5 S 1)',
    image: '/images/printer7.png',
    link: '/pri7',
  },
  {
    title: '3D Printer (Sermoon VI)',
    image: '/images/printer8.png',
    link: '/pri8',
  },
];

export default function Printer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Header Section with animation */}
      <motion.div
        className="text-center py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">3D Printers</h1>
        <div className="text-xl bg-gray-300 py-4 mt-4 font-bold">3D Printers Details</div>
      </motion.div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
        {printerData.map((printer, index) => (
          <motion.div
            key={index}
            className="rounded-md overflow-hidden border-gray-800 shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="p-4 bg-white">
              <Image
                src={printer.image}
                alt={printer.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            </div>
            <div className="p-4 text-center font-semibold text-sm">{printer.title}</div>
            <div className="bg-white p-4 text-center">
              <a
                href={printer.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  BUY NOW
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <WhatsAppWidget/>
    </div>
  );
}

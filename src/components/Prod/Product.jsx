"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const products = [
  {
    title: '65" Inch IFPD - Interactive Flat Panel Display',
    image: '/images/65_inch.png',
    link: '/product1',
  },
  {
    title: '75" Inch IFPD - Interactive Flat Panel Display',
    image: '/images/75_inch.jpg',
    link: '/product2',
  },
  {
    title: '86" Inch IFPD - Interactive Flat Panel Display',
    image: '/images/86_inch.jpg',
    link: '/product3',
  },
  {
    title: '98" Inch IFPD - Interactive Flat Panel Display',
    image: '/images/98_inch.png',
    link: '/product4',
  },
];

export default function Products() {
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
              <div className="text-xl bg-gray-300 py-4 mt-4 font-bold">Flat Panel Display</div>
            </motion.div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="rounded-md overflow-hidden border border-gray-300 shadow hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-[4/3] bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="p-4 text-center font-semibold text-sm flex-grow">{product.title}</div>
            <div className="bg-white p-4 text-center">
              <a href={product.link} target="_blank" rel="noopener noreferrer">
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

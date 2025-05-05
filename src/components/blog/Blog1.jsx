'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WhatsAppWidget from '../WhatsApp/WhatApp';

const blogData = [
  {
    title: 'IFPD for Home Use',
    date: 'Tuesday, August 29, 2023',
    image: '/images/IFPD-home.png',
    link: '/blog-d1',
  },
  {
    title: 'IFPD for Work and Office',
    date: 'Tuesday, August 29, 2023',
    image: '/images/IFPD-work.png',
    link: '/blog-d2',
  },
  {
    title: 'IFPD for Schools and Classes',
    date: 'Tuesday, August 29, 2023',
    image: '/images/IFPD-school.jpg',
    link: '/blog-d3',
  },
];

export default function Blog() {
  return (
    <section className="bg-white text-black py-4 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-10">Blogs</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg border-gray-600 hover:shadow-2xl transition-shadow bg-white"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-center">
              <p className="text-md text-gray-700 font-semibold mb-2">{blog.date}</p>
              <p className="text-lg font-medium text-gray-800">{blog.title}</p>
            </div>
            <div className="bg-white px-6 py-3">
              <Link href={blog.link}>
                <button className="bg-blue-500 text-white px-5 py-2 rounded-lg w-full font-bold hover:bg-blue-600 transition-colors duration-300">
                  READ MORE
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <WhatsAppWidget/>
    </section>

    
  );
}

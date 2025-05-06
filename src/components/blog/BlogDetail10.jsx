"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail10() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        Complete Guide to Digital Board Prices for Teaching
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/gg.png"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-80"
            />

            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
              Complete Guide to Digital Board Prices for Teaching in India
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
              Education is an ever-evolving field, with technology continuously shaping how we teach and learn. One of the significant advancements in recent years has been the rise of digital boards prices for teaching, especially post-COVID. These boards have become an essential tool for schools, colleges, and coaching institutes.
              <br/>
              <br/>
              If you're wondering, "What is the price of a digital board for teaching?", you've come to the right place. In this blog, we'll break down the factors affecting digital board prices, including sizes, brands, and optional features like OPS (Open Pluggable System)
  
              </p>
            </div>
          </motion.div>
        </section>
  
        {/* Complete Range Section */}
        <section className="mb-16">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
              
              Factors Affecting Digital Board Prices
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
              When buying a digital board, its price depends on three major factors:
              <br/>
             <span className='text-blue-500 font-bold size-px'>1. Size of the Digital Board</span> 
             <br/>
             1. 65-inch: ₹90,000 - ₹1,10,000
             <br/>
            2. 75-inch: ₹1,20,000 - ₹2,00,000
            <br/>
            3. 86-inch: ₹1,50,000 - ₹2,80,000 
            <br/>
           4. 98-inch and above: Prices vary significantly, depending on the brand and features.
             <br/>
             Smaller sizes, such as 55-inch boards, are available but are not widely recommended for classroom teaching as they may lack visibility for larger groups.
             <br/>
            
             <span className='text-blue-500 font-bold'> 2. Brand of the Digital Board</span>
             <br/>
             The brand you choose impacts the price, quality, and reliability of the digital board. Trusted brands like AIWaft, Maxhub, and Viewsonic provide durable and high-performance boards. These brands also offer better customer service and long-term reliability compared to local brands.
             <br/>

             While local brands might seem cheaper (starting around ₹80,000 for a 75-inch board), they often lack proper warranties, service, and durability. Investing in a trusted brand ensures better performance and peace of mind.
              </p>
            </div>
  
            <Image
              src="/images/cll.png"
              alt="Range of IFPDs"
              width={400}
              height={300}
              className="rounded-xl shadow-xl w-500 h-100"
            />
          </motion.div>
        </section>
  
        {/* Engage Students Section */}
        <section>
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/rb.jpg"
              alt="Students Engaged with IFPDs"
              width={600}
              height={400}
              className="rounded-xl shadow-xl w-full h-100"
            />
  
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-4">
              Tips for Choosing the Right Digital Board
              </h3>
              <p className="text-gray-600 text-base leading-relaxed text-justify">
              Here are some simple tips to ensure you get the best value for your investment:
              <br/>
              <span className='text-blue-500 font-bold'>1.Choose the Right Size:</span>For most classrooms or coaching institutes, 75-inch or 86-inch boards offer the best balance of price and visibility.
              <br/>
              <span className='text-blue-500 font-bold'>2.Pick a Trusted Brand:</span>Avoid local boards and stick to reliable names in the market.
              <br/>
              <span className='text-blue-500 font-bold'>3.Decide on OPS Carefully:</span> If your teaching requires advanced apps or presentations, invest in an OPS. Otherwise, skip it to save costs.
              <br/>
              <span className='text-blue-500 font-bold'>4.Focus on Durability:</span>  A slightly higher price for a trusted brand ensures a better teaching experience and long-term durability.
              <br/>
              </p>
            </div>
          </motion.div>
        </section>
        <WhatsAppWidget/>
      </div>
    );
  }
  
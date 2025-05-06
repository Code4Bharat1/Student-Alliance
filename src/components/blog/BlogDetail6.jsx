"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail6() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        Top 5 Best Digital Board Companies in India – Why AIWAFT Leads the Way
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/wp.png"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-60"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Top 5 Best Digital Board Companies in India – Why AIWAFT Leads the Way
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            Why AIWAFT Stands Out:
            <br/>
LG – A Renowned Brand in Digital Solutions
<br/>
ViewSonic – Combining Quality and Innovation
<br/>
Maxhub – Innovative and User-Centric
<br/>
Samsung – Pioneering Technology in Interactive Displays
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
            Why AIWAFT Stands Out:
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            <span className='text-blue-500 font-semibold'>Economical and Better Pricing:</span>  AIWAFT offers one of the most cost-effective solutions in the market, ensuring top-notch quality without breaking the bank.
            <br/>
            <span className='text-blue-500 font-semibold'>Exceptional Service and Support:</span>  AIWAFT is renowned for its outstanding one-to-one support, providing direct assistance to customers. Their software layer support ensures smooth operation, while their dedicated team is always ready to guide users.
<br/>
<span className='text-blue-500 font-semibold'>Product Quality and Enhancement:</span> The digital boards from AIWAFT are made from high-quality materials, ensuring durability. They constantly improve their products based on user feedback, making them one of the most reliable options in the market.


            </p>
          </div>

          <Image
            src="/images/lg.png"
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
            src="/images/lgg.png"
            alt="Students Engaged with IFPDs"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-100"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            LG – A Renowned Brand in Digital Solutions
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            LG is a global leader known for its innovation, quality, and reliability in digital technology. From cutting-edge home entertainment systems and smart appliances to advanced display solutions and IT products, LG consistently delivers performance-driven devices that enhance everyday life. Trusted by millions worldwide, LG combines sleek design with powerful functionality, making it a go-to brand for both personal and professional digital solutions.
            </p>
          </div>
        </motion.div>
      </section>
      <WhatsAppWidget/>
    </div>
  );
}

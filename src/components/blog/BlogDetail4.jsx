"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail4() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        Top Live Streaming Equipment for Beginners: Cameras, Microphones & More
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/strem.png"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-auto"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Top Live Streaming Equipment for Beginners: Cameras, Microphones & More
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            1. Choosing the Right Camera for Live Streaming
            2. Crystal-clear Audio: Choosing the Right Microphone
            3. Interactive Tools to Improve Your Live Stream
            4. Lighting: Illuminate your live stream
            5. Accessories to Finish Your Setup
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
            Lighting: Illuminate your live stream
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
             Live streaming has changed the way we exchange ideas, engage audiences, and demonstrate innovation. Live streaming is now more accessible than ever, with options ranging from virtual classrooms and corporate presentations to gaming broadcasts and internet events. With the correct tools, even amateurs can create professional-quality material that catches and maintains viewer interest.
            </p>
          </div>

          <Image
            src="/images/easy.png"
            alt="Range of IFPDs"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-auto"
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
            src="/images/cam.png"
            alt="Students Engaged with IFPDs"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-auto"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Choosing the Right Camera for Live Streaming
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            If you're just getting started, having the right equipment is essential for making your broadcasts look and sound their best. This blog covers all of the key instruments for beginners, including cameras, microphones, lighting, and interactive displays. We'll also show off cuttiAIWaft: Interactive Flat Panel Waft Interactive Flat Panel, 4K PTZ Camera, and 4K PTZ Camera UV, which enable live streaming easier and more effective than ever.
            </p>
          </div>
        </motion.div>
      </section>
      <WhatsAppWidget/>
    </div>
  );
}

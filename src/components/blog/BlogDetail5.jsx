"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail5() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        AIWaft 4K Ultra HD Alpha Webcam
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/webcam.jpg"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-auto"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            AIWaft 4K Ultra HD Alpha Webcam: Unmatched Quality at an Affordable Price
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            Ultra HD 4K Resolution: Capture stunning 4K video at 60 frames per second, ensuring crisp and detailed visuals for all your streaming and conferencing needs.
12X Optical & 16X Digital Zoom: Zoom in without losing clarity, thanks to the combination of optical and digital zoom capabilities.
AI Frame Tracking & Gesture Control: Utilize AI-based auto-tracking to keep the subject in focus, and control the camera with simple gestures for a hands-free experience.
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
            Webcam is the perfect tool to elevate your work.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            Experience professional-grade video with the AIWaft 4K Ultra HD Alpha Webcam — the perfect tool to elevate your work. Designed for streamers, educators, and professionals, this webcam delivers crystal-clear 4K resolution at 60fps, AI-powered tracking, and advanced zoom capabilities. With 12X optical and 16X digital zoom, low-light performance, and wide-angle coverage, your video presence is sharper and more dynamic than ever. Whether you're live streaming, teaching remotely, or attending virtual meetings, the AIWaft webcam ensures you're always seen in the best light.


            </p>
          </div>

          <Image
            src="/images/c (1).png"
            alt="Range of IFPDs"
            width={400}
            height={300}
            className="rounded-xl shadow-xl w-400 h-100"
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
            src="/images/on.png"
            alt="Students Engaged with IFPDs"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-100"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Best Use Cases for AIWaft 4K Webcam
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            This webcam is versatile and designed for various purposes:
            <br/>

           Online Teaching: Perfect for educators who need excellent video and audio quality.
           <br/>
           Content Creation: YouTubers, vloggers, and gamers will appreciate its high resolution and dual mics.
           <br/>
           Professional Presentations: Enhance your PowerPoint presentations with professional-grade visuals.
            </p>
          </div>
        </motion.div>
      </section>
      <WhatsAppWidget/>
    </div>
  );
}

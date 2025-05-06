"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail9() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        Start Teaching on an Online Teaching Platform & Earn from Home
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/ho.png"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-80"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Kickstart Your Online Teaching Career from Home with the Right Tools and Platform
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            An online teaching platform allows educators to teach students worldwide and earn from home. If you’re looking for a flexible way to teach and earn, this guide will help you get started.
            <br/>
            The demand for online tutoring platforms is growing rapidly. With thousands of students enrolling daily, teachers now have a golden opportunity to teach from home and earn a stable income. Whether you are a graduate, fresher, or experienced tutor, you can start teaching online and make ₹1,000 per hour or more.
            <br/>
            But to succeed in online teaching, you need the right setup. A well-equipped digital teaching studio can help you attract more students, increase engagement, and boost your income. Edusquadz provides digital boards, HD cameras, microphones, and complete online tutoring solutions to help teachers create a professional teaching environment.

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
            Why Teach on an Online Teaching Platform?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            Joining an online teaching platform has several advantages:
            <br/>
           <span className='text-blue-500 font-bold'>1. No Need to Search for Students:</span> The platform already has thousands of students enrolling daily.
           <br/>
           <span className='text-blue-500 font-bold'>2. Teach from Anywhere:</span>Work comfortably from home with a digital teaching setup.
           <br/>
           <span className='text-blue-500 font-bold'>3. High Earning Potential:</span>Tutors earn based on experience, subject expertise, and teaching quality.
           <br/>
           <span className='text-blue-500 font-bold'>4. Flexible Schedule:</span> Teach part-time or full-time as per your availability.
           <br/>
           <span className='text-blue-500 font-bold'>5. Better Student Engagement:</span> Digital tools like interactive whiteboards and HD video setups enhance learning.
           With over 3 lakh+ students and 1,500+ teachers already teaching online, now is the best time to start your online tutoring career.


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
            src="/images/clll.jpg"
            alt="Students Engaged with IFPDs"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-100"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Pricing Details
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            The Maxhub U3 Series 86-inch panel is priced starting at ₹240,000. This price can vary depending on:
            <br/>
            <span className='text-blue-500 font-bold'>1. Membership Packages and Pricing</span>
            <br/>
            <span className='text-blue-500 font-bold'>2.Quantity purchased (bulk discounts available).</span>
            <br/>
            <span className='text-blue-500 font-bold'>3.Ongoing promotions.</span>
            <br/>
            For exact pricing, it’s best to contact the distributor directly. Keep in mind that while the initial investment may seem steep, the quality and features justify the cost.
            <br/>
            <span className='text-blue-500 font-bold'>How to Choose the Right Digital Board?</span>
            <br/>
Here are a few tips to help you decide:

Assess Your Needs: If you’re running a large coaching center, go for the Maxhub U3 Series for its premium features. For smaller setups, the AIWaft might suffice.
<br/>
Budget Consideration: If budget is a constraint, prioritize features you’ll use frequently.
<br/>
Future-Proofing: Investing in a high-quality panel like the Maxhub U3 ensures durability and reliability.
    
            </p>
          </div>
        </motion.div>
      </section>
      <WhatsAppWidget/>
    </div>
  );
}

"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail8() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        86-Inch Digital Boards: Features, Pricing, and Why Maxhub U3 Series is a Top Choice
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/cl.png"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-80"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Why Choose an 86-inch Digital Board?
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            When it comes to digital boards, size matters—especially for large classrooms or training sessions. The 86-inch panel is perfect for:
            <br/>
            <br/>
            <span className='text-blue-500 font-semibold'>Large Classrooms:</span>Ideal for 70–80 students or more, ensuring everyone, even those at the back, can clearly see the content.
            <br/>
            <span className='text-blue-500 font-semibold'>Wide Viewing Angles:</span> Provides a superior visual experience, making it perfect for coaching centers or training facilities.
            <br/>
            <span className='text-blue-500 font-semibold'>Enhanced Engagement: </span> Its larger canvas allows educators to share more detailed information in one frame.
            If your coaching center or classroom prioritizes a premium teaching experience, the Maxhub U3 Series 86-inch panel is a great choice.
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
            Key Features of the Maxhub U3 Series 86-Inch Digital Board
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
           <span className='text-blue-500 font-bold'> 1. Powered by Android OS</span> The Maxhub U3 Series comes with an advanced Android 11 operating system, offering smooth performance and access to a wide range of application.
           <br/>
           <span className='text-blue-500 font-bold'>2. Superior Writing Experience</span>Whether you're using Maxhub, AIWaft, or Vook panels, the writing experience is consistent and smooth. The Maxhub U3 Series supports high-precision stylus input for accurate annotations.
           <br/>
           <span className='text-blue-500 font-bold'>3. Built-in Applications</span>The U3 Series includes pre-installed applications for teaching and training, making it a versatile tool. These apps are EDL-certified, ensuring reliability and ease of use.
           <br/>
           <span className='text-blue-500 font-bold'>4. Enhanced Audio Experience</span>Equipped with six high-quality speakers, the U3 Series delivers clear, powerful sound—ideal for video tutorials and interactive sessions.
           <br/>
           <span className='text-blue-500 font-bold'>5. Durability and Reliability</span> The Maxhub U3 Series is built to last, with robust hardware that can handle extensive use in classrooms and training centers.


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

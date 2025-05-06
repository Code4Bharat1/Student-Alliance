"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppWidget from '../WhatsApp/WhatApp';

export default function BlogsDetail7() {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center border-b-4 border-blue-600 pb-4 mb-12">
        Blogs Detail
      </h1>

      {/* Header Section */}
      <section className="mb-16">
        <h2 className="text-2xl text-purple-600 font-semibold mb-6 border-l-4 border-purple-600 pl-4 text-left">
        5 Key Strategies to Scale Your Online Coaching Business in 2024 with High-Quality Video Tools
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
           src="/images/bus.png"
            alt="IFPD in Classroom"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-80"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Introduction
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            Scaling your online coaching business is crucial in today’s growing digital landscape. Coaching business partners with clients to help them achieve personal or professional goals, and online coaching offers a convenient way to deliver these insights and skills.
            <br/>
            As the demand for coaching services expands, the field has evolved to provide personalized support for both personal and professional growth. Scaling an online coaching business comes with unique challenges, necessitating strategies beyond one-on-one sessions. Expansion means adapting to accommodate more clients, implementing new approaches, and potentially adding team members while maintaining quality and connection.
            <br/>
           This blog explores actionable strategies for scaling your online coaching business, focusing on disciplined sales techniques and client acquisition funnels. These insights will help broaden your reach and achieve sustainable growth.
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
            Key Factors to Consider When Scaling Your Coaching Business
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
           <span className='text-blue-500 font-bold'> Skills and Knowledge for Delegation:</span> Effective delegation involves identifying specialists for task assistance, assigning responsibilities strategically, and tracking progress.
           <br/>
           <span className='text-blue-500 font-bold'> Tools:</span> Essential tools include project management platforms like Trello, Airtable, and Recruitee; collaboration tools such as ClickUp or Notion; and some automation software to enhance team productivity.
           <br/>
           <span className='text-blue-500 font-bold'> Marketing Strategies:</span> Develop a comprehensive marketing approach, including creating a website and blog, promoting the benefits of your coaching program, devising a targeted social media strategy, and creating a social media calendar for organized execution.
           <br/>
           <span className='text-blue-500 font-bold'> Client Onboarding Process:</span> Outline your coaching philosophy, approach, and services to potential clients, and establish clear terms of engagement through a signed agreement.
           <br/>
           <span className='text-blue-500 font-bold'> Offerings:</span> Include one-on-one sessions, group workshops, online courses, seminars, and lectures to diversify your service options.


            </p>
          </div>

          <Image
            src="/images/cb.png"
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
            src="/images/cbb.png"
            alt="Students Engaged with IFPDs"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-full h-100"
          />

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
            Crucial Strategies for Scaling Your Online Coaching Business
            </h3>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
            <span className='text-blue-500 font-bold'>1. Membership Packages and Pricing</span>
            <br/>
Implementing membership-based pricing can streamline your coaching business’s growth. By creating a structured curriculum, you can offer valuable, personalized instruction while minimizing repetitive tasks. Membership sites allow clients to pay regularly for continued access to coaching resources, including webinars, materials, and group sessions, much like a gym membership model.
<br/>
<span className='text-blue-500 font-bold'>2. Hiring and Delegation</span>
<br/>
Hiring support is a critical but complex process that requires strategic planning. Begin by identifying which areas need assistance, such as marketing, client management, or accounting. Create a list of potential candidates and evaluate their skills through interviews to gauge their experience and industry knowledge.
<br/>
<span className='text-blue-500 font-bold'>3. Marketing Automation</span>
<br/>
Marketing automation allows coaches to optimize time and concentrate on their expertise, with 75% of businesses automating their marketing within six months. To scale your coaching business, prioritize building your brand and attracting new clients. Share success stories, use email campaigns, engage on social media, and optimize your website for SEO.
            </p>
          </div>
        </motion.div>
      </section>
      <WhatsAppWidget/>
    </div>
  );
}

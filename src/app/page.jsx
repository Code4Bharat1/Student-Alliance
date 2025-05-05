"use client"

import Blog from '@/components/blog/Blog1';
import Footer from '@/components/Footer';
import Categories from '@/components/Franchise/Category';
import WhyChoose from '@/components/Franchise/Choose';
import Features from '@/components/Franchise/Features';
import Hero from '@/components/Hero';
import Highlight from '@/components/Highlight';
import Navbar from '@/components/Navbar';
import Service from '@/components/Service';
import Testimonial from '@/components/Testimonial/Testimonial';
import WhatsAppWidget from '@/components/WhatsApp/WhatApp';
import React from 'react';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <WhatsAppWidget/>
    <Service/>
    <WhyChoose/>
    <Categories/>
    <Features/>
    <Blog/>
    <Highlight/>
    <Testimonial/>
    <Footer/>
    </>
  );
};

export default HomePage;

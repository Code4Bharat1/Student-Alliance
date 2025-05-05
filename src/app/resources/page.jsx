import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Resources from '@/components/Resources/Resources'
import WhatsAppWidget from '@/components/WhatsApp/WhatApp'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <Resources/>
      <WhatsAppWidget/>
      <Footer/>
    </div>
  )
}

export default Page

"use client"

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Products from '@/components/Prod/Product'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Page

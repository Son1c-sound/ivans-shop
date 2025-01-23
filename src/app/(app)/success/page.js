"use client"
import Footer from '@/app/frontend-components/heroPage/footer'
import Navbar from '@/app/frontend-components/heroPage/navbar'
import ProductDisplay from '@/app/frontend-components/productDisplay'
import { CheckCircle } from 'lucide-react'
import React, { useEffect } from 'react'


function page() {
    useEffect(() => {
        window.localStorage.clear()
    })
  return (
<>
<Navbar />
<div className="min-h-screen  flex items-center justify-center">
    <div className="max-w-md w-full bg-white p-8 rounded-lg  text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Success!</h1>
      <p className="text-gray-600 mb-6">Your transaction has been completed successfully.</p>
      <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
        Back to Home
      </button>
    </div>
  </div>
  <ProductDisplay/> 
  <Footer />
</>
  )
}

export default page
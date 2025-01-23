"use client"
import { useProducts } from '@/app/hooks/getProduct'
import React, { useState } from 'react'
import Navbar from '@/app/frontend-components/heroPage/navbar'
import Footer from '@/app/frontend-components/heroPage/footer'
import { useCheckout } from '@/app/hooks/checkoutSession'
import { Loader2 } from 'lucide-react'
import { productDetails } from './productDetails'

function ProductPage({ params }) {
  const { id } = params
  const { products } = useProducts()
  const [selectedPurchaseType, setSelectedPurchaseType] = useState('subscribe')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const  { createCheckoutSession } = useCheckout()
  const [isLoading, setIsLoading] = useState(false)

  const product = products?.find(p => p._id === id)
  if (!product) return <div>Loading...</div>

  const basePrice = Number(product.price) || 0
  const currentPrice = basePrice

  const handleBoth = async () => {
    setIsLoading(true)
    
    try {
      const productToSave = {
        image: product.fileUrls?.[0],
        name: product.name,
        quantity: 1,
        price: currentPrice
      }

      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
      existingCart.push(productToSave)
      localStorage.setItem('cart', JSON.stringify(existingCart))
      
      await createCheckoutSession()
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-35 mt-25">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <img src={product.fileUrls?.[currentImageIndex]} alt={product.name} className="object-cover w-full h-full"/>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {product.fileUrls?.map((url, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} className={`aspect-square relative overflow-hidden rounded-lg bg-gray-100  ${currentImageIndex === index ? 'ring-2 ring-yellow-400' : ''}`}>
                <img src={url} alt={`${product.name} view ${index + 1}`} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl ">{product.name}</h1>
          <div className="flex flex-wrap gap-2">
            {productDetails.features.map((feature, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {feature.title}
              </span>
            ))}
          </div>
          <div className="text-2xl ">
            ${Number(basePrice).toFixed(2)} USD
          </div>
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              Pay over time for orders over $35.00 with Shop Pay
            </div>
            <div className="space-y-3">
              <p className="">Purchase options</p>
            </div>
          </div>
          <button onClick={handleBoth} disabled={isLoading} className={`w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-semibold transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-500'}`} >
                <span className="flex items-center justify-center gap-2">
                    {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                    {isLoading ? 'Processing...' : 'BUY NOW'}
                </span>
                </button>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4m8-8v16" />
            </svg>
            Order now to get it by Jan 30
          </div>
          <div className="space-y-4 pt-6">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="">BENEFITS</span>
                <span className="transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 space-y-4">
                {productDetails.benefits.map((benefit, index) => (
                  <p key={index} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500">•</span>
                    {benefit}
                  </p>
                ))}
                <div className="mt-6 space-y-4">
                  {productDetails.benefitsDetail.map((detail, index) => (
                    <div key={index} className="space-y-1">
                      <h4 className="">{detail.title}</h4>
                      <p className="text-sm text-gray-600">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="">INGREDIENTS</span>
                <span className="transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-gray-600">
                {productDetails.ingredients.map((ingredient, index) => (
                  <p key={index} className="flex items-start gap-2">
                    <span>•</span>
                    {ingredient}
                  </p>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="">DIRECTIONS</span>
                <span className="transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600">
                {productDetails.directions}
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="">WARNING</span>
                <span className="transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-gray-600 whitespace-pre-line">
                {productDetails.warning}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductPage
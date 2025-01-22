"use client"
import { useProducts } from '@/app/hooks/getProduct'
import React, { useState } from 'react'
import Navbar from '@/app/frontend-components/heroPage/navbar'
import Footer from '@/app/frontend-components/heroPage/footer'
import { useCheckout } from '@/app/hooks/checkoutSession'
import { Loader2 } from 'lucide-react'

function ProductPage({ params }) {
  const { id } = params;
  const { products, error } = useProducts();
  const [selectedPurchaseType, setSelectedPurchaseType] = useState('subscribe');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const  { createCheckoutSession } = useCheckout()
  const [isLoading, setIsLoading] = useState(false);

  const productDetails = {
    benefits: [
      "Boosts overall energy and awareness*",
      "Supports emotional well-being*",
      "Supports comfort and promotes strength in muscles*"
    ],
    ingredients: [
      "Calcium (as Calcium Carbonate)",
      "5-Hydroxytryptophan (from Griffo via simplicifolia seed extract)",
      "Gelatin (capsule)",
      "Magnesium Stearate"
    ],
    directions: "Take two (2) capsules once a day as a dietary supplement. For best results, take 20-30 min before a meal with an 8oz (236 ml) glass of water or as directed by your healthcare professional.",
    warning: "Do not exceed recommended dose. Pregnant or nursing mothers, children under the age of 18, and individuals with a known medical condition should consult a physician before using this or any dietary supplement.\n\nWarning: Keep out of reach of children. Do not use if the safety seal is damaged or missing. Store in a cool, dry place.",
    features: [
      { title: "100% natural" },
      { title: "Gluten free" },
      { title: "Allergen free" }
    ],
    benefitsDetail: [
      {
        title: "Supports Weight Management",
        description: "Promotes a healthy metabolism and feelings of satiety."
      },
      {
        title: "Promotes Healthy Sleep Patterns",
        description: "Supports natural sleep cycles and encourages restful sleep."
      },
      {
        title: "Supports Emotional Well-being",
        description: "Supports positive mood balance and emotional resilience."
      },
      {
        title: "Supports Muscle Comfort",
        description: "Encourages comfort and relaxation in muscles for improved daily function."
      }
    ],
  };


  const product = products?.find(p => p._id === id);
  if (!product) return <div>Product not found</div>;

  const basePrice = Number(product.price) || 0;
  const subscribePrice = basePrice * 0.8; 
  const oneTimePrice = basePrice;
  
  const currentPrice = selectedPurchaseType === 'subscribe' ? subscribePrice : oneTimePrice;

  const handleBoth = async () => {
    setIsLoading(true);
    
    try {
      const productToSave = {
        image: product.fileUrls?.[0],
        name: product.name,
        quantity: 1,
        price: currentPrice
      };

      const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
      existingCart.push(productToSave);
      localStorage.setItem('cart', JSON.stringify(existingCart));
      
      await createCheckoutSession();
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Navbar />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-35 mt-25">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.fileUrls?.[currentImageIndex]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {product.fileUrls?.map((url, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-square relative overflow-hidden rounded-lg bg-gray-100 
                  ${currentImageIndex === index ? 'ring-2 ring-yellow-400' : ''}`}
              >
                <img
                  src={url}
                  alt={`${product.name} view ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <div className="flex flex-wrap gap-2">
            {productDetails.features.map((feature, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                {feature.title}
              </span>
            ))}
          </div>
          <div className="text-2xl font-bold">
            ${Number(currentPrice).toFixed(2)} USD
          </div>
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              Pay over time for orders over $35.00 with Shop Pay
            </div>
            <div className="space-y-3">
              <p className="font-medium">Purchase options</p>
              <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="purchase-type"
                    value="subscribe"
                    checked={selectedPurchaseType === 'subscribe'}
                    onChange={(e) => setSelectedPurchaseType(e.target.value)}
                    className="h-4 w-4 text-yellow-400"
                  />
                  <div>
                    <div className="font-medium">Subscribe & save <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">SAVE 20%</span></div>
                    <div className="text-sm text-gray-500">Deliver every month</div>
                  </div>
                </div>
                <div className="font-medium">${Number(subscribePrice).toFixed(2)}</div>
              </label>
              <label className="flex items-center justify-between p-4 border rounded-lg cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="purchase-type"
                    value="one-time"
                    checked={selectedPurchaseType === 'one-time'}
                    onChange={(e) => setSelectedPurchaseType(e.target.value)}
                    className="h-4 w-4 text-yellow-400"
                  />
                  <div className="font-medium">One-time purchase</div>
                </div>
                <div className="font-medium">${Number(oneTimePrice).toFixed(2)}</div>
              </label>
            </div>
          </div>
          <button
                onClick={handleBoth}
                disabled={isLoading}
                className={`w-full bg-yellow-400 text-gray-900 py-3 rounded-full font-semibold transition-colors
                    ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-500'}`}
                >
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
                <span className="font-medium">BENEFITS</span>
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
                      <h4 className="font-medium">{detail.title}</h4>
                      <p className="text-sm text-gray-600">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="font-medium">INGREDIENTS</span>
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
                <span className="font-medium">DIRECTIONS</span>
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
                <span className="font-medium">WARNING</span>
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

export default ProductPage;
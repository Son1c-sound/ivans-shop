"use client"
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SidebarCart from '../cartSidebar/sidebarCart'
import { useProducts } from '@/app/hooks/getProduct'

const ProductDisplay = () => {
    const { products  } = useProducts()
    const firstProduct = products[0] || {}
    const [selectedQuantity, setSelectedQuantity] = useState("1")

    const mockProduct = {
        category: "GET SUPPLEMENTS",
        name: firstProduct.name,
        price: 35.00,
        benefits: [
            "Promotes hair growth",
            "Improves nail strength",
            "Aids in skin clarity",
            "Helps to thicken hair follicles"
        ]
    }

    const handleAddToCart = () => {
        const productToSave = {
            image: firstProduct.fileUrls?.[0] || "https://getsupplements.com/cdn/shop/files/1733411796843-generated-label-image-0.jpg?v=1733411814%201800w%22",
            name: mockProduct.name,
            quantity: parseInt(selectedQuantity),
            price: Number(firstProduct.price || mockProduct.price)
        }

        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
        
        existingCart.push(productToSave)
        
        localStorage.setItem('cart', JSON.stringify(existingCart))
    }

    const quantityOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString())

    return (
        <div className="max-w-6xl mt-10 mb-10 mx-auto p-8 flex flex-col md:flex-row gap-12" id='SHOP'>
            <div className="md:w-1/2">
                <img
                    src={firstProduct.fileUrls?.[0] || "https://getsupplements.com/cdn/shop/files/1733411796843-generated-label-image-0.jpg?v=1733411814%201800w%22"}
                    alt="Product Image"
                    className="w-full max-w-2xl rounded-2xl"
                />
            </div>

            <div className="md:w-1/2 space-y-6">
                <div>
                    <span className=" font-semibold  text-xs p-1 text-orange-400   tracking-wide">
                        {mockProduct.category}
                    </span>
                    <h1 className="text-4xl font-bold  mt-2">
                        {mockProduct.name}
                    </h1>
                    <h2 className="text-2xl font-bold  text-gray-700 mt-2">
                        {mockProduct.subtitle}
                    </h2>
                </div>

                <div className="text-1xl font-bold ">
                    ${Number(firstProduct.price || 0).toFixed(2)} USD
                </div>

                <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                        Pay in 2 interest-free installments of $17.50 with Learn more.
                        Your purchasing power is.
                        Learn more.
                    </p>
                    <span className="block text-sm ">Quantity</span>
                    <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
                        <SelectTrigger className="w-[70px]">
                            <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                            {quantityOptions.map((number) => (
                                <SelectItem key={number} value={number}>
                                    {number}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <ul className="space-y-4">
                    {mockProduct.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-base ">
                            <svg className="w-6 h-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                        </li>
                    ))}
                </ul>
                <SidebarCart>
                    <button 
                        className="w-full bg-yellow-500 text-white  text-sm py-2 rounded-full hover:bg-yellow-500 transition-colors"
                        onClick={handleAddToCart}
                    >
                        ADD TO CART
                    </button>
                </SidebarCart>
            </div>
        </div>
    )
}

export default ProductDisplay
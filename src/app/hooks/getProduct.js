"use client"
import { useState, useEffect } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...')
        const response = await fetch('/api/products')
        
        if (!response.ok) {
          console.error('Response not OK:', response.status)
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()
        console.log('Products fetched:', data.length)
        setProducts(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, isLoading, error }
}
"use client"

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
  })
  
  const [selectedImages, setSelectedImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)
    setSelectedImages(files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('price', formData.price)
      formDataToSend.append('description', formData.description)
      
      // Convert images to base64 and store them in an array
      const imagePromises = selectedImages.map(image => 
        new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onloadend = () => {
            resolve(reader.result)
          }
          reader.onerror = reject
          reader.readAsDataURL(image)
        })
      )

      const imageBase64Array = await Promise.all(imagePromises)
      
      // Append the array of base64 images as a single JSON string
      formDataToSend.append('images', JSON.stringify(imageBase64Array))

      const response = await fetch('/api/admin', {
        method: 'POST',
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error('Failed to create product')
      }

      // Reset form
      setFormData({
        name: '',
        price: '',
        description: '',
      })
      setSelectedImages([])
      
      alert('Product created successfully!')

    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create product')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="images">Product Images</Label>
        <Input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="mt-1"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Product'}
      </Button>
    </form>
  )
}

export default ProductForm
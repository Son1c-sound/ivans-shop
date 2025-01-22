"use client"
import React, { useState, useEffect } from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCheckout } from '@/app/hooks/checkoutSession'


const SidebarCart = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const { createCheckoutSession, isLoading } = useCheckout()

    useEffect(() => {
        if (isOpen) {
            const items = JSON.parse(localStorage.getItem('cart') || '[]')
            setCartItems(items)
        }
    }, [isOpen])

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    const removeItem = (index) => {
        const newItems = cartItems.filter((_, i) => i !== index)
        setCartItems(newItems)
        localStorage.setItem('cart', JSON.stringify(newItems))
    }

    return (
        <Sheet onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-lg">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                        Review your items before checkout
                    </SheetDescription>
                </SheetHeader>

                <div className="flex-1 h-full overflow-auto py-6">
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 border-b pb-4">
                                <div className="h-16 w-16 rounded-md overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                    <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                                    <Button 
                                        className="w-full"
                                        onClick={createCheckoutSession}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                                    </Button>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeItem(index)}
                                >
                                    <span className="sr-only">Remove item</span>
                                    ×
                                </Button>
                            </div>
                        ))}
                        {cartItems.length === 0 && (
                            <div className="text-center text-gray-500 py-5">
                                Your cart is empty
                            </div>
                        )}
                        <div className='flex justify-center items-center align-top'>
                        </div>
                    </div>
                </div>
                <SheetFooter className="border-t pt-4">
                    <div className="w-full space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">Total</span>
                            <span className="font-medium">${total.toFixed(2)}</span>
                        </div>
                        <Button
                            className="w-full"
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                        </Button>
                        <SheetClose asChild>
                            <Button variant="outline" className="w-full">
                                Continue Shopping
                            </Button>
                        </SheetClose>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarCart
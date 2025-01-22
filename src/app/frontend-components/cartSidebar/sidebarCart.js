"use client"
import React, { useState, useEffect } from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCheckout } from '@/app/hooks/checkoutSession'
import { X } from 'lucide-react'

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

    const paymentMethods = [
        { name: 'visa', src: '/visa.png' },
        { name: 'mastercard', src: '/mastercard.png' },
        { name: 'amex', src: '/amex.png' },
        { name: 'discover', src: '/discover.png' },
    ]

    return (
        <Sheet onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
                <SheetHeader className="border-b pb-4">
                    <SheetTitle>Cart ({cartItems.length})</SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-auto py-4">
                    <div className="space-y-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 py-3">
                                <div className="h-20 w-20 rounded bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-cover rounded"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between">
                                        <h3 className="font-medium text-sm">{item.name}</h3>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-6 w-6"
                                            onClick={() => removeItem(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {cartItems.length === 0 && (
                            <div className="text-center py-8">
                                <p className="text-gray-500">Your cart is empty</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-t pt-4 mt-auto bg-white">
                    <div className="w-full space-y-4 px-6 pb-2">
                         
                        <div className="space-y-2">
                            <Button
                                className="w-full bg-yellow-500/90 shadow-none hover:bg-yellow-400 text-white rounded-xl p-5 font-bold text-md"
                                onClick={createCheckoutSession}
                                disabled={isLoading || cartItems.length === 0}
                            >
                                {isLoading ? 'Processing...' : 'Checkout'} - <span>${total.toFixed(2)}</span>
                            </Button>
                            <SheetClose asChild>
                            </SheetClose>
                        </div>
                        <div className="flex justify-center gap-2 pt-2">
                            <img src="https://imgs.search.brave.com/-sC8zeHKNUtuWvHpBp9y8dZW1G6nzAEx12dL3JRzrKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL2Fhcm9u/ZmFnYW4vc3ZnLWNy/ZWRpdC1jYXJkLXBh/eW1lbnQtaWNvbnMv/cmF3L21haW4vZmxh/dC92aXNhLnN2Zw" alt="Visa" className="h-5 w-auto" />
                            <img src="https://imgs.search.brave.com/fNE_MJp9jnH3BbXDzSKRdBip76-jwNd1_fFauWh22b4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmLzNi/L2FjLzhmM2JhYzQz/MTk4ZTJmNjM4NmNi/OTc5NjA0ODgzZTli/LmpwZw" alt="Mastercard" className="h-5 w-auto" />
                            <img src="https://imgs.search.brave.com/KIoZuVaDcODJGtjsB9zvVGAjX6q92Avy47btE_Qt1i0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTYwNTdkOTc2MDAw/YjAwMDQ1YTdkYTMu/cG5n" alt="American Express" className="h-5 w-auto" />
                            <img src="https://imgs.search.brave.com/iCpRo4Rmx399jkUyZ5XncAsHme2iNm80g-Kf7dE09Ow/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBiLzk0/LzFlLzBiOTQxZTU5/MDUwNzUwZTU5YTJl/ZmQyZmNiY2VmMTRk/LmpwZw" alt="Discover" className="h-5 w-auto" />
                            <img src="https://imgs.search.brave.com/joKg1jjup5vAPxI5aLa00P0c7Qhe9XI6lsAd8lur-JM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE2L0Zvcm1lcl9W/aXNhXyhjb21wYW55/KV9sb2dvLnN2Zw" alt="Apple Pay" className="h-5 w-auto" />
                            <img src="https://imgs.search.brave.com/Uh1iJdtFIuug5YO8yyPTK-4U4MG8_brnbGsgLgaNv8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS52b3guY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8yL2Nob3J1cy91/cGxvYWRzL2Nob3J1/c19hc3NldC9maWxl/LzEzNjc0NTU0L01h/c3RlcmNhcmRfbG9n/by5qcGc_cXVhbGl0/eT05MCZzdHJpcD1h/bGwmY3JvcD0wLDE2/LjY2NjY2NjY2NjY2/NywxMDAsNjYuNjY2/NjY2NjY2NjY3Jnc9/MjQwMA" alt="Apple Pay" className="h-5 w-auto" />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SidebarCart
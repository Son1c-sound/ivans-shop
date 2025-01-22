import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const SidebarCart = ({ children }) => {
  return (
    <Sheet>
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
            <div className="flex items-center space-x-4 border-b pb-4">
              <div className="h-16 w-16 bg-gray-100 rounded-md"></div>
              <div className="flex-1 space-y-1">
                <h3 className="font-medium">Sample Product</h3>
                <p className="text-sm text-gray-500">Quantity: 1</p>
                <p className="text-sm font-medium">$99.99</p>
              </div>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Remove item</span>
                ×
              </Button>
            </div>
          </div>
        </div>

        <SheetFooter className="border-t pt-4">
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Total</span>
              <span className="font-medium">$99.99</span>
            </div>
            <Button className="w-full">
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
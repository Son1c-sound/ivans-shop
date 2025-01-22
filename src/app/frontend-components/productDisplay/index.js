"use client"
import React from 'react';
import { Plus, Minus, FileText, Truck, Package } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ProductDisplay = () => {
    const [quantity, setQuantity] = React.useState(1);

    const mockProduct = {
        category: "GET SUPPLEMENTS",
        name: "GET ATTRACTIVE",
        subtitle: "Supplements",
        price: 35.00,
        benefits: [
            "Promotes hair growth",
            "Improves nail strength",
            "Aids in skin clarity",
            "Helps to thicken hair follicles"
        ]
    };

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    return (
        <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
                <img
                    src="https://getsupplements.com/cdn/shop/files/1733411796843-generated-label-image-0.jpg?v=1733411814%201800w%22"
                    alt="Product Image"
                    className="w-full max-w-2xl rounded-2xl"
                />
            </div>

            <div className="md:w-1/2 space-y-6">
                <div>
                    <span className="text-base text-orange-400 font-semibold tracking-wide">
                        {mockProduct.category}
                    </span>
                    <h1 className="text-4xl font-bold mt-2">
                        {mockProduct.name}
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mt-2">
                        {mockProduct.subtitle}
                    </h2>
                </div>

                <div className="text-1xl font-bold">
                    ${mockProduct.price.toFixed(2)} USD
                </div>

                <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                        Pay in 2 interest-free installments of $17.50 with Learn more.
                        Your purchasing power is.
                        Learn more.
                    </p>
                    <span className="block text-sm font-medium">Quantity</span>
                    <Select>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                    </Select>
                </div>


                <ul className="space-y-4">
                    {mockProduct.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-3 text-base font-medium">
                            <svg className="w-6 h-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                        </li>
                    ))}
                </ul>

                <button className="w-full bg-yellow-500 text-white  font-bold text-sm py-2 rounded-full hover:bg-yellow-500 transition-colors">
                    ADD TO CART
                </button>

                <div className="flex justify-between items-start pt-6">
                    <div className="flex flex-col items-center">
                        <FileText className="w-8 h-8 text-gray-700" />
                        <div className="text-sm mt-2 font-medium text-center">
                            <div className="text-yellow-600">JAN 21</div>
                            <div>Order placed</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Truck className="w-8 h-8 text-gray-700" />
                        <div className="text-sm mt-2 font-medium text-center">
                            <div className="text-yellow-600">JAN 22 - 23</div>
                            <div>Order ships</div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Package className="w-8 h-8 text-gray-700" />
                        <div className="text-sm mt-2 font-medium text-center">
                            <div className="text-yellow-600">JAN 23 - 25</div>
                            <div>Estimated arrival</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
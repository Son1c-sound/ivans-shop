import Footer from "@/app/frontend-components/heroPage/footer"
import Navbar from "@/app/frontend-components/heroPage/navbar"
import ProductDisplay from "@/app/frontend-components/productDisplay"
import { XCircle } from "lucide-react"
import Link from "next/link"


export default function CancelPage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Transaction Cancelled</h1>
        <p className="text-gray-600 mb-6">Your transaction has been cancelled. No charges were made.</p>
        <Link href='/'>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600">
          Try Again
        </button>
        </Link>
      </div>
    </div>
    <ProductDisplay/>
    <Footer/>
    </>
  )
}
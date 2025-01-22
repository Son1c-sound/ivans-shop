import React from 'react'
import Hero from './heroPage/hero'
import TestimonialSlider from './reviewPage'
import ProductDisplay from './productDisplay'
import CollectionsShowcase from './productDisplay/ExploreCollectionCards'
import FAQSection from './faqPage/faq'
import ComparisonSection from './comparisionPage/comparision'
import Footer from './heroPage/footer'


function index() {
  return (
    <>
    <Hero />
    <TestimonialSlider/>
    <ProductDisplay/>
    <CollectionsShowcase/>
    <FAQSection />
    <ComparisonSection />
    <Footer />

    </>
  )
}

export default index
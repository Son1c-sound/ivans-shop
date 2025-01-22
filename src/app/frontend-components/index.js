import React from 'react'
import Hero from './heroPage/hero'
import TestimonialSlider from './reviewPage'
import ProductDisplay from './productDisplay'
import CollectionsShowcase from './productDisplay/ExploreCollectionCards'


function index() {
  return (
    <>
    <Hero />
    <TestimonialSlider/>
    <ProductDisplay/>
    <CollectionsShowcase/>
    </>
  )
}

export default index
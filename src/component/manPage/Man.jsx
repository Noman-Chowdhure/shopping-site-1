import React from 'react'
import HeroMan from './HeroMan'
import AboutMan from './AboutMan'
import ProductMan from './ProductMan'
import SlideMan from './SlideMan'

const Man = () => {
  return (
    <div className=' overflow-x-hidden'>
        <HeroMan></HeroMan>
        <SlideMan></SlideMan>
        <AboutMan></AboutMan>
        <ProductMan></ProductMan>
    </div>
  )
}

export default Man
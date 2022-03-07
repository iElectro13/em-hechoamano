import React from 'react'
import Product from '../cards/Product'

const ProductCards = () => {
  return (
    <div className='grid grid-cols-2 w-full max-w-lg gap-4 md:grid-cols-3 md:max-w-2xl lg:grid-cols-4 lg:max-w-4xl'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

    </div>
  )
}

export default ProductCards
import React from 'react'
import Product from '../cards/Product'

const ProductCards = ( {onOpen} ) => {
  return (
    <div className='grid grid-cols-2 w-full max-w-lg gap-4 md:grid-cols-3 md:max-w-2xl lg:grid-cols-4 lg:max-w-4xl'>
        <Product onOpen={onOpen}/>
        <Product onOpen={onOpen}/>
        <Product onOpen={onOpen}/>
        <Product onOpen={onOpen}/>
        <Product onOpen={onOpen}/>

    </div>
  )
}

export default ProductCards
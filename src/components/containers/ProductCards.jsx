import React from 'react'
import { CartState } from '../../context/Context'
import Product from '../cards/Product'

const ProductCards = () => {
  const { state: {products} } = CartState()
  console.log(products)
  return (
    <div className='grid grid-cols-2 w-full max-w-lg gap-4 md:grid-cols-3 md:max-w-2xl lg:grid-cols-4 lg:max-w-4xl'>
      {products.map(prod => <Product key={prod.id} product={prod} />)}
    </div>
  )
}

export default ProductCards
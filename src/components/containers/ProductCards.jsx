import React from 'react'
import { useParams } from 'react-router-dom'
import { CartState } from '../../context/Context'
import Product from '../cards/Product'

const ProductCards = () => {
  const {category} =  useParams()
  const { state: {products} } = CartState()
  console.log(products)
  return (
    <div className='grid grid-cols-2 w-full max-w-lg gap-4 md:grid-cols-3 md:max-w-2xl lg:grid-cols-4 lg:max-w-4xl'>
      {products.map(prod => {
        if(prod.category === category || category === "todos"){
          return<Product key={prod.id} product={prod} />
        }
      return ""})
      }
    </div>
  )
}

export default ProductCards
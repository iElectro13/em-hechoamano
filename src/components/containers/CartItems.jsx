import React from 'react'
import CartItem from '../cards/CartItem'


const CartItems = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full text-gray-900 font-raleway gap-4'>
        <CartItem />
        <CartItem />
    </div>
  )
}

export default CartItems
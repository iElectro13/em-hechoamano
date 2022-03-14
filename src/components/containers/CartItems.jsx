import React from 'react'
import CartItem from '../cards/CartItem'
import { CartState } from "../../context/Context";

/** This component renders the cart items inside itself */

const CartItems = () => {
  const {state: {cart}} = CartState()
  return (
    <div className='flex flex-col justify-center items-center w-full text-gray-900 font-raleway gap-4'>
        {
          cart.map(item => <CartItem key={item.id} prod={item} />)
        }
    </div>
  )
}

export default CartItems
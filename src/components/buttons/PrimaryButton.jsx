import React from 'react'
import { useLocation } from 'react-router-dom'

const PrimaryButton = ({ text, onOpen }) => {
  const location = useLocation()

  const handleClick = ()=>{
    if(location.pathname === "/carrito" || location.pathname === "/productos")
    onOpen(true)
  }
  return (
    <button onClick={handleClick} className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95'>
        {text}
    </button>
  )
}

export default PrimaryButton
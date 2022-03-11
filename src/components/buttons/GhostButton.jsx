import React from 'react'
import { useLocation } from 'react-router-dom'

const GhostButton = ({ text, children, onOpen }) => {
  const location = useLocation()
  const handleClick = ()=>{
    if(location.pathname.includes("/productos")){
      onOpen(true)
    }
  }
  return (
    <button onClick={handleClick} className='bg-none border-2 border-orange-100 text-orange-100 p-1 w-full rounded-md hover:bg-gray-800 font-bold text-raleway flex justify-center items-center gap-4 active:scale-95'>
        {text}
        {children}
    </button>
  )
}

export default GhostButton
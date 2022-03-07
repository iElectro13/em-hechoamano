import React from 'react'

const GhostButton = ({ text, children }) => {
  return (
    <button className='bg-none border-2 border-orange-100 text-orange-100 py-1 w-full rounded-md hover:bg-gray-800 font-bold text-raleway flex justify-center items-center gap-4 active:scale-95'>
        {text}
        {children}
    </button>
  )
}

export default GhostButton
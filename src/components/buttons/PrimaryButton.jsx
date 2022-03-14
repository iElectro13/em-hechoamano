import React from 'react'

const PrimaryButton = ({ text, onOpen }) => {


  return (
    <button className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95'>
        {text}
    </button>
  )
}

export default PrimaryButton
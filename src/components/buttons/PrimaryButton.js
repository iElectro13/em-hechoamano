import React from 'react'

const PrimaryButton = ({ text }) => {
  return (
    <button className='text-gray-100 bg-fa-700 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2'>
        {text}
    </button>
  )
}

export default PrimaryButton
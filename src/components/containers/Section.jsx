import React from 'react'

const Section = ({ title, children }) => {
  return (
    <div className='relative z-10 flex flex-col justify-start items-center min-h-screen w-full bg-orange-100 py-4 px-4 sm:px-8 md:px-12 lg:px-20 rounded-tl-xl rounded-tr-xl shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)] gap-4'>
        <h2 className='text-gray-900 font-bold font-lora text-3xl md:text-5xl lg:text-7xl'>{title}</h2>
        {children}
    </div>
  )
}

export default Section
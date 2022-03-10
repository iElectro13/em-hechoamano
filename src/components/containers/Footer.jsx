import React from 'react'
import Logo from '../buttons/Logo'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-100 flex flex-col justify-center items-center gap-2 py-3 md:flex-row md:justify-between px-12 w-full'>
        <Logo />
        <div className='flex flex-col items-center justify-center'>
            <span className='font-raleway'>Made with love by: <span className='font-bold'>iElectro</span></span>
            <span className='font-raleway'>&#169; Copyright. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
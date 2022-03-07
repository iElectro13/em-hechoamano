import React from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'
import SquareSlider from '../components/sliders/SquareSlider'

const Landing = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center place-items-center bg-orange-100 min-h-screen relative z-1 p-6 w-full gap-5 rounded-xl shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)] md:grid-cols-2'>
      <h2 className='text-gray-900 font-lora text-5xl font-bold text-center md:text-7xl md:col-span-2 lg:col-start-1 lg:col-end-2 lg:col-span-1'>Un hilo que llega al corazón</h2>


      <p className='text-gray-700 font-raleway text-center md:text-2xl md:text-left lg:col-start-1 lg:col-end-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima a veritatis! Modi, tempora quam vel eaque voluptatem veritatis natus debitis, dignissimos, numquam quibusdam illum deserunt at omnis quos error.
      </p>
      <SquareSlider />
      <PrimaryButton text="DESCUBRIR MÁS" />
    </div>
  )
}

export default Landing
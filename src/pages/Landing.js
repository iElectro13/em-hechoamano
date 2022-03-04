import React from 'react'
import PrimaryButton from '../components/buttons/PrimaryButton'
import SquareSlider from '../components/sliders/SquareSlider'
import Para from '../components/text/Para'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-orange-100 relative z-1 p-6 w-full gap-5 rounded-xl shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)]'>
        <h2 className='text-gray-900 font-lora text-4xl font-bold text-center md:text-7xl'>Un hilo que llega al corazón</h2>
        <div className='flex flex-col justify-center items-center md:flex-row'>

        <Para text="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima a veritatis! Modi, tempora quam vel eaque voluptatem veritatis natus debitis, dignissimos, numquam quibusdam illum deserunt at omnis quos error."/>
        <SquareSlider />
        </div>
        <PrimaryButton text="DESCUBRIR MÁS"/>
    </div>
  )
}

export default Landing
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'

const Landing = () => {
  const { state: { products }, dispatch } = CartState()
  const onSelect = (prod)=>{
    dispatch({
      type:"WATCH_DETAIL",
      payload: prod
    })
  }
  return (
    <div className='grid grid-cols-1 justify-items-center place-items-center bg-orange-100 min-h-screen relative z-1 p-6 w-full gap-5 rounded-tl-xl rounded-tr-xl shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.5)] md:grid-cols-2'>
      <h2 className='text-gray-900 font-lora text-5xl font-bold text-center md:text-7xl md:col-span-2 lg:col-start-1 lg:col-end-2 lg:col-span-1'>Un hilo que llega al corazón</h2>


      <p className='text-gray-700 font-raleway text-center md:text-2xl md:text-left lg:col-start-1 lg:col-end-2'>
        Bienvenido a E&M: Hecho a mano, un emprendimiento familiar que pretende entregar una calidad única y diseños exclusivos. Cumplimos este objetivo asegurándonos de utilizar los mejores materiales y dedicando todo nuestro amor y cariño en cada creación. Definitivamente, somos un hilo que llega al corazón.
      </p>
      <div className='w-full max-w-lg aspect-square lg:row-span-2 lg:col-start-2 lg:row-start-1'>

      <AliceCarousel mouseTracking animationType="fadeout" disableDotsControls="true" infinite="true" keyboardNavigation="true" autoWidth="true" items={products.map(product => (
        <div onClick={()=> onSelect(product)} className='w-full aspect-square bg-red-500 overflow-hidden'>
        <img src={product.image} alt={product.name} className="object-cover h-full w-full"/>
        </div>
      ))} />
      </div>
      <Link to="/productos" className='text-gray-100 bg-fa-600 font-bold hover:bg-fa-500 font-raleway w-full py-2 rounded md:col-span-2 active:scale-95 text-center'>DESCUBRIR MÁS</Link>
    </div>
  )
}

export default Landing
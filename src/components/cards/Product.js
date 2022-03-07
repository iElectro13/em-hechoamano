import React, { useEffect } from 'react'
import GhostButton from '../buttons/GhostButton'
import { FaShoppingCart } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'


const Product = () => {

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=> {
        if(location.pathname === '/productos'){
            navigate("/productos/todos")   
        }
        console.log("hola2")
    })

    return (
        <div className='relative group w-full min-h-max text-gray-900 font-raleway shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-all'>
            <div className='flex-col justify-center items-center gap-4 p-4 absolute z-20 bg-gray-900/80 w-full h-full hidden group-hover:flex transition-all'>
                <GhostButton text="Agregar a carrito">
                    <FaShoppingCart className='text-2xl'/>
                </GhostButton>
                <GhostButton text="Ver detalles"/>
            </div>
            <div className='w-full overflow-hidden'>
                <img className="h-full aspect-[14/16]" src={require('../../assets/1.jpeg')} alt="imagen" />
            </div>
            <div className='p-2 bg-none'>

                <h3 className='font-bold text-xl'>Gorro de lana</h3>
                <span className='text-lg'>50.000$</span>
            </div>

        </div>
    )
}

export default Product
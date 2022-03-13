import React, { useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
import { CartState } from '../../context/Context'


const Product = ({ product }) => {
    const {dispatch} = CartState()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/productos') {
            navigate("/productos/todos")
        }
    })

    const onSelect = (prod)=>{
        dispatch({
            type: "WATCH_DETAIL",
            payload: prod
        })
    }

    const onAdd = (prod) =>{
        dispatch({
            type: "ADD_TO_CART",
            payload: {...prod, quantity: 1}
        })
    }

    return (
        <div className='relative group w-full min-h-max text-gray-900 font-raleway shadow-xl shadow-gray-900/30 rounded-lg overflow-hidden hover:scale-105 transition-all'>
            <div className='flex-col justify-center items-center gap-4 p-4 absolute z-20 bg-gray-900/80 w-full h-full hidden group-hover:flex transition-all'>
                <button onClick={()=> onAdd(product)} className='bg-none border-2 border-orange-100 text-orange-100 p-1 w-full rounded-md hover:bg-gray-800 font-bold text-raleway flex justify-center items-center gap-4 active:scale-95'>
                    Enviar a carrito
                    <FaShoppingCart className='text-2xl' />
                </button>
                <button onClick={()=> onSelect(product)} className='bg-none border-2 border-orange-100 text-orange-100 p-1 w-full rounded-md hover:bg-gray-800 font-bold text-raleway flex justify-center items-center gap-4 active:scale-95'>
                    Ver Detalles
                </button>
            </div>
            <div className='w-full aspect-[7/8] bg-red-500 overflow-hidden'>
                <img className="object-cover h-full w-full" src={product.image} alt="imagen" />
            </div>
            <div className='flex flex-col p-2 bg-none'>

                <h3 className='font-bold text-xl'>{product.name}</h3>
                <span className='text-sm text-gray-400'>{product.category}</span>
                <span className='text-lg'>{product.price}$</span>
            </div>
        </div>
    )
}

export default Product
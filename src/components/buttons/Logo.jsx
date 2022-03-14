import React from 'react'
import { useNavigate } from 'react-router-dom'

/**Renders the Page logo */
const Logo = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center cursor-pointer' onClick={() => navigate('/')}>
            <h1 className='font-lora text-5xl text-gray-100'>E&M</h1>
            <span className='font-handlee text-gray-100 text-lg'>Hecho a mano</span>
        </div>
    )
}

export default Logo
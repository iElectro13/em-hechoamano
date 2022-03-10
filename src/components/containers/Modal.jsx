import React from 'react'

const Modal = ({ children }) => {
    return (
        <div className='bg-gray-900/80 w-full h-screen fixed top-0 z-30'>
            <div className='w-full max-h-screen bg-orange-50 rounded-xl overflow-hidden p-8 flex flex-col justify-center items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-3/4 md:w-2/3 lg:w-1/2'>
                {children}
            </div>
        </div>
    )
}

export default Modal
import React from 'react'

const CategoryItem = ( { text } ) => {
  return (
    <span className='hover:text-leaf-400 cursor-pointer md:text-2xl'>{text}</span>
  )
}

export default CategoryItem
import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryItem = ( { text, route } ) => {
  return (
    <NavLink className={({isActive}) => 'hover:text-leaf-400 cursor-pointer md:text-2xl' + (isActive ? ' text-leaf-400' : '')} to={route}>{text}</NavLink>
  )
}

export default CategoryItem

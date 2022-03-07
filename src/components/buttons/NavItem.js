import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ text, route }) => {
  return (
    <NavLink className={({isActive}) => 'text-gray-900 hover:text-leaf-400 cursor-pointer font-bold text-xl' + (isActive ? ' text-leaf-400' : '')} to={route}>
      {text}
    </NavLink>
  )
}

export default NavItem
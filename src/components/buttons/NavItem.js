import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ text, route }) => {
  return (
    <NavLink className='text-gray-900 hover:text-leaf-400 cursor-pointer font-bold text-xl' to={route} activeClassName="active">
      {text}
    </NavLink>
  )
}

export default NavItem
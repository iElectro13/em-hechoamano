import React from 'react'

const NavItem = ({ text }) => {
  return (
    <span className='text-gray-900 hover:text-leaf-400 cursor-pointer font-bold text-xl'>{text}</span>
  )
}

export default NavItem
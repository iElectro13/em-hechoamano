import React from 'react'
import Logo from '../buttons/Logo'
import { IoMenu } from 'react-icons/io5'
import NavItem from '../buttons/NavItem'

const Navbar = () => {
  return (
    <header className='w-full py-1 flex justify-center items-center relative  md:justify-between md:px-12'>
        <Logo />
    <nav className='flex flex-col justify-center items-end absolute right-5 top-5 md:items-center md:static '>
        <IoMenu className='text-5xl text-gray-900 cursor-pointer md:hidden'/>
        <div className='flex flex-col justify-center items-end mr-1 mt-4 gap-4 md:flex-row md:items-center md:mr-0 md:mt-0'>
            <NavItem text="Inicio"/>
            <NavItem text="Productos"/>
            <NavItem text="Carrito"/>
        </div>
    </nav>
    </header>
  )
}

export default Navbar
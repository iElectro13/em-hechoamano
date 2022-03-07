import React, { useEffect, useState } from "react";
import Logo from "../buttons/Logo";
import { IoMenu } from "react-icons/io5";
import NavItem from "../buttons/NavItem";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(()=>{

    setIsOpen(false)

    window.addEventListener("scroll", ()=>{
      setIsOpen(false)
    })
    window.addEventListener("resize", (e)=>{
      if(window.innerWidth >= 640){
        setIsOpen(false)
      }
    })
  }, [location])

    return (
        <header id={isOpen ? "headerOpen" : "headerClose"} className="w-full py-1 flex justify-center items-start relative md:items-center md:justify-between md:px-12 z-0 transition-transform">
            <Logo />
            <nav className="flex flex-col justify-center items-end absolute right-5 top-5 md:items-center md:static ">
                <IoMenu className="text-5xl text-gray-900 cursor-pointer md:hidden" onClick={()=> setIsOpen(!isOpen)}/>
                <div
                    className="flex
                        flex-col
                        justify-center
                        items-end
                        mr-1
                        mt-4
                        gap-4
                        md:flex-row
                        md:items-center
                        md:mr-0
                        md:mt-0"
                >
                    <NavItem text="Inicio" route="/"/>
                    <NavItem text="Productos" route="/productos" />
                    <NavItem text="Carrito" route="/carrito"/>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

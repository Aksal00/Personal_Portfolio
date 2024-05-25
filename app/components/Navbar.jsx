"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

const NavLinks = [
    {
        title:"Home",
        path: "#home"
    },
    {
        title:"About",
        path: "#about"
    },
    {
        title: "Skills",
        path: "#skills",
    },
    {
        title:"Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact",
    },
    
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 backdrop-blur'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-10 py-4'>
            <Link href={"/"} className= "text-xl md:text-3xl text-white font-light">
                <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600'>A</span>kila <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600'>S</span>rikantha
            </Link>
            <div className="mobile-menu block ">
                { 
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white md:hidden'><Bars3Icon className='h-5 w-5'/></button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white md:hidden'><XMarkIcon className='h-5 w-5'/></button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row sm:space-x-6 md:space-x-7 lg:space-x-9 xl:space-x-20 mt-0">
                    
                    {NavLinks.map((link,index) =>(
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  )
}

export default Navbar
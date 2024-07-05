import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
            <nav className=' flex py-4 md:px-20 px-10 items-center justify-between gap-10 shadow-md'>
                <Link to="/">
                <div className="logo flex items-end">
                    <img className='w-10 inline-block' src="https://cdn-icons-png.flaticon.com/512/7799/7799635.png" alt="" />
                    <h1 className='italic md:hidden font-black tracking-[8px] '>GP</h1>
                    <h1 className='italic md:text-md text-xs font-black tracking-[8px] md:block hidden'>GardenPlaner</h1>
                </div>
                </Link>
                <div className="nav-items gap-10 items-center md:flex hidden">
                <NavLink to="/"><h3  className={`cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full`}>Home</h3></NavLink>
                <NavLink to="/plans"><h3 className={`cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full`}>Plan</h3></NavLink>
                <NavLink to="/about"><h3 className={`cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full`}>About</h3></NavLink>
                <NavLink to="/contact"><h3 className={`cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full`}>Contact</h3></NavLink>
                </div>
                <i className='ri-menu-line md:hidden block text-2xl'></i>
                

            </nav>
    )
}

export default Nav
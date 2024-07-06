import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    const menuRef = useRef(null)

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
                <i onClick={(e)=>menuRef.current.style.top="0%"} className='ri-menu-line md:hidden block text-2xl'></i>
                
                <div ref={menuRef} className='fixed -top-full transition-all shadow-lg duration-300 z-[9] left-0 py-5 w-full bg-white'>
                    <div className="w-full text-right px-8 pr-10 mb-1 flex gap-5 justify-between items-center">
                        <hr className='h-2 w-full bg-black rounded-full' />
                <i onClick={(e)=>menuRef.current.style.top="-100%"} className="ri-close-circle-fill text-right text-2xl rounded-full "></i>
                    </div>
                    <Link to="/plans">
                    <h1 className='mb-2 px-8 hover:bg-black hover:text-white py-2 duration-150'>Plans</h1>
                    </Link>
                    <Link to="/about">
                    <h1 className='mb-2 px-8 hover:bg-black hover:text-white py-2 duration-150'>About</h1>
                    </Link>
                    <Link to="/contact">
                    <h1 className='mb-2 px-8 hover:bg-black hover:text-white py-2 duration-150'>Contact</h1>
                    </Link>
                </div>

            </nav>
    )
}

export default Nav
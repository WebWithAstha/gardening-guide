import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
            <nav className=' flex py-4 items-center justify-center gap-10 shadow-md'>
                <NavLink to="/"><h3 className='cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full'>Home</h3></NavLink>
                <NavLink to="/plans"><h3 className='cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full'>Plan</h3></NavLink>
                <NavLink to="/about"><h3 className='cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full'>About</h3></NavLink>
                <NavLink to="/contact"><h3 className='cursor-pointer hover:text-[#6b6d6b] transition-all duration-200 after:w-full after:absolute after:bottom-0 after:left-0 relative after:bg-[#babcb9] after:h-[2px] hover:after:scale-0 after:origin-left after:duration-500 after:transition-all after:rounded-full'>Contact</h3></NavLink>
            </nav>
    )
}

export default Nav
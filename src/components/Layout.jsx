import React from 'react'
import { NavLink } from 'react-router-dom'


const Layout = () => {
    

    return (
        <div className='w-full md:h-[65vh] sm:h-[80vh] h-[95vh] relative flex items-center justify-center md:p-10 p-8'>

            <img className='w-full h-full object-cover absolute top-0 left-0 z-[-1]' src="https://images.unsplash.com/photo-1517008998633-21da3fdf46aa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="content md:w-[80%] flex flex-col items-center text-white backdrop-blur-sm">
                <NavLink to="/create">
                    <div className="btn bg-[#919591] rounded-full w-14 mb-4 hover:w-max transition-all duration-300 overflow-hidden flex items-center group">
                <img className='w-14  drop-shadow-lg transition-all duration-200 bg-white rounded-full p-2' src="https://static.vecteezy.com/system/resources/previews/024/657/001/non_2x/cute-simple-pink-flower-free-png.png" alt="" />
                <i className="ri-add-line text-white group-hover:mr-4 font-black text-xl opacity-0 transition-all duration-100 group-hover:opacity-100 ">ADD</i>

                    </div>
                </NavLink>
                <h1 className='md:text-3xl text-3xl text-center font-black text-white'>Get<span className=''> Petal-Perfect</span> <br /> Tips for Stunning Blooms!</h1>
                <p className='text-center leading-tight mt-4 md:w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias quisquam saepe commodi tenetur recusandae earum quod, rem vita Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet inventore ullam omnis impedit in delectus corrupti provident consequuntur iusto cum.</p>
                <button className='px-8 py-2 border-[2px] rounded-full mt-4 uppercase font-bold hover:bg-[#919591] hover:border-[#919591] transition-all duration-300'>Get Started &nbsp; &#8594;</button>
            </div>
        </div>
    )
}

export default Layout
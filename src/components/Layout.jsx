import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Layout = () => {
    

    return (
        <div className='w-full md:h-[65vh] sm:h-[80vh] h-max bg-[#e7e8ef] relative flex md:flex-row flex-col-reverse items-center justify-center md:p-10 p-8'>
            <div className="left md:w-[40rem] relative md:-mr-20 md:mt-0">
                <h1 className='font-black md:text-5xl text-2xl leading-relaxed md:leading-snug mb-4'>Bring Life to Your place, <br />Plan a Garden</h1>
                <p className='md:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aliquid id, repellat perspiciatis est ipsa.</p>
                <Link to="/create">
                <button className='px-10 py-2 bg-black text-white mt-4 hover:bg-[#babcb9] hover:text-black hover:font-semibold uppercase duration-300'>Make Plan</button>
                </Link>
            </div>
            <div className="right md:h-full h-56 w-full md:w-96 md:mb-0 mb-10">
                <img className='h-full w-full object-cover mix-blend-darken' src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>
            
        </div>
    )
}

export default Layout
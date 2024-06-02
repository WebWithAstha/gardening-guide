import React from 'react'
import { NavLink } from 'react-router-dom'
import a from "../assets/images/45-degrees.png"
import PlanCard from './PlanCard'


const Plans = () => {
    return (
        <>
            <div className="plans flex md:justify-start justify-center px-6 gap-10 mt-10 md:px-20 md:pb-20 pb-10 flex-wrap">

                <NavLink to="/plan/1">
                <PlanCard/>
                    
                </NavLink>

                <div className="plan border-2 hover:bg-[#babcb9] hover:border-[#babcb9] transition-all duration-500 border-zinc-400 cursor-pointer shrink-0 w-72 h-72 rounded-lg p-4 relative">
                    <div className="img w-full h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <div className="absolute left-0 bottom-0 p-2 flex items-end justify-between backdrop-blur-sm text-white w-full">
                            <h1 className='font-medium w-[70%] uppercase text-4xl'>Spring Garden </h1>
                            <img className='w-12 h-max mr-2 mb-2' src={`${a}`} alt="" />
                        </div>
                    </div>
                    <button className='border-[1.8px] hidden border-zinc-400 text-sm text-zinc-600 mt-4 capitalize rounded-full backdrop-blur-md px-6 py-1 mx-auto'>view plan</button>
                </div>
                <div className="plan border-2 hover:bg-[#babcb9] hover:border-[#babcb9] transition-all duration-500 border-zinc-400 cursor-pointer shrink-0 w-72 h-72 rounded-lg p-4 relative">
                    <div className="img w-full h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1559141476-f1e141fe13c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <div className="absolute left-0 bottom-0 p-2 flex items-end justify-between backdrop-blur-sm text-white w-full">
                            <h1 className='font-medium w-[70%] uppercase text-4xl'>Spring Garden </h1>
                            <img className='w-12 h-max mr-2 mb-2' src={`${a}`} alt="" />
                        </div>
                    </div>
                    <button className='border-[1.8px] hidden border-zinc-400 text-sm text-zinc-600 mt-4 capitalize rounded-full backdrop-blur-md px-6 py-1 mx-auto'>view plan</button>
                </div>
                <div className="plan border-2 hover:bg-[#babcb9] hover:border-[#babcb9] transition-all duration-500 border-zinc-400 cursor-pointer shrink-0 w-72 h-72 rounded-lg p-4 relative">
                    <div className="img w-full h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1559593531-fcfd7b803cbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwcmluZyUyMGdhcmRlbnxlbnwwfDB8MHx8fDA%3D" alt="" />

                        <div className="absolute left-0 bottom-0 p-2 flex items-end justify-between backdrop-blur-sm text-white w-full">
                            <h1 className='font-medium w-[70%] uppercase text-4xl'>Spring Garden </h1>
                            <img className='w-12 h-max mr-2 mb-2' src={`${a}`} alt="" />
                        </div>
                    </div>
                    <button className='border-[1.8px] hidden border-zinc-400 text-sm text-zinc-600 mt-4 capitalize rounded-full backdrop-blur-md px-6 py-1 mx-auto'>view plan</button>
                </div>
            </div>
        </>
    )
}

export default Plans
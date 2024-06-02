import React from 'react'
import a from "../assets/images/45-degrees.png"


const PlanCard = () => {
    return (
        <div className="plan border-2 hover:bg-[#babcb9] hover:border-[#babcb9] transition-all duration-500 border-zinc-400 cursor-pointer shrink-0 w-72 h-72 rounded-lg p-4 relative">
            <div className="img w-full h-full overflow-hidden relative">
                <img className='w-full h-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1618074452952-77405c6c1aea?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                <div className="absolute left-0 bottom-0 p-2 flex items-end justify-between backdrop-blur-sm text-white w-full">
                    <h1 className='font-medium w-[70%] uppercase text-4xl'>Spring Garden </h1>
                    <img className='w-12 h-max mr-2 mb-2' src={`${a}`} alt="" />
                </div>
            </div>
            <button className='border-[1.8px] hidden border-zinc-400 text-sm text-zinc-600 mt-4 capitalize rounded-full backdrop-blur-md px-6 py-1 mx-auto'>view plan</button>
        </div>
    )
}

export default PlanCard
import React, { useContext, useState } from 'react'
import a from "../assets/images/45-degrees.png"
import { plancontext } from '../Contexts/PlanContent'
import { useSelector } from 'react-redux'


const PlanCard = ({planid}) => {
    // const [plans,setplans] = useContext(plancontext)
    const {plans} = useSelector(store=>store.gardenPlanSlice)
    const plan = plans.find(plan=>plan.id === planid)
    console.log(plan)
    
    return ( plan ? <div className="plan border-2 hover:bg-[#babcb9] hover:border-[#babcb9] transition-all duration-500 border-zinc-400 cursor-pointer shrink-0 w-72 h-96  overflow-hidden p-4 relative">
    <div className="img w-full h-full overflow-hidden relative">
        <img className='w-full h-full object-cover rounded-full' src={plan.planimg} alt="" />

        <div className="absolute left-0 bottom-0 p-2 flex items-end justify-between backdrop-blur-sm text-zinc-800 w-full">
            <h1 className='font-medium w-[70%] uppercase text-3xl break-words'>{plan.planname.substring(0,20)} </h1>
            <img className='md:w-12 w-8 h-max mr-2 md:mb-2 invert' src={`${a}`} alt="" />
        </div>
    </div>
    <button className='border-[1.8px] hidden border-zinc-400 text-sm text-zinc-600 mt-4 capitalize rounded-full backdrop-blur-md px-6 py-1 mx-auto'>view plan</button>
</div> : "astha"
        
    )
}

export default PlanCard
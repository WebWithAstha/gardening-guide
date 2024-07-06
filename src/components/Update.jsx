import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdate } from '../store/actions/gardenPlanAction'


const Update = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {plans} = useSelector(store=>store.gardenPlanSlice)
    const plan = plans.find(plan => plan.id === id)

    const [planname, setplanname] = useState(plan.planname)
    const [planimg, setplanimg] = useState(plan.planimg)
    const [planbgimg, setplanbgimg] = useState(plan.planbgimg)
    const [plandesc, setplandesc] = useState(plan.plandesc)
    const [planplants, setplanplants] = useState(plan.planplants)
    const [planinstructions, setplaninstructions] = useState(plan.planinstructions)
    const [plantips, setplantips] = useState(plan.plantips)
    const [plansunlight, setplansunlight] = useState(plan.plansunlight)
    const [planwater, setplanwater] = useState(plan.planwater)

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedPlan = {
            id: plan.id,
            planname,
            planimg,
            planbgimg,
            plandesc,
            planplants,
            planinstructions,
            plantips,
            plansunlight,
            planwater
        }
        const index = plans.findIndex(plan => plan.id === id)
        
        dispatch(asyncUpdate(updatedPlan, index))
        navigate(`/plan/${id}`)
        toast.success('Plan updated successfully');
    }

    return (
        <>
            <NavLink to={`/plan/${id}`}>
                <i className='ri-arrow-left-line px-8 md:py-1.5 py-.5 absolute md:left-0 right-0 rounded md:mt-6 mt-2 bg-[#5a5e72] inline-block text-white border border-black font-bold uppercase md:mx-20 mx-10'></i>
            </NavLink>
            <form onSubmit={submitHandler} className="w-[70%] m-auto  pb-5">
                <h1 className="md:text-5xl mt-8 font-extrabold text-[#5a5e72] mb-4 md:mb-[2%] md:border-b border-dotted w-max md:pb-4 border-black">
                    Update Plan
                </h1>
                <input
                    onChange={e => setplanimg(e.target.value)}
                    value={planimg}
                    type="url"
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Plan Image URL"
                />
                <input
                    onChange={e => setplanbgimg(e.target.value)}
                    value={planbgimg}
                    type="url"
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Plan Background Image URL"
                />
                <input
                    onChange={e => setplanname(e.target.value)}
                    value={planname}
                    type="text"
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Plan Name"
                />
                <textarea
                    onChange={e => setplandesc(e.target.value)}
                    value={plandesc}
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Plan description..."
                ></textarea>
                <textarea
                    onChange={e => setplanplants(e.target.value)}
                    value={planplants}
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Plants name -> 'use comma to seperate plants'..."
                ></textarea>
                <textarea
                    onChange={e => setplaninstructions(e.target.value)}
                    value={planinstructions}
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Planting instructions -> 'use comma to seperate instructions'..."
                ></textarea>
                <textarea
                    onChange={e => setplantips(e.target.value)}
                    value={plantips}
                    className="w-full border border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5"
                    placeholder="Planting tips -> 'use comma to seperate tips'..."
                ></textarea>
                <label className='text-sm' htmlFor="Water">Water Needs :</label>
                <select value={plansunlight} onChange={e => setplansunlight(e.target.value)} className="w-full border mt-2 border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5" id="">
                    <option className=' text-zinc-400' value="light">Light (Less than 1 inch/week)</option>
                    <option className=' text-zinc-400' value="moderate">Moderate (1 inch/week) </option>
                    <option className=' text-zinc-400' value="heavy">Heavy (More than 1 inch/week)</option>
                </select>
                <label className='text-sm' htmlFor="sunlight">Sunlight Needs :</label>
                <select value={planwater} onChange={e => setplanwater(e.target.value)} className="w-full border mt-2 border-[#a3a6be] rounded-md px-6 py-3 md:text-lg mb-5" id="">
                    <option className=' text-zinc-400' value="full">Full Sun (6-8 hours/day)</option>
                    <option className=' text-zinc-400' value="partial">Partial Sun (4-6 hours/day)</option>
                    <option className=' text-zinc-400' value="shade">Shade (Less than 4 hours/day)</option>
                </select>

                <div className="w-full text-right">
                    <button className="px-10 py-2 bg-black text-white mt-4 hover:bg-[#babcb9] hover:text-black hover:font-semibold uppercase duration-300">
                        Update Plan &nbsp; &#8594;
                    </button>
                </div>
            </form>
        </>
    )
}

export default Update
import React, { useContext, useState } from 'react'
import { plancontext } from '../Contexts/PlanContent'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncUpdate } from '../store/actions/gardenPlanAction'


const Update = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {plans} = useSelector(store=>store.gardenPlanSlice)
    // const [plans, setplans] = useContext(plancontext)

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
        // const copyplans = [...plans]
        // copyplans[index] = updatedPlan;
        // setplans(copyplans);
        // // alternate approach // setplans(plans =>plans.map(plan=>plan.id===id?updatedPlan:plan));
        // localStorage.setItem(' plans', JSON.stringify(copyplans));
        
        dispatch(asyncUpdate(updatedPlan, index))
        navigate(`/plan/${id}`)
        toast.success('Plan updated successfully');
    }

    return (
        <>
            {/* drop-shadow-[0_0px_3px_#1b5191] */}
            <NavLink to={`/plan/${id}`}>
                <i className='ri-arrow-left-line px-4 py-1.5 rounded mt-6 bg-[#6a796a] inline-block text-white border border-[#6a796a] font-bold uppercase md:mx-20 mx-10'></i>
            </NavLink>
            <form onSubmit={submitHandler} className="w-[70%] m-auto  pb-5">
                <h1 className="text-7xl mt-5 font-extrabold text-[#1b5191] mb-[5%]">
                    Update <br />Garden Plan
                </h1>
                <input
                    onChange={e => setplanimg(e.target.value)}
                    value={planimg}
                    type="url"
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan Image URL"
                />
                <input
                    onChange={e => setplanbgimg(e.target.value)}
                    value={planbgimg}
                    type="url"
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan Background Image URL"
                />
                <input
                    onChange={e => setplanname(e.target.value)}
                    value={planname}
                    type="text"
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan Name"
                />
                <textarea
                    onChange={e => setplandesc(e.target.value)}
                    value={plandesc}
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan description..."
                ></textarea>
                <textarea
                    onChange={e => setplanplants(e.target.value)}
                    value={planplants}
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plants name -> 'use comma to seperate plants'..."
                ></textarea>
                <textarea
                    onChange={e => setplaninstructions(e.target.value)}
                    value={planinstructions}
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Planting instructions -> 'use comma to seperate instructions'..."
                ></textarea>
                <textarea
                    onChange={e => setplantips(e.target.value)}
                    value={plantips}
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Planting tips -> 'use comma to seperate tips'..."
                ></textarea>
                <label className='text-sm' htmlFor="Water">Water Needs :</label>
                <select value={plansunlight} onChange={e => setplansunlight(e.target.value)} className="w-full border mt-2 border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5" id="">
                    <option className=' text-zinc-400' value="light">Light (Less than 1 inch/week)</option>
                    <option className=' text-zinc-400' value="moderate">Moderate (1 inch/week) </option>
                    <option className=' text-zinc-400' value="heavy">Heavy (More than 1 inch/week)</option>
                </select>
                <label className='text-sm' htmlFor="sunlight">Sunlight Needs :</label>
                <select value={planwater} onChange={e => setplanwater(e.target.value)} className="w-full border mt-2 border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5" id="">
                    <option className=' text-zinc-400' value="full">Full Sun (6-8 hours/day)</option>
                    <option className=' text-zinc-400' value="partial">Partial Sun (4-6 hours/day)</option>
                    <option className=' text-zinc-400' value="shade">Shade (Less than 4 hours/day)</option>
                </select>

                <div className="w-full text-right">
                    <button className="rounded-md text-xl bg-[#1b5191] text-white py-2 px-5 hover:bg-green-700 duration-200">
                        Publish Plan &nbsp; &#8594;
                    </button>
                </div>
            </form>
        </>
    )
}

export default Update
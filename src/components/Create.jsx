import React, { useContext, useState } from 'react'
import { plancontext } from '../Contexts/PlanContent'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { asyncAdd } from '../store/actions/gardenPlanAction'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [plans, setplans] = useContext(plancontext)
    const [planname, setplanname] = useState('')
    const [planimg, setplanimg] = useState('')
    const [planbgimg, setplanbgimg] = useState('')
    const [plandesc, setplandesc] = useState('')
    const [planplants, setplanplants] = useState('')
    const [planinstructions, setplaninstructions] = useState('')
    const [plantips, setplantips] = useState('')
    const [plansunlight, setplansunlight] = useState('moderate')
    const [planwater, setplanwater] = useState('partial')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        const newPlan = {
            id: nanoid(),
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
        dispatch(asyncAdd(newPlan))
        // dispatch(add(newPlan))
        // setplans([...plans,newPlan]);
        localStorage.setItem('plans', JSON.stringify([...plans, newPlan]));
        setplanname('');
        setplanimg('');
        setplanbgimg('');
        setplandesc('');
        setplanplants('');
        setplaninstructions('');
        setplantips('');
        setplansunlight('moderate');
        setplanwater('partial');
        navigate('/')

    }

    return (
        <>
            {/* drop-shadow-[0_0px_3px_#1b5191] */}
            <form onSubmit={submitHandler} className="w-[70%] m-auto  pb-5">
                <h1 className="text-7xl mt-5 font-extrabold text-[#1b5191] mb-[5%]">
                    Create New <br />Garden Plan
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

export default Create
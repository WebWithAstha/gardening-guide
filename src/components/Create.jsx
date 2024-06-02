import React from 'react'

const Create = () => {
    return (
        <>
            {/* drop-shadow-[0_0px_3px_#1b5191] */}
            <form className="w-[70%] m-auto  pb-5">
                <h1 className="text-7xl mt-5 font-extrabold text-[#1b5191] mb-[5%]">
                    Create New <br />Garden Plan
                </h1>
                <input
                    type="url"
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan Image URL"
                />
                <input
                    type="text"
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan Name"
                />
                
                <textarea
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plan description..."
                ></textarea>
                <textarea
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Plants name -> 'use comma to seperate plants'..."
                ></textarea>
                <textarea
                    className="w-full border border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5"
                    placeholder="Planting instructions -> 'use comma to seperate instructions'..."
                ></textarea>
                <label className='text-sm' htmlFor="Water">Water Needs :</label>
                <select name="dsa" className="w-full border mt-2 border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5" id="">
                    <option className=' text-zinc-400' value="light">Light (Less than 1 inch/week)</option>
                    <option className=' text-zinc-400' value="moderate">Moderate (1 inch/week) </option>
                    <option className=' text-zinc-400' value="heavy">Heavy (More than 1 inch/week)</option>
                </select>
                <label className='text-sm' htmlFor="sunlight">Sunlight Needs :</label>
                <select name="dsa" className="w-full border mt-2 border-[#1b5191] rounded-md px-6 py-3 text-lg mb-5" id="">
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
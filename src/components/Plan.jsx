import React from 'react'
import plant_png from "../assets/images/plants-deco.png"


const Plan = () => {
    return (
        <>
            <div className='w-full bg-zinc-200/[0] py-10'>
                <div className="top bg-[#66a166]/[0] gap-20 flex items-center px-10">
                    <div className="img bg-[#919591] w-max rounded-full">
                        <img className='h-full w-80' src="https://i.ibb.co/1dNdxZm/pngegg-2.png" alt="" />
                    </div>
                    <div className="about">
                        <h1 className='text-4xl mb-4 text-[#6a796a]'>Spring Garden Blossoms</h1>

                        <div className="boxes flex gap-6 items-center">
                            <div className="box w-32 h-28 flex flex-col gap-2 items-center rounded-lg px-6 bg-emerald-100 p-4">
                                <i className="ri-sun-fill text-yellow-400 text-4xl"></i>
                                <h1 className='bg-emerald-200 w-full text-center rounded-md'>Full</h1>
                            </div>
                            <div className="box w-32 h-28 flex flex-col gap-2 items-center rounded-lg px-6 bg-amber-100 p-4">
                                <i className="ri-drop-fill text-blue-400 text-3xl"></i>
                                <h1 className='bg-yellow-200 w-full text-center rounded-md'>Full</h1>
                            </div>
                            <div className="box min-w-32 h-28 flex flex-col gap-2 items-center rounded-lg px-6 bg-pink-100 p-4">
                                <i className="ri-flower-fill text-pink-600 text-3xl"></i>
                                <ul className='flex'>
                                    <li className='list-disc mx-4'>Rose</li>
                                    <li className='list-disc mx-4'>Tulip</li>
                                    <li className='list-disc mx-4'>Lavender</li>
                                    <li className='list-disc mx-4'>Sunflowers</li>
                                </ul>
                            </div>
                        </div>
                        <p className='mt-4 w-[60%] leading-tight text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ab aliquam, nisi quia minus velit omnis nam. Ad, repudiandae quasi.</p>
                    </div>

                </div>
                <div className="desc px-20 mt-20">
                    <h1 className='text-[#6a796a] text-2xl mb-4 border-b border-[#6a796a] '>Planting Instruction</h1>
                    <ul className=' list-decimal pl-4'>
                        <li>Enrich soil with compost.</li>
                        <li>Plant seeds in trays, water, and cover.</li>
                        <li>Harden off, then plant outdoors.</li>
                        <li>Apply mulch, water regularly. </li>
                        <li>Monitor, deadhead, and fertilize monthly.</li>
                    </ul>
                    <h1 className='text-[#6a796a] text-2xl mb-4 mt-8 border-b border-[#6a796a] '>Care Tips</h1>
                    <ul className=' list-decimal pl-4'>
                        <li>Enrich soil with compost.</li>
                        <li>Plant seeds in trays, water, and cover.</li>
                        <li>Harden off, then plant outdoors.</li>
                        <li>Apply mulch, water regularly. </li>
                        <li>Monitor, deadhead, and fertilize monthly.</li>
                    </ul>

                </div>

            </div>
        </>
    )
}

export default Plan
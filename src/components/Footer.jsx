import React from 'react'

const Footer = () => {
    return (
            <footer className='md:px-20 py-10 w-full border-t-4 md:rounded-t-[8rem] rounded-t-[5rem] overflow-hidden'>
                <div className="top md:flex md:flex-row flex-col md:items-end items-center justify-between w-full">
                    <div className="top-lft flex md:flex-row flex-col items-center md:items-start md:gap-20 gap-8">

                        <div className="">
                            <h1 className='font-semibold text-lg md:mb-4'>Imp Links</h1>
                            <div className="linkss">
                                <h4 className='md:text-start text-center'>Home</h4>
                                <h4 className='md:text-start text-center'>About</h4>
                                <h4 className='md:text-start text-center'>Plans</h4>
                                <h4 className='md:text-start text-center'>Contact Us</h4>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='font-semibold text-lg mb-4 md:text-start text-center'>Let Us Know</h1>
                            <div className="flex border-[1.7px] border-black w-max rounded-lg">
                                <input className='rounded-lg px-2 outline-none' type="text" placeholder='Enter Query' />
                                <button className='px-4 py-2 text-sm bg-black text-white border-l-0 rounded-r-lg uppercase font-bold'>Send</button>
                            </div>
                            <div className="flex gap-4 items-center md:justify-start justify-center mt-4">
                                <i className="ri-instagram-line border-[1.7px] border-black hover:bg-[#919591] hover:text-white hover:border-[#919591] transition-all duration-300 text-md font-black px-3 py-2 rounded-full "></i>
                                <i className="ri-facebook-line border-[1.7px] border-black hover:bg-[#919591] hover:text-white hover:border-[#919591] transition-all duration-300 text-md font-black px-3 py-2 rounded-full "></i>
                                <i className="ri-linkedin-line border-[1.7px] border-black hover:bg-[#919591] hover:text-white hover:border-[#919591] transition-all duration-300 text-md font-black px-3 py-2 rounded-full "></i>
                            </div>
                        </div>
                    </div>
                    <h1 className='text-center md:text-start md:pt-0 pt-6 text-[12vw] leading-tight '>GGenius</h1>
                </div>
                <div className="btm text-center text-xs mt-8">This is a website made by Astha Lodhi. Thanks for support.</div>

            </footer>
    )
}

export default Footer
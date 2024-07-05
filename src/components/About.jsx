import React from 'react'

const About = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-max w-full">
    <img className='w-40 object-contain mb-6 mt-20' src="https://cdn-icons-png.flaticon.com/512/14032/14032395.png" alt="" />
    <h1 className='md:text-3xl leading-snug'>Hey there, this is Astha Lodhi.</h1>
    <h1 className='md:text-3xl leading-snug'>Thanks for visiting</h1>
        <a href="https://github.com/WebWithAstha/gardening-guide">
    <div className="flex items-center justify-center mt-10 group cursor-pointer gap-1">
        <h1 className='font-semibold tracking-[4px] text-xs md:text-md'>Git repository 👉🏼 </h1>
          <img className='md:w-12 w-6 object-cover group-hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/512/9168/9168210.png" alt="" />
      </div>
        </a>
    </div>
    

    </>
  )
}

export default About
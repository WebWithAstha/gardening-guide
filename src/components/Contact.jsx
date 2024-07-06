import React from 'react'

const Contact = () => {
  return (
<div className="flex flex-col items-center justify-center h-max mt-20 w-full">
    <img className='w-40 object-contain mb-6 mt-20' src="https://cdn-icons-png.flaticon.com/512/3002/3002662.png" alt="" />
    <h1 className='md:text-3xl leading-snug'>Want to know about me?</h1>
    <div className="flex items-center justify-center mt-6 gap-6 md:gap-8">

        <a href="https://github.com/WebWithAstha">
          <img className='md:w-12 w-8 mb-8 object-cover cursor-pointer hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/astha-lodhi-266692278/">
          <img className='md:w-12 w-8 mb-8 object-cover cursor-pointer hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Contact
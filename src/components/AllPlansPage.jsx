import React from 'react'
import Plans from './Plans'

const AllPlansPage = () => {
  return (
    <div className='px-20 py-16'>
        <h1 className='text-3xl font-mediim text-center mb-4'><span className='inline-block -translate-y-[10%]'>🪴</span>All Plans So Far</h1>
        <Plans/>
    </div>
  )
}

export default AllPlansPage
import React, { createContext, useState } from 'react'

export const plancontext =  createContext(null)

const PlanContent = (props) => {
  const [plans, setplans] = useState([])
    
  return (
    <plancontext.Provider value={[plans, setplans]}>
        {props.children}
    </plancontext.Provider>
  )
}

export default PlanContent
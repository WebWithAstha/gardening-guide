import React, { createContext, useState } from 'react'
import { json } from 'react-router-dom'

export const plancontext =  createContext(null)

const PlanContent = (props) => {
  const [plans, setplans] = useState(JSON.parse(localStorage.getItem('plans'))||[])
    
  return (
    <plancontext.Provider value={[plans, setplans]}>
        {props.children}
    </plancontext.Provider>
  )
}

export default PlanContent
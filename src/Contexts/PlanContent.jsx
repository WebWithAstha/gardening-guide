import React, { createContext, useState } from 'react'

export const plancontext =  createContext(null)

const PlanContent = (props) => {
    
  return (
    <plancontext.Provider value={"hey"}>
        {props.children}
    </plancontext.Provider>
  )
}

export default PlanContent
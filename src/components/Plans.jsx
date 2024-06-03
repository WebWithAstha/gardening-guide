import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import a from "../assets/images/45-degrees.png"
import PlanCard from './PlanCard'
import { plancontext } from '../Contexts/PlanContent'


const Plans = () => {
    const [plans,setplans] = useContext(plancontext)
    return (
        <>
            <div className="plans flex justify-center px-6 gap-10 mt-10 md:px-20 md:pb-20 pb-10 flex-wrap">


                {plans.length > 0 ? plans.reverse().map(plan=>{
                    return(
                        <NavLink key={plan.id} to={`/plan/${plan.id}`}>
                            <PlanCard planid={plan.id}/>
                        </NavLink>
                    )
                }): 
                <h1 className='text-[#6a796a]'>No Plans</h1>
                }

                
            </div>
        </>
    )
}

export default Plans
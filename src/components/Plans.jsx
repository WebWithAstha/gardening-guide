import React, { useContext,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import PlanCard from './PlanCard'
import { useSelector,useDispatch } from 'react-redux'


const Plans = () => {
    const dispatch = useDispatch()
    const {plans} = useSelector(store=>store.gardenPlanSlice)
    
    return (
        <>
            <div className="plans flex justify-center px-6 gap-10 mt-10 md:px-20 md:pb-20 pb-10 flex-wrap">


                {plans.length > 0 ? plans.map(plan=>{
                    return(
                        <NavLink key={plan.id} to={`/plan/${plan.id}`}>
                            <PlanCard planid={plan.id}/>
                        </NavLink>
                    )
                }): 
               
                <div className='text-center text-[#919591] font-black text-3xl'>Loading <i className="ri-emotion-happy-line"></i></div>


                }

                
            </div>
        </>
    )
}

export default Plans
import { add, remove, update } from '../reducers/gardenPlanSlice'

export const asyncAdd = (newPlan) => (dispatch, getState) => {
    dispatch(add(newPlan));
    localStorage.setItem('plans', JSON.stringify(getState().gardenPlanSlice.plans))
}
export const asyncUpdate = (updatedPlan, index) => (dispatch, getState) => {
    const copyPlans = [...getState().gardenPlanSlice.plans]
    copyPlans[index] = updatedPlan
    dispatch(update(copyPlans));
    localStorage.setItem('plans', JSON.stringify(copyPlans))
}

export const asyncRemove = (id) => (dispatch, getState) => {
    const copyPlans = getState().gardenPlanSlice.plans.filter(plan => plan.id !== id)
    dispatch(remove(copyPlans));
    localStorage.setItem('plans', JSON.stringify(copyPlans))
}


// {
//     id:"GGXA3ITduVZc68bZBRp9b",
//         planbgimg:"https://images.unsplash.com/photo-1622123636568-00845a865434?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         plandesc:"Grow your own fresh vegetables and herbs right in your backyard.",
//         planimg:"https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         planinstructions:"Choose a sunny spot with well-draining soil.\nStart seeds indoors in early spring.\nTransplant seedlings outside after the last frost.\nWater plants deeply and regularly.\nSupport plants like tomatoes with stakes or cages.",
//         planname:"Kitchen Garden 2",
//         planplants:"Tomatoes, Basil, Lettuce, Cucumbers",
//         plansunlight:"moderate",
//         plantips:"Rotate crops each year, mulch to retain moisture and suppress weeds.",
//         planwater:"partial"
// }
import { load} from '../reducers/gardenPlanSlice'

export const asyncAdd = (newPlan) => (dispatch, getState) => {
    const copyPlans = [...getState().gardenPlanSlice.plans]
    copyPlans.push(newPlan)
    dispatch(load(copyPlans))
    localStorage.setItem('plans', JSON.stringify(copyPlans))

}
export const asyncUpdate = (updatedPlan, index) => (dispatch, getState) => {
    const copyPlans = [...getState().gardenPlanSlice.plans]
    copyPlans[index] = updatedPlan
    dispatch(load(copyPlans));
    localStorage.setItem('plans', JSON.stringify(copyPlans))
}

export const asyncRemove = (id) => (dispatch, getState) => {
    const copyPlans = getState().gardenPlanSlice.plans.filter(plan => plan.id !== id)
    dispatch(load(copyPlans));
    localStorage.setItem('plans', JSON.stringify(copyPlans))
}


import {add} from '../reducers/gardenPlanSlice'

export const asyncAdd = (newPlan)=>(dispatch,getState) => {
    dispatch(add(newPlan));
    localStorage.setItem('plans',JSON.stringify(getState().gardenPlanSlice.gardendata))

}
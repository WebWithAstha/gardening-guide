import { createSlice } from "@reduxjs/toolkit";

const gardenPlanSlice = createSlice({
    name:"gardendata",
    initialState:{
        gardendata:JSON.parse(localStorage.getItem("plans"))??[],
    },
    reducers:{
        
        add:(state,action)=>{
            state.gardendata.push(action.payload)
        },
        update:(state,action)=>{
            state.gardendata.push(action.payload)
        },
        remove:(state,action)=>{
            state.gardendata.push(action.payload)
        },
    }
})

export default gardenPlanSlice.reducer
export const {add,update,remove}= gardenPlanSlice.actions
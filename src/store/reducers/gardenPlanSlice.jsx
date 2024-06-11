import { createSlice } from "@reduxjs/toolkit";

const gardenPlanSlice = createSlice({
    name: "plans",
    initialState: {
        plans: JSON.parse(localStorage.getItem("plans")) ?? [],
    },
    reducers: {

        add: (state, action) => {
            state.plans.push(action.payload)
        },
        update: (state, action) => {
            state.plans = action.payload
            },
            remove: (state, action) => {
            state.plans = action.payload
        },
    }
})

export default gardenPlanSlice.reducer
export const { add, update, remove } = gardenPlanSlice.actions
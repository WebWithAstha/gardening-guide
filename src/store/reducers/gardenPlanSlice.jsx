import { createSlice } from "@reduxjs/toolkit";

const gardenPlanSlice = createSlice({
    name: "plans",
    initialState: {
        plans: JSON.parse(localStorage.getItem("plans")) ?? [],
    },
    reducers: {

        load: (state, action) => {
            state.plans = action.payload
        }
    }
})

export default gardenPlanSlice.reducer
export const {load } = gardenPlanSlice.actions
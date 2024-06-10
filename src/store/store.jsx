import { configureStore } from "@reduxjs/toolkit";
import gardenPlanSlice from "./reducers/gardenPlanSlice";


export const store = configureStore({
    reducer:{gardenPlanSlice}
})
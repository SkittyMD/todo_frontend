import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./tasks.slice";

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    }
})
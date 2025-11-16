import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../featurs/tasks/tasksSlice";
export const store = configureStore({
    reducer: {
        
        tasks:tasksReducer,
    },

});
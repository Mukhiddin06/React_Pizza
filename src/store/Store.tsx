import { configureStore } from "@reduxjs/toolkit";
import SavedSlice from "./SavedSlice"
export const store = configureStore({
    reducer:SavedSlice
})
export type RootState = ReturnType<typeof store.getState>;
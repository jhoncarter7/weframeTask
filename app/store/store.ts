import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./StoreSlice"

export const store = configureStore({
    reducer: storeReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
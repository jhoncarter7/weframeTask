import { createSlice } from "@reduxjs/toolkit"

interface initialIN{
    toggleMenu: boolean
  
}

const initialState: initialIN = {
    toggleMenu: false,
   
}


export const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.toggleMenu = !state.toggleMenu
        },
        closeMenu: (state) => {
            state.toggleMenu = false
        }
    }
})


export const { toggleMenu, closeMenu } = storeSlice.actions

export default storeSlice.reducer
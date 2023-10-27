import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice ({
    name:'cart',
    initialState:[],
    reducers: {
        itemAdded(state, action) {
            state.push(action.payload)
        },
        itemRemoved(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const {itemAdded, itemRemoved} = cartSlice.actions
export default cartSlice.reducer
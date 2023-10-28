import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    total: 0,
    items: []

}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        itemRemoved(state, action) {
           state.items= state.items.filter((item) => item.id !== action.payload.id)
        },
        itemIncreased(state, action) {
            let item = state.items.find((item) => item.id === action.payload)
            item.quantity++;
            return state
        },
        itemDecreased(state, action) {
            let item = state.items.find((item) => item.id === action.payload)
            item.quantity--;
            return state
        },
        calcTotal(state) {
            const total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            return { ...state, total }; 
        },
        clearAll(state) {
            state.items =[]
        }
    }
})

export const { itemAdded, itemRemoved, itemIncreased, itemDecreased, calcTotal, clearAll } = cartSlice.actions
export default cartSlice.reducer
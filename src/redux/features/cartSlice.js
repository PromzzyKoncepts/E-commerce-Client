import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    items: []

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) { //NB: state represents the current state or status or condition of the store
            const item = state.items.find((item) => item._id === action.payload._id) // here, I used the find method to get the item in the cart whose id matches the id of the action.payload
            if (!item) { // checks if the item doesn't already exist in the cart
                state.items.push({ ...action.payload, quantity: 1 }) // adds it to the cart by first copying the properties of the action.payload state and adding a new property of quantity whose value is 1 to the action.payload state
            }
        },
        itemRemoved(state, action) {
            state.items = state.items.filter((item) => item._id !== action.payload) //removes (filters out) the item whose id matches the action.payload.
            //note that when this reducer is dispatched(called), an id will be passed to it which will represent the action.payload
            /*We can also do this
            const newStateItem = state.items.filter((item) => item.id !== action.payload) 
            return {...state, items:newStateItem}  
            in the first case, we assign the results of the filtration directly to state.items but here, we assign it to a variable first before creating a copy and assigning it to the items property of the state           
             */

        },
        itemIncreased(state, action) {
            const updatedItems = state.items.map((item) => {
                if (item._id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            state.items = updatedItems;
            state.total = calculateTotal(updatedItems);
        },
        itemDecreased(state, action) {
            const updatedItems = state.items.map((item) => {
                if (item._id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            state.items = updatedItems;
            state.total = calculateTotal(updatedItems);
        },
        
        
        calcTotal(state) {
            state.total = Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(calculateTotal(state.items));
        },
        clearAll(state) {
            state.items = [];
            state.total = 0;
        },
    },
});

// Extracted function to calculate total
const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
};
    

export const { itemAdded, itemRemoved, itemIncreased, itemDecreased, calcTotal, clearAll } = cartSlice.actions
export default cartSlice.reducer
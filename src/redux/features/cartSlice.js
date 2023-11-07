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
            let item = state.items.find((item) => item._id === action.payload) // here, I used the find method to get the item in the cart whose id matches the id of the action.payload
            item.quantity++; //the quantity of that found item is increased by one
            return state  //ensures we don't change (mutate) the state. This will prevent some issues
        },
        itemDecreased(state, action) {
            let item = state.items.find((item) => item._id === action.payload) //same as for itemIcreased 
            item.quantity--; //the quantity found is decreased by one
            return state //ensures we don't change (mutate) the state. This will prevent some issues
        },
        calcTotal(state) {
            const total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            let formattedTotal = Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(total)
            return { ...state, total: formattedTotal };
            // to get the total of the products in the array, we use the reduce method. 
            // the reduce method takes two parameters, accumulator (refered to here as acc) which represents the results for each iteration and the current item in the array.
            // in the callback function, the price of each item is multiplied with the quantity and added to the accumulator (acc). At the end of the iteration, acc initially 0, will represent the total of the product of item price and item quantity
            // in the return statement, we return a copy of the state without changing it (using the spread ...) and update the total property of the initial state with our calculated total

            /* we can also do it like this:
             state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
             */
        },
        clearAll(state) {
            state.items = [] //assign the items array to an empty array anytime this reducer will be called
        }
    }
})

export const { itemAdded, itemRemoved, itemIncreased, itemDecreased, calcTotal, clearAll } = cartSlice.actions
export default cartSlice.reducer
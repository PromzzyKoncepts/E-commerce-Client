import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   total: 0

};


export const calculateTotalAsync = createAsyncThunk("cart/calculateTotalAsync", async (_, { dispatch, getState }) => {
   let total = 0;
   const cartItems = getState().cart.items;

   for (const item of cartItems) {
      total += item.price * (item.quantity || 1);
   }

   dispatch(calculateTotal(total));
});

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      add(state, action) {
         const item = state.items.find((item) => item.id === action.payload.id);
         if (item) {
            item.quantity += 1;
         } else {
            state.items.push({ ...action.payload, quantity: 1 });
         }
      },
      remove(state, action) {
         state.items = state.items.filter((item) => item.id !== action.payload.id);
      },
      updateQuantity(state, action) {
         const { id, quantity } = action.payload;
         const item = state.items.find((item) => item.id === id);
         if (item) {
            item.quantity = quantity;
         }
      },
      deleteAll(state) {
         state.items.length = 0
      },
      calculateTotal(state, action) {
         state.total = action.payload;
      },
   },
});

export const { add, remove, updateQuantity, deleteAll, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;

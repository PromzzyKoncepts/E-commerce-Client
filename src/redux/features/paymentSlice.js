import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    paymentMethod: "", 
  },
  reducers: {
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { savePaymentMethod } = paymentSlice.actions;

export default paymentSlice.reducer;

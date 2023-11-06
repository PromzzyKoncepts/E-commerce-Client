import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    id: "",
    checked: false, // Add the 'checked' field
    value: "", // Add a field to track the selected payment method
    error: "", // Add a field to track payment errors
  },
  reducers: {
    savePaymentMethod: (state, action) => {
      // Update the state directly
      state.id = action.payload.id;
      state.checked = action.payload.checked;
      state.value = action.payload.value; // Update the selected payment method
      state.error = ""; // Clear any existing errors
    },
    paymentError: (state, action) => {
      state.error = action.payload; // Set the payment error
    },
  },
});

export const { savePaymentMethod, paymentError } = paymentSlice.actions;

export default paymentSlice.reducer;

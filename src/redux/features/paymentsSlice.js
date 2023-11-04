import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentMethod: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { updatePaymentMethod } = paymentSlice.actions;

export default paymentSlice.reducer;

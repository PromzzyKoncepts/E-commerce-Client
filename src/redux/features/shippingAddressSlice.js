import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  city: '',
  state: '',
  zip: '',
  phoneNum: '',
  altPhoneNum: '',
  useAddressForPayment: false,
};

const shippingAddressSlice = createSlice({
  name: 'shippingAddress',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    toggleUseAddressForPayment: (state) => {
      state.useAddressForPayment = !state.useAddressForPayment;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { updateField, toggleUseAddressForPayment, resetForm } = shippingAddressSlice.actions;

export default shippingAddressSlice.reducer;
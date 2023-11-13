import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const order_url = 'https://aphia-dev.onrender.com/api';

const initialState = {
  status: null,
  order: {
    success: null,
    message: '',
    orderId: '',
    paymentInitiation: {
      status: '',
      message: '',
      meta: {
        authorization: {
          transfer_reference: '',
          transfer_account: '',
          transfer_bank: '',
          account_expiration: '',
          transfer_note: '',
          transfer_amount: '',
          mode: '',
        },
      },
    },
  },
};

// Created an async thunk to create an order via POST request
export const createOrder = createAsyncThunk('orders/create', async (orderData) => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.post(`${order_url}/orders/create`, orderData, {
      headers: { authorization: token },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, ( state ) => {
        state.status = 'loading';
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.order = payload;
        state.status = 'success';
      })
      .addCase(createOrder.rejected, ( state ) => {
        state.status = 'failed';
      });
  },
});

export default orderSlice.reducer;

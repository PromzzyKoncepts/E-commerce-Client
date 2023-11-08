import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const ORDER_URL = 'https://aphia-dev.onrender.com/api'

const initialState = {
  loading: false,
  order: null,
  error: null,
  success: null,
};

// Created an async thunk to create an order via POST request
export const createOrder = createAsyncThunk('orders/create', async (orderData) => {
  console.log(orderData)
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(`${ORDER_URL}/orders/create`, orderData, {headers: {authorization: token}});
      console.log(response)
      
      return response.data; 
    } catch (error) {
      throw error;
    }
  });




const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderRequestStart: (state) => {
      state.loading = true;
    },
  },

extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
        state.success = true;
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.error.message; 
      });
  },
});

export const {
  orderRequestStart,
  orderRequestSuccess,
  orderRequestFailure,
  
} = orderSlice.actions;

export default orderSlice.reducer;

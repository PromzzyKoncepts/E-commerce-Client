import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  order: null,
  error: null,
  success: null,
  orderDetails: {
    loading: false,
    order: [],
    success: false,
    error: null,
  },
  orderPay: {},
  orderDeliver: {},
  myOrders: {
    orders: [],
    loading: false,
    error: null,
  },
  allOrders: {
    orders: [],
    loading: false,
    error: null,
  },
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderRequestStart: (state) => {
      state.loading = true;
    },
    orderRequestSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
      state.success = true;
      state.error = null;
    },
    orderRequestFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    orderDetailsStart: (state) => {
      state.orderDetails.loading = true;
    },
    orderDetailsSuccess: (state, action) => {
      state.orderDetails.loading = false;
      state.orderDetails.order = action.payload;
      state.orderDetails.success = true;
      state.orderDetails.error = null;
    },
    orderDetailsFailure: (state, action) => {
      state.orderDetails.loading = false;
      state.orderDetails.success = false;
      state.orderDetails.error = action.payload;
    },
    orderPayRequestStart: (state) => {
      state.orderPay.loading = true;
    },
    orderPayRequestSuccess: (state) => {
      state.orderPay.loading = false;
      state.orderPay.success = true;
      state.orderPay.error = null;
    },
    orderPayRequestFailure: (state, action) => {
      state.orderPay.loading = false;
      state.orderPay.success = false;
      state.orderPay.error = action.payload;
    },
    orderPayReset: (state) => {
      state.orderPay = {};
    },
    orderDeliverRequestStart: (state) => {
      state.orderDeliver.loading = true;
    },
    orderDeliverRequestSuccess: (state) => {
      state.orderDeliver.loading = false;
      state.orderDeliver.success = true;
      state.orderDeliver.error = null;
    },
    orderDeliverRequestFailure: (state, action) => {
      state.orderDeliver.loading = false;
      state.orderDeliver.success = false;
      state.orderDeliver.error = action.payload;
    },
    orderDeliverReset: (state) => {
      state.orderDeliver = {};
    },
    getMyOrdersStart: (state) => {
      state.myOrders.loading = true;
    },
    getMyOrdersSuccess: (state, action) => {
      state.myOrders.loading = false;
      state.myOrders.orders = action.payload;
      state.myOrders.error = null;
    },
    getMyOrdersFailure: (state, action) => {
      state.myOrders.loading = false;
      state.myOrders.error = action.payload;
    },
    getAllOrdersStart: (state) => {
      state.allOrders.loading = true;
    },
    getAllOrdersSuccess: (state, action) => {
      state.allOrders.loading = false;
      state.allOrders.orders = action.payload;
      state.allOrders.error = null;
    },
    getAllOrdersFailure: (state, action) => {
      state.allOrders.loading = false;
      state.allOrders.error = action.payload;
    },
  },
});

export const {
  orderRequestStart,
  orderRequestSuccess,
  orderRequestFailure,
  orderDetailsStart,
  orderDetailsSuccess,
  orderDetailsFailure,
  orderPayRequestStart,
  orderPayRequestSuccess,
  orderPayRequestFailure,
  orderPayReset,
  orderDeliverRequestStart,
  orderDeliverRequestSuccess,
  orderDeliverRequestFailure,
  orderDeliverReset,
  getMyOrdersStart,
  getMyOrdersSuccess,
  getMyOrdersFailure,
  getAllOrdersStart,
  getAllOrdersSuccess,
  getAllOrdersFailure,
} = orderSlice.actions;

export default orderSlice.reducer;

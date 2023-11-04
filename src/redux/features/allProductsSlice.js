import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  product: [],
  loading: false,
  error: undefined,
  productDelete: {},
  productCreate: {},
  productUpdate: { product: {} },
  productReviewCreate: {},
  topRatedProducts: { products: [] },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductListStart: (state) => {
      state.loading = true;
    },
    fetchProductListSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.pages = action.payload.pages;
      state.page = action.payload.page;
      state.error = null;
    },
    fetchProductListFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSingleProductListStart: (state) => {
      state.loading = true;
    },
    fetchSingleProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    },
    fetchSingleProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productDeleteStart: (state) => {
      state.productDelete.loading = true;
    },
    productDeleteSuccess: (state) => {
      state.productDelete.success = true;
      state.productDelete.loading = false;
    },
    productDeleteFail: (state, action) => {
      state.productDelete.loading = false;
      state.productDelete.error = action.payload;
    },
    productCreateStart: (state) => {
      state.productCreate.loading = true;
    },
    productCreateSuccess: (state, action) => {
      state.productCreate.success = true;
      state.productCreate.loading = false;
      state.productCreate.product = action.payload;
    },
    productCreateFail: (state, action) => {
      state.productCreate.loading = false;
      state.productCreate.error = action.payload;
    },
    productCreateReset: (state) => {
      state.productCreate = {};
    },
    productUpdateStart: (state) => {
      state.productUpdate.loading = true;
    },
    productUpdateSuccess: (state, action) => {
      state.productUpdate.success = true;
      state.productUpdate.loading = false;
      state.productUpdate.product = action.payload;
    },
    productUpdateFail: (state, action) => {
      state.productUpdate.loading = false;
      state.productUpdate.error = action.payload;
    },
    productUpdateReset: (state) => {
      state.productUpdate = { product: {} };
    },
    productReviewCreateStart: (state) => {
      state.productReviewCreate.loading = true;
    },
    productReviewCreateSuccess: (state) => {
      state.productReviewCreate.success = true;
      state.productReviewCreate.loading = false;
    },
    productReviewCreateFail: (state, action) => {
      state.productReviewCreate.loading = false;
      state.productReviewCreate.error = action.payload;
    },
    productReviewCreateReset: (state) => {
      state.productReviewCreate = {};
    },
    topProductRatedStart: (state) => {
      state.topRatedProducts.loading = true;
    },
    topProductRatedSuccess: (state, action) => {
      state.topRatedProducts.success = true;
      state.topRatedProducts.loading = false;
      state.topRatedProducts.products = action.payload;
    },
    topProductRatedFail: (state, action) => {
      state.topRatedProducts.loading = false;
      state.topRatedProducts.error = action.payload;
    },
  },
});

export const {
  fetchProductListStart,
  fetchProductListSuccess,
  fetchProductListFailure,
  fetchSingleProductListStart,
  fetchSingleProductSuccess,
  fetchSingleProductFailure,
  productDeleteStart,
  productDeleteSuccess,
  productDeleteFail,
  productCreateStart,
  productCreateSuccess,
  productCreateFail,
  productCreateReset,
  productUpdateStart,
  productUpdateSuccess,
  productUpdateFail,
  productUpdateReset,
  productReviewCreateStart,
  productReviewCreateSuccess,
  productReviewCreateFail,
  productReviewCreateReset,
  topProductRatedStart,
  topProductRatedSuccess,
  topProductRatedFail,
} = productSlice.actions;

export default productSlice.reducer;

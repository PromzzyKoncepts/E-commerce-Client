import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import cartSlice from "./features/cartSlice";
import shippingAddressSlice from "./features/shippingAddressSlice";
import userSlice from "./features/userSlice";
import allOrdersSlice from "./features/orderSlice";
import allProductsSlice from "./features/allProductsSlice";
import paymentSlice from "./features/paymentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";



const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const allReducers = combineReducers({
    cart: cartSlice,
    shippingAddress: shippingAddressSlice,
    user: userSlice,
    order: allOrdersSlice,
    product: allProductsSlice,
    payment: paymentSlice,
})

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = configureStore({
    reducer:persistedReducer
    
})


export default store
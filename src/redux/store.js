import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import shippingAddressSlice from "./features/shippingAddressSlice";
import userSlice from "./features/userSlice";
import orderSlice from "./features/orderSlice";
import paymentSlice from "./features/paymentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import authSlice from "./features/authSlice";



const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const allReducers = combineReducers({
    cart: cartSlice,
    shippingAddress: shippingAddressSlice,
    user: userSlice,
    order: orderSlice,
    payment: paymentSlice,
    auth: authSlice,
})

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = configureStore({
    reducer:persistedReducer
    
})


export default store
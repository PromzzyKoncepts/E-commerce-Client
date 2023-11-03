import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import shippingAddressSlice from "./features/shippingAddressSlice";
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
})

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = configureStore({
    reducer:persistedReducer
    
})

export default store
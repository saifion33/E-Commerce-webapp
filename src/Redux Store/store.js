import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice'
import alertReducer from '../features/alertSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        alert: alertReducer,

    },
})
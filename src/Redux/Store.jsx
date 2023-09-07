import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CartSlice.jsx'
const store = configureStore({
    reducer : {
        cart : CardReducer
    }
})

export default store;
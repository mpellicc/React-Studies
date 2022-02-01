import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/Counter/counterSlice"
import productsReducer from "./features/product/productsSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/product/productsSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
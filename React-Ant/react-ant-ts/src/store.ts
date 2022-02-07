import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/product/productsSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
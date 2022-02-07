import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "./types/Cart";


const initialState: Cart = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload;
            const addedItem = state.items.find(item => item.prod.id === product.id);
            
            if (!addedItem) {
                state.items.push({...product, cartQty: 1});
            } else {
                addedItem.cartQty += 1;
            }
        }
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
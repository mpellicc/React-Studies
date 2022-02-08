import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "features/product/types/Product";
import { RootState } from "store";
import { Cart, CartItem } from "./types/Cart";


const initialState: Cart = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const addedItem = state.items.find(item => item.item.id === product.id);
            
            if (!addedItem) {
                state.items.push({ item: product, cartQty: 1 });
                getTotal();
            } else {
                addedItem.cartQty += 1;
                getTotal();
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.item.id !== id);
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const item = state.items.find(item => item.item.id === id);
            item!.cartQty += 1;
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const item = state.items.find(item => item.item.id === id);
            /* if (item!.cartQty === 1) {
                removeFromCart(item!.item.id!);
            } */
            item!.cartQty -= 1;
        },
        getTotal: (state) => {
            const partialTotals = state.items.map(item => item.item.price! * item.cartQty);
            state.total = partialTotals.reduce((sum, t) => sum + t, 0);
        }
    }
});

export const selectCart = (state: RootState) => state.cart;
// export const selectTotal = (state: RootState) => state.cart.items.map((item: CartItem) => (item.item.price! * item.cartQty)).reduce((sum: number, p: number) => sum += p, 0);

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
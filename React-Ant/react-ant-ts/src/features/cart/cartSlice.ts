import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Cart } from "./types/Cart";


const initialState: Cart = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
});

export default cartSlice.reducer;
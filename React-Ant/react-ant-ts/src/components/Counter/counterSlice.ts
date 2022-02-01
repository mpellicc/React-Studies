import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        }
    }
});

export const selectCount = (state: any) => state.counter.value;

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
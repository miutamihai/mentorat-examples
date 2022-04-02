import { createSlice } from "@reduxjs/toolkit";

const set = (_, action) => action.payload 

const reset = () => false

export const successSlice = createSlice({
    initialState: false,
    name: 'success',
    reducers: {
        set,
        reset,
    }
})
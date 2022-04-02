import { createSlice } from "@reduxjs/toolkit";

const set = (_, action) => action.payload 

const reset = () => false

export const submittedSlice = createSlice({
    initialState: false,
    name: 'submitted',
    reducers: {
        set,
        reset,
    }
})
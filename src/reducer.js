import { combineReducers } from "@reduxjs/toolkit" 
import { successSlice } from "./success-slice"
import { submittedSlice } from "./submitted-slice"

export const reducer = combineReducers({
    success: successSlice.reducer,
    submitted: submittedSlice.reducer,
})
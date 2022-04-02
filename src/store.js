import { configureStore } from "@reduxjs/toolkit"
import { reducer } from './reducer'

let instance

export const store = () => {
    if(!instance) {
        instance = configureStore({
            reducer
        })
    }

    return instance
}
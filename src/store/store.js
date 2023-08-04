import { configureStore } from "@reduxjs/toolkit";
import {appBarSlice} from "./slices/appBarSlice"

export const store = configureStore({
    reducer: {
        appbar : appBarSlice.reducer,
    }
})
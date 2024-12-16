/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {configureStore}from "@reduxjs/toolkit"

import api from "../services/api"

import cartReducer from "./reducers/cart"

export const store=configureStore({
    reducer:{
      cartReducer,
      [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
})
export type RootReducer=ReturnType<typeof store.getState>
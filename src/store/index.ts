import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactSlice";
export const store = configureStore({
    reducer:{
        contatos: contactReducer,
                      
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
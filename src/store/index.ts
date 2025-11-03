import { configureStore } from "@reduxjs/toolkit";
import deletarReducer from "./reducers/deleteContact";
import setaContatosReducer from "./reducers/setaContatos";
export const store = configureStore({
    reducer:{
        deletar: deletarReducer,
        setContacts: setaContatosReducer
                      
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
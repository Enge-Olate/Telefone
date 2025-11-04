import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../../interfaces/Contact";
interface Contatos{
    itens: Contact[]
}

const initialState : Contatos = {itens: []}
console.log('sou o initialState',initialState)
const deleteSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers:{
        deletar:(state, action: PayloadAction<string>) =>{
            state.itens = state.itens.filter((contato)=> contato.id !== action.payload)
        },
        setaContatos:(state, action: PayloadAction<Contact[]>)=>{
            state.itens = action.payload;
        },
        addContacts: (state, action: PayloadAction<Contact>)=>{
            state.itens.push(action.payload)
        }
    }
})

export const {deletar, setaContatos, addContacts} = deleteSlice.actions
export default deleteSlice.reducer
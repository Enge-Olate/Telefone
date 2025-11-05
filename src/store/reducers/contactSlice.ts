import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../../interfaces/Contact";
interface Contatos{
    itens: Contact[]
}

const initialState : Contatos = {itens: [
  {
    "id": "1",
    "name": "Ana Silva",
    "phone": "(11) 99999-1234",
    "email": "ana.silva@email.com"
  },
  {
    "id": "2",
    "name": "Carlos Souza",
    "phone": "(21) 98888-5678",
    "email": "carlos.souza@email.com"
  },
  {
    "id": "3",
    "name": "Fernanda Lima",
    "phone": "(31) 97777-9012",
    "email": "sjjsl.lima@email.com"
  },
  {
    "id": "4",
    "name": "Fabiula Cortez",
    "phone": "(31) 97777-9053",
    "email": "jsjs.lima@email.com"
  },
  {
    "id": "5",
    "name": "Fabio Peru",
    "phone": "(31) 97777-3456",
    "email": "gfa.lima@email.com"
  },
  {
    "id": "6",
    "name": "Fernando Lima",
    "phone": "(31) 97777-1934",
    "email": "fer.lima@email.com"
  }

]
}
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
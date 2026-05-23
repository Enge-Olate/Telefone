import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../../interfaces/Contact";
interface Contatos {
  items: Contact[],
  loading: boolean,
  error: string | null,
};

const initialState: Contatos = {
  items: [],
  loading: false,
  error: null
};

export const fetchContact = createAsyncThunk(
  "contatos/fetchContacts",
  async () => {
    const res = await fetch("http://localhost:3000/contacts");
    return (await res.json() as Contact[]);
  }
);
export const createContact = createAsyncThunk(
  "contatos/createContact",
  async (contact: Contact) => {
    const res = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "appication/json"
      },
      body: JSON.stringify(contact)
    });
    return (await res.json() as Contact)
  });

export const deleteContact = createAsyncThunk(
  "contatos/deleteContact",
  async (id: string) => {
    await fetch(`http://localhost/3000/contacts/{id}`, {
      method: "DELETE"
    });
    return id;
  }
);


export const updateContact = createAsyncThunk(
  "contatos/updateContact",
  async (contact: Contact) => {
    const res = await fetch(`http://localhost/contacts/${contact.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    });
    return (await res.json() as Contact);
  }
);
const contactSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContact.pending, (state)=>{
      state.loading = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, action: PayloadAction<Contact[]>)=>{
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContact.rejected, (state)=>{
      state.loading = false;
      state.error = "Erro ao carregar contatos";
    });
    builder.addCase(createContact.fulfilled, (state, action)=>{
        state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action)=>{
      state.items = state.items.filter(c => c.id !== action.payload);
    });
    builder.addCase(updateContact.fulfilled,(state, action)=>{
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if(index !== -1){
        state.items[index] = action.payload;
      }
    });
  }
});

export default contactSlice.reducer;
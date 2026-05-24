import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Contact } from "../../interfaces/Contact";
import { api } from "../../sercives/api";

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

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async () => {
    return await api.getContacts();
  }
);
export const createContact = createAsyncThunk(
  "contacts/create",
  async (contact: Contact) => {

    return await api.createContact(contact);
  });

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id: string) => {
    await api.deleteContact(id);
    return id;
  });


export const updateContact = createAsyncThunk(
  "contacts/update",
  async (contact: Contact) => {

    return await api.updateContact(contact);
  });

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.loading = false;
      state.error = "Erro ao carregar contatos";
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter(c => c.id !== action.payload);
    });
    builder.addCase(updateContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
  }
});

export default contactSlice.reducer;
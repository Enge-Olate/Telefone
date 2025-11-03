import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Contact } from '../../interfaces/Contact';

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const setContactsSlice = createSlice({
  name: 'setContacts',
  initialState,
  reducers: {
    setContacts: (state, action: PayloadAction<Contact[]>) => {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = setContactsSlice.actions;
export default setContactsSlice.reducer;
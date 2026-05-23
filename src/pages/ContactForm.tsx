import { useNavigate } from "react-router-dom";
import type { Contact } from "../interfaces/Contact";
import { Header } from "../components/header/Header";
import FormContacts from "../components/forms/FormContacts";
import { useDispatch } from "react-redux";
import { createContact } from "../store/reducers/contactSlice";
import type{ AppDispatch } from "../store";

export function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (contact: Contact) => {
    dispatch(createContact(contact));
    navigate("/");
  };

  return (
    <>
      <Header/>
      <FormContacts onAdd={handleAdd} />
    </>
  );
}

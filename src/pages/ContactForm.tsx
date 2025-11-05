import { useNavigate } from "react-router-dom";
import type { Contact } from "../interfaces/Contact";
import { Header } from "../components/header/Header";
import FormContacts from "../components/forms/FormContacts";
import { useDispatch } from "react-redux";
import { addContacts } from "../store/reducers/contactSlice";

export function ContactForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdd = (contact: Contact) => {
    dispatch(addContacts(contact));
    navigate("/");
  };

  return (
    <>
      <Header/>
      <FormContacts onAdd={handleAdd} />
    </>
  );
}

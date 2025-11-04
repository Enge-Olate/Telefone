import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactsList from "../components/contactsList/ContactsList";
import { Header } from "../components/header/Header";
import mockContacts from "../assets/contacts.json";
import ActionSection from "../components/actions/ActionsSections";
import type { RootState } from "../store";
import { setaContatos } from "../store/reducers/contactSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { itens } = useSelector((state: RootState) => state.contatos);
  useEffect(() => {
    dispatch(setaContatos(mockContacts));
  }, [dispatch]);
  return (
    <>
      <Header />
      <ActionSection />
      <ContactsList contacts={itens} />
    </>
  );
}

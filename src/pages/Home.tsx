import { useSelector } from "react-redux";
import ContactsList from "../components/contactsList/ContactsList";
import { Header } from "../components/header/Header";
import ActionSection from "../components/actions/ActionsSections";
import type { RootState } from "../store";

export default function Home() {
  const { items } = useSelector((state: RootState) => state.contatos);
  
  return (
    <>
      <Header />
      <ActionSection />
      <ContactsList contacts={items} />
    </>
  );
}

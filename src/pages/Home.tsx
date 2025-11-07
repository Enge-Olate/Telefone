import { useSelector } from "react-redux";
import ContactsList from "../components/contactsList/ContactsList";
import { Header } from "../components/header/Header";
import ActionSection from "../components/actions/ActionsSections";
import type { RootState } from "../store";
import { useState } from "react";

export default function Home() {
  const { items } = useSelector((state: RootState) => state.contatos);
  const [termBusca, setTermBusca] = useState<string>("");
  const [mostraBusca, setMostraBusca] = useState<boolean>(false);

  const filtraContato = items.filter((c) =>
    `${c.name} ${c.phone} ${c.email}`.toLowerCase().includes(termBusca.toLowerCase())
  );
  
  const handleSearchItem = () => {
    setMostraBusca((c) => !c);
  };

  return (
    <>
      <Header />
      <ActionSection onSearchClick={handleSearchItem} />
      {mostraBusca && (
        <>
          <input 
          style={{padding: '8px', color: '#666', fontFamily: 'Roboto Flex', fontWeight: 700}}
          type="text"
          placeholder="Pesquise aqui"
          value={termBusca}
          onChange={e=> setTermBusca(e.target.value)}
           />
        </>
      )}
      <ContactsList contacts={filtraContato} />
    </>
  );
}

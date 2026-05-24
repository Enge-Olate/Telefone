import { useDispatch, useSelector } from "react-redux";
import ContactsList from "../components/contactsList/ContactsList";
import { Header } from "../components/header/Header";
import ActionSection from "../components/actions/ActionsSections";
import { type AppDispatch, type RootState } from "../store";
import { useEffect, useState } from "react";
import { fetchContacts } from "../store/reducers/contactSlice";

export default function Home() {
  const { items, loading } = useSelector((state: RootState) => state.contatos);
  const [termBusca, setTermBusca] = useState<string>("");
  const [mostraBusca, setMostraBusca] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const filtraContato = items.filter((c) =>
    `${c.name} ${c.phone} ${c.email}`.toLowerCase().includes(termBusca.toLowerCase())
  );
  
  const handleSearchItem = () => {
    setMostraBusca((c) => !c);
  };
  useEffect(()=>{
    if(items.length === 0){
      dispatch(fetchContacts());
    }
  },[]);

  if(loading) return <p>Caregando...</p>

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

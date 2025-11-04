import { useEffect, useState } from "react";
import type { Contact } from "../../interfaces/Contact";
import { useDispatch } from "react-redux";
import {
  Avatar,
  GrupoContatos,
  InfoContainer,
  Letra,
  SectionList,
  UlContatos,
} from "./styles";
import { MdDelete } from "react-icons/md";
import { deletar } from "../../store/reducers/contactSlice";
interface Props {
  contacts: Contact[];
}


interface GruposDeContatos {
  letra: string;
  contacts: Contact[];
}
export default function ContactsList({ contacts }: Props) {
  const [grupo, setGrupo] = useState<GruposDeContatos[]>([]);
  const dispatch = useDispatch();
  const deletaContato = (id: string)=>{
      dispatch(deletar(id))
  }
  useEffect(() => {
    if (contacts && contacts.length > 0) {
      const mapGrupos = new Map<string, Contact[]>();
      contacts.forEach((contato) => {
        const primeiraLetra = contato.name.charAt(0).toLocaleUpperCase();
        if (!mapGrupos.has(primeiraLetra)) {
          mapGrupos.set(primeiraLetra, []);
        }
        mapGrupos.get(primeiraLetra)?.push(contato);
      });
      console.log("sou o mapgrupo", mapGrupos);
      const grupoOrdenado: GruposDeContatos[] = Array.from(mapGrupos.entries())
        .map(([letra, contatosPorGrupo]) => ({
          letra,
          contacts: contatosPorGrupo.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }))
        .sort((a, b) => a.letra.localeCompare(b.letra));
      console.log("já eu sou...", grupoOrdenado);
      setGrupo(grupoOrdenado);
    } else {
      setGrupo([]);
    }
  }, [contacts]);

  return (
    <main>
      <SectionList>

        {grupo.map((grupo) => (
          <GrupoContatos key={grupo.letra}>
            <Letra>{grupo.letra}</Letra>
            <UlContatos>
              {grupo.contacts.map((contato) => (
                <li key={contato.id}>
                  <InfoContainer>
                    <Avatar>{grupo.letra}</Avatar>
                    <span>{contato.name}</span>
                    <span>{contato.phone}</span>
                    <span>{contato.email}</span>
                    <MdDelete onClick={()=> deletaContato(contato.id)} color="#2F5883" cursor={'pointer'} title="Remover contato"/>
                  </InfoContainer>
                </li>
              ))}
            </UlContatos>
          </GrupoContatos>
        ))}
      </SectionList>
    </main>
  );
}

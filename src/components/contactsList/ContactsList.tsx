import { useDispatch } from "react-redux";
import React, { useMemo, useState } from "react";
import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import {
  Avatar,
  GrupoContatos,
  InfoContainer,
  Letra,
  SectionList,
  UlContatos,
} from "./styles";
import type { Contact } from "../../interfaces/Contact";
import type{ AppDispatch } from "../../store";
import { deleteContact, updateContact } from "../../store/reducers/contactSlice";
interface Props {
  contacts: Contact[];
}

interface GruposDeContatos {
  letra: string;
  contacts: Contact[];
}
export default function ContactsList({ contacts }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editandoContato, setEditandoContato] = useState<Contact | null>(null);

  const handleEditClick = (contact: Contact) => {
    if(!contact.id){
      console.warn("Contato sem ID");
      return;
    }
    setEditMode(contact.id as string);
    setEditandoContato({...contact});
  };

  // const handleSaveClick = (id: string) => {
  //   if (editandoContato) {
  //     dispatch(updateContact(editandoContato));
  //     setEditMode(null);
  //     setEditandoContato(null);
  //   }
  //   return id;
  // };

  const handleSaveClick = async()=>{
    try {
      if(editandoContato){
        await dispatch(updateContact(editandoContato)).unwrap();
        setEditMode(null);
        setEditandoContato(null);
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível atualizar o contato");
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editandoContato) {
      setEditandoContato({
        ...editandoContato,
        [e.target.name]: e.target.value,
      });
    }
  };

  // const deletaContato = (id: string, name: string) => {
  //   if (window.confirm(`Tem certeza que deseja remover ${name}`)) {
  //     dispatch(deleteContact(id));
  //   }
  // };

  const deletaContato = async(id: string, name: string)=>{
    if(window.confirm(`Remover ${name}`)){
      try {
        await dispatch(deleteContact(id)).unwrap();
      } catch (error) {
        console.error(error);
        alert("Erro ao deletar o contato!");
      }
    }
  };

  const grupo = useMemo(() => {
    if (!contacts) {
      return [];
    }
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
        contacts: contatosPorGrupo.sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sort((a, b) => a.letra.localeCompare(b.letra));
    console.log("já eu sou...", grupoOrdenado);
    return grupoOrdenado;
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
                    {editMode === contato.id ? (
                      <>
                        <input
                          name="name"
                          value={editandoContato?.name || ""}
                          onChange={handleChange}
                        />
                        <input
                          name="phone"
                          value={editandoContato?.phone || ""}
                          onChange={handleChange}
                        />
                        <input
                          name="email"
                          value={editandoContato?.email || ""}
                          onChange={handleChange}
                        />
                        <MdSave
                          size={20}
                          color="#2F5883"
                          cursor={"pointer"}
                          title="Salvar edição"
                          onClick={() => handleSaveClick()}
                        />
                      </>
                    ) : (
                      <>
                        <span>{contato.name}</span>
                        <span>{contato.phone}</span>
                        <span>{contato.email}</span>
                        <MdEdit
                          size={20}
                          color="#2F5883"
                          cursor={"pointer"}
                          title="Editar contato"
                          onClick={() => handleEditClick(contato)}
                        />
                        <MdDelete
                          onClick={() =>
                            deletaContato(contato.id as string, contato.name)
                          }
                          size={20}
                          color="#2F5883"
                          cursor={"pointer"}
                          title="Remover contato"
                        />
                      </>
                    )}
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

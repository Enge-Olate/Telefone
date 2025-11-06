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
import { deletar, editar } from "../../store/reducers/contactSlice";
import type { Contact } from "../../interfaces/Contact";
interface Props {
  contacts: Contact[];
}

interface GruposDeContatos {
  letra: string;
  contacts: Contact[];
}
export default function ContactsList({ contacts }: Props) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState<string | null>(null);
  const [editandoContato, setEditandoContato] = useState<Contact | null>(null);

  const handleEditClick = (contact: Contact) => {
    setEditMode(contact.id);
    setEditandoContato(contact);
  };

  const handleSaveClick = (id: string) => {
    if (editandoContato) {
      dispatch(editar(editandoContato));
      setEditMode(null);
      setEditandoContato(null);
    }
    return id;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editandoContato) {
      setEditandoContato({
        ...editandoContato,
        [e.target.name]: e.target.value,
      });
    }
  };

  const deletaContato = (id: string, name: string) => {
    if (window.confirm(`Tem certeza que deseja remover ${name}`)) {
      dispatch(deletar(id));
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
                          onClick={() => handleSaveClick(contato.id)}
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
                            deletaContato(contato.id, contato.name)
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

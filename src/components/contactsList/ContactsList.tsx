import { useDispatch } from "react-redux";
import React, { useMemo, useState } from "react";
import { MdDelete, MdEdit, MdSave, MdCancel } from "react-icons/md";
import {
  Avatar,
  GrupoContatos,
  InfoContainer,
  Letra,
  SectionList,
  UlContatos,
} from "./styles";
import type { Contact } from "../../interfaces/Contact";
import type { AppDispatch } from "../../store";
import {
  deleteContact,
  updateContact,
} from "../../store/reducers/contactSlice";
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
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toogledExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleEditClick = (contact: Contact) => {
    if (!contact.id) {
      console.warn("Contato sem ID");
      return;
    }
    setEditMode(contact.id as string);
    setEditandoContato({ ...contact });
  };

  const handleSaveClick = async () => {
    try {
      if (editandoContato) {
        await dispatch(updateContact(editandoContato)).unwrap();
        setEditMode(null);
        setEditandoContato(null);
      }
    } catch (error) {
      console.error(error);
      alert("Não foi possível atualizar o contato");
    }
  };

  const handleCancelEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditandoContato(null);
    setEditMode(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editandoContato) {
      setEditandoContato({
        ...editandoContato,
        [e.target.name]: e.target.value,
      });
    }
  };

  const deletaContato = async (id: string, name: string) => {
    if (window.confirm(`Remover ${name}`)) {
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
    const grupoOrdenado: GruposDeContatos[] = Array.from(mapGrupos.entries())
      .map(([letra, contatosPorGrupo]) => ({
        letra,
        contacts: contatosPorGrupo.sort((a, b) => a.name.localeCompare(b.name)),
      }))
      .sort((a, b) => a.letra.localeCompare(b.letra));
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
                  <InfoContainer
                    onClick={() => toogledExpand(contato.id as string)}
                    className={expandedId === contato.id ? "expanded" : ""}
                  >
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
                        <div className="actions" onClick={(e)=> e.stopPropagation()}>
                          <MdSave
                            size={20}
                            color="#2F5883"
                            cursor={"pointer"}
                            title="Salvar edição"
                            onClick={() => handleSaveClick()}
                          />
                          <MdCancel
                            size={20}
                            color="#2F5883"
                            cursor={"pointer"}
                            title="Cancelar edição"
                            onClick={(e) => handleCancelEdit(e)}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="name">{contato.name}</span>
                        <div className="extra">
                          <span className="phone">{contato.phone}</span>
                          <span className="email">{contato.email}</span>
                          <div
                            className="actions"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MdEdit
                              size={20}
                              color="#2F5883"
                              cursor={"pointer"}
                              title="Editar contato"
                              onClick={() => handleEditClick(contato)}
                            />
                            <MdDelete
                              onClick={() =>
                                deletaContato(
                                  contato.id as string,
                                  contato.name,
                                )
                              }
                              size={20}
                              color="#2F5883"
                              cursor={"pointer"}
                              title="Remover contato"
                            />
                          </div>
                        </div>
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

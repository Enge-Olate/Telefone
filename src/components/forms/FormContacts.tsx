import { useState } from "react";
import type { Contact } from "../../interfaces/Contact";
import Form, { ButtonCancel, ButtonGroup, ButtonSubmit } from "./styles";
import { useNavigate } from "react-router-dom";

interface Props {
  onAdd: (contact: Contact) => void;
}

export default function FormContacts({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const cancelar = ()=>{
    return navigate('/');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: crypto.randomUUID(),
      name,
      phone,
      email,
    };
    onAdd(newContact);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <ButtonGroup>
        <ButtonSubmit type="submit">Adicionar</ButtonSubmit>
        <ButtonCancel onClick={() => cancelar()} type="button">Cancelar</ButtonCancel>
      </ButtonGroup>
    </Form>
  );
}

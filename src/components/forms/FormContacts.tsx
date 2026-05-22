import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import type { Contact } from "../../interfaces/Contact";
import { ButtonCancel, ButtonGroup, ButtonSubmit,Form } from "./styles";

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
        onChange={(e)=> setName(e.target.value)}
        required
      />
      <IMaskInput
        mask="(00) 00000-0000"
        placeholder="Telefone"
        value={phone}
        onAccept={(value)=> setPhone(value)}
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        required
      />
      <ButtonGroup>
        <ButtonSubmit type="submit">Adicionar</ButtonSubmit>
        <ButtonCancel onClick={() => cancelar()} type="button">Cancelar</ButtonCancel>
      </ButtonGroup>
    </Form>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMaskInput } from "react-imask";
import type { Contact } from "../../interfaces/Contact";
import { ButtonCancel, ButtonGroup, ButtonSubmit, Form } from "./styles";

interface Props {
  onAdd: (contact: Contact) => Promise<void>;
}

export default function FormContacts({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return alert("Nome obrigatório");
    if (!phone.trim()) return alert("Telefone obrigatório");
    if (!email.includes("@")) return alert("Email inválido");

    try {
      setLoading(true);

      await onAdd({
        name,
        phone,
        email
      });

      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar contato");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <IMaskInput
        mask="(00) 00000-0000"
        placeholder="Telefone"
        value={phone}
        onAccept={(value) => setPhone(value)}
      />

      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <ButtonGroup>
        <ButtonSubmit type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Adicionar"}
        </ButtonSubmit>

        <ButtonCancel type="button" onClick={() => navigate("/")}>
          Cancelar
        </ButtonCancel>
      </ButtonGroup>
    </Form>
  );
}
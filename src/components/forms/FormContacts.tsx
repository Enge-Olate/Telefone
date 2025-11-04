import { useState } from 'react';
import type{ Contact } from '../../interfaces/Contact';
import Form from './styles';


interface Props {
  onAdd: (contact: Contact) => void;
}

export default function FormContacts({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: crypto.randomUUID(),
      name,
      phone,
      email,
    };
    onAdd(newContact);
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type='text' placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
      <input type='tel' placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} required />
      <input type='email' placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">Adicionar</button>
    </Form>
  );
}

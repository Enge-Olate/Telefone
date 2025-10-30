import type { Contact } from "../../interfaces/Contact";
// O mockContacts não é necessário aqui, pois os dados vêm via props
import {
  Avatar,
  SectionList,
  LetterGroup,
  LetterHeader,
  ContactListUL,
  ContactItemLI,
  ContactInfoContainer
} from "./styles";
import { useEffect, useState } from "react";

// Define um tipo para um grupo de contatos sob uma letra específica
interface ContactGroup {
  letter: string;
  contacts: Contact[];
}

interface Props {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: Props) {
  // Estado para armazenar os contatos agrupados pela primeira letra do nome
  const [groupedContacts, setGroupedContacts] = useState<ContactGroup[]>([]);

  useEffect(() => {
    // Este efeito será executado sempre que a prop 'contacts' mudar
    if (contacts && contacts.length > 0) {
      // Cria um mapa para armazenar temporariamente os contatos pela primeira letra
      const groupsMap = new Map<string, Contact[]>();

      contacts.forEach(contact => {
        const firstLetter = contact.name.charAt(0).toUpperCase();
        if (!groupsMap.has(firstLetter)) {
          groupsMap.set(firstLetter, []);
        }
        groupsMap.get(firstLetter)?.push(contact);
      });

      // Converte o mapa para um array de objetos ContactGroup
      // Ordena os grupos por letra alfabeticamente e os contatos dentro de cada grupo
      const sortedGroups: ContactGroup[] = Array.from(groupsMap.entries())
        .map(([letter, contactsInGroup]) => ({
          letter,
          contacts: contactsInGroup.sort((a, b) => a.name.localeCompare(b.name)) // Ordena contatos dentro de cada grupo
        }))
        .sort((a, b) => a.letter.localeCompare(b.letter)); // Ordena os grupos por letra

      setGroupedContacts(sortedGroups);
    } else {
      setGroupedContacts([]); // Limpa se não houver contatos
    }
  }, [contacts]); // Array de dependências: re-executa o efeito se a prop 'contacts' mudar

  return (
    <main>
      <SectionList>
        {groupedContacts.map((group) => (
          <LetterGroup key={group.letter}>
            <LetterHeader>{group.letter}</LetterHeader>
            <ContactListUL>
              {group.contacts.map((contact) => {
                const firstLetter = contact.name.charAt(0).toUpperCase(); // Extrai a primeira letra para o Avatar
                return (
                  <ContactItemLI key={contact.id}>
                    <ContactInfoContainer>
                      <Avatar>{firstLetter}</Avatar>
                      <p>{contact.name}</p>
                      <p>{contact.phone}</p>
                      <p>{contact.email}</p>
                    </ContactInfoContainer>
                  </ContactItemLI>
                );
              })}
            </ContactListUL>
          </LetterGroup>
        ))}
      </SectionList>
    </main>
  );
}

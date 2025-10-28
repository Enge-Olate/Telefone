import type { Contact } from "../../interfaces/Contact";
import { Avatar, ContainerList, SectionList } from "./styles";
interface Props {
  contacts: Contact[];
}
export default function ContactsList({ contacts }: Props) {
  return (
    <main>
      <ContainerList>
        <SectionList>
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <h2>A</h2>
                <div>
                  <Avatar>A</Avatar>
                  <p>{contact.name}</p>
                  <p>{contact.phone}</p>
                  <p>{contact.email}</p>

                </div>
              </li>
            ))}
          </ul>
        </SectionList>
      </ContainerList>
    </main>
  );
}

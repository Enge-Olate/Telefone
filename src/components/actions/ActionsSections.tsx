import { IconButton, Section } from "./styles";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function ActionSection() {
  return (
    <Section>
      <IconButton title="Adicionar contato">
        <FaPlus/>
      </IconButton>
      <IconButton title="Pesquisar contato">
        <FaSearch/>
      </IconButton>
    </Section>
  );
}

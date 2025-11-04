import { useNavigate } from "react-router-dom";
import { IconButton, Section } from "./styles";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function ActionSection() {

  const navigate = useNavigate();
  return (
    <Section>
      <IconButton onClick={()=> navigate('/add')} title="Adicionar contato">
        <FaPlus/>
      </IconButton>
      <IconButton title="Pesquisar contato">
        <FaSearch/>
      </IconButton>
    </Section>
  );
}

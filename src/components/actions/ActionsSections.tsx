import { useNavigate } from "react-router-dom";
import { IconButton, Section } from "./styles";
import { FaPlus, FaSearch } from "react-icons/fa";

interface Props{
  onSearchClick: ()=> void;
}

export default function ActionSection({onSearchClick}:Props) {

  const navigate = useNavigate();
  return (
    <Section>
      <IconButton onClick={()=> navigate('/add')} title="Adicionar contato">
        <FaPlus/>
      </IconButton>
      <IconButton onClick={onSearchClick} title="Pesquisar contato">
        <FaSearch/>
      </IconButton>
    </Section>
  );
}

import { Route, Routes } from "react-router-dom";
import RootGlobalStyle, * as s from "./globalStyles";
import Home from "./pages/Home";
import { ContactForm } from "./pages/ContactForm";
function App() {
  return (
    <>
      <RootGlobalStyle />
      <s.Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<ContactForm />}/>
        </Routes>
      </s.Container>
    </>
  );
}

export default App;

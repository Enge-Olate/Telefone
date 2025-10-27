import { Route, Routes } from "react-router-dom";
import RootGlobalStyle, * as s from "./index";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <RootGlobalStyle />
      <s.Container>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </s.Container>
    </>
  );
}

export default App;

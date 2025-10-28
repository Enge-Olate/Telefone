import { Route, Routes } from "react-router-dom";
import RootGlobalStyle, * as s from "./index";
import Home from "./pages/Home";
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

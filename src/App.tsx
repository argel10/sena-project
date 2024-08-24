import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Vistas/Login";
import Registrarse from "./Vistas/Registrarse";
import Inicio from "./Vistas/Inicio";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

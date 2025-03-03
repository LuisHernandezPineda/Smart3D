import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Proyectos from "./pages/Proyectos";
import Talleres from "./pages/Talleres";
import FamiliaSmart from "./pages/FamiliaSmart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/familia-smart" element={<FamiliaSmart />} />
      </Routes>
    </Router>
  );
};

export default App;

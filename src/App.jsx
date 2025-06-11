import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Proyectos from "./pages/Proyectos";
import Talleres from "./pages/Talleres";
import FamiliaSmart from "./pages/FamiliaSmart";
import RoboKidsPage from './pages/RoboKids';
import RoboJuniorsPage from './pages/RoboJuniors';
import Login from "./pages/Login";
import Campus from "./pages/Campus";
import Inscripciones from "./pages/Inscripciones";
import AdminTaller from "./pages/AdminTaller";
import Docentes from "./pages/Docentes";
import Sedes from "./pages/Sedes";
import SedeDetalle from "./pages/SedeDetalle";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function AppWrapper() {
  const location = useLocation();

  // Lista de rutas administrativas donde se ocultan Navbar y Footer
  const adminPaths = [
    "/campus",
    "/inscripciones",
    "/docentes",
    "/reportes",
    "/ajustes",
    "/admintaller",
    "/sedes",
    "/proyecto"
  ];

  // Verifica si la ruta actual es una ruta admin
  const shouldHideLayout = adminPaths.some(path =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <div className="app-container">
      {!shouldHideLayout && <Navbar />}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/login" element={<Login />} />
          <Route path="/robokids" element={<RoboKidsPage />} />
          <Route path="/robojuniors" element={<RoboJuniorsPage />} />
          <Route path="/familia-smart" element={<FamiliaSmart />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/inscripciones" element={<Inscripciones />} />
          <Route path="/admintaller" element={<AdminTaller />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/sedes/:nombre" element={<SedeDetalle />} />
          <Route path="/proyecto/:nombre" element={<ProyectoDetalle />} />
       
        </Routes>
      </div>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;

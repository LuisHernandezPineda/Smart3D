import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Proyectos from "./pages/Proyectos";
import Talleres from "./pages/Talleres";
import FamiliaSmart from "./pages/FamiliaSmart";
import Footer from "./components/Footer";
import RoboKids from "./components/taller";
import RoboKidsPage from './pages/RoboKids';
import RoboJuniorsPage from './pages/RoboJuniors';
import Login from "./pages/Login";





function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
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
            <Route path="/inscripcion" element={<Inscripcion />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

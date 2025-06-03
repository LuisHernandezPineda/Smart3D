import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/img/logo.jpg" alt="Smart 3D Logo" className="logo" />
        <span className="logo-text">SMART 3D</span>
      </div>

      <div className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/talleres">Talleres</Link></li>
          
        </ul>
        <Link to="/familia-smart" className="btn-familia">Familia Smart</Link>
      </div>
    </nav>
  );
};

export default Navbar;

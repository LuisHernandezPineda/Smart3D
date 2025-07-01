import React from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader"; // Componente modular reutilizable
import "./Campus.css";


const Campus = () => {
  const navigate = useNavigate();
  

  const secciones = [
    { nombre: "Inscripciones", ruta: "/inscripciones", imagen: "/img/pexels-photo-6373417.jpg" },
    { nombre: "Talleres", ruta: "/AdminTaller", imagen: "/img/pexels-photo-8566464.jpg" },
    { nombre: "Docentes", ruta: "/docentes", imagen: "/img/pexels-photo-3184328.jpg" },
    { nombre: "Sedes", ruta: "/sedes", imagen: "/img/momento4.jpeg" },
    { nombre: "Reportes", ruta: "/reportes", imagen: "/img/pexels-photo-6930426.jpg" },
    { nombre: "Ajustes", ruta: "/ajustes", imagen: "/img/pexels-photo-13989043.jpg" },
  ];

  return (
    <div className="campus-container">
      <AdminHeader />

      <div className="campus-grid">
        {secciones.map((sec, index) => (
          <div key={index} className="campus-card" onClick={() => navigate(sec.ruta)}>
            <img src={sec.imagen} alt={sec.nombre} />
            <div className="card-info">
              <div className="card-icon-wrapper">
                <img src="/img/logo.jpg" alt="icono" className="card-icon" />
              </div>
              <span>{sec.nombre}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campus;

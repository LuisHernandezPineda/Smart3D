import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importar useNavigate
import "./Sedes.css";
import AdminHeader from "../components/AdminHeader";

const Sedes = () => {
  const navigate = useNavigate(); // ✅ Inicializar hook
  const [sedes, setSedes] = useState([
    "Faisanes",
    "Arabiscos",
    "Sanchez Pinillo",
    "Bertello",
    "Villasol"
  ]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevaSede, setNuevaSede] = useState({
    nombre: "",
    direccion: "",
    distrito: "",
    estado: "Activo"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaSede({ ...nuevaSede, [name]: value });
  };

  const handleAgregarSede = () => {
    if (nuevaSede.nombre.trim() && nuevaSede.direccion.trim()) {
      setSedes([...sedes, nuevaSede.nombre]);
      setNuevaSede({ nombre: "", direccion: "", distrito: "", estado: "Activo" });
      setMostrarModal(false);
    } else {
      alert("Por favor completa los campos obligatorios.");
    }
  };

  return (
    <div className="sedes-container">
      <AdminHeader />
      <h2 className="titulo">Sedes</h2>
      <div className="sedes-lista">
        <div className="sedes-header">
          <h3>Lista de sedes</h3>
          <button className="btn-agregar" onClick={() => setMostrarModal(true)}>Agregar</button>
        </div>
        <ul className="sedes-items">
          {sedes.map((sede, index) => (
            <li key={index} className="sede-item">
              <span>{sede}</span>
              {/* ✅ Redirigir al hacer clic en "Ver" */}
              <button className="btn-ver" onClick={() => navigate(`/sedes/${sede}`)}>Ver</button>
            </li>
          ))}
        </ul>
      </div>

      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Agregar Nueva Sede</h3>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre de la sede"
              value={nuevaSede.nombre}
              onChange={handleChange}
            />
            <input
              type="text"
              name="direccion"
              placeholder="Dirección"
              value={nuevaSede.direccion}
              onChange={handleChange}
            />
            <input
              type="text"
              name="distrito"
              placeholder="Distrito"
              value={nuevaSede.distrito}
              onChange={handleChange}
            />
            <select
              name="estado"
              value={nuevaSede.estado}
              onChange={handleChange}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
            <div className="modal-buttons">
              <button className="btn-cancelar" onClick={() => setMostrarModal(false)}>Cancelar</button>
              <button className="btn-guardar" onClick={handleAgregarSede}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sedes;

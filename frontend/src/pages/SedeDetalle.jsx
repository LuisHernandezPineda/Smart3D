import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ IMPORTADO
import "./SedeDetalle.css";
import AdminHeader from "../components/AdminHeader";

const SedeDetalle = () => {
  const { nombre } = useParams();
  const navigate = useNavigate(); // ✅ HOOK DE NAVEGACIÓN

  const [proyectos, setProyectos] = useState([
    { nombre: "Otto Araña" },
    { nombre: "Otto Bailarín" }
  ]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    taller: "",
    docente: "",
    horario: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };

  const handleAgregar = () => {
    if (nuevoProyecto.taller && nuevoProyecto.docente && nuevoProyecto.horario) {
      setProyectos([...proyectos, { nombre: nuevoProyecto.taller }]);
      setNuevoProyecto({ taller: "", docente: "", horario: "" });
      setMostrarModal(false);
    } else {
      alert("Completa todos los campos.");
    }
  };

  return (
    <div className="sede-detalle-container">
      <AdminHeader />
      <h2 className="titulo">Sedes</h2>
      <div className="contenido">
        <div className="header-detalle">
          <h3>{nombre}</h3>
          <button className="btn-agregar" onClick={() => setMostrarModal(true)}>
            Nuevo Proyecto
          </button>
        </div>
        <ul className="proyectos-lista">
          {proyectos.map((proy, idx) => (
            <li key={idx} className="proyecto-item">
              <span>{proy.nombre}</span>
              {/* ✅ Redirección al hacer clic */}
              <button className="btn-ver" onClick={() => navigate(`/detalle-proyecto/${proy.nombre}`)}>
                Ver
              </button>
            </li>
          ))}
        </ul>
      </div>

      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="cerrar-modal" onClick={() => setMostrarModal(false)}>×</button>
            <h3>Nuevo Proyecto</h3>

            <label>Taller</label>
            <select name="taller" value={nuevoProyecto.taller} onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="Otto Araña">Otto Araña</option>
              <option value="Otto Bailarín">Otto Bailarín</option>
            </select>

            <label>Docente</label>
            <select name="docente" value={nuevoProyecto.docente} onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="Carlos Pérez">Carlos Pérez</option>
              <option value="Lucía Díaz">Lucía Díaz</option>
            </select>

            <label>Horario</label>
            <input
              type="text"
              name="horario"
              placeholder="Ej: Lun y Mie 4-6pm"
              value={nuevoProyecto.horario}
              onChange={handleChange}
            />

            <button className="btn-guardar" onClick={handleAgregar}>Agregar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SedeDetalle;

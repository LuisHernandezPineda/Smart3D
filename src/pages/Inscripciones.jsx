import React, { useState } from "react";
import "./Inscripciones.css";
import AdminHeader from "../components/AdminHeader";

const Inscripciones = () => {
  const [tallerActivo, setTallerActivo] = useState("kids");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    dni: "",
    grado: "",
    telefono: "",
    pago: "Pendiente",
  });

  const [registros, setRegistros] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegistrar = () => {
    if (!formData.nombre || !formData.apellido || !formData.dni) return;

    setRegistros([
      ...registros,
      {
        ...formData,
        taller: tallerActivo === "kids" ? "Kids" : "Juniors",
      },
    ]);

    setFormData({
      nombre: "",
      apellido: "",
      fecha: "",
      dni: "",
      grado: "",
      telefono: "",
      pago: "Pendiente",
    });
  };

  return (
    <div className="inscripciones-container">
      <AdminHeader />

      {/* Fondo decorativo como banner */}
      <div className="inscripciones-banner-blur">
  <div className="inscripciones-banner-content">
    <h2 className="titulo-inscripciones">Inscripciones</h2>
  </div>
</div>

      <div className="botones-taller">
        <button
          className={tallerActivo === "kids" ? "activo" : ""}
          onClick={() => setTallerActivo("kids")}
        >
          Robo Kids
        </button>
        <button
          className={tallerActivo === "juniors" ? "activo" : ""}
          onClick={() => setTallerActivo("juniors")}
        >
          Robo Juniors
        </button>
      </div>

      {/* Formulario de ingreso */}
      <div className="filtros">
        <input name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellidos" />
        <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombres" />
        <input name="fecha" value={formData.fecha} onChange={handleChange} type="date" />
        <input name="dni" value={formData.dni} onChange={handleChange} placeholder="DNI" />
        <input name="grado" value={formData.grado} onChange={handleChange} placeholder="Grado" />
        <input name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" />
        <select name="pago" value={formData.pago} onChange={handleChange}>
          <option>Pendiente</option>
          <option>Habilitado</option>
        </select>
        <button className="btn-registrar" onClick={handleRegistrar}>Registrar</button>
      </div>

      <table className="tabla-inscripciones">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>DNI</th>
            <th>Grado</th>
            <th>Teléfono</th>
            <th>Taller</th>
            <th>Pago</th>
          </tr>
        </thead>
        <tbody>
         {registros
  .filter((reg) => reg.taller.toLowerCase() === tallerActivo)
  .map((reg, i) => (
    <tr key={i}>
      <td>{reg.fecha}</td>
      <td>{reg.apellido}</td>
      <td>{reg.nombre}</td>
      <td>{reg.dni}</td>
      <td>{reg.grado}</td>
      <td>{reg.telefono}</td>
      <td>{reg.taller}</td>
      <td>{reg.pago}</td>
    </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default Inscripciones;

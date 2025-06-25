import React, { useState } from "react";
import "./AdminTaller.css";
import AdminHeader from "../components/AdminHeader";

const AdminTaller = () => {
  const [talleres, setTalleres] = useState([
    { nombre: "Robo Kids", informacion: "Taller para niños pequeños." },
    { nombre: "Robo Junior", informacion: "Taller para niños mayores." },
    { nombre: "Impresion 3D", informacion: "Modelado y creación 3D." }
  ]);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [nuevoTaller, setNuevoTaller] = useState({ nombre: "", informacion: "" });
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  const handleAgregarTaller = () => {
    if (!nuevoTaller.nombre || !nuevoTaller.informacion) return;
    setTalleres([...talleres, nuevoTaller]);
    setNuevoTaller({ nombre: "", informacion: "" });
    setMostrarModal(false);
  };

  const handleEliminar = (nombre) => {
    setTalleres(talleres.filter(t => t.nombre !== nombre));
    setTallerSeleccionado(null);
  };

  const handleEditar = () => {
    if (!nuevoTaller.nombre || !nuevoTaller.informacion) return;
    setTalleres(talleres.map(t =>
      t.nombre === tallerSeleccionado.nombre ? { ...nuevoTaller } : t
    ));
    setMostrarEditar(false);
    setTallerSeleccionado(null);
  };

  const abrirEditar = (taller) => {
    setNuevoTaller(taller);
    setMostrarEditar(true);
  };

  return (
    <>
      <AdminHeader />

      <div className="admin-taller-banner">
        <img src="/img/pexels-photo-7985825.jpg" alt="Banner" className="banner-blur-img" />
        <div className="admin-taller-banner-content">
          <h2 className="titulo-admin-taller">Talleres</h2>
        </div>
      </div>

      <div className="admin-taller-container">
        <div className="lista-talleres">
          <div className="lista-talleres-header">
            <h3>Lista de talleres</h3>
            <button className="btn-agregar" onClick={() => setMostrarModal(true)}>Agregar</button>
          </div>

          {talleres.map((taller, i) => (
            <div key={i}>
              <div className="taller-item">
                <span>{taller.nombre}</span>
                <button className="btn-ver" onClick={() => setTallerSeleccionado(taller)}>Ver</button>
              </div>
              {tallerSeleccionado?.nombre === taller.nombre && (
                <div className="tarjeta-taller">
                  <h4>{taller.nombre}</h4>
                  <p><strong>Información:</strong> {taller.informacion}</p>
                  <div className="tarjeta-botones">
                    <button className="btn-editar" onClick={() => abrirEditar(taller)}>Editar</button>
                    <button className="btn-eliminar" onClick={() => handleEliminar(taller.nombre)}>Eliminar</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <button className="btn-cerrar" onClick={() => setMostrarModal(false)}>\u00d7</button>
            <h2>Agregar Taller</h2>
            <label>Nombre</label>
            <input
              type="text"
              value={nuevoTaller.nombre}
              onChange={(e) => setNuevoTaller({ ...nuevoTaller, nombre: e.target.value })}
            />
            <label>Información</label>
            <textarea
              rows="4"
              value={nuevoTaller.informacion}
              onChange={(e) => setNuevoTaller({ ...nuevoTaller, informacion: e.target.value })}
            />
            <div className="modal-botones">
              <button className="btn-cancelar-modal" onClick={() => setMostrarModal(false)}>Cancelar</button>
              <button className="btn-agregar-modal" onClick={handleAgregarTaller}>Agregar</button>
            </div>
          </div>
        </div>
      )}

      {mostrarEditar && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <button className="btn-cerrar" onClick={() => setMostrarEditar(false)}>\u00d7</button>
            <h2>Editar taller</h2>
            <label>Nombre</label>
            <input
              type="text"
              value={nuevoTaller.nombre}
              onChange={(e) => setNuevoTaller({ ...nuevoTaller, nombre: e.target.value })}
            />
            <label>Información</label>
            <textarea
              rows="4"
              value={nuevoTaller.informacion}
              onChange={(e) => setNuevoTaller({ ...nuevoTaller, informacion: e.target.value })}
            />
            <div className="modal-botones">
              <button className="btn-agregar-modal" onClick={handleEditar}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTaller;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProyectoDetalle.css";
import AdminHeader from "../components/AdminHeader";

const ProyectoDetalle = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const datosProyecto = {
    docente: "Hernandez Pineda Luis",
    horario: "Miércoles : 3:15 pm a 4:30 pm"
  };

  const [asistencia, setAsistencia] = useState([
    {
      dni: "78207346",
      nombre: "Adriano",
      apellido: "Otiniano Tello",
      grado: 5,
      semanas: { 1: "Asistencia" }
    },
    {
      dni: "79329819",
      nombre: "Yomel",
      apellido: "Bobadilla Rodriguez",
      grado: 3,
      semanas: { 1: "Falta" }
    },
    {
      dni: "79076031",
      nombre: "Carlos",
      apellido: "Arzahuncche Rodriguez",
      grado: 3,
      semanas: { 1: "Falta" }
    },
    {
      dni: "79087113",
      nombre: "Matias",
      apellido: "Vasquez Bejarano",
      grado: 3,
      semanas: { 1: "Asistencia" }
    }
  ]);

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre: nombre,
    docente: datosProyecto.docente,
    horario: datosProyecto.horario
  });

  const toggleAsistencia = (index, semana) => {
    const nuevaLista = [...asistencia];
    const estadoActual = nuevaLista[index].semanas[semana];
    nuevaLista[index].semanas[semana] =
      estadoActual === "Asistencia" ? "Falta" : "Asistencia";
    setAsistencia(nuevaLista);
  };

  const handleModificar = () => {
    setMostrarEditar(false);
  };

  const guardarCambios = () => {
    alert("Cambios guardados correctamente");
    navigate(-1);
  };

  return (
    <div className="proyecto-detalle">
      <AdminHeader />
      <div className="contenido-proyecto">
        <h2>{formulario.nombre}</h2>
        <div className="info-proyecto">
          <p><strong>Docente:</strong> {formulario.docente}</p>
          <p><strong>Horario:</strong> {formulario.horario}</p>
          <div className="botones-proyecto">
            <button className="btn-eliminar" onClick={() => setMostrarConfirmacion(true)}>Eliminar</button>
            <button className="btn-modificar" onClick={() => setMostrarEditar(true)}>Modificar</button>
          </div>
        </div>

        <h3>Asistencia</h3>
        <table className="tabla-asistencia">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grado</th>
              <th>Semana 1</th>
            </tr>
          </thead>
          <tbody>
            {asistencia.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.dni}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.grado}</td>
                <td
                  className="editable"
                  onClick={() => toggleAsistencia(index, 1)}
                  style={{
                    color: alumno.semanas[1] === "Falta" ? "red" : "green"
                  }}
                >
                  {alumno.semanas[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn-guardar-principal" onClick={guardarCambios}>
          Guardar Cambios
        </button>
      </div>

      {mostrarConfirmacion && (
        <div className="modal">
          <div className="modal-content">
            <h3>¿Eliminar proyecto?</h3>
            <p>Esto eliminará el proyecto <strong>{formulario.nombre}</strong>.</p>
            <div className="modal-buttons">
              <button className="btn-cancelar" onClick={() => setMostrarConfirmacion(false)}>Cancelar</button>
              <button className="btn-eliminar" onClick={() => navigate("/sedes")}>Confirmar</button>
            </div>
          </div>
        </div>
      )}

      {mostrarEditar && (
        <div className="modal">
          <div className="modal-content">
            <h3>Modificar Proyecto</h3>

            <label>Nombre del proyecto:</label>
            <input
              type="text"
              value={formulario.nombre}
              onChange={e => setFormulario({ ...formulario, nombre: e.target.value })}
            />

            <label>Docente:</label>
            <input
              type="text"
              value={formulario.docente}
              onChange={e => setFormulario({ ...formulario, docente: e.target.value })}
            />

            <label>Horario:</label>
            <input
              type="text"
              value={formulario.horario}
              onChange={e => setFormulario({ ...formulario, horario: e.target.value })}
            />

            <div className="modal-buttons">
              <button className="btn-cancelar" onClick={() => setMostrarEditar(false)}>Cancelar</button>
              <button className="btn-guardar" onClick={handleModificar}>Guardar Cambios</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectoDetalle;

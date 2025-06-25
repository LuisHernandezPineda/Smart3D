import React, { useState, useEffect } from "react";
import "./Inscripciones.css";
import AdminHeader from "../components/AdminHeader";
import axios from "axios";

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

  const handleRegistrar = async () => {
    if (!formData.nombre || !formData.apellido || !formData.dni) return;

    const endpoint =
      tallerActivo === "kids"
        ? "http://localhost:3001/api/inscripciones/robokids"
        : "http://localhost:3001/api/inscripciones/robojuniors";

    // Validar y convertir la fecha antes de enviar
    const fechaValida = formData.fecha
      ? new Date(formData.fecha).toISOString()
      : null;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombres: formData.nombre,
          apellidos: formData.apellido,
          dni: formData.dni,
          fecha: fechaValida,
          grado: formData.grado,
          telefono: formData.telefono,
          pago: formData.pago,
        }),
      });

      const nuevoRegistro = await response.json();

      const fechaFormateada = nuevoRegistro.fecha
        ? new Date(nuevoRegistro.fecha).toLocaleDateString("es-PE")
        : "";

      setRegistros([
        ...registros,
        {
          ...nuevoRegistro,
          fecha: fechaFormateada,
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
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  const cargarRegistros = async () => {
    try {
      const endpoint =
        tallerActivo === "kids"
          ? "http://localhost:3001/api/inscripciones/robokids"
          : "http://localhost:3001/api/inscripciones/robojuniors";

      const response = await axios.get(endpoint);
      const registrosConTaller = response.data.map((reg) => ({
        ...reg,
        fecha: reg.fecha
          ? new Date(reg.fecha).toLocaleDateString("es-PE")
          : "",
        taller: tallerActivo === "kids" ? "Kids" : "Juniors",
      }));
      setRegistros(registrosConTaller);
    } catch (error) {
      console.error("Error al cargar registros:", error);
    }
  };

  useEffect(() => {
    cargarRegistros();
  }, [tallerActivo]);

  return (
    <div className="inscripciones-container">
      <AdminHeader />

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

      <div className="filtros">
        <input
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellidos"
        />
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombres"
        />
        <input
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          type="date"
        />
        <input
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          placeholder="DNI"
        />
        <input
          name="grado"
          value={formData.grado}
          onChange={handleChange}
          placeholder="Grado"
        />
        <input
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Teléfono"
        />
        <select name="pago" value={formData.pago} onChange={handleChange}>
          <option value="Pendiente">Pendiente</option>
          <option value="Pagado">Pagado</option>
        </select>
        <button className="btn-registrar" onClick={handleRegistrar}>
          Registrar
        </button>
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
          {registros.map((reg, i) => (
            <tr key={i}>
              <td>{reg.fecha}</td>
              <td>{reg.apellidos}</td>
              <td>{reg.nombres}</td>
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

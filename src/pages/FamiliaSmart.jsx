import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Inscripcion.css";

const FamiliaSmart = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const gradoInicial = query.get("grado");

  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    grado: gradoInicial || "",
    genero: "",
    dni: "",
    correo: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", form);
    alert("¡Formulario enviado con éxito!");
    // Aquí podrías enviar los datos a una API o guardar en Firebase
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Formulario de inscripción de Alumno</h2>

        <input
          name="nombres"
          placeholder="Nombres"
          value={form.nombres}
          onChange={handleChange}
          required
        />

        <input
          name="apellidos"
          placeholder="Apellidos"
          value={form.apellidos}
          onChange={handleChange}
          required
        />

        <select name="grado" value={form.grado} onChange={handleChange} required>
          <option value="">Selecciona grado</option>
          <option value="Robo Kids">Robo Kids</option>
          <option value="Robo Juniors">Robo Juniors</option>
        </select>

        <div className="genero">
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              checked={form.genero === "Masculino"}
              onChange={handleChange}
              required
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Femenino"
              checked={form.genero === "Femenino"}
              onChange={handleChange}
            />
            Femenino
          </label>
        </div>

        <input
          name="dni"
          placeholder="DNI"
          value={form.dni}
          onChange={handleChange}
          required
          pattern="\d{8}"
          maxLength={8}
          title="El DNI debe tener exactamente 8 números"
        />


        <input
          type="email"
          name="correo"
          placeholder="Correo del Tutor"
          value={form.correo}
          onChange={handleChange}
          required
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
          pattern="\d{9}"
          maxLength={9}
          title="El teléfono debe tener exactamente 9 números"
        />


        <button type="submit">Inscribir</button>
      </form>
    </div>
  );
};

export default FamiliaSmart;

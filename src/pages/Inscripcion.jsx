import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Inscripcion.css';

const Inscripcion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const taller = location.state?.taller || 'No especificado'; // Recibe el taller desde el botón

  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    grado: '',
    genero: '',
    dni: '',
    correoTutor: '',
    telefono: '',
    taller: taller, // Taller preseleccionado
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('¡Inscripción exitosa!');
    navigate('/'); // Redirige a la página principal después de inscribirse
  };

  return (
    <div className="inscripcion-container">
      <div className="inscripcion-formulario">
        <h2>Formulario de inscripción de Alumno</h2>
        <form onSubmit={handleSubmit} className="inscripcion-form">
          <label>Nombres:</label>
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} required />

          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />

          <div className="form-group">
            <div>
              <label>Grado:</label>
              <select name="grado" value={formData.grado} onChange={handleChange} required>
                <option value="">Seleccionar...</option>
                <option value="1ro">1ro</option>
                <option value="2do">2do</option>
                <option value="3ro">3ro</option>
                <option value="4to">4to</option>
                <option value="5to">5to</option>
              </select>
            </div>
            <div>
              <label>Taller:</label>
              <input type="text" name="taller" value={formData.taller} readOnly />
            </div>
          </div>

          <label>Género:</label>
          <div className="genero-group">
            <input type="radio" name="genero" value="Masculino" onChange={handleChange} required /> Masculino
            <input type="radio" name="genero" value="Femenino" onChange={handleChange} required /> Femenino
          </div>

          <label>DNI:</label>
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />

          <label>Correo del Tutor:</label>
          <input type="email" name="correoTutor" value={formData.correoTutor} onChange={handleChange} required />

          <label>Teléfono:</label>
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />

          <button type="submit" className="btn-submit">Inscribir</button>
        </form>
      </div>
      <div className="inscripcion-imagen">
        <img src="/img/logo.jpg" alt="Logo" />
      </div>
    </div>
  );
};

export default Inscripcion;

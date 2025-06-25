import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Talleres.css';

const Talleres = () => {
  const navigate = useNavigate();

  return (
    <div className="talleres-container">
      {/* Banner */}
      <div className="talleres-banner">
        <div className="talleres-overlay"></div>
        <h1 className="talleres-title">Talleres</h1>
      </div>

      {/* Robo Kids */}
      <div className="talleres-info-wrapper">
        <div className="talleres-info-container">
          <img
            src="/img/momento2.jpeg"
            alt="Niña con robot"
            className="talleres-image"
          />
          <div className="talleres-info">
            <h2>Robo Kids</h2>
            <p>
              Un taller para niños de 1ro a 2do de primaria, donde crean proyectos como Otto Bailarín y Otto Car, aprendiendo robótica de forma divertida y práctica. 🚀🤖
            </p>
            <div className="talleres-buttons">
              <button className="btn-info" onClick={() => navigate('/robokids')}>Más información</button>
              <button className="btn-register" onClick={() => navigate('/familia-smart?grado=Robo Kids')}>Inscribirse</button>
            </div>
          </div>
        </div>
      </div>

      {/* Robo Juniors */}
      <div className="talleres-info-wrapper">
        <div className="talleres-info-container robo-juniors">
          <img
            src="/img/taller2.jpg"
            alt="Niño con robot"
            className="talleres-image"
          />
          <div className="talleres-info">
            <h2>Robo Juniors</h2>
            <p>
              Dirigido a niños de 3ro a 7mo grado, este taller les permite crear proyectos como Otto Ninja y Otto Araña, aprendiendo robótica y tecnología de forma creativa y emocionante. 🚀🤖
            </p>
            <div className="talleres-buttons">
              <button className="btn-info" onClick={() => navigate('/robojuniors')}>Más información</button>
              <button className="btn-register" onClick={() => navigate('/familia-smart?grado=Robo Juniors')}>Inscribirse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talleres;

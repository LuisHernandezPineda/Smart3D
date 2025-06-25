import React, { useState, useEffect } from "react";
import "./Testimonios.css";

const testimoniosData = [
  {
    texto: "Los talleres de Smart 3D son geniales. Mis hijos están encantados y han aprendido muchísimo sobre programación mientras se divierten. ¡Una excelente manera de acercarlos al futuro!",
    autor: "Laura Torres",
    imagenes: ["/img/testimonio1.jpg", "/img/testimonio2.jpeg"],
  },
  {
    texto: "Increíble experiencia educativa. Mi hijo ha desarrollado habilidades en robótica y 3D, y ahora quiere seguir aprendiendo más. ¡Recomendado!",
    autor: "Carlos Mendoza",
    imagenes: ["/img/testimonio3.jpeg", "/img/testimonio4.jpeg"],
  },
  {
    texto: "Smart 3D ha cambiado la manera en que mis hijos ven la tecnología. Aprenden jugando y creando. ¡No puedo estar más feliz con los resultados!",
    autor: "Ana Rodríguez",
    imagenes: ["/img/testimonio5.jpeg", "/img/testimonio6.jpeg"],
  },
];

const Testimonios = () => {
  const [index, setIndex] = useState(0);

  // Cambiar automáticamente cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimoniosData.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  // Función para cambiar testimonio manualmente al hacer clic en los indicadores
  const handleIndicatorClick = (i) => {
    setIndex(i);
  };

  return (
    <section className="testimonios-section">
      <h2 className="titulo">Tu Experiencia, Nuestra Motivación</h2>
      <div className="testimonio-container">
        <div className="imagenes-testimonios">
          {testimoniosData[index].imagenes.map((img, i) => (
            <img key={i} src={img} alt={`Testimonio ${i + 1}`} />
          ))}
        </div>
        <p className="texto-testimonio">"{testimoniosData[index].texto}"</p>
        <h4 className="autor-testimonio">{testimoniosData[index].autor}</h4>

        {/* Indicadores de progreso con evento de clic */}
        <div className="indicadores">
          {testimoniosData.map((_, i) => (
            <div
              key={i}
              className={`indicador ${i === index ? "activo" : ""}`}
              onClick={() => handleIndicatorClick(i)} // Cambia al testimonio correspondiente
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;

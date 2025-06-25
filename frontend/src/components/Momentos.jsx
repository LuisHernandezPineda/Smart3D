import React, { useEffect, useRef } from "react";
import "./Momentos.css";

const Momentos = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // Función para hacer que el scroll se mueva automáticamente
    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1; // Ajusta la velocidad
      }
    };

    // Ejecutar el scroll cada 20ms para un desplazamiento suave
    const scrollInterval = setInterval(autoScroll, 20);

    return () => clearInterval(scrollInterval); // Limpia el intervalo cuando se desmonta
  }, []);

  return (
    <section className="momentos-section">
      <h2>Momentos Smart 3D</h2>
      <div className="scroll-stack" ref={scrollRef}>
        {[...Array(10)].map((_, index) => (
          <div className="momento-item" key={index}>
            <figure>
              <img src={`/img/momento${index + 1}.jpeg`} alt={`Momento ${index + 1}`} />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Momentos;

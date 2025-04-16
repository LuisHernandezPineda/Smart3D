import Carousel from "../components/Carousel";
import Momentos from "../components/Momentos";
import Testimonios from "../components/Testimonios";

import "./Inicio.css";

const Inicio = () => {
  return (
    
    <div className="inicio-container">
      {/* Carrusel */}
      <Carousel />

      {/* Sección de Información */}
      <section className="info-section">
        <div className="info-image">
          <img src="/img/imagen1.jpg" alt="Taller educativo" />
        </div>
        <div className="info-content">
          <h2>¡Imagina, Crea y Aprende con Smart 3D!</h2>
          <p>
            En Smart 3D impulsamos la educación y la tecnología con talleres de diseño e impresión 3D, robótica y programación. Nuestro enfoque práctico y creativo prepara a nuestros usuarios para los desafíos de un mundo tecnológico en constante evolución. ¡Descubre, crea y transforma con nosotros!
          </p>
          <div className="buttons">
            <button className="btn-info">Más información</button>
            <button className="btn-inscribirse">Inscribirse</button>
          </div>
        </div>
      </section>
      {/* Sección de Momentos */}
      <Momentos />
      {/* Sección de Testimonios */}
      <Testimonios />
    </div>
  );
};

export default Inicio;

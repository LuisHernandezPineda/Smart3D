import "./Proyectos.css";

const Proyectos = () => {
  return (
    <>
      <section 
        className="proyectos-container" 
        style={{ backgroundImage: "url('/img/momento9.jpeg')" }}
      >
        <h2 className="proyectos-titulo">Creaciones con Pasión y Diversión</h2>
      </section>
      
      <section className="seccion-proyectos">
        <div className="proyectos-content">
          <div className="proyectos-video">
            <video controls>
              <source src="public/img/FDownloader.Net_AQPmMfN6WR3OKuHCdhXlv__P2zer6RJ79VCLb6zSzERYGhinbMnQxK9COxHkFE8fK_zdUQZACbnQyAVTJm3vyc8k_720p_(HD).mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          </div>
          <div className="proyectos-texto">
            <p>
              En Smart 3D, nuestros proyectos son el resultado de la combinación perfecta entre creatividad, tecnología y aprendizaje práctico.
              Desde impresionantes diseños en 3D hasta soluciones innovadoras en robótica y programación, cada creación está hecha con dedicación y un
              enfoque educativo que fomenta el desarrollo de habilidades técnicas y creativas.
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Proyectos;
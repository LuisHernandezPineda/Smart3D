import "./Nosotros.css";

const Nosotros = () => {
  return (
    <main className="nosotros">
      {/* Encabezado */}
      <div className="heading">
        <h1>¡Smart 3D: Educación y Tecnología Divertida!</h1>
        <aside>
          <p>
            Somos una empresa dedicada a enseñar habilidades tecnológicas como diseño 3D, impresión, robótica y
            programación de manera práctica y creativa.
          </p>
          <p>
            Nuestro objetivo es inspirar el pensamiento innovador mientras aprendemos y nos divertimos.
            ¡Prepárate para explorar un mundo lleno de posibilidades tecnológicas con Smart 3D! 🚀
          </p>
        </aside>
      </div>

      {/* Contenedor de imágenes */}
      <div className="container">
        <div className="card">
          <div className="imgBox">
            <img src="/img/momento1.jpeg" alt="Niño con proyecto de robótica" />
          </div>
          <div className="tag">#SMART3D</div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src="/img/momento7.jpeg" alt="Grupo de niños con impresora 3D" />
          </div>
          <div className="tag">#SMART3D</div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src="/img/momento3.jpeg" alt="Niña con robot educativo" />
          </div>
          <div className="tag">#SMART3D</div>
        </div>
      </div>

      <section className="impulsa-section">
      <div className="impulsa-section__image">
        <img src="\img\7746760.JPG" alt="Robot 1" />
      </div>
      <div className="impulsa-section__content">
        <h2>¿Qué nos impulsa?</h2>
        <p>
          Nuestra misión es inspirar y educar a través de la tecnología,
          promoviendo el desarrollo de habilidades prácticas y creativas 
          en diseño 3D, robótica y programación. Queremos empoderar a las 
          personas para que enfrenten los desafíos del futuro con innovación, 
          confianza y adaptabilidad.
        </p>
      </div>
    </section>



    {/* Sección 2: ¿Hacia dónde vamos? */}
    <section className="impulsa-section">
        
        <div className="impulsa-section__content">
          <h2>¿Hacia dónde vamos?</h2>
          <p>
            Nuestra visión es ser un referente en educación tecnológica, 
            liderando el desarrollo de habilidades innovadoras y prácticas 
            que impulsen el crecimiento personal y profesional en un mundo 
            cada vez más digital. Aspiramos a transformar ideas en realidades, 
            inspirando creatividad y adaptabilidad en cada paso.
          </p>
        </div>
        <div className="impulsa-section__image">
          <img src="\img\427pIkbEsT5Ij.png" alt="Robot 2" />
        </div>
      </section>
    </main>
  );
};

export default Nosotros;


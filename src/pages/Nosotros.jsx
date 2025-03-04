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
    </main>
  );
};

export default Nosotros;

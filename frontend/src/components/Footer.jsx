import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Primera sección: Logo */}
                <div className="footer-section">
                    <img src="/img/logo.jpg" alt="Smart 3D Logo" className="footer-logo" />
                </div>

                {/* Segunda sección: Redes Sociales */}
                <div className="footer-section social-section">
                    <p>
                        <img src="/img/logo-de-facebook.png" alt="Facebook" className="social-icon white-bg" />
                        <span>Smart 3D</span>
                    </p>
                    <p>
                        <img src="/img/instagram.png" alt="Instagram" className="social-icon white-bg" />
                        <span>smart3d_pe</span>
                    </p>
                    <p>
                        <img src="/img/mensaje-de-telefono.png" alt="WhatsApp" className="social-icon white-bg" />
                        <span>948 278 840</span>
                    </p>
                </div>

                {/* Tercera sección: Botón de inscripción */}
                <div className="footer-section">
                    <button className="inscription-button">
                        Inscribirme a un taller
                    </button>
                </div>

                {/* Cuarta sección: Imagen del Robot */}
                <div className="footer-section">
                    <img src="/img/robot.png" alt="Robot" className="robot-image" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import './taller.css'; 

const RoboKids = ({ title, description, images }) => {
    return (
        <div className="robokids-container">
            {/* Información del taller */}
            <div className="robokids-info">
                <h1>{title}</h1>
                <p>{description}</p>
                <button className="btn-register">Inscribirse</button>
            </div>

            {/* Galería de imágenes */}
            <div className="robokids-gallery">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Imagen ${index + 1}`} className="robokids-image" />
                ))}
            </div>
        </div>
    );
};

export default RoboKids;

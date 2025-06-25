import React from 'react';
import Card from '../components/card'; // Nuevo Card
import RoboKids from '../components/taller';

const RoboKidsPage = () => {
    const roboKidsDescription =
        "Un taller para niños de 1ro a 2do de primaria, donde crean proyectos como Otto Bailarín y Otto Car, aprendiendo robótica de forma divertida y práctica. 🚀🤖";

    const roboKidsImages = [
        "/img/robokids-part-1.jpeg",
        "/img/robokids-part-2.jpeg",
        "/img/robokids-part-3.jpeg"
    ];

    const cardData = [
        {
            image: "/img/momento4.jpeg",
            title: "Duracion",
            status: "8 semanas - 1 dia por semana",
        },
        {
            image: "/img/card2.jpeg",
            title: "Horario",
            status: "75 min cada clase",

        },
        {
            image: "/img/momento4.jpeg",
            title: "Precio",
            status: "Modificar precio",
            description: "Introducción a sensores y programación avanzada."
        }
    ];

    return (
        <div>
            <RoboKids
                title="Robo Kids"
                description={roboKidsDescription}
                images={roboKidsImages}
            />

            {/* Tarjetas de proyectos */}
            <ul className="cards">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        status={card.status}
                    />
                ))}
            </ul>
        </div>
    );
};

export default RoboKidsPage;

import React from 'react';
import Card from '../components/card'; // Nuevo Card
import RoboKids from '../components/taller';

const RoboJuniorsPage = () => {
    const roboJuniorsDescription =
        "Un taller para niños de  3ro a 7mo de primaria, donde crean proyectos como Otto Bailarín y Otto Car, aprendiendo robótica de forma divertida y práctica. 🚀🤖";

    const roboJuniorsImages = [
        "/img/robojunior1.jpg",
        "/img/robojunior2.jpg",
        "/img/robojunior3.jpg"
    ];

    const cardData = [
        {
            image: "/img/momento4.jpeg",
            title: "Duración",
            status: "8 semanas - 1 día por semana",
            description: "Cada semana se desarrolla un proyecto diferente."
        },
        {
            image: "/img/card2.jpeg",
            title: "Horario",
            status: "75 min cada clase",
            description: "Ideal para mantener la concentración y creatividad."
        },
        {
            image: "/img/momento4.jpeg",
            title: "Precio",
            status: "S/ 0.00",
            description: "Incluye materiales, kits, y recursos digitales."
        }
    ];

    return (
        <div>
            <RoboKids
                title="Robo Juniors"
                description={roboJuniorsDescription}
                images={roboJuniorsImages}
            />

            <ul className="cards">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        status={card.status}
                        description={card.description}
                    />
                ))}
            </ul>
        </div>
    );
};

export default RoboJuniorsPage;


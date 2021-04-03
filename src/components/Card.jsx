import React, { useEffect, useState } from 'react';
import '../assets/css/Card.css';

const Card = () => {
    const [jogosCard, setJogosCard] = useState([]);

    useEffect(() => {
        setJogosCard([{
            id: 1,
            nome: 'Diablo 3',
            img: 'https://upload.wikimedia.org/wikipedia/pt/1/12/DiabloIIIcover.jpg'
        },{
            id: 2,
            nome: 'CS:GO',
            img: 'https://notadogame.com/uploads/game/cover/250x/5bfdc36b0c6b7.jpg'
        }]);
    }, [])

    return (
        <section>
            {jogosCard.map((jogos) => (
                <div key={jogos.id} className="card">
                    <h1 className="card-titulo">{jogos.nome}</h1>
                    <img src={jogos.img} className="card-imagem"/>
                </div>
            ))}
        </section>
    );
}

export default Card;
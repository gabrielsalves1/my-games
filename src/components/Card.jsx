import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
                <Link to={`my-games/${jogos.nome}`} className="card">
                <div key={jogos.id}>
                    <h1 className="card-titulo">{jogos.nome}</h1>
                    <img src={jogos.img} className="card-imagem" valor={jogos.nome}/>
                </div>
                </Link>
            ))}
        </section>
    );
}

export default Card;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Card.css';
import { buscaApi } from '../api/api';

const Card = () => {
    const [jogosCard, setJogosCard] = useState([]);

    useEffect(() => {
        buscaApi(`/jogos`, setJogosCard)
    }, [])
    return (
        <section>
            {jogosCard.map((jogos) => (
                <Link to={`my-games/${jogos.nome}`} className="card">
                <div key={jogos.id}>
                    <h1 className="card-titulo">{jogos.nome}</h1>
                    <img src={jogos.img} className="card-imagem" />
                </div>
                </Link>
            ))}
        </section>
    );
}

export default Card;
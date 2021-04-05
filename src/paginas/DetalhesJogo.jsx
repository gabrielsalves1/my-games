import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buscaApi } from '../api/api';

import '../assets/css/DetalhesJogo.css';

const DetalhesJogo = () => {
    const { nome } = useParams();
    const [jogosCard, setJogosCard] = useState([]);

    useEffect(() => {
        buscaApi(`/jogos`, setJogosCard)
    }, [])
    
    return (
        <main className="container">
             {jogosCard.map((jogos) => {
                if(jogos.nome === nome) {
                    return <div key={jogos.id} className="noticia">
                        <h1 className="noticia-titulo">{jogos.nome}</h1>
                        <img src={jogos.img} className="card-imagem__detalhes" />
                        <p className="noticia-texto">{jogos.noticia}</p>
                    </div>
                 }
            })}
        </main>
    );
}

export default DetalhesJogo;
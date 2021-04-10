import React, { useState, useEffect } from 'react';
import { buscaApi } from '../api/api';

import '../assets/css/Favoritos.css';

const Favoritos = (props) => {
    const [jogosCard, setJogosCard] = useState([]);

    useEffect(() => {
        buscaApi(`/jogos`, setJogosCard)
    }, [])

    return(
        <div className="container-noticia">
            {jogosCard.map((jogos) => {
                if(props.favoritos.includes(jogos.id)){
                    return <div key={jogos.id} className="noticia">
                        <h1 className="noticia-titulo">{jogos.nome}</h1>
                        <img src={jogos.img2} className="card-imagem__principal" />
                        <p className="noticia-texto">{jogos.noticia}</p>
                        <hr/>
                    </div>
            }})})
        </div>
    );
}

export default Favoritos;
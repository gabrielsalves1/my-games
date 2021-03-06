import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { buscaApi } from '../api/api';
import { IoThumbsUp } from "react-icons/io5";

import '../assets/css/DetalhesJogo.css';

const NoticiasJogo = (props) => {
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
                        <img src={jogos.img2} className="card-imagem__principal" />
                        
                        <div className="curtir" >
                            <span className="noticia-texto">Gostou da notícia sobre {jogos.nome}? Adicione aos favoritos para ver mais notícias! 
                                <IoThumbsUp className="icone-like" onClick={() => 
                                    handleFavoritos(props.favoritos, jogos.id, jogos.nome)} ></IoThumbsUp>
                            </span>
                        </div>
                    </div>
                 }
            })}
        </main>
    );

    function handleFavoritos(favoritos, idJogo, nomeJogo){
        const novoFavorito = [...favoritos, idJogo];
        props.setFavoritos(novoFavorito);
        alert(`${nomeJogo} adicionado aos favoritos!`);
    }

}

export default NoticiasJogo;
import React from 'react';
import '../assets/css/Cabecalho.css';
import { Link } from 'react-router-dom';
import { IoPerson, IoGameController } from "react-icons/io5";

const Cabecalho = () => {
    
    return (
        <header className="cabecalho">
            <Link to="/" className="titulo-cabecalho"><h1>MyGames</h1></Link>
            
            <nav>
                <Link to="/favoritos" className="itens"><IoGameController className="icone-controle"/></Link>
                <Link to ="#" className="itens"><IoPerson className="icone-login"/></Link>
            </nav>

        </header>
    );
}

export default Cabecalho;
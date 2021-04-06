import React from 'react';
import '../assets/css/Rodape.css';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Rodape = () => {
    return (
        <div className="container-rodape">
            <h2 className="texto-rodape">Aplicação desenvolvida por Gabriel Silva Alves</h2>
            <a href="https://www.linkedin.com/in/gabrielsalves1/" className="icones-rodape"><IoLogoLinkedin></IoLogoLinkedin></a>
            <a href="https://github.com/gabrielsalves1" className="icones-rodape"><IoLogoGithub></IoLogoGithub></a>
        </div>
    );
}

export default Rodape;
import React from 'react';
import '../assets/css/DetalhesJogo.css'

import Favoritos from '../components/Favoritos';

const PaginaFavoritos = (props) => {
    return (
        <Favoritos favoritos={props.favoritos} />
    );
} 

export default PaginaFavoritos;
import React from 'react';

import NoticiasJogo from '../components/NoticiasJogo';

const DetalhesJogo = (props) => {
    
    return (
        <NoticiasJogo favoritos={props.favoritos} setFavoritos={props.setFavoritos} />
    );
}

export default DetalhesJogo;
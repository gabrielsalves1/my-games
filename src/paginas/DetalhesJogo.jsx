import React from 'react';
import { useParams } from 'react-router';

const DetalhesJogo = ({nomeJogo}) => {
    const { nome } = useParams();

    return (
        <div>
            <h1>Teste</h1>
        </div>
    );
}

export default DetalhesJogo;
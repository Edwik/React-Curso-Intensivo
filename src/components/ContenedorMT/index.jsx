import React from 'react';
import styled from 'styled-components';
import { Peliculas } from './../../components/Peliculas'
import { Trending } from './../../components/Trending'

function ContenedorMT() {

    const Contenedor = styled.div`
        display:flex;
        flex-direction:row;
        margin:auto;
        width:80%;
    `

    return (
        <Contenedor>
            <Trending />
            <Peliculas />
        </Contenedor>

    )
}

export { ContenedorMT }
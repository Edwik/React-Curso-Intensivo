import React from 'react';
import { Header } from './../../components/Header';
import { ContenedorMT } from './../../components/ContenedorMT';
import backgroundMovies from './../../assets/images/backgroundmovie.jpg';
import styled from 'styled-components';


function Movies() {

    const ContenedorMovies = styled.div`
        background-image: url(${backgroundMovies});
        background-repeat: no-repeat;
	    background-size: cover;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    `

    return (
        <ContenedorMovies>
            <Header />
            <ContenedorMT />
        </ContenedorMovies>

    )
}

export { Movies }
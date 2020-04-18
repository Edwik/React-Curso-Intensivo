import React from 'react';
import { Header } from './../../components/Header';
import { MovieDetail } from './../../components/MovieDetail';
import { ContainerTitle } from '../../components/ContainerTitle';
import backgroundDetails from './../../assets/images/backgroundDetails.jpg';
import styled from 'styled-components';

function Details() {

    const ContenedorDetail = styled.div`
        background-image: url(${backgroundDetails});
        background-repeat: no-repeat;
	    background-size: cover;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    `
    return (
        <ContenedorDetail>
            <Header />
            <ContainerTitle />
            <MovieDetail />
        </ContenedorDetail>

    )
}

export { Details }
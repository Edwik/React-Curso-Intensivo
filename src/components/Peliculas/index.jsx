import React from 'react';
import styled from 'styled-components';
import carsMovie from './../../assets/images/cars2.jpg';

function Peliculas() {

    const ContainerPelicula = styled.div`
        display: flex;
        flex-wrap: wrap;
        width:80%;
        margin-left:auto;
        margin-top:auto;
    `

    const Pelicula = styled.div`
        background-repeat: no-repeat;
	    background-size: cover;
        margin: 10px;
        
    `

    return (
        <ContainerPelicula>
            <Pelicula ><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
            <Pelicula><img src={carsMovie} alt="pelicula" width="150" height="150" /></Pelicula>
        </ContainerPelicula>
    )
}

export { Peliculas }
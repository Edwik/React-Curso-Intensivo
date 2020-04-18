import React from 'react';
import { Button, Heading, Text } from 'evergreen-ui';
import star from './../../assets/images/star.png';
import styled from 'styled-components';

const ContainerMovie = styled.div`
        display:flex;
        
`
const ContenedorRate = styled.div`
        width:60%;
        margin: auto;
        display:flex;

`

const HeadingMovie = styled(Heading)`
        font-size: 20px;
        font-weight: 500;
        line-height:60px; 
        color:white;
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:90%;
    margin: auto;
    
`
const MovieType = styled(Text)`
    padding:10px;
    color:white;
`

const ButtonStyle = styled(Button)`
       margin:30px 5px;
    `

function ContainerTitle() {
    return (
        <Container>
            <ContainerMovie>
                <HeadingMovie>WONDER WOMAN</HeadingMovie>
                <ContenedorRate>
                    <img src={star} alt="pelicula" width="15" height="15" />
                    <Text color="white">8.2</Text>
                </ContenedorRate>
            </ContainerMovie>
            <div>
                <MovieType>ADVENTURE</MovieType>
                <MovieType>ACTION</MovieType>
                <MovieType>FANTASY</MovieType>
                <Text color="white" >2H 2MIN</Text>
                <Text color="white" >2017</Text>
            </div>
            <div>
                <ButtonStyle>WATCH NOW</ButtonStyle>
                <ButtonStyle>MORE INFO</ButtonStyle>
            </div>
        </Container>
    )
}

export { ContainerTitle }
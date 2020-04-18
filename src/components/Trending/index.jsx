import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text } from 'evergreen-ui'

function Trending() {

    const ButtonStyle = styled(Button)`
       margin:3px;
    `

    const ContainerTrending = styled.div`
        display:flex;
        flex-direction: column;
        padding-top:200px;
        margin:auto;
    `

    const TextStyle = styled(Text)`
        opacity: 0.55;
        line-height:60px;
        color:white;
    `

    const HedingStyle = styled(Heading)` 
        font-size: 45px;
        font-weight: 500;
        line-height:60px;
        color:white;
        
    `

    return (
        <ContainerTrending>
            <TextStyle>TRENDING</TextStyle>
            <HedingStyle>WONDER WOMAN </HedingStyle>
            <TextStyle>ACTION, ADVENTURE, FANTASY</TextStyle>
            <div>
                <ButtonStyle>WATCH NOW</ButtonStyle>
                <ButtonStyle>MORE INFO</ButtonStyle>
            </div>
        </ContainerTrending>
    )
}

export { Trending }
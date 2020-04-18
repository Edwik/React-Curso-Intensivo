import React from 'react';
import { Heading, Text } from 'evergreen-ui';
import styled from 'styled-components';

function MovieDetail() {

    const ContainerDetail = styled.div`
        display:flex;
        width:90%;
        margin:  auto ;
    `

    const Sypnopsys = styled.div`
        width:40%;
        margin-right: auto;
        color:white;
    `

    const HedingStyle = styled(Heading)` 
        font-size: 20px;
        font-weight: 500;
        line-height:60px; 
        color:white;
    `

    const Recomendaciones = styled.div`
        width:50%;
        margin-right:auto;    
    `

    return (
        <ContainerDetail>
            <Sypnopsys>
                <HedingStyle>SYPNOSYS</HedingStyle>
                <Text color="white">Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior.
                Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that's
                raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time.
                Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.</Text>
            </Sypnopsys>
            <Recomendaciones>
                <div>
                    <HedingStyle>DIRECTED BY</HedingStyle>
                    <Text color="white">PATTY JENKINS</Text>
                </div>
                <div>
                    <HedingStyle>RECOMMENDEN BY</HedingStyle>
                    <Text color="white">RIO AND JAMES </Text>
                </div>
            </Recomendaciones>

        </ContainerDetail>
    )
}

export { MovieDetail }
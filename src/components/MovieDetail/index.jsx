import React from 'react';
import { Button, Heading, Text } from 'evergreen-ui';
import styled from 'styled-components';

function MovieDetail() {

    const HedingStyle = styled(Heading)` 
        font-size: 45px;
        font-weight: 500;
        line-height:60px;
        
        
    `
    return (
        <div>
            <HedingStyle>SYPNOSYS</HedingStyle>
        </div>
    )
}

export { MovieDetail }
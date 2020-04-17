import React from 'react';
import {Navigator} from './navigations/Navigator'
import styled from 'styled-components'
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
function App() {
  return (
    <Wrapper>

      <Navigator/>
      
    </Wrapper>
  );
}

export default App;

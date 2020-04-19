import React from 'react';
import {Navigator} from './navigations/Navigator'
import { Provider } from 'react-redux'
import {store} from './redux/store'
import styled from 'styled-components'
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
function App() {
  return (
    <Wrapper>
      <Provider store={store}>
        <Navigator/>
      </Provider>
    </Wrapper>
  );
}

export default App;

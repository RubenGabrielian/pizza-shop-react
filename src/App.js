import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
      <div>App</div>
    </>
  );
}

export default App;

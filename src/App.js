import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <div>App</div>
    </>
  );
}

export default App;

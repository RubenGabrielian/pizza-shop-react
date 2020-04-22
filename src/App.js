import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'

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
    <Banner />
    <div>App</div>
    </>
  );
}

export default App;

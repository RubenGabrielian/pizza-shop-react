import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'

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
    <Menu />
    <div>App</div>
    </>
  );
}

export default App;

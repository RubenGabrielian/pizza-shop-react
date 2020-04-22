import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'

export const NavbarStyled = styled.div `
    background-color: ${pizzaRed};
    padding: 10px;
    text-shadow: 8px -2px 4px #0000007d;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: white;

`

export const Navbar = () => {
    return <NavbarStyled>
        <Logo>
            PizzS 🍕
        </Logo>
    </NavbarStyled>
}